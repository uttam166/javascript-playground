const getNotes = require('./note.js');
const yargs = require('yargs');
const { argv } = require('yargs');

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
    handler: function(argv){
        console.log('Title '+ argv.title);
        console.log('Body '+ argv.body);
    }
});

// remove a note
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: function(){
        console.log('removeing a new note.')
    }
});

//list a note
yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler: function(){
        console.log('listing a new note.')
    }
});

// read a note 
yargs.command({
    command: 'read',
    describe: 'read a new note',
    handler: function(){
        console.log('reading a new note.')
    }
});

yargs.parse();
// console.log(yargs.argv);