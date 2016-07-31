/**
 * Created by Vladimir on 7/31/2016.
 */
interface HTMLElement {
  appendChild: Function,
  removeChild: Function,
  addEventListener: Function,
  setAttribute: Function
}

export interface SVGElement {
  textContent: string,
  appendChild: Function,
  removeChild: Function,
  addEventListener: Function,
  setAttribute: Function
}

export default HTMLElement