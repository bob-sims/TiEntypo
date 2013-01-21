function doClick(e) {  
    alert($.label.text);
}

var entypo = require('ti.entypo'), currentColor = 'black', currentSize = 48;

Ti.API.info('length: '+entypo.codeMap.length);

function updateTable(_args) {
	
	var rowData = [], colors = ['red','blue','black'];
	rowData.push(createColorRow(['red','blue','black']));
	rowData.push(createSizeRow([{"title":'Small',"fontSize":48},
								{"title":'Medium',"fontSize":72},
								{"title":'Large',"fontSize":128}]));
	
	for (var i=0; i < entypo.codeMap.length; i++)  {
		var text = entypo.fromCodePoint(entypo.codeMap[i].code);
		var tags = entypo.codeMap[i].search.toString();
		tags = tags.replace(/,/g,", ");
		var searchWords = tags.replace(/,\s/g," ") + " " + entypo.codeMap[i].name;
		var payload = ({"text":text, "name":entypo.codeMap[i].name, "tags":tags, "search":entypo.codeMap[i].search, "searchWords":searchWords});
		if (_args.color) {
			payload.color = _args.color;
		}
		if (_args.fontSize) {
			payload.fontSize = _args.fontSize;
		}
		var row = Alloy.createController('row', payload).getView();

		rowData.push(row);
	}
	$.table.setData(rowData);
}

function createColorRow(_colors){
	var row = Ti.UI.createTableViewRow({"layout":'horizontal'});
	for (var i in _colors) {
		var button = Ti.UI.createButton({"title":_colors[i].toUpperCase(),"fontColor":_colors[i],
										"color":_colors[i], 
										"top":5, "bottom":5, "right":5, "left":5,
										"height":30,"width":Ti.Platform.displayCaps.platformWidth/3.5});
		button.addEventListener('click', function(e) {
			//var tableView = $.index.getChildren()[0];
			currentColor = e.source.fontColor;
			updateTable({"color":e.source.fontColor,"fontSize":currentSize});
		});
		row.add(button);
	}
	return row;	
}

function createSizeRow(_args) {
	var row = Ti.UI.createTableViewRow({"layout":'horizontal'});
	for (var i in _args) {
		var button = Ti.UI.createButton({"title":_args[i].title,
								"fontSize":_args[i].fontSize,
								"top":5, "bottom":5, "right":5, "left":5,
								"height":30,"width":Ti.Platform.displayCaps.platformWidth/3.5});
		button.addEventListener('click', function(e) {
			currentSize = e.source.fontSize;
			updateTable({"fontSize":e.source.fontSize,"color":currentColor});
		});
	row.add(button);
	}
	return row;
}

updateTable({"color":currentColor,"fontSize":currentSize});

$.table.setFilterAttribute('searchWords');
$.index.open();