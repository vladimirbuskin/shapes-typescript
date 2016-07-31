
export default class Point {

  x: number;
  y: number;

  constructor(x?:number,y?:number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  isValid() {
    return this.x!=null && this.y!=null;
  }

  vectorLength()
  {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }

  normalize() {
    var length = this.vectorLength();
    if (length > 0) {
      this.x = this.x / length;
      this.y = this.y / length;
    }
    return this;
  }

  scalar(p:Point) {
    return this.x * p.x + this.y * p.y;
  }

  angle(v:Point) {
    return Math.acos(this.normalize().scalar(v.normalize()))
  }

  angleDeg(v:Point) {
    return this.angle(v) * (180 / Math.PI);
  }

  inverse() {
    return new Point(-this.x, -this.y);
  }

  add(v:Point) {
    return new Point(this.x + v.x, this.y + v.y);
  }
  
  subtract(v:Point) {
    return new Point(this.x - v.x, this.y - v.y);
  }

  validateLimits(minX:number,minY:number,maxX:number,maxY:number) {
    if (this.x < minX) this.x = minX;
    if (this.y < minY) this.y = minY;
    if (this.x > maxX) this.x = maxX;
    if (this.y > maxY) this.y = maxY;
  }

  grid(g:number) {
    var r = 0;//-(g | 0);
    this.x -= -r + this.x%g;
    this.y -= -r + this.y%g;
  }

  toString():string {
    return 'x' + this.x + " y" + this.y;
  }
}