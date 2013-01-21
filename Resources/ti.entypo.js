function fromCode(e) {
    var codeString = convertCP2UTF16(e);
    return String.fromCharCode(codeString.replace(" ", ", "));
}

function convertCP2UTF16(textString) {
    var outputString = "";
    textString = textString.replace(/^\s+/, "");
    if (textString.length == 0) return "";
    textString = textString.replace(/\s+/g, " ");
    var listArray = textString.split(" ");
    for (var i = 0; i < listArray.length; i++) {
        var n = parseInt(listArray[i], 16);
        i > 0 && (outputString += " ");
        if (n <= 65535) outputString += dec2hex4(n); else if (n <= 1114111) {
            n -= 65536;
            outputString += dec2hex4(55296 | n >> 10) + " " + dec2hex4(56320 | n & 1023);
        } else outputString += "!erreur " + dec2hex(n) + "!";
    }
    return outputString;
}

function dec2hex4(textString) {
    var hexequiv = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");
    return hexequiv[textString >> 12 & 15] + hexequiv[textString >> 8 & 15] + hexequiv[textString >> 4 & 15] + hexequiv[textString & 15];
}

exports.fromName = function(_name) {
    var item = _.where(exports.codeMap, {
        name: _name
    });
    return exports.fromCodePoint(item[0].code);
};

exports.fromCodePoint = function() {
    var chars = [], point, offset, units, i;
    for (i = 0; i < arguments.length; ++i) {
        point = arguments[i];
        offset = point - 65536;
        units = point > 65535 ? [ 55296 + (offset >> 10), 56320 + (offset & 1023) ] : [ point ];
        chars.push(String.fromCharCode.apply(null, units));
    }
    return chars.join("");
};

