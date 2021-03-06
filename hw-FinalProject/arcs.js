/*jshint esversion: 6 */

//create arc class

class Arc {
    constructor (a_tempX1, a_tempY1, a_tempX2, a_tempY2, a_tempX3, a_tempY3, a_tempX4, a_tempY4,
        a_tempX5, a_tempY5, a_tempX6, a_tempY6, a_tempX7, a_tempY7, a_tempColor) {
        this.x1 = a_tempX1;
        this.y1 = a_tempY1;
        this.x2 = a_tempX2;
        this.y2 = a_tempY2;
        this.x3 = a_tempX3;
        this.y3 = a_tempY3;
        this.x4 = a_tempX4;
        this.y4 = a_tempY4;
        this.x5 = a_tempX5;
        this.y5 = a_tempY5;
        this.x6 = a_tempX6;
        this.y6 = a_tempY6;
        this.x7 = a_tempX7;
        this.y7 = a_tempY7;
        this.a_color = a_tempColor;
        this.x_Delta = random (-3, 3);
        this.y_Delta = random (-3, 3);
    }
    //show arcs
    show() {
        fill(this.a_color);
        beginShape();
        curveVertex(this.x1, this.y1);
        curveVertex(this.x2, this.y2);
        curveVertex(this.x3, this.y3);
        curveVertex(this.x4, this.y4);
        curveVertex(this.x5, this.y5);
        curveVertex(this.x6, this.y6);
        curveVertex(this.x7, this.y7);
        endShape();
    }

    // disperse arcs
    disperse() {
        if(imgMove){
            this.x1 += this.x_Delta;
            this.y1 += this.y_Delta;
            this.x2 += this.x_Delta;
            this.y2 += this.y_Delta;
            this.x3 += this.x_Delta;
            this.y3 += this.y_Delta;
            this.x4 += this.x_Delta;
            this.y4 += this.y_Delta;
            this.x5 += this.x_Delta;
            this.y5 += this.y_Delta;
            this.x6 += this.x_Delta;
            this.y6 += this.y_Delta;
            this.x7 += this.x_Delta;
            this.y7 += this.y_Delta;


            // edge detection on x axis
            if (this.x1 >= width || this.x1 <= 0) {
                this.x_Delta = this.x_Delta * -1;
            }
            if (this.x2 >= width || this.x2 <= 0) {
                this.x_Delta = this.x_Delta * -1;
            }
            if (this.x3 >= width || this.x3 <= 0) {
                this.x_Delta = this.x_Delta * -1;
            }
            if (this.x4 >= width || this.x4 <= 0) {
                this.x_Delta = this.x_Delta * -1;
            }
            if (this.x5 >= width || this.x5 <= 0) {
                this.x_Delta = this.x_Delta * -1;
            }
            if (this.x6 >= width || this.x6 <= 0) {
                this.x_Delta = this.x_Delta * -1;
            }
            if (this.x7 >= width || this.x7 <= 0) {
                this.x_Delta = this.x_Delta * -1;
            }

            // edge detection on y axis
            if (this.y1 >= height || this.y1 <= 0) {
                this.y_Delta = this.y_Delta * -1;
            }
            if (this.y2 >= height || this.y2 <= 0) {
                this.y_Delta = this.y_Delta * -1;
            }
            if (this.y3 >= height || this.y3 <= 0) {
                this.y_Delta = this.y_Delta * -1;
            }
            if (this.y4 >= height || this.y4 <= 0) {
                this.y_Delta = this.y_Delta * -1;
            }
            if (this.y5 >= height || this.y5 <= 0) {
                this.y_Delta = this.y_Delta * -1;
            }
            if (this.y6 >= height || this.y6 <= 0) {
                this.y_Delta = this.y_Delta * -1;
            }
            if (this.y7 >= height || this.y7 <= 0) {
                this.y_Delta = this.y_Delta * -1;
            }

        }

    }
}
