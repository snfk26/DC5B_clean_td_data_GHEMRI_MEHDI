const fs =  require('fs');
const csvParser = require('csv-parser');

fs.createReadStream('donnees.csv')
.pipe(csvParser())
.on('data',(data)=> {
    i = 0;
    if (i < 20) {
    console.log(data);
    } 
})
.on('end', () => {
    console.log('fichier parcouru');
}); 

