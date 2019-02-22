var redirect = null;

function changeurl(ident) {
    var urlVisual = document.getElementById("url");

    redirect = "http://" + ident + ".kaleidox.de/";
    urlVisual.style.cursor = "pointer";
    urlVisual.textContent = ident + ".kaleidox.de";

    urlVisual.style.color = "#8ec6d3";
    urlVisual.style.textShadow = "#67909C";

}

function changemajor(changeto, url) {
    var urlVisual = document.getElementById("url");

    redirect = url;
    if (url != null) {
        urlVisual.style.cursor = "pointer"
    } else {
        urlVisual.style.cursor = "default"
    }
    urlVisual.textContent = changeto;

    urlVisual.style.color = "#8ec6d3";
    urlVisual.style.textShadow = "#67909C";
}

function xredirect() {
    if (redirect != null) {
        window.location.href = redirect;
    }
}

function pageLoad() {
    var frag = window.location.hash.substr(1);

    switch (frag.toLowerCase()) {
        case "github":
        case "twitter":
        case "discord":
        case "steam":
        case "instagram":
            changeurl(frag.toLowerCase());
            break;
        case "snapchat":
            changemajor("Snapchat: kaleidox_", null);
            break;
        case "psn":
        case "playstation":
        case "ps4":
            changemajor("PSN: kaleidox_", "https://my.playstation.com/profile/kaleidox_");
            break;
        default:
            changemajor("www.kaleidox.de", null);
            break;
    }

}