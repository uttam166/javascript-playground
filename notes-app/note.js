const fs = require('fs');

const getNotes = function(){
    return 'your notes....';
}

const addNote = function(title, body){
    const notes = loadNotes()
    // console.log(notes);
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    // console.log(duplicateNotes.length);

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("new notes added.");    
    }else{
        console.log("Title alrady exits.");
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){
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
    addNote : addNote   
}