!function(){"use strict";
/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */
/*jslint browser:true, node:true*/
/*global define, Event, Node*/
/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */function t(e,o){var i;if(o=o||{},
/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
this.trackingClick=!1,
/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
this.trackingClickStart=0,
/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
this.targetElement=null,
/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
this.touchStartX=0,
/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
this.touchStartY=0,
/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
this.lastTouchIdentifier=0,
/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
this.touchBoundary=o.touchBoundary||10,
/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
this.layer=e,
/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
this.tapDelay=o.tapDelay||200,
/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=this,c=0,s=r.length;c<s;c++)a[r[c]]=u(a[r[c]],a);
// Set up event handlers as required
n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),
// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
// layer when they are cancelled.
Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),
// If a handler is already declared in the element's onclick attribute, it will be fired before
// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
// adding it as listener.
"function"==typeof e.onclick&&(
// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
// - the old one won't work if passed to addEventListener directly.
i=e.onclick,e.addEventListener("click",(function(t){i(t)}),!1),e.onclick=null)}
// Some old versions of Android don't have Function.prototype.bind
function u(t,e){return function(){return t.apply(e,arguments)}}}
/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;
/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){
// Don't send a synthetic click to disabled inputs (issue #62)
case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":
// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":// iOS8 homescreen apps can prevent events bubbling into frames
case"video":return!0}return/\bneedsclick\b/.test(t.className)},
/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}
// No point in attempting to focus disabled inputs
return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},
/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
t.prototype.sendClick=function(t,e){var n,o;
// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],(
// Synthesise a click event, with an extra attribute so it can be tracked
n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){
//Issue #159: Android Chrome Select Box does not open with a synthetic click event
return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},
/**
	 * @param {EventTarget|Element} targetElement
	 */
t.prototype.focus=function(t){var e;
// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},
/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
t.prototype.updateScrollParent=function(t){var e,n;
// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
// target element was moved to another parent.
if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}
// Always update the scroll top tracker if possible.
e&&(e.fastClickLastScrollTop=e.scrollTop)},
/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
t.prototype.getTargetElementFromEventTarget=function(t){
// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
return t.nodeType===Node.TEXT_NODE?t.parentNode:t},
/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
t.prototype.onTouchStart=function(t){var e,n,r;
// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if((
// Only trusted events will deselect text on iOS (issue #49)
r=window.getSelection()).rangeCount&&!r.isCollapsed)return!0;if(!i){
// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
// with the same identifier as the touch event that previously triggered the click that triggered the alert.
// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
// random integers, it's safe to to continue if the identifier is 0 here.
if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,
// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
// 1) the user does a fling scroll on the scrollable layer
// 2) the user stops the fling scroll with another tap
// then the event.target of the last 'touchend' event will be the element that was under the user's finger
// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,
// Prevent phantom clicks on fast double-tap (issue #36)
t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},
/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},
/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
t.prototype.onTouchMove=function(t){return!this.trackingClick||(
// If the touch has moved, cancel the click tracking
(this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},
/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
t.prototype.findControl=function(t){
// Fast path for newer browsers supporting the HTML5 control attribute
return void 0!==t.control?t.control:
// All browsers under test that support touch events also support the HTML5 htmlFor attribute
t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},
/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;
// Prevent phantom clicks on fast double-tap (issue #36)
if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;
// Reset to prevent wrong click cancel on input (issue #156).
if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,
// On some iOS devices, the targetElement supplied with the event is invalid if the layer
// is performing a transition or scroll, and has to be re-detected manually. Note that
// for this to function correctly, it must be called *after* the event target is checked!
// See issue #57; also filed as rdar://13048589 .
r&&(u=t.changedTouches[0],(
// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(c=l.tagName.toLowerCase())){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))
// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),
// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return!(!o||i||
// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
!(s=l.fastClickScrollParent)||s.fastClickLastScrollTop===s.scrollTop)||(
// Prevent the actual click from going though - unless the target node is marked as requiring
// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},
/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},
/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
t.prototype.onMouse=function(t){
// If a target element was never set (because a touch event was never fired) allow the event
return!this.targetElement||(!!t.forwardedTouchEvent||(
// Programmatically generated events targeting a specific element should be permitted
!t.cancelable||(
// Derive and check the target element to see whether the mouse event needs to be permitted;
// unless explicitly enabled, prevent non-touch click events from triggering actions,
// to prevent ghost/doubleclicks.
!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(
// Prevent any user-added listeners declared on FastClick element from being fired.
t.stopImmediatePropagation?t.stopImmediatePropagation():
// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
t.propagationStopped=!0,
// Cancel the event
t.stopPropagation(),t.preventDefault(),!1))))},
/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
t.prototype.onClick=function(t){var e;
// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):
// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
"submit"===t.target.type&&0===t.detail||(
// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
(e=this.onMouse(t))||(this.targetElement=null),e)},
/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},
/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
t.notNeeded=function(t){var e,o,i;
// Devices that don't support touch don't need FastClick
if(void 0===window.ontouchstart)return!0;
// Chrome version - zero for other browsers
if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){
// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
if(-1!==e.content.indexOf("user-scalable=no"))return!0;
// Chrome 32 and above with width=device-width or less don't need FastClick
if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}
// Chrome desktop doesn't need FastClick (issue #15)
}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]"))){
// user-scalable=no eliminates click delay.
if(-1!==e.content.indexOf("user-scalable=no"))return!0;
// width=device-width (or less than device-width) eliminates click delay.
if(document.documentElement.scrollWidth<=window.outerWidth)return!0}
// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(
// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896
e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===t.style.touchAction||"manipulation"===t.style.touchAction));
// Firefox version - zero for other browsers
},
/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?
// AMD. Register as an anonymous module.
define((function(){return t})):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();