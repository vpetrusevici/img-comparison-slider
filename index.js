(()=>{"use strict";var e={90:(e,t,s)=>{s.d(t,{Z:()=>n});var i=s(645),o=s.n(i)()((function(e){return e[1]}));o.push([e.id,':host{--divider-width: 1px;--divider-color: #fff;--divider-shadow: none;--default-handle-width: 50px;--default-handle-color: #fff;--default-handle-opacity: 1;--default-handle-shadow: none;position:relative;display:inline-block;overflow:hidden;line-height:0;direction:ltr}@media screen and (-webkit-min-device-pixel-ratio: 0)and (min-resolution: 0.001dpcm){:host{outline-offset:1px}}::slotted(*){-webkit-user-drag:none;-khtml-user-drag:none;-moz-user-drag:none;-o-user-drag:none;user-drag:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.first{position:absolute;left:0;top:0;line-height:normal;font-size:100%;max-height:100%;height:100%;width:100%;--exposure: 50%;--transition-time: 0ms;transform:translateX(calc(var(--exposure) * -1));transition:transform var(--transition-time)}.first .first-overlay-container{position:relative;transform:translateX(var(--exposure));transition:transform var(--transition-time);height:100%}.first .first-overlay{overflow:hidden;height:100%}.second{position:relative}.handle-container{transform:translateX(50%);position:absolute;top:0;right:0;height:100%;display:flex;align-items:flex-end;justify-content:center;flex-direction:column}.divider{position:absolute;height:100%;width:100%;left:0;top:0;display:flex;align-items:center;justify-content:center;flex-direction:column}.divider:after{content:" ";display:block;height:100%;border-left-width:var(--divider-width);border-left-style:solid;border-left-color:var(--divider-color);box-shadow:var(--divider-shadow)}.handle{pointer-events:none;box-sizing:border-box;margin-left:1px;transform:translateX(-0.5px)}.default-handle{width:var(--default-handle-width);opacity:var(--default-handle-opacity);transition:all 1s;filter:drop-shadow(var(--default-handle-shadow))}.default-handle path{stroke:var(--default-handle-color)}',""]);const n=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s=e(t);return t[2]?"@media ".concat(t[2]," {").concat(s,"}"):s})).join("")},t.i=function(e,s,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var n=0;n<this.length;n++){var r=this[n][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);i&&o[d[0]]||(s&&(d[2]?d[2]="".concat(s," and ").concat(d[2]):d[2]=s),t.push(d))}},t}}},t={};function s(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={id:i,exports:{}};return e[i](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=s(90);const t="rendered",i=document.createElement("template");i.innerHTML='<div class="second" id="second"> <slot name="second"><slot name="before"></slot></slot> </div> <div class="first" id="first"> <div class="first-overlay"> <div class="first-overlay-container" id="firstImageContainer"> <slot name="first"><slot name="after"></slot></slot> </div> </div> <div class="handle-container"> <div class="divider"></div> <div class="handle"> <slot name="handle"> <svg xmlns="http://www.w3.org/2000/svg" class="default-handle" viewBox="-8 -3 16 6"> <path d="M -5 -2 L -7 0 L -5 2 M 5 -2 L 7 0 L 5 2" fill="none" vector-effect="non-scaling-stroke"/> </svg> </slot> </div> </div> </div> ';const o={ArrowLeft:-1,ArrowRight:1},n=e=>({x:e.touches[0].pageX,y:e.touches[0].pageY});class r extends HTMLElement{constructor(){super(),this.exposure=this.hasAttribute("value")?parseFloat(this.getAttribute("value")):50,this.slideOnHover=!1,this.isMouseDown=!1,this.isFocused=!1,this.onMouseMove=e=>{(this.isMouseDown||this.slideOnHover)&&this.slideToPageX(e.pageX)},this.bodyUserSelectStyle="",this.onMouseDown=e=>{this.slideOnHover||(window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mouseup",this.onWindowMouseUp),this.isMouseDown=!0,this.enableTransition(),this.slideToPageX(e.pageX),this.focus(),this.bodyUserSelectStyle=window.document.body.style.userSelect,window.document.body.style.userSelect="none")},this.onWindowMouseUp=()=>{this.isMouseDown=!1,window.document.body.style.userSelect=this.bodyUserSelectStyle,window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mouseup",this.onWindowMouseUp)},this.isTouchComparing=!1,this.hasTouchMoved=!1,this.onTouchStart=e=>{this.touchStartPoint=n(e),this.isFocused&&(this.enableTransition(),this.slideToPageX(e.touches[0].pageX))},this.onTouchMove=e=>{if(this.isTouchComparing)return this.slideToPageX(e.touches[0].pageX),e.preventDefault(),!1;if(!this.hasTouchMoved){const t=n(e);if(Math.abs(t.y-this.touchStartPoint.y)<Math.abs(t.x-this.touchStartPoint.x))return this.isTouchComparing=!0,this.focus(),this.slideToPageX(e.touches[0].pageX),e.preventDefault(),!1;this.hasTouchMoved=!0}},this.onTouchEnd=()=>{this.isTouchComparing=!1,this.hasTouchMoved=!1},this.onBlur=()=>{this.stopSlideAnimation(),this.isFocused=!1},this.onFocus=()=>{this.isFocused=!0},this.onKeyDown=e=>{if(this.isAnimating)return;this.isAnimating=!0;const t=e.key;void 0!==o[t]&&this.startSlideAnimation(o[t])},this.onKeyUp=e=>{this.isAnimating&&void 0!==o[e.key]&&this.stopSlideAnimation()},this.resetWidth=()=>{this.imageWidth=this.offsetWidth};const t=this.attachShadow({mode:"open"}),s=document.createElement("style");s.innerHTML=e.Z,this.getAttribute("nonce")&&s.setAttribute("nonce",this.getAttribute("nonce")),t.appendChild(s),t.appendChild(i.content.cloneNode(!0)),this.firstElement=t.getElementById("first"),this.firstImageContainerElement=t.getElementById("firstImageContainer"),this.secondElement=t.getElementById("second")}get value(){return this.exposure}set value(e){const t=parseFloat(e);t!==this.exposure&&(this.exposure=t,this.enableTransition(),this.setExposure())}get hover(){return this.slideOnHover}set hover(e){this.slideOnHover="false"!==e.toString().toLowerCase(),this.removeEventListener("mousemove",this.onMouseMove),this.slideOnHover&&this.addEventListener("mousemove",this.onMouseMove)}static get observedAttributes(){return["hover"]}connectedCallback(){this.hasAttribute("tabindex")||(this.tabIndex=0),this.addEventListener("dragstart",(e=>(e.preventDefault(),!1))),new ResizeObserver(this.resetWidth).observe(this),this.setExposure(0),this.addEventListener("keydown",this.onKeyDown),this.addEventListener("keyup",this.onKeyUp),this.addEventListener("focus",this.onFocus),this.addEventListener("blur",this.onBlur),this.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.addEventListener("touchend",this.onTouchEnd),this.addEventListener("mousedown",this.onMouseDown),this.hover=!!this.hasAttribute("hover")&&this.getAttribute("hover"),this.resetWidth(),this.classList.contains(t)||this.classList.add(t),this.querySelectorAll('[slot="before"], [slot="after"]').length>0&&console.warn('<img-comparison-slider>: slot names "before" and "after" are deprecated and soon won\'t be supported. Please use slot="first" instead of slot="after", and slot="second" instead of slot="before".')}disconnectedCallback(){this.transitionTimer&&window.clearTimeout(this.transitionTimer)}attributeChangedCallback(e,t,s){this.hover=s}setExposure(e=0){var t;this.exposure=(100,(t=this.exposure+e)<0?0:t>100?100:t),this.firstElement.style.setProperty("--exposure",100-this.exposure+"%")}slide(e=0){this.setExposure(e);const t=new Event("slide");this.dispatchEvent(t)}slideToPageX(e){const t=e-this.getBoundingClientRect().left-window.scrollX;this.exposure=t/this.imageWidth*100,this.slide(0)}enableTransition(){this.firstElement.style.setProperty("--transition-time","100ms"),this.transitionTimer=window.setTimeout((()=>{this.firstElement.style.setProperty("--transition-time","0ms"),this.transitionTimer=null}),100)}startSlideAnimation(e){let t=null;const s=i=>{null===t&&(t=i);const o=(i-t)/16.666666666666668*e;this.slide(o),this.isAnimating&&(window.requestAnimationFrame(s),t=i)};window.requestAnimationFrame(s)}stopSlideAnimation(){this.isAnimating=!1}}window.customElements.define("img-comparison-slider",r)})()})();
//# sourceMappingURL=index.js.map