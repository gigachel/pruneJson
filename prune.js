var fs = require('fs');

var inputFolder = __dirname + '/data';
var outputFolder = __dirname + '/data_output';
var pruneFile = __dirname + '/prune.txt';

var inputFiles = fs.readdirSync(inputFolder).filter(function(file) {
	return file.slice(-5) === ".json";
});

var pruneWords = fs.readFileSync(pruneFile).toString().split("\n");
pruneWords = pruneWords.map(function(wrd) { return wrd.trim(); });

mkdir(outputFolder);

for (var i = 0; i < inputFiles.length; i++) {
	var inputfile = inputFolder + '/' + inputFiles[i];
	var outputfile = outputFolder + '/' + inputFiles[i];
	// var inputObj = JSON.parse(fs.readFileSync(inputfile));
	var inputObj = JSON.parse(fs.readFileSync(inputfile).toString('utf8').replace(/^\uFEFF/, '')); // remove BOM from file data

	removeElements(inputObj, inputObj, []);

	fs.writeFileSync(outputfile, JSON.stringify(inputObj, null, '\t'));
}

console.log("done!");



function mkdir(dirPath) {
  try {
    fs.mkdirSync(dirPath);
		console.log("Output folder create");
  } catch (error) {
		if (error.code === 'EEXIST') console.log("Output folder exist");
		else throw error;
  }
}

function removeElements(srcObj, currObj, path) {
	if (Object.prototype.toString.call(currObj) === '[object Object]') { // if Object - go deeper with save path
		var keys = Object.keys(currObj);
		for (var i = 0; i < keys.length; i++) {
			removeElements(srcObj, currObj[keys[i]], path.concat(keys[i]));
		}
	} else if (Object.prototype.toString.call(currObj) === '[object Array]') { // if Array - go deeper with save path
		for (var j = 0; j < currObj.length; j++) {
			removeElements(srcObj, currObj[j], path.concat(j));
		}
	} else { // check path
		for (var k = 0; k < pruneWords.length; k++) {
			if (path[path.length -1].indexOf(pruneWords[k]) !== -1) { // If the path contains the searched value - delete it
				deleteDeepKey(srcObj, path);
			}
		}
	}
}

function deleteDeepKey(obj, path) {
	path.reduce(function(r, e, i) {
		if (i === path.length - 1) delete r[e]
		return r[e]
	}, obj);
}
