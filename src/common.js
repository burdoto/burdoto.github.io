var linkInf = {
    "main": ["www.kaleidox.de", "http://www.kaleidox.de"],
    "github": [],
    "twitter": [],
    "instagram": ["instagram.kaleidox.de", "http://instagram.kaleidox.de", "img/socialmedia/instagram-qr.png"],
    "discord": ["Discord: Kaleidox#0001", "http://discord.kaleidox.de"],
    "youtube": [],
    "youtubegaming": ["live"],
    "twitch": [],
    "snapchat": ["Snapchat: kaleidox_", null, "img/socialmedia/snapchat-qr.png"],
    "steam": [],
    "battlenet": ["Battle.net: kaleidox#2817", null],
    "leagueoflegends": ["League of Legends: WerWaeschtMich82", null],
    "playstationnetwork": ["PSN: kaleidox_", "http://psn.kaleidox.de"],

    "animalmusix": ["AnimalMusix", "https://play.google.com/store/apps/details?id=de.kaleidox.animalmusix"],
    "vbanapi": ["VBAN-API", "https://github.com/burdoto/VBAN-API"],
    "vbandeck": ["VBANDeck", "https://github.com/burdoto/VBAN-StreamDeck-Plugin"],
    "crystalshard": ["CrystalShard", "https://github.com/CrystalShardDiscord/CrystalShard"]
};

var redirect = null;
var lastIdent = null;
var init = false;

function select(name) {
    name = name.toLowerCase();
    var use = null;

    // noinspection FallThroughInSwitchStatementJS
    switch (name) {
        case "snapchat":
            init = true;
        case "main":
        case "github":
        case "twitter":
        case "youtube":
        case "youtubegaming":
        case "twitch":
        case "discord":
        case "steam":
        case "instagram":
        case "leagueoflegends":
        case "battlenet":
        case "playstationnetwork":
        case "animalmusix":
        case "vbanapi":
        case "vbandeck":
        case "crystalshard":
            use = name;
            break;
        case "lol":
            use = "leagueoflegends";
            break;
        case "psn":
        case "playstation":
        case "ps4":
            use = "playstationnetwork";
            break;
        case "vban-api":
            use = "vbanapi";
            break;
        case "live":
            use = "youtubegaming";
            break;
        default:
            use = "main";
            break;
    }

    if (use != null) changeFor(use);
}

function changeFor(ident) {
    var inf = linkInf[ident];

    var frag = null, changeto = null, url = null, useImg = null;

    // noinspection FallThroughInSwitchStatementJS
    switch (inf.length) {
        case 0:
            frag = ident;
            break;
        case 1:
            frag = inf[0];
            break;
        case 3:
            useImg = inf[2];
        case 2:
            changeto = inf[0];
            url = inf[1];
            break;
    }

    if ((frag != null && lastIdent === frag)
        || (changeto != null && lastIdent === changeto)) xredirect();

    var urlVisual = document.getElementById("url");

    if (frag != null) {
        redirect = "http://" + frag + ".kaleidox.de/";

        urlVisual.style.cursor = "pointer";
        urlVisual.textContent = frag + ".kaleidox.de";

        lastIdent = frag;
    } else if (changeto != null) {
        redirect = url;
        urlVisual.style.cursor = url != null ? "pointer" : "default";
        urlVisual.textContent = changeto;

        lastIdent = changeto;
    } else xredirect();

    if (init) {
        if (useImg != null) {
            document.getElementById("qr-container").src = useImg;
            $("#qrimage").slideDown("slow");
        }
        else $("#qrimage").slideUp("slow");
    } else init = true;

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

    select(frag);
}
