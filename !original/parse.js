var fs = require('fs');

// input file name
var inputfile = __dirname + '/data/flux_fournisseur.json';
// output file name
var outputfile = __dirname + '/data/flux_fournisseur_output.json';

// remove non-obj, non-array : recursive function
function removeElements(obj) {
	var keys = Object.keys(obj);
	for (var i = 0; i < keys.length; i++) {
		var keyName = keys[i];
		
		// remove delete object which contains "generque"
		if (Object.prototype.toString.call( obj[keyName] ) === '[object Object]') {
			var childKeys = Object.keys(obj[keyName]);
			if (childKeys[0].includes("Generique") && Object.prototype.toString.call( obj[keyName][childKeys[0]] ) !== '[object Object]') {
				// console.log(keyName);
				delete obj[keyName];
				// i--;
				continue;
			}
		}

		// remove delete object which contains "specifique"
		if (Object.prototype.toString.call( obj[keyName] ) === '[object Object]') {
			var childKeys = Object.keys(obj[keyName]);
			if (childKeys[0].includes("Specifique") && Object.prototype.toString.call( obj[keyName][childKeys[0]] ) !== '[object Object]') {
				// console.log(keyName);
				delete obj[keyName];
				// i--;
				continue;
			}
		}

		// remove non array, non obj
		if (Object.prototype.toString.call( obj[keyName] ) !== '[object Array]' &&
			Object.prototype.toString.call( obj[keyName] ) !== '[object Object]') {
			// obj[keyName] = "";
			delete obj[keyName];
		} else {
			removeElements(obj[keyName]);
		}
	}
}

// read data
var data = fs.readFileSync(inputfile);

// conver data to js object.
var srcobj = JSON.parse(data);

// remove elements
removeElements(srcobj['data'][0]);

// save result to output file.
fs.writeFile(outputfile, JSON.stringify(srcobj, null, '\t'));
