//Yliluokka Henkilo, alustajassa parametrit etunimi, sukunimi, kutsumanimi ja syntymavuosi.
class luokkaHenkilo {
  constructor(enimi, snimi, knimi, svuosi) {
    this.etunimi = enimi;
    this.sukunimi = snimi;
    this.kutsumanimi = knimi;
    this.syntymavuosi = svuosi;
  }
}

module.exports = luokkaHenkilo;
