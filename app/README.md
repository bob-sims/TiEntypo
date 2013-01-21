## Entypo Icon Font in Titanium

I've attempted a small CommonJS module and sample Alloy application to demonstrate how the [Entypo Icon Font](http://www.entypo.com/) could be used in a cross-platform [Appcelerator Titanium](http://www.appcelerator.com/platform/titanium-studio) mobile app.  This module would allow a developer to access the exhaustive 250+ (!) Entypo icons using Titanium's native UI from two common TrueType font files included within an app.  My sample app runs on both iOS and Android, although it is tailored and more completely tested on the iOS iPhone simulator.

Note my technique might work for [other icon font sets](http://css-tricks.com/flat-icons-icon-fonts/) as well, but Entypo was the most complete set I could get up and running in Titanium relatively quickly.  The challenging part for a pure JavaScript implementation is finding the right way return the proper Unicode value(s) from the higher character points frequently used in icon font sets.  Fortunately, I found a shim function in the Mozilla JavaScript docs which would consistently return a Unicode value or pair that the JavaScript `fromCharCode()` string method would accept.  There are only a few Enypo exceptions (`suitecase` and `cc-sa`), you will see these represented in the sample app as a block instead of the intended pictogram.

I also found some other string/hex conversion functions that might be useful for similar implementations of other icon font libraries, so I've left those unused in the CommonJS file.

### Screenshots:

![Sample Alloy app screenshot](https://lh4.googleusercontent.com/-fpui0YoE4MQ/UP0PpRXp3fI/AAAAAAAAYK4/KGhvWJzQYWw/s800/iOS%2520Simulator%2520Screen%2520shot%2520Jan%252021%252C%25202013%25209.57.52%2520AM.png)
![Font icons styled large and black](https://lh5.googleusercontent.com/-fH_fVjwsQRA/UP0ih5Wg-2I/AAAAAAAAYLU/4rqNPkzJAW0/s800/iOS%2520Simulator%2520Screen%2520shot%2520Jan%252021%252C%25202013%252012.08.02%2520PM.png)
---
![Font icons styled large and black](https://lh5.googleusercontent.com/-iLcpYOigpqE/UP0ih8-cjoI/AAAAAAAAYLc/j4k4Uy1AjnA/s800/iOS%2520Simulator%2520Screen%2520shot%2520Jan%252021%252C%25202013%252012.10.44%2520PM.png)
![Font social icons styled red](https://lh6.googleusercontent.com/-orBYawHsg98/UP0iiGWg4_I/AAAAAAAAYLY/XNWv8BNhvDQ/s800/iOS%2520Simulator%2520Screen%2520shot%2520Jan%252021%252C%25202013%252012.11.16%2520PM.png)
---

### Pros:

- Dynamic styling through standard font properties and units of measure (color, size)
- Small file size (both font files together < 50 kB, contains 250+ icons, could be made even smaller by [tailoring the font package](http://icomoon.io/) to include only required icons)
- Gracefully scalable without noticable  distortion
- Developer-friendly [CC BY 3.0 license](http://creativecommons.org/licenses/by-sa/3.0/) (Entypo pictograms by Daniel Bruce — [www.entypo.com]())

### Cons:

- Monochrome (only single color without shading, shadow, or other special effects)

### Example usage:

	var entypo = require('ti.entypo');
	
	var iconFont = 'Entypo Social'; // use the friendly-name on iOS
	if(Ti.Platform.osname=='android') {
	   // on Android, use the "base name" of the file (name without extension)
	   iconFont = 'entypo-social';
	} 
	
	var label1 = Titanium.UI.createLabel({
	   color:'#000',
	   backgroundColor: 'transparent',
	   text:entypo.fromName('github'),
	   font:{
	      fontSize:40,
	      fontFamily: iconFont
	   },
	   textAlign:'center',
	   width:'auto'
	});

Above Ti.UI.label object would render the Github pictogram like this (top icon):

![Entypo Github pictogram](https://lh3.googleusercontent.com/-sVsijevknro/UP0PpRcg5-I/AAAAAAAAYK8/HQbUSWiY5GM/s800/iOS%2520Simulator%2520Screen%2520shot%2520Jan%252021%252C%25202013%252010.46.17%2520AM.png)
---

### Other notes:

- Included Alloy sample app demonstrates each of the available icons, along with demonstration of dynamic color and size changes.  I'd apologize for mistakes in the coding standard, however, that would assume I've used any coding standard at all!
- Review [Appcelerator docs](http://docs.appcelerator.com/titanium/latest/#!/guide/Custom_Fonts-section-29004935_CustomFonts-Usingthecustomfont) on installing fonts, and platform differences.
- Review licensing notes at [Entypo homepage](http://www.entypo.com/) regarding differences between the font icons (CC) and the social extensions.
- Find human-friendly font names by searching the JSON model (`exports.codeMap`), searching within the demo app, or hovering your mouse cursor over pictograms in the online [character map](http://www.entypo.com/characters.php).
- For Alloy framework apps, copy the font files into `/assets/fonts`.  For standard Titanium code, copy the font files into `/Resources/fonts`.
- Any font containing a 'social' search tag requires the `entypo-social.ttf` file, while everything else requires `entypo.ttf`.

