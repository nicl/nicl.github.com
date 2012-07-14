---
layout: post
title: Managing Files with Emacs
---

See [here](http://www.gnu.org/software/emacs/manual/html_node/emacs/Dired.html#Dired).

* C-x d : displays directory listing (opens dired)

note, C-x-d is different, it displays the directory but without edit options (it is not dired)

Deleting
--------

* d: flag for deletion
* u: remove flag
* x: delete files that are flagged
* d regexp RET: flag files for deletion by regexp

Visiting files
--------------

* f: visit the file (replaces dired buffer)
* o: visit the file but in the other buffer (keep dired open)
* o: like o but keep cursor in dired buffer (this is most useful)
* v: view mode (read only, useful for quick glance, press 'q' to then quit)
* ^: view parent directory (like f on .. / shows dired for parent)

So use ^ and f to navigate between folders.

Marking files
-------------

You can mark files to operate on multiple files at the same time. It can also server to ease navigation.

Marking files is the same as for Emacs in general (C-space).

Operating on files
------------------

* C new: copy
* R new: rename
* M: change mode (permissions, same arguments as chmod)
* G: change group (chgrp)
* O: change owner (chown)
* B: byte compile (for emacs lisp files)

File comparison
---------------

* equals : compare current file to mark
* M-= : compare current file to latest backup

Make a new file
---------------

Just press + in dired mode in the parent folder.

Alternatively, create a file directly, and then create the directory before saving  do:

M-x make-directory RET RET

Nice :)