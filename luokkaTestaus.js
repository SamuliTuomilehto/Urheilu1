const luokkaUrheilija = require("./Teht_urheilu1/luokkaUrheilija");
const luokkaHenkilo = require("./Teht_urheilu1/luokkaHenkilo");
//Paaohjelma jossa testataan olioiden luomista Urheilija-luokasta.
const hlo = new luokkaUrheilija(
  "Minna",
  "Kauppi",
  "Minna",
  1982,
  "https://fi.wikipedia.org/wiki/Minna_Kauppi#/media/Tiedosto:World_Orienteering_Championships_2010_-_sprint_06.jpg",
  60,
  "Suunnistus",
  "9x MM-kulta"
);
const hlo2 = new luokkaUrheilija(
  "Iivo",
  "Niskanen",
  "Iivo",
  1992,
  "https://fi.wikipedia.org/wiki/Iivo_Niskanen#/media/Tiedosto:20190227_FIS_NWSC_Seefeld_Medal_Ceremony_850_5369_Iivo_Niskanen.jpg",
  80,
  "Maastohiihtäjä",
  "3x olympiavoittaja"
);
//Set metodin testaaminen
hlo2.Paino = 85;
//Tulostetaan luodut oliot hlo ja hlo2
console.log(hlo);
console.log(hlo2);
//Get metodin testaaminen
console.log("Minnan paino on:", hlo.Paino, "Iivon paino on:", hlo2.Paino);
