class Segmento {

  constructor(p1,p2) {
    this.p1 = p1;
    this.p2 = p2;
    this.m = 0;
    this.n = 0;
  }

  setP1(p) {
    this.p1 = p;
  }

  setP2(p) {
    this.p2 = p;
  }

  getP1() {
    return this.p1;
  }

  getP2() {
    return this.p2;
  }

  setM(mR) {
    this.m = mR;
  }

  setN(nR) {
    this.n = nR;
  }

  getM() {
    return this.m;
  }

  getN() {
    return this.n;
  }

  ecuacionDeLaRecta() {
    // y = mx + n //
    var mResuelta = (p2.getY() - p1.getY()) / (p2.getX() - p1.getX());
    this.setM(mResuelta);
    var nResuelta = p2.getY() - (this.getM() * p2.getX());
    this.setN(nResuelta);

  }

   showEcuacion() {
    return ("y = " + this.getM() + "x + " + this.getN());
  }

   contenidoEnLaRecta(p) {
    // y = mx + n //

    var yR = p.getY();
    var parteDerecha = (this.getM() * p.getX()) + this.getN();

    if (yR == parteDerecha) {
      return(true);
    } else {
      return(false);
    }

  }
}
