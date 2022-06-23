function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//Add event from js the keep the marup clean
function init() {
    document.getElementById("open-menu").addEventListener("click", toggleMenu);
    document.getElementById("body-overlay").addEventListener("click", toggleMenu);
    document.getElementById("close-menu").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
    var ele = document.getElementsByTagName('body')[0];
    let cursor = document.getElementById("cursor");
    let inside = document.getElementById("data-scroll");
    if (!hasClass(ele, "menu-open")) {
        addClass(ele, "menu-open");
        document.body.appendChild(cursor)
        document.getElementById("body-overlay").style.display = "block";
    } else {
        removeClass(ele, "menu-open");
        inside.appendChild(cursor);
        setTimeout(function() {
            document.getElementById("body-overlay").style.display = "none";
        }, 500)
    }
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});
