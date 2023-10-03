const luokkaHenkilo = require("./luokkaHenkilo");
//Luokka Urheilija, joka on luokan Henkilo aliluokka ja perii taman ominaisuudet. Urheilija -luokalla on myös
//omat parametrit, kuva, omapaino, laji ja saavutukset.
class luokkaUrheilija extends luokkaHenkilo {
  constructor(enimi, snimi, knimi, svuosi, kuva, omapaino, laji, saavutukset) {
    super(enimi, snimi, knimi, svuosi);
    this.kuva = kuva;
    this.paino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  //Getterit ja setterit Urheilijaluokalle merkityksellisiin attribuutteihin.
  get Kuva() {
    return this.kuva;
  }

  set Kuva(x) {
    this.kuva = x;
  }
  get Paino() {
    return this.paino;
  }

  set Paino(x) {
    this.paino = x;
  }
  get Laji() {
    return this.laji;
  }

  set Laji(x) {
    this.laji = x;
  }
  get Saavutukset() {
    return this.saavutukset;
  }

  set Saavutukset(x) {
    this.saavutukset = x;
  }
}

module.exports = luokkaUrheilija;
