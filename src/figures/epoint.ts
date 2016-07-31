//import $ from 'jquery'
import Circle from './circle'
import Point from '../structs/point'
import { SVGElement } from '../structs/HTMLElement'

export default class EPoint extends Circle
{
  constructor(point: Point, props?:Object) {
    // default props
    props = Object.assign({
      stroke: '#F44336', // red
      draggable: true
    }, props);

    super(point, props);

    this._el.setAttribute('class','epoint');
  }


  onUpdate() {
    super.onUpdate();

    this.firstUpdate && this._text.setAttribute('text-anchor', "left");
    this.firstUpdate && this._text.setAttribute('x', 6+"px");
    this.firstUpdate && this._text.setAttribute('alignment-baseline', "");
    this._text.setAttribute('y', "3px");
    this._text.textContent = this.getPos().toString();
  }
}