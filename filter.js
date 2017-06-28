var fs = require('fs');

var inputFolder = __dirname + '/data';
var outputFolder = __dirname + '/data_output';
var filterFile = __dirname + '/filter.txt';

var inputFiles = fs.readdirSync(inputFolder).filter(function(file) {
	return file.slice(-5) === ".json";
});

var filterWords = fs.readFileSync(filterFile).toString().split("\n");
filterWords = filterWords.map(function(wrd) { return wrd.trim(); });

mkdir(outputFolder);

for (var i = 0; i < inputFiles.length; i++) {
	var inputfile = inputFolder + '/' + inputFiles[i];
	var outputfile = outputFolder + '/' + inputFiles[i];
	// var inputObj = JSON.parse(fs.readFileSync(inputfile));
	var inputObj = JSON.parse(fs.readFileSync(inputfile).toString('utf8').replace(/^\uFEFF/, '')); // remove BOM from file data

	exploreJsonNode(inputObj, inputObj, []);

	fs.writeFileSync(outputfile, JSON.stringify(inputObj, null, '\t'));
}

// var exec = require('child_process').exec;
// exec('start "" "chrome" "jsonTreeViewer/index.html"');


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

function exploreJsonNode(srcObj, currObj, path) {
	if (Object.prototype.toString.call(currObj) === '[object Object]') { // if Object - go deeper with save path
		var keys = Object.keys(currObj);
		for (var i = 0; i < keys.length; i++) {
			exploreJsonNode(srcObj, currObj[keys[i]], path.concat(keys[i]));
		}
		if (Object.keys(currObj).length === 0) deleteDeepKey(srcObj, path);
	} else if (Object.prototype.toString.call(currObj) === '[object Array]') { // if Array - go deeper with save path
		for (var j = 0; j < currObj.length; j++) {
			exploreJsonNode(srcObj, currObj[j], path.concat(j));
		}
		deleteEmptyFromArray(currObj);
		if (currObj.length === 0) deleteDeepKey(srcObj, path);
	} else { // check path
		var findWord = false;
		for (var k = 0; k < filterWords.length; k++) {
			if (path[path.length - 1].indexOf(filterWords[k]) !== -1) { // If the path contains the searched value - delete it  
				findWord = true;
				break;
			}
		}
		if (!findWord) deleteDeepKey(srcObj, path);
	}
}

function deleteDeepKey(obj, path) {
	path.reduce(function(r, e, i) {
		if (i === path.length - 1) {
			delete r[e];
		}
		return r[e]
	}, obj);
}

function deleteEmptyFromArray(arr) {
	for (var l = 0; l < arr.length; l++) {
		if (!arr[l]) {
			arr.splice(l, 1);
			l--;
		}
	}
}
