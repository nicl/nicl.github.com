---
layout: post
category: blog
title: Migrating to RDS using Bucardo
permalink: /2015/08/26/migrating-to-rds-using-bucardo.html
---

**This piece is a technical description of how to use Bucardo to migrate
a Postgres database into RDS.**

Bucardo is a trigger-based replication tool. Essentially it listens
for changes in your database and then pushes them elsewhere. A nice
feature of Bucardo is that it supports master-master replication -
essentially, you can sync changes both ways - making rollback easier
during any migration.

For information about Bucardo see the website:
https://bucardo.org/wiki/Bucardo.

## Installing Bucardo

Instructions below are for CentOs. Other distros will differ. Some
come with a Bucardo package which you can simply install using the
package manager.

First install some dependencies:

    sudo yum groupinstall -y "Development Tools"
    sudo yum install -y postgresql-plperl
    sudo yum install -y perl-ExtUtils-MakeMaker perl-DBD-Pg perl-Encode-Locale perl-Sys-Syslog perl-boolean perl-Time-HiRes perl-Test-Simple perl-Pod-Parser
    sudo yum install cpan
    sudo cpan DBIx::Safe

Next, Bucardo itself:

    wget http://bucardo.org/downloads/Bucardo-5.3.1.tar.gz
    tar xvfz Bucardo-5.3.1.tar.gz
    cd Bucardo-5.3.1
    perl Makefile.PL
    make
    sudo make install

Prepare the database using psql:

    create user bucardo superuser login password 'bucardo';

(Here and subsequently you should probably use a different password.)

Finally, install:

    bucardo install

Note, for the install command, at the prompt the database is used
purely for an initial connection. For the user, specify 'bucardo' -
the user you previously created.

If you see a failed DBI connect message, ignore it.

Lastly, Bucardo should automatically create a .pgpass file but if it
does not, do so now:

    echo '*:5432:*:bucardo:bucardo' > ~/.pgpass

## Setting up RDS

We need to prepare RDS for Bucardo.

Create an empty database and a user:

    create database mydb template template0;
    create user my_user login password '[password]' in role rds-superuser;

## Set up the Bucardo sync

Having installed Bucardo, add your databases to it (modify
credentials, db names, etc. as required):

    bucardo add database nonrds dbname=mydb host=localhost user=bucardo pass=bucardo
    bucardo add database rds dbname=mydb host=my.rds.host user=my_user pass=my_password
Add all the relevant tables:

    bucardo add all tables db=nonrds relgroup=myrels exclude-table=.. exclude-table=..

Note, Bucardo is unable to sync tables without a primary key, so we
exclude those.

Finally, set up the sync:

    bucardo add sync mysync relgroup=myrels dbs=mydbs autokick=0

At this point Bucardo is listening for changes, but not yet
propagating them.

The next step is to copy the schema to RDS and, if our database is
large, the data as well as this will be much quicker than getting
Bucardo to sync things.

There are lots of guides on dumping and restoring a Postgres
database. I used commands similar to:

    time pg_dump -Fc -v -f dump.sql mydb
    time pg_restore -j 8 -d postgres://user:password@rds.dns:5432/mydb dump.sql

Once this is done, we can kickstart Bucardo!

    bucardo update sync mysync autokick=1
    bucardo start

## Updating sequences

One major inconvenience is that Bucardo will not update
sequences. This means rollback is not quite so seamless. It's not too
hard to do this yourself though using a simple bash script set up as a
cron job.

Create sql files with the relevant commands for each sequence table:

    SELECT setval(my_table_1_id_seq', max(my_table_1.id)) FROM my_table_1;
    SELECT setval('my_table_2_id_seq', max(my_table_2.id)) FROM my_table_2;
    ..

Create cronjobs:

    * * * * * postgres psql -d mydb -f update-seqs.sql | logger -t "update-seqs" 2>&1

In practice, you'll want two jobs - one for RDS and another for your
local Postgres.

## Wrap up

That's it! If you want to know more about these topics, I'd recommend
reading the RDS Postgres docs thoroughly, and also the following
resources on Bucardo migrations:

http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.PostgreSQL.CommonDBATasks.html (all of the RDS docs really)

http://justatheory.com/computers/databases/postgresql/bootstrap-bucardo-mulitmaster.html

http://www.slideshare.net/DavidKerr17/migrating-postgres-from-ec2-to-rds

https://www.compose.io/articles/using-bucardo-5-3-to-migrate-a-live-postgresql-database/

## Appendix: Bucardo basics

Bucardo's cli is surprisingly good. Everything you set can be viewed
using the `list` command. If you want to redo something simply
`remove` it and try again. E.g.

    bucardo list db
    bucardo list sync
    bucardo list tables
    bucardo remove db nonrds

For information on Bucardo concepts, just use:

    bucardo help
