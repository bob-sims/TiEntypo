function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.row = A$(Ti.UI.createTableViewRow({
        touchEnabled: !1,
        id: "row",
        className: "row"
    }), "TableViewRow", null);
    $.addTopLevelView($.__views.row);
    $.__views.container = A$(Ti.UI.createView({
        layout: "vertical",
        width: "75%",
        height: Ti.UI.SIZE,
        left: 5,
        id: "container"
    }), "View", $.__views.row);
    $.__views.row.add($.__views.container);
    $.__views.name = A$(Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "black",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 5,
        id: "name"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.name);
    $.__views.tags = A$(Ti.UI.createLabel({
        font: {
            fontSize: "14dp"
        },
        color: "blue",
        backgroundColor: "transparent",
        left: 5,
        id: "tags"
    }), "Label", $.__views.container);
    $.__views.container.add($.__views.tags);
    $.__views.icon = A$(Ti.UI.createLabel({
        font: {
            fontFamily: "Entypo",
            fontSize: "64dp"
        },
        color: "black",
        backgroundColor: "transparent",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        right: 10,
        id: "icon"
    }), "Label", $.__views.row);
    $.__views.row.add($.__views.icon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    args.search.indexOf("social") > -1 ? $.icon.setFont({
        fontFamily: "Entypo Social",
        fontSize: args.fontSize
    }) : $.icon.setFont({
        fontFamily: "Entypo",
        fontSize: args.fontSize
    });
    args.color && $.icon.setColor(args.color);
    $.row.searchWords = args.searchWords;
    $.icon.setText(args.text);
    $.name.setText(args.name);
    $.tags.setText("# " + args.tags);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;