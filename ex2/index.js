const fs =  require('fs');

 Data = [
{ id: 1, nom: 'Billy', puissance : 25, autonomie: '5 heures', energie: 100 },
{ id: 2, nom: 'Gardena', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 3, nom: 'Einhel', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 4, nom: 'Bosch', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 5, nom: 'Sterwins', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 6, nom: 'Makita', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 7, nom: 'Ryobi', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 8, nom: 'Greenworks', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 9, nom: 'Mtd', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 10, nom: 'Fuxtec', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 11, nom: 'Thakita', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 12, nom: 'Alpinn', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 13, nom: 'Fiskars', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 14, nom: "BlackDecker", puissance : 25, autonomie : "5 heures", energie : 100 },
{ id: 15, nom: 'Bender', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 16, nom: 'Robotnow', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 17, nom: 'Hecht', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 18, nom: 'Worx', puissance : 25, autonomie : '5 heures', energie : 100 },
{ id: 19, nom: 'Wurst', puissance : 25, autonomie : '5 heures', energie : 100 }
];


writeStream = fs.createWriteStream('C:/Users/Mehdi/Desktop/DC5B_clean_td_data_GHEMRI_MEHDI/ex2/donnees2.csv');
writeStream.write('id,nom,puissance,autonomie,energie\n');

Data.forEach((Data) => {
 writeStream.write(`${Data.id},${Data.nom},${Data.puissance},${Data.autonomie},${Data.energie}\n`);
});

writeStream.end();



