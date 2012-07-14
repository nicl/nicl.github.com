// javascript to switch colour scheme
// note: we are going to use HTML5s local storage mechanism for this
// with a cookie fallback
function set_theme(theme) {
    localStorage.setItem("theme", theme);
}

function apply_theme(theme) {
    $("body").removeClass('light dark').addClass(theme);
    $(".switch-theme li." + theme)
        .addClass("active")
        .siblings().removeClass("active");
}

function get_theme() {
    return localStorage.getItem("theme");
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else {
        var expires = "";
    }
    
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var result = "";
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            result = c.substring(nameEQ.length, c.length);
        }
        else {
            result = "";
        }
    }

    return result;
}

falseLocalStorage = (function () {
    return {
        setItem: function (key, value) {
            createCookie(key, value, 3000);
        },
        getItem: function (key) {
            return readCookie(key);
        }
    };
})();

$(function() {
    if (!window.localStorage) {
        window.localStorage = falseLocalStorage;
    }

    var theme = localStorage.getItem('theme') || 'dark';
    apply_theme(theme);

    $('.switch-theme').show();

    $('.switch-theme li').click(function (event) {
        event.preventDefault();
        var new_theme = $(this).attr('data-theme');
        apply_theme(new_theme);
        set_theme(new_theme);
    });        
});
