const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const formatRecords = (contact, records) => {
  const email = contact.email;
  const firstName = contact.firstName;
  const lastName = contact.lastName;

  return records.push({ email, firstName, lastName })
}

// process csv files
const processCSV = (pathToImport, pathToExport) => {

  const records = []

  fs.createReadStream(pathToImport)
    .pipe(csv())
    .on('data', (row) => {
      formatRecords(row, records);
    })
    .on('end', () => {
      fs.writeFile(pathToExport, JSON.stringify(records), null, () => {
        console.log('The CSV file was written successfully')
      });
    });
}

// generate filtered contact list
const generateFilteredList = (subsFile, unsubsFile, filteredResultsFile) => {
  const subs = JSON.parse(fs.readFileSync(subsFile, 'utf8'));
  const unsubs = JSON.parse(fs.readFileSync(unsubsFile, 'utf8'));

  // filter the results based on whether the email shows up in the unsubscribe list
  const results = subs.filter(
    ({ email: id1 }) => !unsubs.some(({ email: id2 }) => id2 === id1)
  );

  // initialize csv export data
  const csvWriter = createCsvWriter({
    path: `${filteredResultsFile}`,
    header: [
      { id: 'email', title: 'email' },
      { id: 'firstName', title: 'firstName' },
      { id: 'lastName', title: 'lastName' },
    ]
  });

  // export the filtered results in CSV format
  fs.createReadStream(filteredResultsFile)
    .pipe(csv())
    .on('data', (row) => {
      formatRecords(row, results);
    })
    .on('end', () => {
      // write to the export file
      csvWriter
        .writeRecords(results)
        .then(() => console.log('The CSV file was written successfully'));
    })
}

module.exports = { processCSV, generateFilteredList }