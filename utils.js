const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const getJSON = require('get-json')

const formatRecords = (contact, records, unsubs) => {
  const email = contact.email;
  const firstName = contact.firstName;
  const lastName = contact.lastName;

  return records.push({ email, firstName, lastName })
}

// process csv files
const processCSV = (pathToImport, list, pathToExport) => {

  const records = []

  // initialize csv export data
  const csvWriter = createCsvWriter({
    path: `${pathToExport}`,
    header: [
      { id: 'email', title: 'EMAIL' },
      { id: 'firstName', title: 'FIRST_NAME' },
      { id: 'lastName', title: 'LAST_NAME' },
    ]
  });

  fs.createReadStream(pathToImport)
    .pipe(csv())
    .on('data', (row) => {
      formatRecords(row, records);

      // records.push(`${row.email}`)
    })
    // .on('end', () => {
    //   console.log(arr)
    // })
    .on('end', () => {
      console.log(records)
      fs.writeFile(pathToExport, JSON.stringify(records), null, () => {
        console.log('The CSV file was written successfully')
      });

      // write to the export file
      // csvWriter
      //   .writeRecords(records)
      //   .then(() => console.log('The CSV file was written successfully'));
    });
}

// generate filtered contact list
const generateFilteredList = (subsFile, unsubsFile, activesFile) => {
  const subs = JSON.parse(fs.readFileSync(subsFile, 'utf8'));
  const unsubs = JSON.parse(fs.readFileSync(unsubsFile, 'utf8'));

  // console.log(subs)
  // console.log(unsubs)

  // JSON.parse(subsFile)
  // const unsubs = JSON.parse(unsubsFile)
  // const subs = JSON.parse(subsFile)

  const results = subs.filter(
    ({ email: id1 }) => !unsubs.some(({ email: id2 }) => id2 === id1)
  );

  // console.log(`subs: ${JSON.stringify(subs)}`)
  // console.log(`unsubs: ${JSON.stringify(unsubs)}`)
  // console.log(`results: ${JSON.stringify(results)}`)
  // actives.push(results)
  // console.log(actives)
  console.log(results)
}

const genFilt =


  module.exports = { processCSV, generateFilteredList }