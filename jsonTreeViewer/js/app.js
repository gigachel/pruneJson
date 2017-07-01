// document.getElementById('json-file').addEventListener('change', readJsonFile, false);

var macroFiltersWords;
var collectionsCsv2;
var attributesCsv2;
var rawCsvPaths = [];
// var colors = ['rgba(15, 131, 232, 0.7)', 'rgba(15, 131, 232, 0.4)', 'orange', 'green'];
var colors = ['transparent', 'rgba(15, 131, 232, 0.7)', 'rgba(15, 131, 232, 0.4)', 'orange', 'rgba(0, 218, 0, 0.5)'];
var classes = ['transparent', 'dark-blue', 'blue', 'orange', 'green'];

$('#macro-csv-file').on('change', function(e) {
	var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    CSV.COLUMN_SEPARATOR = ";";

    var parsedCSV = CSV.parse(e.target.result);

		if (parsedCSV && parsedCSV.length > 0) {
			macroFiltersWords = parsedCSV
			.map(function(row) {
				return row[3]; // get 4 column
			})
			.filter(function(wrd) {
				return wrd && wrd !== "top_object";
			})
			.slice(1); // remove header

			$("#macro-filters").val(macroFiltersWords.join("\n"));
		}
  };
  reader.readAsText(file);
});

$('#macro-csv-file').on('click', function(e) {
	this.value = null;
});

$('#collection-csv-file').on('change', function(e) {
	var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    CSV.COLUMN_SEPARATOR = ";";

    var parsedCSV = CSV.parse(e.target.result);

		if (parsedCSV && parsedCSV.length > 0) {
			attributesCsv2 = getAttributesCsv2(parsedCSV);
			collectionsCsv2 = getCollectionsCsv2(parsedCSV);
			$("#collection-filters").val(attributesCsv2.join("\n"));
		}
  };
  reader.readAsText(file);
});

$('#collection-csv-file').on('click', function(e) {
	this.value = null;
});

$('#rac-csv-file').on('change', function(e) {
	var file = e.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    CSV.COLUMN_SEPARATOR = ";";

    var parsedCSV = CSV.parse(e.target.result);

		// console.log(parsedCSV);

		if (parsedCSV && parsedCSV.length > 0) {
			rawCsvPaths = parsedCSV
			.slice(2)
			.map(function(row) {
				// return [row[1], row[2], row[3], row[5]];
				row[0] = row[0].split("/").length === 3 ? row[0].split("/")[1] : "";
				return [row[0], row[1], row[2], row[3], row[5]];
			});

			// console.log(rawCsvPaths);
		}

		// if (parsedCSV && parsedCSV.length > 0) {
		// 	attributesCsv2 = getAttributesCsv2(parsedCSV);
		// 	collectionsCsv2 = getCollectionsCsv2(parsedCSV);
		// 	$("#collection-filters").val(attributesCsv2.join("\n"));
		// }
  };
  reader.readAsText(file);
});

$('#rac-csv-file').on('click', function(e) {
	this.value = null;
});

$('#filterBtn').on('click', goFilter);

