
export default class Handler {
  private _control: any;
  private _enabled: boolean;

  constructor(control) {
    this._control = control;
  }

  addHooks() {
  }

  removeHooks() {
  }

  getControl() {
    return this._control;
  }

  enable() {
    if (this._enabled) { return; }

    this._enabled = true;
    this.addHooks();
  }

  disable() {
    if (!this._enabled) { return; }

    this._enabled = false;
    this.removeHooks();
  }

  enabled() {
    return !!this._enabled;
  }
}
