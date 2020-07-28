const fs = require('fs');

// fs.writeFileSync('note.txt', 'This file created by node js.');
fs.appendFileSync('note.txt', ' Now this file is updated.');