// var json = {};
var json = ﻿{
	"data": [{
			"identifiantUniqueDonneeGeneraleIdentification": "26c5d3c3-3680-4133-9f82-683e3d619805",
			"indicateurGtinGenere": false,
			"champAddOn": 1,
			"motifAddOn": "motif",
			"dateCreationAddOn": "2017-02-04T23:00:00Z",
			"gtin": "gtin",
			"codeSap": "sap",
			"identifiantUniqueFournisseurInformation": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
			"dGITypologieProduitUc": {
				"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
				"idMetier": "idmetest",
				"libelle": "structure generique test",
				"actif": true,
				"dateDebutValidite": "2016-12-31T22:00:00Z",
				"dateFinValidite": "2016-12-30T23:00:00Z",
				"dateCreation": "2016-12-31T22:00:00Z",
				"dateMaj": "2016-12-31T22:00:00Z"
			},
			"libelleStandard": "libelle std",
			"indicateurProduitMesureVariable": true,
			"codePoidsVariable": "code",
			"observation": "obs",
			"observationInterneSca": "obs int",
			"produitADecouper": false,
			"produitDematerialise": true,
			"indicateurConsigne": false,
			"flagProduitAvecGratuite": true,
			"nombreProduitDifferentDansLot": 2,
			"dGIEntite": {
				"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
				"idMetier": "idmetest",
				"libelle": "structure generique test",
				"actif": true,
				"dateDebutValidite": "2016-12-31T22:00:00Z",
				"dateFinValidite": "2016-12-30T23:00:00Z",
				"dateCreation": "2016-12-31T22:00:00Z",
				"dateMaj": "2016-12-31T22:00:00Z"
			},
			"dateCreation": "2017-05-08T22:02:02Z",
			"dateMaj": "2017-09-08T10:12:12Z",
			"validiteProduit": [{
				"identifiantUniqueValiditeProduit": "16c5d3c3-3680-4133-9f82-683e3d619806",
				"identifiantUniqueFournisseurInformation": "16c5d3c3-3680-4133-9f82-683e3d619805",
				"dGITypeDePeriodeProduit": {
					"identifiantUniqueStructureGenerique": "56aac6f7-66d4-43b5-859a-bb8e43fcee24",
					"idMetier": "SDG",
					"libelle": "Livre soudanaise",
					"actif": false,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dGIPeriodeProduit": {
					"identifiantUniqueStructureGenerique": "88dfa57c-dc6b-4e07-ab37-912a57212e40",
					"idMetier": "RANA",
					"libelle": "RANA",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateDebutValiditePeriode": "2017-02-01T23:00:00Z",
				"dateFinValiditePeriode": "2017-02-01T23:00:00Z"
			}],
			"travailleAvec": [{
				"identifiantUniqueTravailleAvec": "3511c0aa-e230-430c-aab1-de8cf98f5967",
				"dGIEntiteSelection": {
					"identifiantUniqueStructureGenerique": "80722e07-f82f-4841-85e1-4d7d8277098e",
					"idMetier": "UAH",
					"libelle": "HRYVNIA",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"libelleStandard": "libellle",
				"observationInterneSca": "obs",
				"indicateurConsigne": true,
				"flagTravailleAvec": true,
				"dateDebut": "2017-05-05T22:00:00Z",
				"dateFin": "2018-08-04T22:00:00Z"
			}],
			"donneesGeneralesLot": [{
					"identifiantUniqueDonneeGeneraleLot": "69d715b5-24c7-441e-974c-56de4679ec2b",
					"quantiteComposantLot": 1,
					"dGLUniteDeMesure": {
						"identifiantUniqueStructureGenerique": "1fc4199c-2dbd-457b-b1aa-37488f0c7cae",
						"idMetier": "ZAR",
						"libelle": "Rand",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"identifiantUniqueComposeUc": "26c5d3c3-3680-4133-9f82-683e3d619805",
					"identifiantUniqueComposantUc": "26c5d3c3-3680-4133-9f82-683e3d619805",
					"dGLEntite": {
						"identifiantUniqueStructureGenerique": "ad5fec25-ec8f-40ba-a69a-9227a30447b6",
						"idMetier": "TJS",
						"libelle": "Somoni",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2018-08-08T13:18:15Z",
					"dateMaj": "2018-08-08T13:18:15Z"
				},
				{
					"identifiantUniqueDonneeGeneraleLot": "d4f7bc9d-c57c-45b7-bc23-a918eb52bc3e",
					"quantiteComposantLot": 6,
					"dGLUniteDeMesure": null,
					"identifiantUniqueComposeUc": "26c5d3c3-3680-4133-9f82-683e3d619805",
					"identifiantUniqueComposantUc": "993b787f-ad09-4b22-89c4-41f3877a3f23",
					"dGLEntite": null,
					"dateCreation": "2017-05-08T22:02:02Z",
					"dateMaj": "2017-05-08T22:02:02Z"
				}
			],
			"donneeGeneraleMarqueFournisseur": {
				"identifiantUniqueDonneeGeneraleMarqueFournisseur": "1589f5d8-7b49-4a44-84f5-c9f8f3635e28",
				"dGFMarque": {
					"identifiantUniqueMarque": "1589f5d8-7b49-4a44-84f5-c9f8f3635e27",
					"idMetier": "id-A",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2014-04-04T10:12:12Z",
					"dateFinValidite": "2014-04-04T10:12:12Z",
					"dateCreation": "2014-04-04T10:12:12Z",
					"dateMaj": "2014-04-04T10:12:12Z",
					"niveau": 3,
					"identifiantUniquePere": null
				},
				"marqueFournisseur": "marque fournisseur",
				"dGFTypeMarque": {
					"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
					"idMetier": "TRA",
					"libelle": "TRAITE",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dGFSousMarque": {
					"identifiantUniqueMarque": "0085bc83-a2df-4431-8dd0-062a68e54e96",
					"idMetier": "id-B",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2014-04-04T10:12:12Z",
					"dateFinValidite": "2014-04-04T10:12:12Z",
					"dateCreation": "2014-04-04T10:12:12Z",
					"dateMaj": "2014-04-04T10:12:12Z",
					"niveau": 3,
					"identifiantUniquePere": null
				},
				"sousMarqueFournisseur": "sous marque",
				"dGFEntite": {
					"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
					"idMetier": "TRA",
					"libelle": "TRAITE",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2014-04-04T10:12:12Z",
				"dateMaj": "2016-11-15T09:10:10Z"
			},
			"nomenclature": {
				"identifiantUniqueNomenclature": "14e4fe35-e458-4d1a-9b8a-8fba1263fbbc",
				"lNNomenclatureCodelec": {
					"identifiantUniqueNomenclatureCodelec": "049ef788-f897-4351-ac6a-24482806edc9",
					"activite": 1,
					"groupe": null,
					"secteur": null,
					"sousSecteur": null,
					"codeMetier": 1,
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"cycleVie": "cycle_vie",
					"codePere": 2,
					"codeMetierRemplacement": null,
					"identifiantUniqueCodeService": "f7da5b20-b5f1-4f19-82be-8122b7bf9d76",
					"identifiantUniqueCodeMarche": "f7da5b20-b5f1-4f19-82be-8122b7bf9d76",
					"eligibleTicketResto": null,
					"niveau": 1,
					"libelleNiveau": "libelle_niveau",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"lNNomenclatureCodelecPropose": {
					"identifiantUniqueNomenclatureCodelec": "049ef788-f897-4351-ac6a-24482806edc9",
					"activite": 1,
					"groupe": null,
					"secteur": null,
					"sousSecteur": null,
					"codeMetier": 1,
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"cycleVie": "cycle_vie",
					"codePere": 2,
					"codeMetierRemplacement": null,
					"identifiantUniqueCodeService": "f7da5b20-b5f1-4f19-82be-8122b7bf9d76",
					"identifiantUniqueCodeMarche": "f7da5b20-b5f1-4f19-82be-8122b7bf9d76",
					"eligibleTicketResto": null,
					"niveau": 1,
					"libelleNiveau": "libelle_niveau",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"lNStatutValidationCodelec": {
					"identifiantUniqueStructureGenerique": "2644d59f-b8b4-44bc-a323-f9512740afb5",
					"idMetier": "ARS",
					"libelle": "Peso",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"lNStructureOrganisationnelle": {
					"identifiantUniqueStructureOrganisationnelle": "8e709608-71bc-460f-baff-3b20462c9fc6",
					"idMetier": "id_metier3",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"niveau": 2,
					"identifiantUniquePere": null
				},
				"lNNomenclatureDouaniereTaric": {
					"identifiantUniqueNomenclatureDouaniereTaric": "03359565-50f2-4215-a7b3-3f35d7049cc3",
					"idMetier": "id_metier",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"codeMetier": null,
					"identifiantUniqueLangue": "01584d67-007a-4665-8d1c-c89d16d1d85c",
					"niveau": 1,
					"codePere": "id_metier2"
				},
				"lNNomenclatureNgp": {
					"identifiantUniqueNomenclatureNgp": "c5a51f5a-730c-476b-b744-089d488dd27f",
					"codeNgp": 1,
					"libelle": "libelle",
					"dateCreation": "2017-08-04T22:00:00Z",
					"dateMaj": "2018-05-04T22:00:00Z"
				},
				"nomenclatureSca": "nomenclature_sca",
				"lNNomenclaturePkwiu": {
					"identifiantUniqueNomenclaturePkwiu": "de5e75fd-f1b1-4d35-936e-7f47d427e280",
					"identifiant": 3,
					"codeNomenclature": "code_nomenclature",
					"libelle": "libelle",
					"niveau": 2,
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"lNRubriqueComptabiliteMatiere": {
					"identifiantUniqueRubriqueComptabiliteMatiere": "3d30f25c-d44f-429a-b98e-6a201c1cfc58",
					"idMetier": "id_metier",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"niveau": 2,
					"identifiantUniquePere": null,
					"montant": 1234,
					"identifiantUniqueDevise": "048d60e7-026f-4ffb-b6b4-dba7b700b0bd",
					"typeCalcul": "type_calcul",
					"identifiantUniqueZoneGeographique": "af57f210-449c-49b6-9e21-05b71de6b987"
				},
				"lNNomenclatureIri": {
					"identifiantUniqueNomenclatureIri": "b0bc0a08-733d-49b7-8a6c-ee0ccfacea54",
					"id": 1,
					"codeMetier": "code_met",
					"libelle": "libelle",
					"niveau": 1,
					"idPere": null,
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"lNClassificationFedas": {
					"identifiantUniqueClassificationFedas": "42af0807-4faf-4351-b7ba-24f1a2ee8268",
					"codeTypeProduit": 1,
					"typeProduit": "type_produit",
					"codeDomaineActivite": 2,
					"domaineActivite": "domaine_activite",
					"codeGroupePrincipalMarchandise": 3,
					"groupePrincipalMarchandise": "groupe_principal_marchandise",
					"codeSousGroupeMarchandise": 4,
					"sousGroupeMarchandise": "sous_groupe_marchandise",
					"codeFedas": 5,
					"libelle": "libelle",
					"dateCreation": "2015-08-05T10:12:12Z",
					"dateMaj": "2015-08-05T10:12:12Z"
				},
				"lNNomenclatureGfk": {
					"identifiantUniqueNomenclatureGfk": "005755ab-e434-482f-8251-2f606646c579",
					"codeMetier": 1,
					"libelle": "libelle",
					"niveau": 2,
					"codePere": null,
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"lNEntite": {
					"identifiantUniqueStructureGenerique": "f3b507bb-3c49-45c4-bc09-3e26846027f0",
					"idMetier": "VAR",
					"libelle": "Variable",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2018-08-05T10:12:12Z",
				"dateMaj": "2019-08-10T10:12:12Z"
			},
			"infoVenteLibelle": {
				"identifiantUniqueInfoVenteLibelle": "54fbc2a0-2469-46ab-9e55-ffe3ab158fec",
				"libelleLong": "libelle long",
				"libelleInternet": "libelle internet",
				"libelleEtiquetteGondole": "etiquette gondole",
				"complementLibelleEtiquetteGondole": "complement",
				"libelleCaisse": "libelle caisse",
				"iVLTypeUniteDeMesureMarquageLineaire": {
					"identifiantUniqueStructureGenerique": "cee62d07-fc7f-4a58-bc4d-a319249a19d8",
					"idMetier": "PO",
					"libelle": "Portugais",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"valeurMarquageLineaire": 8.4,
				"iVLUniteDeMesureMarquageLineaire": {
					"identifiantUniqueStructureGenerique": "cee62d07-fc7f-4a58-bc4d-a319249a19d8",
					"idMetier": "PO",
					"libelle": "Portugais",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"compositionProduit": "composition produit",
				"texteMarketing": "texte du marketing",
				"instructionPreparation": "instructions preparation",
				"instructionConservation": "instruction de conservation",
				"noteNutrimark": 5,
				"modeEmploi": "mode d emploi",
				"contientTextileLavable": true,
				"venduAvecPile": false,
				"precautionEmploi": "precaution emploi",
				"iVLEntite": {
					"identifiantUniqueStructureGenerique": "cee62d07-fc7f-4a58-bc4d-a319249a19d8",
					"idMetier": "PO",
					"libelle": "Portugais",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2017-05-04T10:12:12Z",
				"dateMaj": "2017-05-04T10:12:12Z",
				"contenuNet": [{
					"identifiantUniqueContenuNet": "4a3d1a3e-c932-4761-9b46-27e6f04837d1",
					"contenuNetProduit": 1.5,
					"iVLUniteDeMesureContenuNet": {
						"identifiantUniqueStructureGenerique": "53807614-0fbb-4178-975a-59c477d9c21b",
						"idMetier": "MTL",
						"libelle": "Livre maltaise",
						"actif": false,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}],
				"consigneTri": [{
					"identifiantUniqueConsigneTri": "4a3d1a3e-c932-4761-9b46-27e6f04837d1",
					"consigneTri": "consignes de tri"
				}],
				"recompense": [{
					"identifiantUniqueRecompense": "e393da45-d888-4dd8-bcf2-44a570ad5db0",
					"iVLRecompenseProduit": null
				}],
				"regimeSpecifique": [{
					"identifiantUniqueRegimeSpecifique": "d8c7d246-b173-4f04-8b7d-b83192f1821d",
					"iVLRegime": null
				}],
				"infoVenteSpecificiteMarche": {
					"identifiantUniqueInfoVenteSpecificiteMarche": "d2e07fb9-1986-46e8-bfbb-fc43e3f474b9",
					"iVSMTypeDePresentation": {
						"identifiantUniqueStructureGenerique": "ee8796d0-fdd9-4b6d-af75-55274a72005a",
						"idMetier": "SOLIN",
						"libelle": "SOLINEST",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iVSMPaysAbattage": {
						"identifiantUniquePays": "3356e695-5ca7-4f78-abfa-bcd7705efe13",
						"libelle": "Antarctique (l')",
						"codeAlpha2": "AQ",
						"codeAlpha3": "ATA",
						"idMetier": 12,
						"actif": true,
						"dateDebutValidite": "2017-02-01T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2017-02-01T23:00:00Z",
						"dateMaj": "2017-02-01T23:00:00Z"
					},
					"iVSMPaysDecoupage": {
						"identifiantUniquePays": "3356e695-5ca7-4f78-abfa-bcd7705efe13",
						"libelle": "Antarctique (l')",
						"codeAlpha2": "AQ",
						"codeAlpha3": "ATA",
						"idMetier": 12,
						"actif": true,
						"dateDebutValidite": "2017-02-01T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2017-02-01T23:00:00Z",
						"dateMaj": "2017-02-01T23:00:00Z"
					},
					"espece": "espece",
					"nomScientifiqueEspece": "nom scientifique",
					"techniquePeche": "technique de peche",
					"isbn": "isbn",
					"auteur": "auteur",
					"compositeur": "compositeur",
					"titre": "titre",
					"collection": "collection",
					"tome": "tome",
					"dureeSupportMultimedia": 1,
					"iVSMSupportMultimedia": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"editeur": "editeur",
					"prixVenteConseille": 10,
					"sousTitre": "sous_titre",
					"nomSerie": "nom_serie",
					"iVSMLangueOrigine": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"nombrePage": 200,
					"iVSMFormatCd": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"nombreDisque": 15,
					"categorie": "categorie",
					"resume": "resume",
					"anneeSortieSalle": 2008,
					"zonageVideo": 45,
					"configurationRequise": "configuration_requise",
					"indicateurMultijoueur": true,
					"nombreUtilisateur": "nombre_utilisateur",
					"nombreLicence": 2,
					"dureeLicence": "duree_licence",
					"resolution": "resolution",
					"nombreJoueur": "nombre_joueur",
					"qualiteEnregistrement": "qualite_enregistrement",
					"controleCopie": false,
					"numeroDisque": 12,
					"numeroPiste": 5,
					"distributeur": "distributeur",
					"label": "label",
					"iVSMFonctionArtiste": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iVSMGenreDeMusique": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"numeroDansCollection": 5,
					"iVSMLangueUtilisee": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"couleurImage": "couleur_image",
					"iVSMFormatImage": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iVSMQualiteDeSon": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iVSMTypeDeBonus": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iVSMClassificationDesOeuvresCinematographiques": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iVSMClassificationPegi": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"jeuEnLigne": "jeu_en_ligne",
					"connexionInternet": "44daf3b2-7418-4ac6-acaf-7aa2f606f35f",
					"studioDeveloppement": "studio_developpement",
					"iVSMEntite": {
						"identifiantUniqueStructureGenerique": "72512618-50b6-4564-80c7-a875ebbbd95e",
						"idMetier": "HENKE",
						"libelle": "HENKEL",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2015-08-05T03:08:05Z",
					"dateMaj": "2015-08-05T03:08:05Z",
					"fruitLegume": [{
						"identifiantUniqueFruitLegume": "02c6e4d5-2f1f-4d41-afc4-aeb0c8a7418b",
						"iVSMPaysOrigine": {
							"identifiantUniquePays": "a2f2dad7-c5df-43ad-97ca-a7cf7bb8fbda",
							"libelle": "libelle",
							"codeAlpha2": "a",
							"codeAlpha3": "a",
							"idMetier": 145,
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2016-12-31T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"calibre": "calibre",
						"categorie": "categorie",
						"variete": "variete",
						"saisonnalite": "saison"
					}],
					"interprete": [{
						"identifiantUniqueInterprete": "e5461e7d-f76e-4790-8adf-be14a716f92d",
						"interprete": "interprete",
						"principal": true
					}],
					"prixFutur": [{
						"identifiantUniquePrixFutur": "0abbab34-217f-4e4c-be7c-f39186262604",
						"prixFutur": 1.35,
						"dateDebutPrixFutur": "2017-08-04T22:00:00Z",
						"dateFinPrixFutur": "2018-09-07T22:00:00Z"
					}]
				},
				"infoVenteInformationMagasin": {
					"identifiantUniqueInfoVenteInformationMagasin": "7a0da04b-ce35-4636-b461-64ef6f72bfaf",
					"dateSortieNationale": "2017-05-03T22:00:00Z",
					"indicateurCrochet": true,
					"flagProduitReferent": false,
					"flagMiseDispositionLibreService": true,
					"indicateurSystemeProtectionAntivol": false,
					"typeSystemeProtectionAntivol": "type syst antivol",
					"iVIMEntite": {
						"identifiantUniqueStructureGenerique": "f6bd2329-42b9-4758-9684-94dc9bf3566c",
						"idMetier": "NPR",
						"libelle": "Roupie Népalaise",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2017-05-06T04:06:05Z",
					"dateMaj": "2017-05-06T04:06:05Z",
					"varianteMarketing": [{
						"identifiantUniqueVarianteMarketing": "978a5de9-9e7c-44cd-8b1f-7f77824dffb4",
						"libelleVarianteMarketing": "variante_marketing",
						"identifiantUniqueFournisseur": "4e87c498-d8b5-4db8-bbb9-11a33afe81e0"
					}]
				}
			},
			"infoVenteDimension": {
				"identifiantUniqueInfoVenteDimension": "4e5e790a-41a5-4a32-995a-2ba4aa6acb59",
				"largeur": 4.5,
				"iVDUniteDeMesureLargeur": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"profondeur": 4.5,
				"iVDUniteDeMesureProfondeur": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"hauteur": 4.5,
				"iVDUniteDeMesureHauteur": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"poidsBrut": 4.5,
				"iVDUniteDeMesurePoidsBrut": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"poidsNet": 4.5,
				"iVDUniteDeMesurePoidsNet": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"poidsNetEgoutte": 4.5,
				"iVDUniteDeMesurePoidsNetEgoutte": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"descriptionLot": "description du lot",
				"nombreProduitsNonGratuitsDansLot": 1,
				"descriptionContenantPrincipal": "description contenant principal",
				"contenanceHorsGratuite": 2,
				"iVDUniteDeMesureContenanceHorsGratuite": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"iVDTypeGratuite": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"nombreProduitGratuitDansLot": 3,
				"descriptionContenantProduitGratuit": "description contenant produit",
				"contenanceGratuite": 5.3,
				"iVDUniteDeMesureContenanceGratuite": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"contenanceTotaleCalculee": 10.6,
				"iVDUniteDeMesureContenanceTotaleCalculee": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"iVDEntite": {
					"identifiantUniqueStructureGenerique": "9e3274d6-d1c7-4e45-b1b6-3ba706d36e49",
					"idMetier": "LVL",
					"libelle": "Lats letton",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2017-08-05T10:15:12Z",
				"dateMaj": "2017-08-05T10:15:12Z"
			},
			"infoVenteAsset": [{
				"identifiantUniqueInfoVenteAsset": "54474714-047d-46ab-9ae0-115f325ed4c5",
				"typeAsset": "type asset",
				"lienVersAsset": "lien vers asset",
				"dateDebutValidite": "2017-05-01T22:00:00Z",
				"dateFinValidite": "2017-08-04T22:00:00Z",
				"iVAEntite": {
					"identifiantUniqueStructureGenerique": "b450748c-7df4-45df-99db-9199c2bb69e4",
					"idMetier": "CENTR",
					"libelle": "CENTRE FRANCE",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2017-05-05T08:10:10Z",
				"dateMaj": "2017-05-05T08:10:10Z"
			}],
			"infoAchatGeneralite": {
				"identifiantUniqueInfoAchatGeneralite": "86f27bea-3007-4588-94e0-a8c50b6f625f",
				"iAGPaysConditionnement": {
					"identifiantUniquePays": "cba4dbfa-499a-4b92-99f0-3bd535690e36",
					"libelle": "Angola (l')",
					"codeAlpha2": "AO",
					"codeAlpha3": "AGO",
					"idMetier": 10,
					"actif": true,
					"dateDebutValidite": "2017-02-01T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2017-02-01T23:00:00Z",
					"dateMaj": "2017-02-01T23:00:00Z"
				},
				"flagArticlePenalisable": true,
				"dateDebutCommandePenalisable": "2017-05-02T22:00:00Z",
				"dateFinCommandePenalisable": "2019-05-01T22:00:00Z",
				"identifiantUniqueFabricant": "0f75051a-61a6-4972-95c9-7251c3c1592b",
				"exclusVenteExport": false,
				"informationQrCode": "qr code informations",
				"negoPrixSca": true,
				"iAGEntite": {
					"identifiantUniqueStructureGenerique": "93603f28-ba3b-4a58-9be9-8da8cda52e9e",
					"idMetier": "Group",
					"libelle": "Groupe Batteur",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2017-05-03T22:00:00Z",
				"dateMaj": "2019-05-21T22:00:00Z",
				"filiere": [{
					"identifiantUniqueFiliere": "ae28325c-3b6a-42e5-a8a7-9d0542cb6dc4"
				}],
				"infoAchatProvenance": [{
					"identifiantUniqueInfoAchatProvenance": "9d373361-0018-4011-876e-a3fac91515c3",
					"zoneGeographiqueProvenance": "zone geographique de provenance",
					"iAPEntite": {
						"identifiantUniqueStructureGenerique": "d5efee6b-35f4-4dee-9d68-d41775dae3cc",
						"idMetier": "KZT",
						"libelle": "Tenge",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2017-04-01T22:00:00Z",
					"dateMaj": "2017-05-01T22:00:00Z",
					"provenance": [{
						"identifiantUniqueProvenance": "3d236589-f34c-43cf-85c1-5f6b542fec31",
						"iAPTypeDeProvenance": {
							"identifiantUniqueStructureGenerique": "0f6aed18-92eb-426d-a3a8-3cb4dc1d3fee",
							"idMetier": "ETB",
							"libelle": "Birr éthiopien",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"informationProvenance": "information provenance",
						"libelleProvenance": "libelle provenance",
						"iAPPaysProvenance": {
							"identifiantUniquePays": "a2f2dad7-c5df-43ad-97ca-a7cf7bb8fbda",
							"libelle": "libelle",
							"codeAlpha2": "a",
							"codeAlpha3": "a",
							"idMetier": 145,
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2016-12-31T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"iAPRegionProvenance": {
							"identifiantUniqueStructureGenerique": "1ec9646e-b2bd-421c-8fbe-62684c45473b",
							"idMetier": "PKR",
							"libelle": "Roupie pakistanaise",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"iAPDepartementOrigine": {
							"identifiantUniqueStructureGenerique": "1ec9646e-b2bd-421c-8fbe-62684c45473b",
							"idMetier": "PKR",
							"libelle": "Roupie pakistanaise",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"iAPZoneFao": {
							"identifiantUniqueStructureGenerique": "1ec9646e-b2bd-421c-8fbe-62684c45473b",
							"idMetier": "PKR",
							"libelle": "Roupie pakistanaise",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"iAPZoneGeographiqueProvenance": {
							"identifiantUniqueZoneGeographique": "6624862d-04ae-435c-8d13-c4eda8ff8b6b",
							"libelle": "libelle",
							"idMetier": "c",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2016-12-31T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z",
							"niveau": 1,
							"identifiantUniquePere": "bf57f210-449c-49b6-9e21-05b71de6b985"
						}
					}],
					"marchePartage": [{
						"identifiantUniqueMarchePartage": "61d6d1a5-d398-4aeb-bbe4-523682ca3f15",
						"iAPTypeDeMarchePartage": {
							"identifiantUniqueStructureGenerique": "efec70df-a7f4-44bd-bc61-93de984c331f",
							"idMetier": "SCAS",
							"libelle": "Centrale spécialisée",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"iAPEntiteCentraleDestinataire": {
							"identifiantUniqueStructureGenerique": "efec70df-a7f4-44bd-bc61-93de984c331f",
							"idMetier": "SCAS",
							"libelle": "Centrale spécialisée",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"dateDebutValidite": "2017-05-19T22:00:00Z",
						"dateFinValidite": "2018-05-04T22:00:00Z"
					}]
				}],
				"infoAchatInformationCommande": {
					"identifiantUniqueInfoAchatInformationCommande": "75d3b5e7-3e5f-44e4-95d5-ae7d2961c77b",
					"indicateurMarquagePrixVente": true,
					"iAICUniteMesureFacturation": {
						"identifiantUniqueStructureGenerique": "4088a67c-b0f8-4279-9b1a-566329ffed2a",
						"idMetier": "BBD",
						"libelle": "Dollar de Barbade",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iAICUniteMesureCommande": {
						"identifiantUniqueStructureGenerique": "4088a67c-b0f8-4279-9b1a-566329ffed2a",
						"idMetier": "BBD",
						"libelle": "Dollar de Barbade",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"quantiteMinimumCommande": 1,
					"iAICEntite": {
						"identifiantUniqueStructureGenerique": "4088a67c-b0f8-4279-9b1a-566329ffed2a",
						"idMetier": "BBD",
						"libelle": "Dollar de Barbade",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2017-05-01T22:00:00Z",
					"dateMaj": "2018-05-01T22:00:00Z",
					"achatFournisseur": [{
						"identifiantUniqueAchatFournisseur": "613e7add-2282-4e36-9048-d86e5dc6d7c1",
						"identifiantUniqueFournisseur": "664d6a22-1081-4fb5-8373-9e5d4869a50c",
						"codeProduitFournisseur": "code prod four",
						"libelleProduitFournisseur": "libelle prod four",
						"datePremiereCommande": "2017-05-01T22:00:00Z",
						"dateDernierJourCommande": "2018-05-01T22:00:00Z",
						"multipleCommande": 1,
						"gtinCommande": true,
						"nombrePointIncitation": 5
					}],
					"dureeDeVie": [{
						"identifiantUniqueDureeVie": "ea2eabeb-099e-46e1-a3dc-d4f84ba622b5",
						"dureeVieDerogatoire": 2,
						"dateDebutDureeVieDerogatoire": "2017-08-01T22:00:00Z",
						"dateFinDureeVieDerogatoire": "2029-05-03T22:00:00Z"
					}],
					"coutTransport": [{
						"identifiantUniqueCoutTransport": "3525e3fd-485c-48b7-866c-4a7bb5197fe7",
						"coutTransport": 500.23,
						"quantiteCoutTransport": 1,
						"gtinCoutTransport": "gtin cout transport",
						"dateDebutValidite": "2017-05-02T22:00:00Z",
						"dateFinValidite": "2019-04-05T22:00:00Z"
					}],
					"contratDvrc": [{
						"identifiantUniqueContratDvrc": "6925a0af-a0df-4e72-9aba-38b8e418faa4",
						"identifiantUniqueContractContratDvrc": "7bae5575-4c2a-4720-b23f-f1e5c90824b1",
						"dateAffectationContratProduit": "2017-08-01T22:00:00Z",
						"iAICStatutDvrc": {
							"identifiantUniqueStructureGenerique": "936b7890-4917-4605-bcac-7266145d87af",
							"idMetier": "CGES",
							"libelle": "CGES",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"iAICDureeVieProduit": {
							"identifiantUniqueStructureGenerique": "936b7890-4917-4605-bcac-7266145d87af",
							"idMetier": "CGES",
							"libelle": "CGES",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						}
					}],
					"contratSelectionGamme": [{
						"identifiantUniqueContratSelectionGamme": "7cba0e5a-4f32-4928-9d56-e00a3dc35efc",
						"identifiantUniqueContractContratSelectionGamme": "4d9cb2da-eaf5-4e00-a4a6-17102b084c29",
						"dateDebutReferencement": "2017-05-01T22:00:00Z",
						"dateFinReferencement": "2018-05-01T22:00:00Z",
						"iAICStatutDeReferencement": {
							"identifiantUniqueStructureGenerique": "932eddaf-9f52-4752-8232-c0f1101ad553",
							"idMetier": "RIEGE",
							"libelle": "RIEGELEIN",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						}
					}]
				},
				"infoAchatSpecificiteMarche": {
					"identifiantUniqueInfoAchatSpecificiteMarche": "82489097-6ef5-4def-a8b4-032bb420d726",
					"iASMMouvementParkod": {
						"identifiantUniqueStructureGenerique": "2282d843-d5d7-4aff-85a5-d4db8d8c6d18",
						"idMetier": "CRI",
						"libelle": "Critique",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"saisonnalite": "saisonnalite",
					"indicateurCintre": true,
					"indicateurBoiteChaussureFournie": false,
					"iASMMatiereDessusChaussure": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMMatiereDicalisDoublureChaussure": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMMatiereDicalisPremiereChaussure": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMMatiereDicalisSemelleChaussure": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMMatiereDicalisPatinChaussure": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMDureeDeVieProduit": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMModeDeGestionTextile": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"grammage": 6.4,
					"iASMUniteMesureGrammage": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMTypeDeVetement": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMTechnologieContexture": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"iASMTypeDeComposition": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"pourcentage": 4.3,
					"matiere": "matière",
					"themeModele": "theme modele",
					"flagEmballageIndividuel": true,
					"iASMEntite": {
						"identifiantUniqueStructureGenerique": "b45e0dca-2f64-44fa-b893-b6fed09aff49",
						"idMetier": "SEGAF",
						"libelle": "SEGAFREDO ZANETTI",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2017-08-04T22:00:00Z",
					"dateMaj": "2018-04-04T22:00:00Z",
					"tailleColoris": [{
						"identifiantUniqueTailleColoris": "f0d2044d-940c-400b-aac2-05fb19894fa8",
						"gtinTco": "gtin tco",
						"iASMTypeDeTaille": {
							"identifiantUniqueStructureGenerique": "936b7890-4917-4605-bcac-7266145d87af",
							"idMetier": "CGES",
							"libelle": "CGES",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"iASMTaille": {
							"identifiantUniqueStructureGenerique": "936b7890-4917-4605-bcac-7266145d87af",
							"idMetier": "CGES",
							"libelle": "CGES",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						},
						"ordreTaille": 1,
						"coloris": "coloris",
						"ordreColoris": 2,
						"anneeTailleColoris": 2017,
						"iASMSaisonTextile": {
							"identifiantUniqueStructureGenerique": "cb5909d9-9e58-433d-ae1b-f7c9dcbd0e6b",
							"idMetier": "ZWL",
							"libelle": "Dollar du Zimbabwe",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						}
					}],
					"tailleColorisFournisseur": [{
						"identifiantUniqueTailleColorisFournisseur": "cd3fe909-0636-4937-bed4-7005b29c97a3",
						"identifiantUniqueFournisseur": "8e82fde7-a96f-4966-8bdb-c02226810c2f",
						"datePremiereCommandeTco": "2017-05-01T22:00:00Z",
						"dateDerniereCommandeTco": "2017-01-01T23:00:00Z"
					}],
					"livraisonTextile": [{
						"identifiantUniqueLivraisonTextile": "2a4be299-2913-4ba1-9fbc-2a9b556b3c86",
						"dateLivraison": "2017-04-01T22:00:00Z",
						"anneeLivraisonTextile": 2017,
						"iASMSaisonTextileLivraison": {
							"identifiantUniqueStructureGenerique": "a1205565-9e1f-4868-9745-51560d16e4ed",
							"idMetier": "NEUHA",
							"libelle": "NEUHAUSER",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						}
					}],
					"proprieteSuiteATraitementTextile": [{
						"identifiantUniqueProprieteSuiteATraitement": "735874e3-5dfc-4afb-9cf0-b34392ccd369",
						"proprieteSuiteATraitement": "propriete suite a traitement",
						"iASMTypeDeTraitement": {
							"identifiantUniqueStructureGenerique": "28c30950-bdb5-4ad7-97b9-7bfca2a7c9b7",
							"idMetier": "AOA",
							"libelle": "Kwanza",
							"actif": true,
							"dateDebutValidite": "2016-12-31T23:00:00Z",
							"dateFinValidite": "2017-03-01T23:00:00Z",
							"dateCreation": "2016-12-31T23:00:00Z",
							"dateMaj": "2016-12-31T23:00:00Z"
						}
					}]
				}
			},
			"logistiqueIdentification": [{
				"identifiantUniqueLogistiqueIdentification": "394e1ea7-bb53-4fd8-8cf7-6599dc1bf0eb",
				"gtin": "gtin",
				"codeSap": "code_sap",
				"libelleStandard": "libelle_standard",
				"lITypeUniteLogistique": {
					"identifiantUniqueStructureGenerique": "36586d4b-3de7-40c0-b65c-730436833371",
					"idMetier": "SODIA",
					"libelle": "SODIAAL",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"flagPresentoir": true,
				"identifiantUniqueFournisseur": "19ad0673-3e73-4d71-9d67-d19a19332e49",
				"indicateurQuantiteLimitee": true,
				"flagPassageEnCaisse": true,
				"datePremiereCommande": "2015-10-14T22:00:00Z",
				"lITypeDeSupport": {
					"identifiantUniqueStructureGenerique": "2b2328e3-5510-48be-9a5d-aa964a80c69e",
					"idMetier": "HEINE",
					"libelle": "HEINEKEN",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"lIEntite": {
					"identifiantUniqueStructureGenerique": "1739d11b-7f5c-4745-9a7d-cb2b2fda908d",
					"idMetier": "THB",
					"libelle": "Baht",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2012-05-15T10:12:12Z",
				"dateMaj": "2012-05-15T10:12:12Z",
				"hierarchieUl": [{
					"identifiantUniqueHierarchieUl": "6d4dae5b-baf3-44b8-9251-6584ffab6a75",
					"identifiantUniqueUlRangInferieur": "2be752f2-8dd0-4ae1-acaf-5e599123b540",
					"nombreUniteRangInferieurContenuDansUl": 10,
					"identifiantUniqueComposeUl": "394e1ea7-bb53-4fd8-8cf7-6599dc1bf0eb",
					"identifiantUniqueComposantUl": "394e1ea7-bb53-4fd8-8cf7-6599dc1bf0eb"
				}],
				"palettisation": [{
					"identifiantUniquePalettisation": "477417b0-281f-44ab-b374-9542fe4d0572",
					"nombreUcContenuDansUl": 2,
					"identifiantUniqueDonneeGeneraleIdentification": "477417b0-281f-44ab-b374-9542fe4d0571"
				}],
				"travailleAvec": [{
					"identifiantUniqueTravailleAvec": "477417b0-281f-44ab-b374-9542fe4d0571",
					"lIEntiteSelection": null,
					"flagTravailleAvec": false,
					"dateDebut": "2014-05-05T22:00:00Z",
					"dateFin": "2015-05-08T22:00:00Z"
				}],
				"logistiqueInformationCommande": {
					"identifiantUniqueLogistiqueInformationCommande": "2a13c3a4-e4a2-4717-a464-d789015a9b3d",
					"gtin": "gtin",
					"quantiteMiniCommande": 2,
					"quantiteUvcDansUl": 3,
					"indicateurCoucheUniforme": true,
					"nbCoucheParPalette": 5,
					"poidsMaxiGerbage": 45.5,
					"lICUniteMesurePoidsMaxiGerbage": {
						"identifiantUniqueStructureGenerique": "c153c5b3-a889-44ce-af61-b6919d7edc45",
						"idMetier": "CMD",
						"libelle": "Commande",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"gerbabiliteEntrepot": 10,
					"gerbabiliteTransport": 11,
					"presencePac": true,
					"lICEntite": {
						"identifiantUniqueStructureGenerique": "f7604ea7-6154-4979-ab29-fa436cadd24f",
						"idMetier": "FRUIT",
						"libelle": "FRUITE ENTREPRISE",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2015-12-12T11:12:12Z",
					"dateMaj": "2015-12-12T11:12:12Z",
					"commande": [{
						"identifiantUniqueCommande": "1d13dc45-7dbd-4834-89dc-39b1027a0db8",
						"datePremiereCommande": "2015-08-04T22:00:00Z",
						"dateDernierJourCommande": "2019-08-04T22:00:00Z",
						"multipleCommande": 2,
						"gtinCommande": true,
						"nbPointIncitation": 2,
						"identifiantUniqueFournisseur": "0447c545-f3e8-4db2-bedc-626889a3733d",
						"codeProduitFournisseur": "code_produit_fournisseur",
						"libelleProduitFournisseur": "libelle_produit_fournisseur"
					}]
				},
				"logistiqueSupportEmballage": [{
					"identifiantUniqueLogistiqueSupportEmballage": "e05de776-dc3e-47b9-a1b0-cda586dc8e66",
					"lETypeDeSupportEmballage": {
						"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
						"idMetier": "TRA",
						"libelle": "TRAITE",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"lSTypeDeSupport": {
						"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
						"idMetier": "TRA",
						"libelle": "TRAITE",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"lSTypeEchangeDeSupportEmballage": {
						"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
						"idMetier": "TRA",
						"libelle": "TRAITE",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"lSEntite": {
						"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
						"idMetier": "TRA",
						"libelle": "TRAITE",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2011-04-05T08:10:10Z",
					"dateMaj": "2013-04-06T10:12:12Z"
				}],
				"logistiqueVariante": [{
					"identifiantUniqueLogistiqueVariante": "1583b3c7-17df-497e-bc68-f7e8e543e143",
					"largeur": 12,
					"lVUniteMesureLargeur": {
						"identifiantUniqueStructureGenerique": "838e5bec-df9d-4c3c-b6f3-ca32b3784c4d",
						"idMetier": "YER",
						"libelle": "Riyal yéménite",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"profondeur": 12,
					"lVUniteMesureProfondeur": {
						"identifiantUniqueStructureGenerique": "838e5bec-df9d-4c3c-b6f3-ca32b3784c4d",
						"idMetier": "YER",
						"libelle": "Riyal yéménite",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"hauteur": 12,
					"lVUniteMesureHauteur": {
						"identifiantUniqueStructureGenerique": "838e5bec-df9d-4c3c-b6f3-ca32b3784c4d",
						"idMetier": "YER",
						"libelle": "Riyal yéménite",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"poidsBrut": 12,
					"lVUniteMesurePoidsBrut": {
						"identifiantUniqueStructureGenerique": "838e5bec-df9d-4c3c-b6f3-ca32b3784c4d",
						"idMetier": "YER",
						"libelle": "Riyal yéménite",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"volume": 12,
					"lVUniteMesureVolume": {
						"identifiantUniqueStructureGenerique": "838e5bec-df9d-4c3c-b6f3-ca32b3784c4d",
						"idMetier": "YER",
						"libelle": "Riyal yéménite",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"lVEntite": {
						"identifiantUniqueStructureGenerique": "838e5bec-df9d-4c3c-b6f3-ca32b3784c4d",
						"idMetier": "YER",
						"libelle": "Riyal yéménite",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateCreation": "2017-05-08T22:02:02Z",
					"dateMaj": "2017-05-08T22:02:02Z"
				}],
				"articleTypeBox": [{
					"identifiantUniqueArticleBox": "a10593d7-d507-4a06-afad-dccfcdf9e6c1",
					"identifiantUniqueFournisseurFiliere": "a10593d7-d507-4a06-afad-dccfcdf9e6c3",
					"identifiantUniqueProduitLogistiqueIdentificationUl1": "394e1ea7-bb53-4fd8-8cf7-6599dc1bf0eb",
					"identifiantUniqueProduitLogistiqueIdentificationUl2": "394e1ea7-bb53-4fd8-8cf7-6599dc1bf0eb",
					"identifiantUniqueProduitInfoAchatSpecificiteMarcheTailleCo": "82489097-6ef5-4def-a8b4-032bb420d726",
					"identifiantUniqueInfoAchatProvenance": "9d373361-0018-4011-876e-a3fac91515c3",
					"identifiantUniqueInfoVenteInformationMagasinVarianteMarketing": "978a5de9-9e7c-44cd-8b1f-7f77824dffb4",
					"identifiantUniqueInfoVenteSpecificiteMarcheFruitLegume": "02c6e4d5-2f1f-4d41-afc4-aeb0c8a7418b",
					"identifiantUniqueLogistiqueVariante": "1583b3c7-17df-497e-bc68-f7e8e543e143",
					"aRTTBEntite": null,
					"dateCreation": "2011-04-03T22:00:00Z",
					"dateMaj": "2011-04-03T22:00:00Z",
					"travailleAvec": [{
						"identifiantUniqueTravailleAvec": "0e31c359-86e4-4b83-81c4-9b2dca06958d",
						"aRTTBEntiteSelection": null,
						"flagTravailleAvec": false,
						"dateDebut": "2018-05-04T22:00:00Z",
						"dateFin": "2019-05-01T22:00:00Z"
					}]
				}]
			}],
			"logistiqueSpecificiteMarche": {
				"identifiantUniqueLogistiqueSpecificiteMarche": "567811c9-3a9b-4e8a-9882-3664077d935c",
				"lSMTypeDeColisage": {
					"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
					"idMetier": "TRA",
					"libelle": "TRAITE",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"indicateurQuantiteLimitee": true,
				"ordinalite": 4,
				"lSMEntite": {
					"identifiantUniqueStructureGenerique": "5ae94edc-552e-413a-a897-4b0d3870e49e",
					"idMetier": "TRA",
					"libelle": "TRAITE",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2014-05-05T08:10:10Z",
				"dateMaj": "0215-05-05T11:12:12Z",
				"compositionUlTextile": [{
					"identifiantUniqueCompositionUlTextile": "77c081c2-1d65-4954-b55b-e3af6d8d749a",
					"identifiantUniqueTailleColoris": "0085bc83-a2df-4431-8dd0-062a68e54e96",
					"identifiantUniqueLogistiqueIdentification": "567811c9-3a9b-4e8a-9882-3664077d935b",
					"compositionTailleCo": 2,
					"minimumCommandeTaille": 2,
					"multipleCommandeTaille": 3
				}]
			},
			"droitsEtTaxes": {
				"identifiantUniqueDroitEtTaxe": "aecfaf08-e864-4f2f-96a3-216dfef2fdc5",
				"dTDroitEtTaxe": {
					"identifiantUniqueDroitEtTaxe": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
					"libelle": "libelle",
					"idMetier": "id_metier",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"codeEan": "code_ean",
					"identifiantUniqueTypeValeur": "068d3230-d2d7-41fc-976e-6fa133064ddc",
					"soumisTva": false,
					"identifiantUniqueZoneGeographique": "bf57f210-449c-49b6-9e21-05b71de6b985"
				},
				"dTDroitAccise": {
					"identifiantUniqueDroitAccise": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
					"libelle": "libelle",
					"idMetier": "id_metier",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"modeCalcul": "mode_calcul",
					"natureDroit": "nature_droits",
					"articleCgi": "article_cgi"
				},
				"dTEntite": {
					"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
					"idMetier": "idmetest",
					"libelle": "structure generique test",
					"actif": true,
					"dateDebutValidite": "2016-12-31T22:00:00Z",
					"dateFinValidite": "2016-12-30T23:00:00Z",
					"dateCreation": "2016-12-31T22:00:00Z",
					"dateMaj": "2016-12-31T22:00:00Z"
				},
				"dateCreation": "2014-05-04T22:00:00Z",
				"dateMaj": "2052-05-05T10:12:12Z",
				"taxe": [{
					"identifiantUniqueTaxe": "d27c637a-0a52-4f22-9805-d8091305ca8c",
					"inclusDansPrix": true,
					"inclusDansCaRistournable": false,
					"valeurTaxeEnMontant": 12.12,
					"dTDeviseTaxe": {
						"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
						"idMetier": "idmetest",
						"libelle": "structure generique test",
						"actif": true,
						"dateDebutValidite": "2016-12-31T22:00:00Z",
						"dateFinValidite": "2016-12-30T23:00:00Z",
						"dateCreation": "2016-12-31T22:00:00Z",
						"dateMaj": "2016-12-31T22:00:00Z"
					},
					"valeurTaxeEnPourcentage": 12.13,
					"dTCodeTvaAchatFournisseur": {
						"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
						"idMetier": "idmetest",
						"libelle": "structure generique test",
						"actif": true,
						"dateDebutValidite": "2016-12-31T22:00:00Z",
						"dateFinValidite": "2016-12-30T23:00:00Z",
						"dateCreation": "2016-12-31T22:00:00Z",
						"dateMaj": "2016-12-31T22:00:00Z"
					},
					"dTTauxTvaAchatFournisseur": {
						"identifiantUniqueTauxTva": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
						"idMetier": "id_metier",
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2016-12-31T23:00:00Z",
						"taux": 44,
						"identifiantUniqueZoneGeographique": "bf57f210-449c-49b6-9e21-05b71de6b985",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"identifiantUniqueFournisseurTauxTvaAchatFournisseur": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
					"dateApplicationTvaFournisseur": "2015-12-14T23:00:00Z",
					"dTCodeTvaVenteMagasin": {
						"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
						"idMetier": "idmetest",
						"libelle": "structure generique test",
						"actif": true,
						"dateDebutValidite": "2016-12-31T22:00:00Z",
						"dateFinValidite": "2016-12-30T23:00:00Z",
						"dateCreation": "2016-12-31T22:00:00Z",
						"dateMaj": "2016-12-31T22:00:00Z"
					},
					"dTTauxTvaVenteMagasin": {
						"identifiantUniqueTauxTva": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
						"idMetier": "id_metier",
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2016-12-31T23:00:00Z",
						"taux": 44,
						"identifiantUniqueZoneGeographique": "bf57f210-449c-49b6-9e21-05b71de6b985",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateApplicationTvaVenteMagasin": "2015-12-14T23:00:00Z",
					"dTCodeTvaVenteConsommateur": {
						"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
						"idMetier": "idmetest",
						"libelle": "structure generique test",
						"actif": true,
						"dateDebutValidite": "2016-12-31T22:00:00Z",
						"dateFinValidite": "2016-12-30T23:00:00Z",
						"dateCreation": "2016-12-31T22:00:00Z",
						"dateMaj": "2016-12-31T22:00:00Z"
					},
					"dTTauxTvaVenteConsommateur": {
						"identifiantUniqueTauxTva": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
						"idMetier": "id_metier",
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2016-12-31T23:00:00Z",
						"taux": 44,
						"identifiantUniqueZoneGeographique": "bf57f210-449c-49b6-9e21-05b71de6b985",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"dateApplicationTvaVenteConsommateur": "2015-12-14T23:00:00Z"
				}]
			},
			"qualiteEtReglementation": {
				"identifiantUniqueQualiteReglementation": "f2ab9a5a-201b-452c-8644-78e5b0710e7a",
				"degreAlcool": 4.5,
				"dureeVieAReceptionProduit": 56,
				"indicateurAerosol": true,
				"pourcentageMatieresGrassesSurPoidsTotal": 35,
				"temperatureMinimumStockage": 0,
				"temperatureMaximumStockage": 9,
				"qRUniteMesureTemperatureStockage": {
					"identifiantUniqueStructureGenerique": "6655741d-e945-465f-9d98-23051a66eaed",
					"idMetier": "LEXMA",
					"libelle": "LEXMARK",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"contactAlimentaire": false,
				"dispositifMedical": true,
				"dureeDeVieTotaleDuProduit": 189,
				"indicateurProduitBio": true,
				"reglementationProduitBioValidee": true,
				"dateValidationGtQsCertification": "2017-06-03T22:00:00Z",
				"lienCertificat": "lien_certificat",
				"dateDebutCertificat": "2017-08-08T22:00:00Z",
				"dateFinCertificat": "2017-08-08T22:00:00Z",
				"produitBiocide": true,
				"biocideNumeroAmm": "biocide_numero_amm",
				"qRTypeDeProduitBiocide": {
					"identifiantUniqueStructureGenerique": "b776865e-d006-4153-8b0e-d4f9cb951a72",
					"idMetier": "SZL",
					"libelle": "Lilangeni",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"reglementationBiocideValidee": true,
				"dateValidationReglementationBiocide": "2017-05-07T22:00:00Z",
				"indicateurPresenceNomResponsable": false,
				"indicateurPresenceAdresseResponsable": false,
				"indicateurPresencePaysFabrication": false,
				"indicateurPresenceContenuNominal": false,
				"indicateurPresencePao": false,
				"indicateurPresenceDateLimiteUtilisation": false,
				"indicateurPresenceListeIngredients": false,
				"ingredient": "ingredient",
				"allergene": "allergene",
				"indicateurPresencePrecautionEmploi": false,
				"indicateurPresenceNumeroLot": false,
				"indicateurReglementationCosmetiqueValidee": false,
				"dateValidationReglementationCosmetique": "2018-05-08T22:00:00Z",
				"fonctionProduit": "fonction_produit",
				"indicateurSoumisReglementationCosmetique": false,
				"tauxSucreMinimum": "sucre",
				"tauxSucreMaximum": "sucrm",
				"aciditeMinimum": "acidite_minimum",
				"aciditeMaximum": "acidite_maximum",
				"colorationMinimum": "coloration_minimum",
				"colorationMaximum": "coloration_maximum",
				"fermeteMinimum": "fermete_minimum",
				"fermeteMaximum": "fermete_maximum",
				"matiereSecheMinimum": "matiere_seche_min",
				"matiereSecheMaximum": "matiere_seche_max",
				"jutositeMinimum": "jutosite_minimum",
				"jutositeMaximum": "jutosite_maximum",
				"indicateurJouet": false,
				"indicateurMarquageCe": false,
				"indicateurPhraseAvertissement": false,
				"indicateurPictoAvertissement": false,
				"indicateurReglementationJouetValidee": false,
				"dateDeValidationReglementationJouet": "2015-05-03T22:00:00Z",
				"indicateurPresenceAge": false,
				"autresLimites": "autres_limites",
				"phraseSurveillanceAdulte": "phrase_surveillance_adulte",
				"autreAvertissement": "autre_avertissement",
				"qREtatPreparation": {
					"identifiantUniqueStructureGenerique": "4aac9251-1676-438b-a6b6-d0f56a6c1386",
					"idMetier": "LOG",
					"libelle": "Logistique",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"tailleDeReference": 25.6,
				"qRUniteMesureTailleReference": {
					"identifiantUniqueStructureGenerique": "4aac9251-1676-438b-a6b6-d0f56a6c1386",
					"idMetier": "LOG",
					"libelle": "Logistique",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"produitPhytopharmaceutique": true,
				"reglementationPhytoValidee": true,
				"dateValidationRegPhyto": "2016-08-11T22:00:00Z",
				"lienVersDocumentsPhyto": "lien_vers_documents_phyto",
				"phytoNumeroAmm": "phyto_n",
				"indicateurProduitBois": true,
				"qRPaysUsineFabricationProduitFini": {
					"identifiantUniquePays": "9f7a381e-fc45-4efa-bfb5-b9655b50864c",
					"libelle": "Anguilla",
					"codeAlpha2": "AI",
					"codeAlpha3": "AIA",
					"idMetier": 11,
					"actif": true,
					"dateDebutValidite": "2017-02-01T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2017-02-01T23:00:00Z",
					"dateMaj": "2017-02-01T23:00:00Z"
				},
				"nomUsineFabricationProduitFini": "nom_usine_fabrication",
				"numeroCertificatCocFscUsineFabricationProduitFini": "numero_certificat",
				"natureBois": "0e880884-9c3d-4068-87ff-4e43e263375b",
				"presenceMatiereRecyclee": true,
				"qRPaysUsineFabricationComosantBaseDeriveBois": {
					"identifiantUniquePays": "9f7a381e-fc45-4efa-bfb5-b9655b50864c",
					"libelle": "Anguilla",
					"codeAlpha2": "AI",
					"codeAlpha3": "AIA",
					"idMetier": 11,
					"actif": true,
					"dateDebutValidite": "2017-02-01T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2017-02-01T23:00:00Z",
					"dateMaj": "2017-02-01T23:00:00Z"
				},
				"nomUsineFabricationComposantABaseDeriveBois": "fabrication_composant",
				"numeroCertificatCocFscUsineFabricationComposantABaseDeriveBois": "fabrication_composant",
				"qRPaysUsineEnsachage": {
					"identifiantUniquePays": "9f7a381e-fc45-4efa-bfb5-b9655b50864c",
					"libelle": "Anguilla",
					"codeAlpha2": "AI",
					"codeAlpha3": "AIA",
					"idMetier": 11,
					"actif": true,
					"dateDebutValidite": "2017-02-01T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2017-02-01T23:00:00Z",
					"dateMaj": "2017-02-01T23:00:00Z"
				},
				"nomUsineEnsachage": "nom_usine_ensachage",
				"numeroCertificatCocFscUsineEnsachage": "coc_fsc_usine_ensachage",
				"qRPaysUsineCarbonisation": {
					"identifiantUniquePays": "9f7a381e-fc45-4efa-bfb5-b9655b50864c",
					"libelle": "Anguilla",
					"codeAlpha2": "AI",
					"codeAlpha3": "AIA",
					"idMetier": 11,
					"actif": true,
					"dateDebutValidite": "2017-02-01T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2017-02-01T23:00:00Z",
					"dateMaj": "2017-02-01T23:00:00Z"
				},
				"nomUsineCarbonisation": "nom_usine_carbonisation",
				"numeroCertificatCocFscUsineCarbonisation": "coc_fsc_usine_carbonisation",
				"identifiantUniqueCertificatProduit": "e127e69e-8c63-4825-b055-e7c52fbb5afd",
				"numeroCertificatCocFscDuFournisseur": "coc_fsc_du_fournisseur",
				"essenceDeBois": "d69874b9-4de4-4882-b7d6-78bafbb02e5c",
				"qRPaysOrigineBois": {
					"identifiantUniquePays": "3356e695-5ca7-4f78-abfa-bcd7705efe13",
					"libelle": "Antarctique (l')",
					"codeAlpha2": "AQ",
					"codeAlpha3": "ATA",
					"idMetier": 12,
					"actif": true,
					"dateDebutValidite": "2017-02-01T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2017-02-01T23:00:00Z",
					"dateMaj": "2017-02-01T23:00:00Z"
				},
				"numeroCertificatFscDuBois": "num_certificat_fsc_du_bois",
				"qREntite": {
					"identifiantUniqueStructureGenerique": "aeea7fcd-5c14-451a-bd17-bbf01352ce6a",
					"idMetier": "FKP",
					"libelle": "Livre de Falkland",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2015-08-06T10:12:12Z",
				"dateMaj": "2015-08-06T10:12:12Z",
				"dureeVie": [{
					"identifiantUniqueDureeVie": "bc72b96c-e90e-4a26-98a3-413cba49ab70",
					"dureeVieAReceptionProduit": 12,
					"dureeDeVieTotaleDuProduit": 25,
					"identifiantUniqueFournisseur": "cedbe4e1-d94a-46a3-929a-4234ed05e5a9"
				}],
				"mentionLegaleVente": [{
					"identifiantUniqueMentionLegaleDeVente": "258e69dd-d1e9-47a4-ac70-b2861f51f990",
					"qRMentionLegale": {
						"identifiantUniqueStructureGenerique": "474fcf5b-36b9-44c7-913d-62cb38ae5027",
						"idMetier": "OMR",
						"libelle": "Rial Omani",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}],
				"label": [{
					"identifiantUniqueLabel": "bdb1073a-16f2-4cc9-8153-95e55a67c382",
					"qRFamilleDeLabel": {
						"identifiantUniqueStructureGenerique": "cec8d9c7-1d2a-455d-b359-2ffd4736c887",
						"idMetier": "KNAUF",
						"libelle": "KNAUF INDUSTRIE GESTION",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"qRTypeDeLabel": {
						"identifiantUniqueStructureGenerique": "cec8d9c7-1d2a-455d-b359-2ffd4736c887",
						"idMetier": "KNAUF",
						"libelle": "KNAUF INDUSTRIE GESTION",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}],
				"nutriment": [{
					"identifiantUniqueNutriment": "3c8fd872-c8e0-4f18-af26-54d63577f196",
					"qRTypeDeNutriment": {
						"identifiantUniqueStructureGenerique": "0ec388f4-77dd-4462-9050-cc55823e3ac8",
						"idMetier": "NAD",
						"libelle": "Dollar namibien",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					},
					"quantiteNutriment": 45,
					"qRUniteMesureQuantiteNutriment": {
						"identifiantUniqueStructureGenerique": "0ec388f4-77dd-4462-9050-cc55823e3ac8",
						"idMetier": "NAD",
						"libelle": "Dollar namibien",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}],
				"legislationPpe": [{
					"identifiantUniquePlante": "ce3a6c30-a12c-4247-8dec-eb777b90e03b",
					"nomScientifiquePlante": "nom scientifique plante",
					"numeroPpeFournisseur": "num ppe"
				}]
			},
			"securite": {
				"identifiantUniqueSecurite": "ecef9530-f017-4ad1-b062-ceeaf86f86fd",
				"produitDangereux": true,
				"valeurDuPointEclair": 15.2,
				"sECUniteMesurePointEclair": {
					"identifiantUniqueStructureGenerique": "1246cbf9-c252-4a7b-8b64-6b8890163052",
					"idMetier": "NGN",
					"libelle": "Naira",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"pointEclairEnDegreFahreinheit": 16,
				"sECPhaseProduit": {
					"identifiantUniqueStructureGenerique": "1246cbf9-c252-4a7b-8b64-6b8890163052",
					"idMetier": "NGN",
					"libelle": "Naira",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"sECDangerEmballage": {
					"identifiantUniqueStructureGenerique": "1246cbf9-c252-4a7b-8b64-6b8890163052",
					"idMetier": "NGN",
					"libelle": "Naira",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"numeroOnu": "onu",
				"libelleNumeroOnu": "libelle_numero_onu",
				"ph": "ph",
				"pointEbullition": 5,
				"ficheQfds": "fiche_qfds",
				"ficheFitpc": "fiche_fitpc",
				"flagDonneeSecuriteValidee": false,
				"dateValidationDonneeSecurite": "2018-08-04T22:00:00Z",
				"urlFicheDeSecurite": "url_fiche_de_securite",
				"sECNomenclatureIcpePrincipal": {
					"identifiantUniqueNomenclatureIcpe": "91256c84-509a-4a67-911b-3cd516a48b2d",
					"idMetier": "id_metierZ",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"niveau": 3,
					"codePere": null
				},
				"sECNomenclatureIcpeCumulA": {
					"identifiantUniqueNomenclatureIcpe": "91256c84-509a-4a67-911b-3cd516a48b2d",
					"idMetier": "id_metierZ",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"niveau": 3,
					"codePere": null
				},
				"sECNomenclatureIcpeCumulB": {
					"identifiantUniqueNomenclatureIcpe": "91256c84-509a-4a67-911b-3cd516a48b2d",
					"idMetier": "id_metierZ",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"niveau": 3,
					"codePere": null
				},
				"sECNomenclatureIcpeCumulC": {
					"identifiantUniqueNomenclatureIcpe": "91256c84-509a-4a67-911b-3cd516a48b2d",
					"idMetier": "id_metierZ",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"niveau": 3,
					"codePere": null
				},
				"sECMentionAvertissement": {
					"identifiantUniqueStructureGenerique": "be7fc5f4-490a-470a-880a-eead2c78681e",
					"idMetier": "ACER",
					"libelle": "ACER",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"libelleSubstanceNomTechnique": "libelle_substance_nom_technique",
				"indicateurQuantiteLimitee": true,
				"marinePolluant": true,
				"quantiteMatiereDangereuse": 5,
				"sECUniteMesureMatiereDangereuse": {
					"identifiantUniqueStructureGenerique": "be7fc5f4-490a-470a-880a-eead2c78681e",
					"idMetier": "ACER",
					"libelle": "ACER",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"emballageExterieur": "emballage_exterieur",
				"libelleEmballageExterieur": "libelle_emballage_exterieur",
				"typeInner": "type_inner",
				"libelleTypeInner": "libelle_type_inner",
				"urlMaquetteAPlat": "url_maquette_a_plat",
				"sECEntite": {
					"identifiantUniqueStructureGenerique": "be7fc5f4-490a-470a-880a-eead2c78681e",
					"idMetier": "ACER",
					"libelle": "ACER",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2018-05-02T10:15:48Z",
				"dateMaj": "2018-05-02T10:15:48Z",
				"transport": [{
					"identifiantUniqueTransport": "62d5284c-b159-47f9-8c02-a74b506bbed7",
					"sECTypeClasseDanger": {
						"identifiantUniqueStructureGenerique": "96b7a4b7-78bf-41a6-a85d-83e83329ea50",
						"idMetier": "8",
						"libelle": "Risque moyen à bon",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}],
				"mentionDanger": [{
					"identifiantUniqueMentionDanger": "e1eaa735-62bf-45b5-a88a-36f1e4e48a19",
					"sECMentionDanger": {
						"identifiantUniqueStructureGenerique": "585b9e5a-65bf-47f3-92fa-1ae0b3de3bd5",
						"idMetier": "H & C",
						"libelle": "H & CO",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}],
				"organismeReglementaire": [{
					"identifiantUniqueOrganismeReglementation": "7d10bc38-ff5a-45cc-98ae-cba88cef65b6",
					"sECOrganismeReglementaire": {
						"identifiantUniqueStructureGenerique": "389a55b3-26b0-4d1f-9691-d6bdc332adac",
						"idMetier": "KHR",
						"libelle": "Riel",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}],
				"danger": [{
					"identifiantUniqueDanger": "ea4c4e2f-e42b-4caa-9ee7-871eb62e4efb",
					"sECClasseDanger": {
						"identifiantUniqueStructureGenerique": "d00f64c3-b517-42f0-8c60-8f855bfef941",
						"idMetier": "CECAB",
						"libelle": "CECAB",
						"actif": true,
						"dateDebutValidite": "2016-12-31T23:00:00Z",
						"dateFinValidite": "2017-03-01T23:00:00Z",
						"dateCreation": "2016-12-31T23:00:00Z",
						"dateMaj": "2016-12-31T23:00:00Z"
					}
				}]
			},
			"chainage": [{
				"identifiantUniqueChainage": "cfe3a187-3990-4f95-b211-47a1ae624d5b",
				"cHAINETypeDeChainage": {
					"identifiantUniqueTypeDeChainage": "3b978847-6876-4a42-ba31-da3bc6cb8a0f",
					"idMetier": "id_metier",
					"libelle": "libelle",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2016-12-31T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z",
					"codeMetierLie": null
				},
				"cHAINEStatutDeValidationChainage": {
					"identifiantUniqueStructureGenerique": "9a12a10f-e379-414e-8b59-8f37fce31d17",
					"idMetier": "MMK",
					"libelle": "Kyat",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"identifiantUniqueUcSource": "26c5d3c3-3680-4133-9f82-683e3d619805",
				"identifiantUniqueUcCible": "26c5d3c3-3680-4133-9f82-683e3d619805",
				"cHAINEEntiteSourceSaisie": {
					"identifiantUniqueStructureGenerique": "84057cc6-8cb4-45c0-9826-b91dde958e81",
					"idMetier": "PASQU",
					"libelle": "PASQUIER",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateDebutValidite": "2017-08-04T22:00:00Z",
				"dateFinValidite": "2018-08-04T22:00:00Z",
				"priorite": 5,
				"coefficientRepartition": 1,
				"coefficientComparaison": 2,
				"cHAINEEntite": {
					"identifiantUniqueStructureGenerique": "84057cc6-8cb4-45c0-9826-b91dde958e81",
					"idMetier": "PASQU",
					"libelle": "PASQUIER",
					"actif": true,
					"dateDebutValidite": "2016-12-31T23:00:00Z",
					"dateFinValidite": "2017-03-01T23:00:00Z",
					"dateCreation": "2016-12-31T23:00:00Z",
					"dateMaj": "2016-12-31T23:00:00Z"
				},
				"dateCreation": "2014-08-05T10:21:12Z",
				"dateMaj": "2014-08-05T10:21:12Z"
			}],
			"article": [{
				"identifiantUniqueArticle": "c82287e6-463e-454b-9bc5-c8cb6a0cee0b",
				"identifiantUniqueFournisseurFiliere": "c82287e6-463e-454b-9bc5-c8cb6a0cee0c",
				"identifiantUniqueProduitLogistiqueIdentification": "394e1ea7-bb53-4fd8-8cf7-6599dc1bf0eb",
				"identifiantUniqueProduitInfoAchatSpecificiteMarcheTailleCo": "82489097-6ef5-4def-a8b4-032bb420d726",
				"identifiantUniqueInfoAchatProvenance": "9d373361-0018-4011-876e-a3fac91515c3",
				"identifiantUniqueInfoVenteInformationMagasinVarianteMarketing": "978a5de9-9e7c-44cd-8b1f-7f77824dffb4",
				"identifiantUniqueInfoVenteSpecificiteMarcheFruitLegume": "02c6e4d5-2f1f-4d41-afc4-aeb0c8a7418b",
				"identifiantUniqueLogistiqueVariante": null,
				"aRTEntite": null,
				"dateCreation": "2015-05-04T22:00:00Z",
				"dateMaj": "2015-05-04T22:00:00Z",
				"travailleAvec": [{
					"identifiantUniqueTravailleAvec": "c82287e6-463e-454b-9bc5-c8cb6a0cee0c",
					"aRTEntiteSelection": null,
					"flagTravailleAvec": false,
					"dateDebut": "2012-05-04T22:00:00Z",
					"dateFin": "2015-05-04T22:00:00Z"
				}]
			}]
		},
		{
			"identifiantUniqueDonneeGeneraleIdentification": "993b787f-ad09-4b22-89c4-41f3877a3f23",
			"indicateurGtinGenere": null,
			"champAddOn": null,
			"motifAddOn": null,
			"dateCreationAddOn": null,
			"gtin": null,
			"codeSap": null,
			"identifiantUniqueFournisseurInformation": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
			"dGITypologieProduitUc": {
				"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
				"idMetier": "idmetest",
				"libelle": "structure generique test",
				"actif": true,
				"dateDebutValidite": "2016-12-31T22:00:00Z",
				"dateFinValidite": "2016-12-30T23:00:00Z",
				"dateCreation": "2016-12-31T22:00:00Z",
				"dateMaj": "2016-12-31T22:00:00Z"
			},
			"libelleStandard": null,
			"indicateurProduitMesureVariable": null,
			"codePoidsVariable": null,
			"observation": null,
			"observationInterneSca": null,
			"produitADecouper": null,
			"produitDematerialise": null,
			"indicateurConsigne": null,
			"flagProduitAvecGratuite": null,
			"nombreProduitDifferentDansLot": null,
			"dGIEntite": {
				"identifiantUniqueStructureGenerique": "2945c07c-ba8a-400f-a2ea-ad5ded5534d0",
				"idMetier": "idmetest",
				"libelle": "structure generique test",
				"actif": true,
				"dateDebutValidite": "2016-12-31T22:00:00Z",
				"dateFinValidite": "2016-12-30T23:00:00Z",
				"dateCreation": "2016-12-31T22:00:00Z",
				"dateMaj": "2016-12-31T22:00:00Z"
			},
			"dateCreation": "2017-05-08T22:02:02Z",
			"dateMaj": "2017-05-08T22:02:02Z",
			"validiteProduit": [],
			"travailleAvec": [],
			"donneesGeneralesLot": [{
				"identifiantUniqueDonneeGeneraleLot": "90b97e4a-e193-493d-9eff-37e3bf66121a",
				"quantiteComposantLot": 4,
				"dGLUniteDeMesure": null,
				"identifiantUniqueComposeUc": "993b787f-ad09-4b22-89c4-41f3877a3f23",
				"identifiantUniqueComposantUc": "26c5d3c3-3680-4133-9f82-683e3d619805",
				"dGLEntite": null,
				"dateCreation": "2017-05-05T10:20:20Z",
				"dateMaj": "2017-05-05T10:20:20Z"
			}],
			"donneeGeneraleMarqueFournisseur": null,
			"nomenclature": null,
			"infoVenteLibelle": null,
			"infoVenteDimension": null,
			"infoVenteAsset": [],
			"infoAchatGeneralite": null,
			"logistiqueIdentification": [],
			"logistiqueSpecificiteMarche": null,
			"droitsEtTaxes": null,
			"qualiteEtReglementation": null,
			"securite": null,
			"chainage": [],
			"article": []
		}
	]
};
// if (json.data) json = json.data;
var treeNode;

// function getAttributesCsv2(pCsv) {
// 	return pCsv
// 	.map(function(row) {
// 		return row[2]; // get 3 column
// 	})
// 	.filter(function(wrd) {
// 		return wrd;
// 	})
// 	.slice(1); // remove header
// }
//
// function getCollectionsCsv2(pCsv) {
// 	return pCsv
// 	.map(function(row) {
// 		return row[1]; // get 2 column
// 	})
// 	.filter(function(wrd) {
// 		return wrd;
// 	})
// 	.slice(1); // remove header
// }

function goFilter() {
	console.time("go");
  // var jsonClone = JSON.parse(JSON.stringify(json));
  // var jsonClone =  _.cloneDeep(json);
  $("#wrapper").empty();

  // var filterObj = jsonClone;
  // if (filters.length !== 0) filterObj = exploreJsonNode(jsonClone, jsonClone, filters, []);

  var tree = jsonTree.create(json, wrapper);
  tree.expand(function(node) {
  	// console.log(node);
		// treeNode = node;
		node.expand(true);

		exploreTreeNode(node, []);
		console.timeEnd("go");


  });

	function exploreTreeNode(treeNode, path) {
		for (var i = 0; i < treeNode.childNodes.length; i++) {
			path = path.concat(treeNode.childNodes[i].label);
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
						$(treeNode.childNodes[i].el.firstElementChild).find('.jsontree_label').first().addClass(classes[level]);
						break;
					}
				}
			}

			if (treeNode.childNodes[i].isComplex) exploreTreeNode(treeNode.childNodes[i], path);
			path.splice(-1);
		}
	}


	// styleJsonType1(macroFiltersWords);
	// styleJsonType2(collectionsCsv2);
	// styleJsonType2(attributesCsv2);
}

// function styleJsonType1(words) {
// 	if (words) {
// 		$('.jsontree_label').each(function(i, item) {
// 			var label = $(item).text().replace(/\"/g, "");
// 			words.forEach(function(wrd) {
// 				if (wrd === label) $(item).css({
// 					'padding': '8px',
// 					'background': 'rgba(15, 131, 232, 0.5)'
// 				});
// 			});
// 		})
// 	}
// }
//
// function styleJsonType2(words) {
// 	if (words) {
// 		// $('#wrapper').find('.jsontree_value_array').parent().siblings('.jsontree_label-wrapper').find('.jsontree_label').css({
// 		// 	'padding': '8px',
// 		// 	'background': 'orange'
// 		// });
//
// 		$('.jsontree_label').each(function(i, item) {
// 			var label = $(item).text().replace(/\"/g, "");
// 			words.forEach(function(wrd) {
// 				if (wrd === label) $(item).css({
// 					'padding': '8px',
// 					'background': 'orange'
// 				});
// 			});
// 		})
// 	}
// }
