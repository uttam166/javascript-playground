const notes = require('./note.js');
const yargs = require('yargs');


// console.log(process.argv);

yargs.version('1.1.1');

//add a note
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
});

// remove a note
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
});

//list a note
yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler(){
        notes.listNotes();
    }
});

// read a note 
yargs.command({
    command: 'read',
    describe: 'read a new note',
    builder: {
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();


/**
 * run add command => node app.js add --title="Note title" --body="note body";
 * run remove command => node app.js remove --title="Note title";
 * run list command => node app.js list;
 * run read command => node app.js read --title="Note title";
 * 
 * run debugger => node inspect app.js add --title="debugging" --body="let's debug"
 */