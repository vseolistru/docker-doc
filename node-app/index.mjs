import fs from 'fs';

fs.appendFile('my-file.txt', 'File has been created', (err) =>{
    if(err) throw err;
    console.log('File saved successfully');
})

setTimeout(() =>{console.log('process is endind ');}, 70000)