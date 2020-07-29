const getNotes = require('./note.js');

const command = process.argv[2]

if(command === 'add'){
    console.log('addning notes.')
}else if(command === 'remove'){
    console.log('removing a note.')
}
