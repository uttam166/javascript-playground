const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
    return 'your notes....';
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("new notes added."));    
    }else{
        console.log(chalk.red.inverse("Title alrady exits."));
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed.'));

        saveNotes(notesToKeep);
    } else{
        console.log(chalk.red.inverse('note not exits.'));
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch(err){
        return [];
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNotes : removeNotes,
}