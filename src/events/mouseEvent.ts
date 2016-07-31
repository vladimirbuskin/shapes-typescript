
import Point from '../structs/point';

export default class MouseEvent {
  public point: Point;
  private originalEvent;

  constructor(event) {
    this.point = new Point(event.clientX, event.clientY);
    this.originalEvent = event;
  }

}