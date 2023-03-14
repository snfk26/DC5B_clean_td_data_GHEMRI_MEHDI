const fs =  require('fs');
const csvParser = require('csv-parser');

fs.createReadStream('test.csv')
.pipe(csvParser())
.on('data',(data)=> {
    for (i = 0;i < 20;i++) {
    console.log(data);
    } 
})
.on('end', () => {
    console.log('fichier parcouru');
}); 

