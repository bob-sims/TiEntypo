var args = arguments[0] || {};
//Ti.API.info(args.text);

//Ti.API.info(args.code + " " + args.code.length);
//$.icon.setTitle(args.text);

if (args.search.indexOf('social') > -1) {
	$.icon.setFont({fontFamily:'Entypo Social',fontSize:args.fontSize});
} else {
	$.icon.setFont({fontFamily:'Entypo',fontSize:args.fontSize});	
}

if(args.color) {
	//console.info("icon color: "+args.color);
	$.icon.setColor(args.color);
	//$.name.setColor(args.color);
}

$.row.searchWords = args.searchWords;
$.icon.setText(args.text);
$.name.setText(args.name);
$.tags.setText("# "+args.tags);

