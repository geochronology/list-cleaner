const { convertCSVToArray } = require('convert-csv-to-array');
const converter = require('convert-csv-to-array');
const { processCSV, generateFilteredList } = require('./utils')

// specify subs and unsubs CSV files
const SUB_IMPORT_FILE = './data/list1-sample-subs.csv'
const UNSUB_IMPORT_FILE = './data/list2-sample-unsubs.csv'
const SUB_EXPORT_FILE = './data/sub-export.json'
const UNSUB_EXPORT_FILE = './data/unsub-export.json'
const ACTIVES_FILE = './data/actives.csv'


// initialize arrays
const totalSubs = []
const unsubs = []
const activeSubs = [];

// parse and process csv files
// processCSV(SUB_IMPORT_FILE, totalSubs, SUB_EXPORT_FILE)
// processCSV(UNSUB_IMPORT_FILE, unsubs, UNSUB_EXPORT_FILE)


// convert completed


generateFilteredList(SUB_EXPORT_FILE, UNSUB_EXPORT_FILE, ACTIVES_FILE)
// generateFilteredList(arr1, arr2, arr3)
// console.log(arr3)

// doTheThing()
// convert the CSVs into object arrays
// create a filtered contact list

// console.log(activeSubs)

