/**
 * Created by Vladimir on 7/31/2016.
 */
import Point from '../../structs/point'

interface AddRemoveFunction {
  (source: Object): Layer;
}

interface Layer {
  props: Object,
  _control: Object,
  _el: Object,
  pos: Point,
  
  onCreate: Function,
  onAdd: Function,
  onRemove: Function,
  
  getEl: Function,
  
  getPos: Function,
  setPos: Function,
  
  update: Function,
  onUpdate: Function,
  onUpdateComplete: Function,
}

export default Layer