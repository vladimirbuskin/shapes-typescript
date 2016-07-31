!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(15)},function(t,e){"use strict";var n=function(){function t(t,e){this.x=t||0,this.y=e||0}return t.prototype.isValid=function(){return null!=this.x&&null!=this.y},t.prototype.vectorLength=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},t.prototype.normalize=function(){var t=this.vectorLength();return t>0&&(this.x=this.x/t,this.y=this.y/t),this},t.prototype.scalar=function(t){return this.x*t.x+this.y*t.y},t.prototype.angle=function(t){return Math.acos(this.normalize().scalar(t.normalize()))},t.prototype.angleDeg=function(t){return this.angle(t)*(180/Math.PI)},t.prototype.inverse=function(){return new t((-this.x),(-this.y))},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.validateLimits=function(t,e,n,o){this.x<t&&(this.x=t),this.y<e&&(this.y=e),this.x>n&&(this.x=n),this.y>o&&(this.y=o)},t.prototype.grid=function(t){var e=0;this.x-=-e+this.x%t,this.y-=-e+this.y%t},t.prototype.toString=function(){return"x"+this.x+" y"+this.y},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(3),r=n(1),s=n(13),u=n(4),a=function(t){function e(e,n){n=Object.assign({fill:"transparent",stroke:"red","stroke-width":"1px",draggable:!1},n),e=Object.assign({x:0,y:0},e),t.call(this),this._control=null,this.props=n,this.pos=new r["default"](e.x||0,e.y||0)}return o(e,t),e.prototype.onCreate=function(){this.onHandlers(),this.firstUpdate=!0,this.update()},e.prototype.onHandlers=function(){this.props.draggable&&(this._dragHandler=new s["default"](this),this._dragHandler.enable())},e.prototype.getEl=function(){return this._el},e.prototype.onAdd=function(t){this._control=t,this._control.getEl().appendChild(this.getEl())},e.prototype.onRemove=function(){this._control.getEl().removeChild(this.getEl()),this._control=null},e.prototype.getPos=function(){return this.pos},e.prototype.setPos=function(t){this.pos=t||this.pos,this.pos.validateLimits(0,0,document.documentElement.clientWidth,document.documentElement.clientHeight),this.update(),this.fire("move",new u["default"](this))},e.prototype.update=function(){function t(){e.fire("update"),e.onUpdate(),e.onUpdateComplete(),e.fire("updateComplete"),e.firstUpdate=!1}var e=this;t()},e.prototype.onUpdate=function(){},e.prototype.onUpdateComplete=function(){},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a},function(t,e){"use strict";var n=function(){function t(){this.events=[]}return t.prototype.on=function(t,e){this.events[t]=this.events[t]||[],this.events[t]&&this.events[t].push(e)},t.prototype.off=function(t,e){if(this.events[t])for(var n=this.events[t],o=n.length-1;o>=0;--o)if(n[o]===e)return n.splice(o,1),!0;return!1},t.prototype.fire=function(t,e){if(this.events[t])for(var n=this.events[t],o=n.length;o--;)n[o].call(this,e)},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e){"use strict";var n=function(){function t(t){this.figure=t}return t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";var o=n(1),i=function(){function t(t){this.point=new o["default"](t.clientX,t.clientY),this.originalEvent=t}return t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),r=n(7),s=function(t){function e(e,n){n=Object.assign({draggable:!1,r:5},n),t.call(this,e,n);var o=this;o._el=document.createElementNS("http://www.w3.org/2000/svg","g"),o._el.setAttribute("class","circle"),o._text=document.createElementNS("http://www.w3.org/2000/svg","text"),o._el.appendChild(this._text),o._circle=document.createElementNS("http://www.w3.org/2000/svg","circle"),o._el.appendChild(this._circle),this.onCreate()}return o(e,t),e.prototype.onUpdate=function(){r.translate(this._el,this.getPos()),r.applyStyles(this._circle,this.props),this._circle.setAttribute("r",this.props.r+"px"),this.firstUpdate&&this._text.setAttribute("text-anchor","middle"),this.firstUpdate&&this._text.setAttribute("alignment-baseline","middle"),this._text.textContent="S="+(this.props.area+.5|0)},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s},function(t,e){"use strict";function n(t,e){t.setAttribute("transform","translate("+e.x+", "+e.y+")")}function o(t,e){t.setAttribute("fill",e.fill),t.setAttribute("stroke",e.stroke),t.setAttribute("stroke-width",e["stroke-width"])}e.translate=n,e.applyStyles=o},function(t,e){"use strict";var n=function(){function t(t){this._control=t}return t.prototype.addHooks=function(){},t.prototype.removeHooks=function(){},t.prototype.getControl=function(){return this._control},t.prototype.enable=function(){this._enabled||(this._enabled=!0,this.addHooks())},t.prototype.disable=function(){this._enabled&&(this._enabled=!1,this.removeHooks())},t.prototype.enabled=function(){return!!this._enabled},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(2),r=n(14),s=n(3),u=n(4),a=function(t){function e(e){t.call(this),this.layers=[];var n=document.getElementById(e),o=this._el=document.createElementNS("http://www.w3.org/2000/svg","svg");n.appendChild(o),this._editorHandler=new r["default"](this),this._editorHandler.enable()}return o(e,t),e.prototype.onClick=function(t){this.fire("click",t)},e.prototype.reset=function(){this.layers.forEach(this.removeLayer.bind(this)),this.layers.length=0},e.prototype.getEl=function(){return this._el},e.prototype.addLayer=function(t){var e=this.layers.find(function(e){return e==t});return null==e&&t instanceof i["default"]&&(this.layers.push(t),t.onAdd(this),this._el.appendChild(t._el),this.fire("addlayer",new u["default"](t))),this},e.prototype.removeLayer=function(t){var e=this.layers.find(function(e){return e==t});return null!=e&&(this.layers=this.layers.filter(function(e){return e!=t}),t instanceof i["default"]&&(t.onRemove(this),this.fire("removelayer",new u["default"](e)))),this},e}(s["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(6),r=function(t){function e(e,n){n=Object.assign({stroke:"#F44336",draggable:!0},n),t.call(this,e,n),this._el.setAttribute("class","epoint")}return o(e,t),e.prototype.onUpdate=function(){t.prototype.onUpdate.call(this),this.firstUpdate&&this._text.setAttribute("text-anchor","left"),this.firstUpdate&&this._text.setAttribute("x","6px"),this.firstUpdate&&this._text.setAttribute("alignment-baseline",""),this._text.setAttribute("y","3px"),this._text.textContent=this.getPos().toString()},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r},function(t,e,n){"use strict";function o(t){return(t||[]).map(function(t){return null==t.getPos?null:t.getPos()})}function i(t){var e=t[0],n=t[1],o=t[2],i=new a["default"];i.x=(e.x+o.x)/2,i.y=(e.y+o.y)/2;var r=new a["default"];return r.x=2*i.x-n.x,r.y=2*i.y-n.y,[e,n,o,r]}function r(t){var e=t[0],n=t[1],o=t[3],i=e.subtract(n),r=e.subtract(o),s=i.vectorLength(),u=r.vectorLength(),a=i.angle(r);return s*u*Math.sin(a)}var s=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},u=n(12),a=n(1);e.getParallelogramArea=r;var p=function(t){function e(e,n){var r=this;t.call(this,i(o(e)),n),this._el.setAttribute("class","parallelogram"),this.onPointMove=this.onPointMove.bind(this),this.area=0,this.epoints=e,this.epoints.forEach(function(t){return t.on("move",r.onPointMove)}),this.onCreate()}return s(e,t),e.prototype.onUpdate=function(){t.prototype.onUpdate.call(this),this.area=r(this.getPoints())},e.prototype.onPointMove=function(){this.setPoints(i(o(this.epoints)))},e}(u["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=p},function(t,e,n){"use strict";function o(t){return(t||[]).map(function(t){return t.x+","+t.y}).reduce(function(t,e){return t+" "+e},"").trim()}function i(t){var e=t.reduce(function(t,e){return{x:t.x+e.x,y:t.y+e.y}},{x:0,y:0});return new a["default"](Math.round(e.x/t.length),e.y/t.length)}function r(t,e,n){return t.map(function(t){return{x:t.x+(n.x-e.x),y:t.y+(n.y-e.y)}})}var s=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},u=n(2),a=n(1),p=n(7);e.pointsToPolygonStr=o,e.pointsCalculateCenter=i,e.pointsTransfer=r;var c=function(t){function e(e,n){n=Object.assign({stroke:"#3F51B5"},n),t.call(this,null,n),this._el=document.createElementNS("http://www.w3.org/2000/svg","polygon"),this._el.setAttribute("class","polygon"),this.setPoints(e||[]),this.onCreate()}return s(e,t),e.prototype.getPoints=function(){return this.points},e.prototype.setPoints=function(e){this.points=e,t.prototype.setPos.call(this,i(e))},e.prototype.setPos=function(e){this.setPoints(r(this.getPoints(),this.getPos(),e)),t.prototype.setPos.call(this,e)},e.prototype.onUpdate=function(){this.firstUpdate&&p.applyStyles(this.getEl(),this.props),this.getEl().setAttribute("points",o(this.points))},e}(u["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=c},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(8),r=n(5),s=n(17),u=function(t){function e(e){t.call(this,e),this._onDown=this._onDown.bind(this),this._onMove=this._onMove.bind(this),this._onUp=this._onUp.bind(this)}return o(e,t),e.prototype.addHooks=function(){this.getControl().getEl().addEventListener("click",s.stopPropagation),this.getControl().getEl().addEventListener("mousedown",this._onDown)},e.prototype.removeHooks=function(){this.getControl().getEl().removeEventListener("click",s.stopPropagation),this.getControl().getEl().removeEventListener("mousedown",this._onDown)},e.prototype._onDown=function(t){t.preventDefault(),t.stopPropagation();var e=this.getControl().getPos();this.offset=new r["default"](t).point.subtract(e),document.addEventListener("mousemove",this._onMove),document.addEventListener("mouseup",this._onUp)},e.prototype._onMove=function(t){t.preventDefault(),t.stopPropagation(t);var e=new r["default"](t);this.getControl().setPos(e.point.subtract(this.offset))},e.prototype._onUp=function(t){t.stopPropagation(),document.removeEventListener("mousemove",this._onMove),document.removeEventListener("mouseup",this._onUp)},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(8),r=n(5),s=function(t){function e(e){t.call(this,e),this._click=this._click.bind(this)}return o(e,t),e.prototype.addHooks=function(){this.getControl().getEl().addEventListener("click",this._click)},e.prototype.removeHooks=function(){this.getControl().getEl().removeEventListener("click",this._click)},e.prototype._click=function(t){this.getControl().onClick(new r["default"](t))},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s},function(t,e,n){"use strict";var o=n(16);new o["default"]("canvas")},function(t,e,n){"use strict";var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(9),r=n(10),s=n(6),u=n(1),a=n(11),p=function(t){function e(e){t.call(this,e),this.tmpPoints=[],this.resetButton=document.getElementById("resetBtn"),this.resetButton.addEventListener("click",this.onResetClick.bind(this)),this.aboutButton=document.getElementById("aboutBtn"),this.aboutButton.addEventListener("click",this.onAboutClick.bind(this)),this.okButton=document.getElementById("okBtn"),this.okButton.addEventListener("click",this.onOkClick.bind(this))}return o(e,t),e.prototype.onClick=function(e){t.prototype.onClick.call(this,e);var n=new r["default"](e.point);if(this.tmpPoints.push(n),this.tmpPoints.length<=3&&this.addLayer(n),3==this.tmpPoints.length){var o=new a["default"](this.tmpPoints),i=new s["default"](new u["default"](10,10),{r:10,stroke:"#FFEA00"});o.on("updateComplete",function(){var t=this.getPos(),e=this.area;i.props.r=Math.sqrt(e/Math.PI),i.props.area=e,i.setPos(t)}),o.update(),this.addLayer(i),this.addLayer(o),this.tmpPoints.forEach(t.prototype.removeLayer.bind(this)),this.tmpPoints.forEach(t.prototype.addLayer.bind(this)),this.fire("drawn")}},e.prototype.onResetClick=function(){this.reset()},e.prototype.reset=function(){t.prototype.reset.call(this),this.tmpPoints.length=0},e.prototype.onAboutClick=function(){document.getElementById("aboutPopup").className="popup show"},e.prototype.onOkClick=function(){document.getElementById("aboutPopup").className="popup hide"},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=p},function(t,e){"use strict";function n(t){t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0}e.stopPropagation=n}]);