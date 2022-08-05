const { default: chalk } = require("chalk");
const fs = require("fs");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.bgGreen("Note saved successfully!!"));
  } else {
    console.log(chalk.bgRed("Title already taken!"));
  }

  saveNotes(notes);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.bgGreen("Note Removed!!"));
  } else {
    console.log(chalk.bgRed("No Note Found!!"));
  }
};

const listNotes = () => {
  console.log(chalk.underline.bgBlue("Your files"));
  loadNotes().forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const isFound = notes.find((note) => note.title === title);

  if (isFound) {
    console.log(chalk.bgBlue("Title:" + isFound.title));
    console.log("Body:" + isFound.body);
  } else {
    console.log(chalk.bgRed("Title note found"));
  }
};

module.exports = {
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNote: readNote,
};
