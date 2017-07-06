new Vue({
	el: '#app',
	data: {
		json: {},
		rawCsvPaths: [],
		classes: ['transparent', 'blue-node', 'blue-node', 'orange-node', 'green-node', 'salmon-node'],
		tree: {},
		treeLoading: false,
		showBlue: true,
		showOrange: true,
		showSalmon: true,
		showGreen: true,
		dialogVisible: false,
		specName: "",
	},
	methods: {
		loadJson: function(response, file, fileList) {
			var self = this;
			file = file[0].raw;

			if (!file) return;
			var reader = new FileReader();
		  reader.onload = function(e) {
		    self.json = JSON.parse(e.target.result);
		  };
			reader.readAsText(file);
		},
		clearJson: function() {
			this.$refs.jsonFile.clearFiles();
			this.$refs.jsonFile.$refs['upload-inner'].$refs.input.value = ""; // HACK for clear when :auto-upload="false"
			this.json = {}; // clear json
		},
		parseCsv: function(response, file, fileList) {
			var self = this;
			file = file[0].raw;

			if (!file) return;
		  var reader = new FileReader();
		  reader.onload = function(e) {
		    CSV.COLUMN_SEPARATOR = ";";

		    var parsedCSV = CSV.parse(e.target.result);

				if (parsedCSV && parsedCSV.length > 0) {
					self.rawCsvPaths = parsedCSV
					.slice(2)
					.map(function(row) {
						row[0] = row[0].split("/").length === 3 ? row[0].split("/")[1] : "";
						return [
							row[0], // [0] 0 level - additional path for 1 level
							row[1], // [1] 1 level: blue (Macro-attribut)
							row[2], // [2] 2 level: blue (Sous-MA)
							row[3], // [3] 3 level: orange (Collection)
							row[5], // [4] 4 level: salmon/green (Codification/Attribut)
							row[4], // [5] maybe == "X" for green
							row[10] // [6] spec name for 4 level
						];
					});
				}
		  };
		  reader.readAsText(file);
		},
		clearCsv: function() {
			this.$refs.csvFile.clearFiles();
			this.$refs.csvFile.$refs['upload-inner'].$refs.input.value = ""; // HACK for clear when :auto-upload="false"
			this.rawCsvPaths = []; // clear csv paths
		},
		toggleShow: function() {
			$('.blue-node').closest('.jsontree_node').toggle(this.showBlue);
			$('.orange-node').closest('.jsontree_node').toggle(this.showOrange);
			$('.salmon-node').closest('.jsontree_node').toggle(this.showSalmon);
			$('.green-node').closest('.jsontree_node').toggle(this.showGreen);
		},
		expandAll: function() {
			if (this.tree.expand) this.tree.expand();
		},
		collapseAll: function() {
			if (this.tree.collapse) this.tree.collapse();
		},
		expandBlue: function() {
			var self = this;
			if (!this.tree.collapse) return;
			this.tree.collapse();
			expandBlueRecursive(this.tree.rootNode);

			function expandBlueRecursive(item) {
				if (item.el.className.indexOf("blue-node") !== -1) {
					if (item.isComplex) item.expand();
					item.expandParent();
				}
				if (item.isComplex) {
					for (var i = 0; i < item.childNodes.length; i++) {
						expandBlueRecursive(item.childNodes[i]);
					}
				}
			}
		},
		collapseBlue: function() {
			var self = this;
			if (!this.tree.collapse) return;
			// this.tree.expand();
			collapseBlueRecursive(this.tree.rootNode);

			function collapseBlueRecursive(item) {
				if (item.el.className.indexOf("blue-node") !== -1) {
					if (item.isComplex) item.collapse();
					// item.expandParent();
				}
				if (item.isComplex) {
					for (var i = 0; i < item.childNodes.length; i++) {
						collapseBlueRecursive(item.childNodes[i]);
					}
				}
			}
		},
		setTips: function() {
			$('.powertip').powerTip();
			$('.powertip').on({
				powerTipPreRender: function() {
					var blueLength = $(this).parent().siblings('.jsontree_value-wrapper').find('> .jsontree_value  > .jsontree_child-nodes > .blue-node').length;
					var orangeLength = $(this).parent().siblings('.jsontree_value-wrapper').find('> .jsontree_value  > .jsontree_child-nodes > .orange-node').length;
					var salmonLength = $(this).parent().siblings('.jsontree_value-wrapper').find('> .jsontree_value  > .jsontree_child-nodes > .salmon-node').length;
					var greenLength = $(this).parent().siblings('.jsontree_value-wrapper').find('> .jsontree_value  > .jsontree_child-nodes > .green-node').length;
					$(this).data('powertip', 'blue: ' + blueLength + '<br>orange: ' + orangeLength + '<br>salmon: ' + salmonLength + '<br>green: ' + greenLength);
				}
			});
		},
		setPopup: function() {
			var self = this;
			// $('.green-node, .salmon-node > .jsontree_label-wrapper > .jsontree_label').off('click');
			$('.green-node, .salmon-node').on('click', function() {
				self.specName = $(this).data('spec');
				self.dialogVisible = true;
			});
		},
		exploreTreeNode: function(treeNode, path) {
			var self = this;
			var rawCsvPaths = self.rawCsvPaths;

			for (var i = 0; i < treeNode.childNodes.length; i++) {
				path = path.concat(treeNode.childNodes[i].label); // set path on begin
				if (treeNode.childNodes[i].parent.type !== "array") {
					var childPath = [];
					for (var k = 0; k < path.length; k++) { // filter path
						if (!Number(path[k]) && path[k] !== 0) childPath.push(path[k]);
					}

					for (var j = 0; j < rawCsvPaths.length; j++) {
						var rawCsvPath = rawCsvPaths[j];
						var csvPath = [];
						for (var l = 0; l < rawCsvPath.length; l++) { // filter rawCsvPath
							if (rawCsvPath[l]) csvPath.push(rawCsvPath[l]);
						}

						var csvPathShort = csvPath.slice(0, childPath.length); // make csvPath length to childPath length
						if (csvPathShort.toString() === childPath.toString()) {
							var level = rawCsvPath.lastIndexOf(childPath[childPath.length - 1]);
							if (level === 4) { // for green
								if (rawCsvPath[5] === "X") level = 5; // correct level if "X"
								$(treeNode.childNodes[i].el).data('spec', rawCsvPath[6]);
							}
							// $(treeNode.childNodes[i].el.firstElementChild).find('.jsontree_label').first().addClass(self.classes[level]);
							$(treeNode.childNodes[i].el).addClass(self.classes[level]);

							break;
						}
					}
				}

				if (treeNode.childNodes[i].type === "object") {
					$(treeNode.childNodes[i].el.firstElementChild.firstElementChild).addClass('powertip');//.data('powertip', self.classes[level]);
				}

				if (treeNode.childNodes[i].isComplex) self.exploreTreeNode(treeNode.childNodes[i], path);
				path.splice(-1); // return one level up on the end
			}
		},
		paintJSON: function() {
			var self = this;
			var json = self.json;

			self.treeLoading = true;
			$("#tree-wrapper").empty();

			setTimeout(function() { // HACK for init loading
			  var tree = jsonTree.create(json, $("#tree-wrapper")[0]);
				// console.log(tree);
				self.tree = tree;
			  tree.expand(function(node) {
			  	node.expand(true);
					self.exploreTreeNode(node, []);
			  });
				self.toggleShow();
				self.setTips();
				self.setPopup();
				self.treeLoading = false;
			}, 300);
		}
	}

});