exports.codeMap = [ {
    name: "note",
    code: "0x266a",
    search: [ "music", "note", "song" ]
}, {
    name: "note-beamed",
    code: "0x266b",
    search: [ "music", "note", "song" ]
}, {
    name: "music",
    code: "0x1f3b5",
    search: [ "song", "music", "sound" ]
}, {
    name: "search",
    code: "0x1f50d",
    search: [ "search", "find" ]
}, {
    name: "flashlight",
    code: "0x1f526",
    search: [ "search", "find", "flashlight" ]
}, {
    name: "mail",
    code: "0x2709",
    search: [ "mail", "email" ]
}, {
    name: "heart",
    code: "0x2665",
    search: [ "heart" ]
}, {
    name: "heart-empty",
    code: "0x2661",
    search: [ "heart" ]
}, {
    name: "star",
    code: "0x2605",
    search: [ "star" ]
}, {
    name: "star-empty",
    code: "0x2606",
    search: [ "star" ]
}, {
    name: "user",
    code: "0x1f464",
    search: [ "profile", "contact", "user" ]
}, {
    name: "users",
    code: "0x1f465",
    search: [ "users", "contacts", "friends" ]
}, {
    name: "user-add",
    code: "0xe700",
    search: [ "profile", "contact", "user", "add" ]
}, {
    name: "video",
    code: "0x1f3ac",
    search: [ "movie", "video", "film" ]
}, {
    name: "picture",
    code: "0x1f304",
    search: [ "image", "picture", "photo" ]
}, {
    name: "camera",
    code: "0x1f4f7",
    search: [ "camera", "photo" ]
}, {
    name: "layout",
    code: "0x268f",
    search: [ "image", "list", "thumbnails" ]
}, {
    name: "menu",
    code: "0x2630",
    search: [ "menu", "list" ]
}, {
    name: "check",
    code: "0x2713",
    search: [ "ok", "yes", "check", "mark" ]
}, {
    name: "cancel",
    code: "0x274c",
    search: [ "ok", "yes", "check", "mark" ]
}, {
    name: "cancel-circled",
    code: "0x2716",
    search: [ "close", "cancel", "reject" ]
}, {
    name: "cancel-squared",
    code: "0x274e",
    search: [ "close", "cancel", "reject" ]
}, {
    name: "plus",
    code: "0x2795",
    search: [ "close", "cancel", "reject" ]
}, {
    name: "plus-circled",
    code: "0x2295",
    search: [ "close", "cancel", "reject" ]
}, {
    name: "plus-squared",
    code: "0x229e",
    search: [ "plus", "expand" ]
}, {
    name: "minus",
    code: "0x2796",
    search: [ "plus", "expand" ]
}, {
    name: "minus-circled",
    code: "0x2296",
    search: [ "plus", "expand" ]
}, {
    name: "minus-squared",
    code: "0x229f",
    search: [ "minus", "collapse" ]
}, {
    name: "help",
    code: "0x2753",
    search: [ "help", "question" ]
}, {
    name: "help-circled",
    code: "0xe704",
    search: [ "help", "question" ]
}, {
    name: "info",
    code: "0x2139",
    search: [ "info" ]
}, {
    name: "info-circled",
    code: "0xe705",
    search: [ "info" ]
}, {
    name: "back",
    code: "0x1f519",
    search: [ "back", "return" ]
}, {
    name: "home",
    code: "0x2302",
    search: [ "home" ]
}, {
    name: "link",
    code: "0x1f517",
    search: [ "link", "url" ]
}, {
    name: "attach",
    code: "0x1f4ce",
    search: [ "attach", "clip" ]
}, {
    name: "lock",
    code: "0x1f512",
    search: [ "lock" ]
}, {
    name: "lock-open",
    code: "0x1f513",
    search: [ "lock", "open", "unlock" ]
}, {
    name: "tag",
    code: "0xe70c",
    search: [ "tag", "price", "offer" ]
}, {
    name: "bookmark",
    code: "0x1f516",
    search: [ "bookmark" ]
}, {
    name: "bookmarks",
    code: "0x1f4d1",
    search: [ "bookmarks" ]
}, {
    name: "flag",
    code: "0x2691",
    search: [ "flag" ]
}, {
    name: "thumbs-up",
    code: "0x1f44d",
    search: [ "thumbs", "up", "like", "love", "vote" ]
}, {
    name: "thumbs-down",
    code: "0x1f44e",
    search: [ "thumbs", "down", "dislike", "unlike", "vote" ]
}, {
    name: "download",
    code: "0x1f4e5",
    search: [ "download" ]
}, {
    name: "upload",
    code: "0x1f4e4",
    search: [ "upload" ]
}, {
    name: "upload-cloud",
    code: "0xe711",
    search: [ "upload", "cloud" ]
}, {
    name: "reply",
    code: "0xe712",
    search: [ "reply" ]
}, {
    name: "reply-all",
    code: "0xe713",
    search: [ "reply" ]
}, {
    name: "forward",
    code: "0x27a6",
    search: [ "forward" ]
}, {
    name: "quote",
    code: "0x275e",
    search: [ "quote" ]
}, {
    name: "code",
    code: "0xe714",
    search: [ "code" ]
}, {
    name: "export",
    code: "0xe715",
    search: [ "export", "share" ]
}, {
    name: "feather",
    code: "0x2712",
    search: [ "pen", "write", "reply", "edit", "feather" ]
}, {
    name: "print",
    code: "0xe716",
    search: [ "print" ]
}, {
    name: "retweet",
    code: "0xe717",
    search: [ "retweet", "twitter" ]
}, {
    name: "keyboard",
    code: "0x2328",
    search: [ "keyboard" ]
}, {
    name: "comment",
    code: "0xe718",
    search: [ "comment", "reply", "write" ]
}, {
    name: "chat",
    code: "0xe720",
    search: [ "chat", "talk" ]
}, {
    name: "bell",
    code: "0x1f514",
    search: [ "alert", "bell", "jingle" ]
}, {
    name: "attention",
    code: "0x26a0",
    search: [ "attention", "warning", "alert" ]
}, {
    name: "alert",
    code: "0x1f4a5",
    search: [ "attention", "warning", "alert" ]
}, {
    name: "vcard",
    code: "0xe722",
    search: [ "contact", "card", "vcard" ]
}, {
    name: "address",
    code: "0xe723",
    search: [ "address" ]
}, {
    name: "location",
    code: "0xe724",
    search: [ "location", "mark", "marker" ]
}, {
    name: "map",
    code: "0xe727",
    search: [ "down" ]
}, {
    name: "direction",
    code: "0x27a2",
    search: [ "direction" ]
}, {
    name: "compass",
    code: "0xe728",
    search: [ "compass" ]
}, {
    name: "cup",
    code: "0x2615",
    search: [ "cup" ]
}, {
    name: "trash",
    code: "0xe729",
    search: [ "trash", "delete" ]
}, {
    name: "doc",
    code: "0xe730",
    search: [ "doc", "article" ]
}, {
    name: "docs",
    code: "0xe736",
    search: [ "doc", "article" ]
}, {
    name: "doc-landscape",
    code: "0xe737",
    search: [ "doc", "article" ]
}, {
    name: "doc-text",
    code: "0x1f4c4",
    search: [ "doc", "text", "article" ]
}, {
    name: "doc-text-inv",
    code: "0xe731",
    search: [ "doc", "text", "article" ]
}, {
    name: "newspaper",
    code: "0x1f4f0",
    search: [ "newspaper", "article" ]
}, {
    name: "book-open",
    code: "0x1f4d6",
    search: [ "book", "doc" ]
}, {
    name: "book",
    code: "0x1f4d5",
    search: [ "book" ]
}, {
    name: "folder",
    code: "0x1f4c1",
    search: [ "folder" ]
}, {
    name: "archive",
    code: "0xe800",
    search: [ "folder" ]
}, {
    name: "box",
    code: "0x1f4e6",
    search: [ "box" ]
}, {
    name: "rss",
    code: "0xe73a",
    search: [ "rss" ]
}, {
    name: "phone",
    code: "0x1f4de",
    search: [ "phone", "telephone", "call" ]
}, {
    name: "cog",
    code: "0x2699",
    search: [ "settings", "cog", "gear" ]
}, {
    name: "tools",
    code: "0x2692",
    search: [ "tools" ]
}, {
    name: "share",
    code: "0xe73c",
    search: [ "share" ]
}, {
    name: "shareable",
    code: "0xe73e",
    search: [ "shareable" ]
}, {
    name: "basket",
    code: "0xe73d",
    search: [ "basket", "shopping", "cart" ]
}, {
    name: "bag",
    code: "0x1f45c",
    search: [ "bag", "shopping", "cart" ]
}, {
    name: "calendar",
    code: "0x1f4c5",
    search: [ "calendar", "date" ]
}, {
    name: "login",
    code: "0xe740",
    search: [ "login" ]
}, {
    name: "logout",
    code: "0xe741",
    search: [ "logout" ]
}, {
    name: "mic",
    code: "0x1f3a4",
    search: [ "mic" ]
}, {
    name: "mute",
    code: "0x1f507",
    search: [ "volume", "sound", "mute" ]
}, {
    name: "sound",
    code: "0x1f50a",
    search: [ "volume", "sound" ]
}, {
    name: "volume",
    code: "0x23f7",
    search: [ "volume", "sound" ]
}, {
    name: "clock",
    code: "0x1f554",
    search: [ "clock", "time" ]
}, {
    name: "hourglass",
    code: "0x23f3",
    search: [ "clock", "hourglass", "busy", "wait" ]
}, {
    name: "lamp",
    code: "0x1f4a1",
    search: [ "idea", "lamp", "light" ]
}, {
    name: "light-down",
    code: "0x1f505",
    search: [ "light", "dim", "bright" ]
}, {
    name: "light-up",
    code: "0x1f506",
    search: [ "light", "dim", "bright" ]
}, {
    name: "adjust",
    code: "0x25d1",
    search: [ "adjust", "contrast" ]
}, {
    name: "block",
    code: "0x1f6ab",
    search: [ "block", "deny" ]
}, {
    name: "resize-full",
    code: "0xe744",
    search: [ "resize", "fullscreen" ]
}, {
    name: "resize-small",
    code: "0xe746",
    search: [ "resize" ]
}, {
    name: "popup",
    code: "0xe74c",
    search: [ "popup", "window" ]
}, {
    name: "publish",
    code: "0xe74d",
    search: [ "publish" ]
}, {
    name: "window",
    code: "0xe74e",
    search: [ "window" ]
}, {
    name: "arrow-combo",
    code: "0xe74f",
    search: [ "arrow", "dropdown", "combobox" ]
}, {
    name: "down-circled",
    code: "0xe758",
    search: [ "arrow", "down", "download" ]
}, {
    name: "left-circled",
    code: "0xe759",
    search: [ "arrow", "left" ]
}, {
    name: "right-circled",
    code: "0xe75a",
    search: [ "arrow", "right" ]
}, {
    name: "up-circled",
    code: "0xe75b",
    search: [ "arrow", "up", "upload" ]
}, {
    name: "down-open",
    code: "0xe75c",
    search: [ "arrow", "down" ]
}, {
    name: "left-open",
    code: "0xe75d",
    search: [ "arrow", "left" ]
}, {
    name: "right-open",
    code: "0xe75e",
    search: [ "arrow", "right" ]
}, {
    name: "up-open",
    code: "0xe75f",
    search: [ "arrow", "up" ]
}, {
    name: "down-open-mini",
    code: "0xe760",
    search: [ "arrow", "down" ]
}, {
    name: "left-open-mini",
    code: "0xe761",
    search: [ "arrow", "left" ]
}, {
    name: "right-open-mini",
    code: "0xe762",
    search: [ "arrow", "right" ]
}, {
    name: "up-open-mini",
    code: "0xe763",
    search: [ "arrow", "up" ]
}, {
    name: "down-open-big",
    code: "0xe764",
    search: [ "arrow", "down" ]
}, {
    name: "left-open-big",
    code: "0xe765",
    search: [ "arrow", "left" ]
}, {
    name: "right-open-big",
    code: "0xe766",
    search: [ "arrow", "right" ]
}, {
    name: "up-open-big",
    code: "0xe767",
    search: [ "arrow", "up" ]
}, {
    name: "down",
    code: "0x2b07",
    search: [ "arrow", "down" ]
}, {
    name: "left",
    code: "0x2b05",
    search: [ "arrow", "left" ]
}, {
    name: "right",
    code: "0x27a1",
    search: [ "arrow", "right" ]
}, {
    name: "up",
    code: "0x2b06",
    search: [ "arrow", "up" ]
}, {
    name: "down-dir",
    code: "0x25be",
    search: [ "arrow", "down" ]
}, {
    name: "left-dir",
    code: "0x25c2",
    search: [ "arrow", "left" ]
}, {
    name: "right-dir",
    code: "0x25b8",
    search: [ "arrow", "right" ]
}, {
    name: "up-dir",
    code: "0x25b4",
    search: [ "arrow", "up" ]
}, {
    name: "down-bold",
    code: "0xe4b0",
    search: [ "arrow", "down" ]
}, {
    name: "left-bold",
    code: "0xe4ad",
    search: [ "arrow", "down" ]
}, {
    name: "right-bold",
    code: "0xe4ae",
    search: [ "arrow", "right" ]
}, {
    name: "up-bold",
    code: "0xe4af",
    search: [ "arrow", "up" ]
}, {
    name: "down-thin",
    code: "0x2193",
    search: [ "arrow", "down" ]
}, {
    name: "left-thin",
    code: "0x2190",
    search: [ "arrow", "left" ]
}, {
    name: "right-thin",
    code: "0x2192",
    search: [ "arrow", "right" ]
}, {
    name: "up-thin",
    code: "0x2191",
    search: [ "arrow", "up" ]
}, {
    name: "ccw",
    code: "0x27f2",
    search: [ "reload", "undo", "arrow" ]
}, {
    name: "cw",
    code: "0x27f3",
    search: [ "reload", "redo", "repeat" ]
}, {
    name: "arrows-ccw",
    code: "0x1f504",
    search: [ "circle", "sync", "reload", "refresh" ]
}, {
    name: "level-down",
    code: "0x21b3",
    search: [ "down" ]
}, {
    name: "level-up",
    code: "0x21b0",
    search: [ "back", "return" ]
}, {
    name: "shuffle",
    code: "0x1f500",
    search: [ "shuffle", "random" ]
}, {
    name: "loop",
    code: "0x1f501",
    search: [ "loop", "repeat" ]
}, {
    name: "switch",
    code: "0x21c6",
    search: [ "switch", "exchange" ]
}, {
    name: "play",
    code: "0x25b6",
    search: [ "play", "player" ]
}, {
    name: "stop",
    code: "0x25a0",
    search: [ "stop", "player" ]
}, {
    name: "pause",
    code: "0x2016",
    search: [ "stop", "player" ]
}, {
    name: "record",
    code: "0x25cf",
    search: [ "stop", "player" ]
}, {
    name: "to-end",
    code: "0x23ed",
    search: [ "right", "player" ]
}, {
    name: "to-start",
    code: "0x23ee",
    search: [ "left", "player" ]
}, {
    name: "fast-forward",
    code: "0x23e9",
    search: [ "right", "player" ]
}, {
    name: "fast-backward",
    code: "0x23ea",
    search: [ "left", "player" ]
}, {
    name: "progress-0",
    code: "0xe768",
    search: [ "progress", "charge" ]
}, {
    name: "progress-1",
    code: "0xe769",
    search: [ "progress", "charge" ]
}, {
    name: "progress-2",
    code: "0xe76a",
    search: [ "progress", "charge" ]
}, {
    name: "progress-3",
    code: "0xe76b",
    search: [ "progress", "charge" ]
}, {
    name: "target",
    code: "0x1f3af",
    search: [ "target" ]
}, {
    name: "palette",
    code: "0x1f3a8",
    search: [ "palette" ]
}, {
    name: "list",
    code: "0xe005",
    search: [ "list" ]
}, {
    name: "list-add",
    code: "0xe003",
    search: [ "add", "list" ]
}, {
    name: "signal",
    code: "0x1f4f6",
    search: [ "broadcast", "wifi", "signal" ]
}, {
    name: "trophy",
    code: "0x1f3c6",
    search: [ "top", "trophy" ]
}, {
    name: "battery",
    code: "0x1f50b",
    search: [ "battery" ]
}, {
    name: "back-in-time",
    code: "0xe771",
    search: [ "back", "time" ]
}, {
    name: "monitor",
    code: "0x1f4bb",
    search: [ "tv", "screen", "monitor" ]
}, {
    name: "mobile",
    code: "0x1f4f1",
    search: [ "mobile", "iphone" ]
}, {
    name: "network",
    code: "0xe776",
    search: [ "net" ]
}, {
    name: "inbox",
    code: "0xe777",
    search: [ "inbox" ]
}, {
    name: "install",
    code: "0xe778",
    search: [ "install" ]
}, {
    name: "globe",
    code: "0x1f30e",
    search: [ "globe" ]
}, {
    name: "cloud",
    code: "0x2601",
    search: [ "cloud" ]
}, {
    name: "cloud-thunder",
    code: "0x26c8",
    search: [ "cloud", "thunder", "bolt" ]
}, {
    name: "flash",
    code: "0x26a1",
    search: [ "flash", "bolt" ]
}, {
    name: "moon",
    code: "0x263d",
    search: [ "moon", "sleep" ]
}, {
    name: "flight",
    code: "0x2708",
    search: [ "flight", "plane", "airplane", "fly" ]
}, {
    name: "paper-plane",
    code: "0x1f53f",
    search: [ "flight", "plane", "airplane", "fly" ]
}, {
    name: "leaf",
    code: "0x1f342",
    search: [ "leaf" ]
}, {
    name: "lifebuoy",
    code: "0xe788",
    search: [ "lifebuoy" ]
}, {
    name: "mouse",
    code: "0xe789",
    search: [ "mouse", "website" ]
}, {
    name: "briefcase",
    code: "0x1f4bc",
    search: [ "briefcase" ]
}, {
    name: "suitcase",
    code: "0xe78e",
    search: [ "briefcase" ]
}, {
    name: "dot",
    code: "0x23f4",
    search: [ "briefcase" ]
}, {
    name: "dot-2",
    code: "0x23f5",
    search: [ "briefcase" ]
}, {
    name: "dot-3",
    code: "0x23f6",
    search: [ "briefcase" ]
}, {
    name: "brush",
    code: "0xe79a",
    search: [ "brush" ]
}, {
    name: "magnet",
    code: "0xe7a1",
    search: [ "magnet" ]
}, {
    name: "infinity",
    code: "0x221e",
    search: [ "infinity" ]
}, {
    name: "erase",
    code: "0x232b",
    search: [ "erase" ]
}, {
    name: "chart-pie",
    code: "0x25f4",
    search: [ "erase" ]
}, {
    name: "chart-line",
    code: "0x1f4c8",
    search: [ "chart", "graph", "line", "diagram" ]
}, {
    name: "chart-bar",
    code: "0x1f4ca",
    search: [ "chart", "bar", "diagram" ]
}, {
    name: "chart-area",
    code: "0x1f53e",
    search: [ "chart", "area", "diagram" ]
}, {
    name: "tape",
    code: "0x2707",
    search: [ "tape", "voice mail" ]
}, {
    name: "graduation-cap",
    code: "0x1f393",
    search: [ "graduation" ]
}, {
    name: "language",
    code: "0x1f394",
    search: [ "graduation" ]
}, {
    name: "ticket",
    code: "0x1f3ab",
    search: [ "ticket" ]
}, {
    name: "water",
    code: "0x1f4a6",
    search: [ "whater", "wash" ]
}, {
    name: "droplet",
    code: "0x1f4a7",
    search: [ "droplet", "tint" ]
}, {
    name: "air",
    code: "0x1f4a8",
    search: [ "droplet", "tint" ]
}, {
    name: "credit-card",
    code: "0x1f4b3",
    search: [ "card", "plastic", "credit" ]
}, {
    name: "floppy",
    code: "0x1f4be",
    search: [ "floppy", "save" ]
}, {
    name: "clipboard",
    code: "0x1f4cb",
    search: [ "clipboard" ]
}, {
    name: "megaphone",
    code: "0x1f4e3",
    search: [ "megaphone", "bullhorn" ]
}, {
    name: "database",
    code: "0x1f4f8",
    search: [ "megaphone", "bullhorn" ]
}, {
    name: "drive",
    code: "0x1f4fd",
    search: [ "megaphone", "bullhorn" ]
}, {
    name: "bucket",
    code: "0x1f4fe",
    search: [ "megaphone", "bullhorn" ]
}, {
    name: "thermometer",
    code: "0x1f4ff",
    search: [ "megaphone", "bullhorn" ]
}, {
    name: "key",
    code: "0x1f511",
    search: [ "key", "password" ]
}, {
    name: "flow-cascade",
    code: "0x1f568",
    search: [ "key", "password" ]
}, {
    name: "flow-branch",
    code: "0x1f569",
    search: [ "key", "password" ]
}, {
    name: "flow-tree",
    code: "0x1f56a",
    search: [ "key", "password" ]
}, {
    name: "flow-line",
    code: "0x1f56b",
    search: [ "key", "password" ]
}, {
    name: "flow-parallel",
    code: "0x1f56c",
    search: [ "key", "password" ]
}, {
    name: "rocket",
    code: "0x1f680",
    search: [ "rocket", "fly" ]
}, {
    name: "gauge",
    code: "0x1f6c7",
    search: [ "rocket", "fly" ]
}, {
    name: "traffic-cone",
    code: "0x1f6c8",
    search: [ "rocket", "fly" ]
}, {
    name: "cc",
    code: "0x1f545",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-by",
    code: "0x1f546",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-nc",
    code: "0x1f547",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-nc-eu",
    code: "0x1f548",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-nc-jp",
    code: "0x1f549",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-sa",
    code: "0xe7aa",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-nd",
    code: "0x1f54b",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-pd",
    code: "0x1f54c",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-zero",
    code: "0x1f54d",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-share",
    code: "0x1f54e",
    search: [ "rocket", "fly" ]
}, {
    name: "cc-remix",
    code: "0x1f54f",
    search: [ "rocket", "fly" ]
}, {
    name: "github",
    code: "0xf300",
    search: [ "github", "social", "logo" ]
}, {
    name: "github-circled",
    code: "0xf301",
    search: [ "github", "social", "logo" ]
}, {
    name: "flickr",
    code: "0xf303",
    search: [ "flickr", "social", "logo" ]
}, {
    name: "flickr-circled",
    code: "0xf304",
    search: [ "flickr", "social", "logo" ]
}, {
    name: "vimeo",
    code: "0xf306",
    search: [ "vimeo", "social", "logo" ]
}, {
    name: "vimeo-circled",
    code: "0xf307",
    search: [ "vimeo", "social", "logo" ]
}, {
    name: "twitter",
    code: "0xf309",
    search: [ "twitter", "social", "logo" ]
}, {
    name: "twitter-circled",
    code: "0xf30a",
    search: [ "twitter", "social", "logo" ]
}, {
    name: "facebook",
    code: "0xf30c",
    search: [ "facebook", "social", "logo" ]
}, {
    name: "facebook-circled",
    code: "0xf30d",
    search: [ "facebook", "social", "logo" ]
}, {
    name: "facebook-squared",
    code: "0xf30e",
    search: [ "facebook", "social", "logo" ]
}, {
    name: "gplus",
    code: "0xf30f",
    search: [ "google", "plus", "social", "logo" ]
}, {
    name: "gplus-circled",
    code: "0xf310",
    search: [ "google", "plus", "social", "logo" ]
}, {
    name: "pinterest",
    code: "0xf312",
    search: [ "pinterest", "social", "logo" ]
}, {
    name: "pinterest-circled",
    code: "0xf313",
    search: [ "pinterest", "social", "logo" ]
}, {
    name: "tumblr",
    code: "0xf315",
    search: [ "tumblr", "social", "logo" ]
}, {
    name: "tumblr-circled",
    code: "0xf316",
    search: [ "tumblr", "social", "logo" ]
}, {
    name: "linkedin",
    code: "0xf318",
    search: [ "linkedin", "social", "logo" ]
}, {
    name: "linkedin-circled",
    code: "0xf319",
    search: [ "linkedin", "social", "logo" ]
}, {
    name: "dribbble",
    code: "0xf31b",
    search: [ "dribbble", "social", "logo" ]
}, {
    name: "dribbble-circled",
    code: "0xf31c",
    search: [ "dribbble", "social", "logo" ]
}, {
    name: "stumbleupon",
    code: "0xf31e",
    search: [ "stumbleupon", "social", "logo" ]
}, {
    name: "stumbleupon-circled",
    code: "0xf31f",
    search: [ "stumbleupon", "social", "logo" ]
}, {
    name: "lastfm",
    code: "0xf321",
    search: [ "lastfm", "social", "logo" ]
}, {
    name: "lastfm-circled",
    code: "0xf322",
    search: [ "lastfm", "social", "logo" ]
}, {
    name: "rdio",
    code: "0xf324",
    search: [ "rdio", "social", "logo" ]
}, {
    name: "rdio-circled",
    code: "0xf325",
    search: [ "rdio", "social", "logo" ]
}, {
    name: "spotify",
    code: "0xf327",
    search: [ "spotify", "social", "logo" ]
}, {
    name: "spotify-circled",
    code: "0xf328",
    search: [ "spotify", "social", "logo" ]
}, {
    name: "qq",
    code: "0xf32a",
    search: [ "qq", "social", "logo" ]
}, {
    name: "instagrem",
    code: "0xf32d",
    search: [ "instagrem", "social", "logo" ]
}, {
    name: "dropbox",
    code: "0xf330",
    search: [ "dropbox", "social", "logo" ]
}, {
    name: "evernote",
    code: "0xf333",
    search: [ "evernote", "social", "logo" ]
}, {
    name: "flattr",
    code: "0xf336",
    search: [ "flattr", "social", "logo" ]
}, {
    name: "skype",
    code: "0xf339",
    search: [ "skype", "social", "logo" ]
}, {
    name: "skype-circled",
    code: "0xf33a",
    search: [ "skype", "social", "logo" ]
}, {
    name: "renren",
    code: "0xf33c",
    search: [ "renren", "social", "logo" ]
}, {
    name: "sina-weibo",
    code: "0xf33f",
    search: [ "'sina-weibo'", "social", "logo" ]
}, {
    name: "paypal",
    code: "0xf342",
    search: [ "paypal", "social", "logo" ]
}, {
    name: "picasa",
    code: "0xf345",
    search: [ "picasa", "social", "logo" ]
}, {
    name: "soundcloud",
    code: "0xf348",
    search: [ "soundcloud", "social", "logo" ]
}, {
    name: "mixi",
    code: "0xf34b",
    search: [ "mixi", "social", "logo" ]
}, {
    name: "behance",
    code: "0xf34e",
    search: [ "behance", "social", "logo" ]
}, {
    name: "google-circles",
    code: "0xf351",
    search: [ "google", "circles", "social", "logo" ]
}, {
    name: "vkontakte",
    code: "0xf354",
    search: [ "vkontakte", "social", "logo" ]
}, {
    name: "smashing",
    code: "0xf357",
    search: [ "smashing", "social", "logo" ]
}, {
    name: "sweden",
    code: "0xf601",
    search: [ "sweden" ]
}, {
    name: "db-shape",
    code: "0x1f5fA",
    search: [ "sweden" ]
}, {
    name: "logo-db",
    code: "0x1f5f9",
    search: [ "sweden" ]
} ];