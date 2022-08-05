const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// const command = process.argv[2]

//Setting yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Adding a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demaandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "Listing a note",
  handler() {
    notes.listNotes();
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: {
      describe: "Note title",
      demaandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// if(command === 'add') {
//     console.log('adding note!!')
// }
// else if(command === 'remove') {
//     console.log('Removing note!!')
// }
