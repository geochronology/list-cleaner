const { processCSV, generateFilteredList } = require('./utils')

// LIST CLEANER v0.1
// Currently this cleaner works as a two-step process:
// 1. Convert CSVs to JSON (comment out generateFilteredList)
// 2. Filter JSON and export to CSV (comment out processCSV)

// specify subs and unsubs CSV files
const SUB_IMPORT_FILE = './data/list1-sample-subs.csv'
const UNSUB_IMPORT_FILE = './data/list2-sample-unsubs.csv'
const SUB_EXPORT_FILE = './data/sub-export.json'
const UNSUB_EXPORT_FILE = './data/unsub-export.json'
const ACTIVES_FILE = './data/active-subscribers.csv'


// *** UNCOMMENT TO USE***
// parse and process csv files
// processCSV(SUB_IMPORT_FILE, SUB_EXPORT_FILE)
// processCSV(UNSUB_IMPORT_FILE, UNSUB_EXPORT_FILE)


// *** UNCOMMENT TO USE***
// filter and export results
generateFilteredList(SUB_EXPORT_FILE, UNSUB_EXPORT_FILE, ACTIVES_FILE)
