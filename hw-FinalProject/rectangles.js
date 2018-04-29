/*jshint esversion: 6 */

// create rectangle class

class Rectangle {
    constructor (r_tempX, r_tempY, r_tempW, r_tempH, r_tempColor) {
        this.rx = r_tempX;
        this.ry = r_tempY;
        this.rw = r_tempW;
        this.rh = r_tempH;
        this.r_color = r_tempColor;
    }

    show() {
      fill(this.r_color);
      rect(this.rx, this.ry, this.rw, this.rh);
    }
}
