/**********************
   Velocity UI Pack
**********************/
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){
/* CommonJS module. */
"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}((function(){return function(t,a,e,r){
/*************
        Checks
    *************/
if(t.Velocity&&t.Velocity.Utilities){var n,i,s,o=t.Velocity,l=o.Utilities,c=o.version;if(i=c,s=[],(n={major:1,minor:1,patch:0})&&i&&(l.each([n,i],(function(t,a){var e=[];l.each(a,(function(t,a){for(;a.toString().length<5;)a="0"+a;e.push(a)})),s.push(e.join(""))})),parseFloat(s[0])>parseFloat(s[1]))){var u="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(u),new Error(u)}
/************************
       Effect Registration
    ************************/
/* Note: RegisterUI is a legacy name. */
/* Register the packaged effects. */
for(var f in o.RegisterEffect=o.RegisterUI=function(t,a){
/* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
function e(t,a,e,r){var n,i=0;
/* Sum the total height (including padding and margin) of all targeted elements. */l.each(t.nodeType?[t]:t,(function(t,a){r&&(
/* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
e+=t*r),n=a.parentNode,l.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],(function(t,e){i+=parseFloat(o.CSS.getPropertyValue(a,e))}))})),
/* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
o.animate(n,{height:("In"===a?"+":"-")+"="+i},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}
/* Register a custom redirect for each effect. */
/* Return the Velocity object so that RegisterUI calls can be chained. */
return o.Redirects[t]=function(n,i,s,c,u,f){var p=s===c-1;"function"==typeof a.defaultDuration?a.defaultDuration=a.defaultDuration.call(u,u):a.defaultDuration=parseFloat(a.defaultDuration)
/* Iterate through each effect's call array. */;for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=i.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};
/* Assign the whitelisted per-call options. */
/* Special processing for the first effect call. */
if(O.duration=m*(X||1),O.queue=i.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){
/* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
if(
/* If a delay was passed into the redirect, combine it with the first call's delay. */
O.delay+=parseFloat(i.delay)||0,0===s&&(O.begin=function(){
/* Only trigger a begin callback on the first effect call with the first element in the set. */
i.begin&&i.begin.call(u,u);var a=t.match(/(In|Out)$/);
/* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
                               and the first RAF tick. */a&&"In"===a[0]&&y.opacity!==r&&l.each(u.nodeType?[u]:u,(function(t,a){o.CSS.setPropertyValue(a,"opacity",0)}))
/* Only trigger animateParentHeight() if we're using an In/Out transition. */,i.animateParentHeight&&a&&e(u,a[0],m+O.delay,i.stagger)}),null!==i.display)if(i.display!==r&&"none"!==i.display)O.display=i.display;else if(/In$/.test(t)){
/* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
var v=o.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}i.visibility&&"hidden"!==i.visibility&&(O.visibility=i.visibility)}
/* Special processing for the last effect call. */if(d===a.calls.length-1){
/* Append promise resolving onto the user's redirect callback. */
function D(){i.display!==r&&"none"!==i.display||!/Out$/.test(t)||l.each(u.nodeType?[u]:u,(function(t,a){o.CSS.setPropertyValue(a,"display","none")})),i.complete&&i.complete.call(u,u),f&&f.resolver(u||n)}O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];
/* Format each non-array value in the reset property map to [ value, value ] so that changes apply
                                   immediately and DOM querying is avoided (via forcefeeding). */
/* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */o.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}
/* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */var i={duration:0,queue:!1};
/* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */p&&(i.complete=D),o.animate(n,a.reset,i)}else p&&D()},"hidden"===i.visibility&&(O.visibility=i.visibility)}o.animate(n,y,O)}},o},
/*********************
       Packaged Effects
    *********************/
/* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
/* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
o.RegisterEffect.packagedEffects={
/* Animate.css */
"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},
/* Animate.css */
"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},
/* Animate.css */
"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},
/* Animate.css */
"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},
/* Animate.css */
"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},
/* Animate.css */
"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},
/* Animate.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},
/* Animate.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},
/* Animate.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},
/* Animate.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},
/* Magic.css */
"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},
/* Magic.css */
"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},
/* Animate.css */
"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},
/* Animate.css */
"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},
/* Animate.css */
"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},
/* Animate.css */
"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},
/* Animate.css */
"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},
/* Animate.css */
"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},
/* Animate.css */
"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},
/* Animate.css */
"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},
/* Animate.css */
"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},
/* Animate.css */
"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},
/* Magic.css */
"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},
/* Magic.css */
/* Support: Loses rotation in IE9/Android 2.3 (fades only). */
"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}},o.RegisterEffect.packagedEffects)o.RegisterEffect(f,o.RegisterEffect.packagedEffects[f]);
/*********************
       Sequence Running
    **********************/
/* Note: Sequence calls must use Velocity's single-object arguments syntax. */o.RunSequence=function(t){var a=l.extend(!0,[],t);a.length>1&&(l.each(a.reverse(),(function(t,e){var r=a[t+1];if(r){
/* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
                       in the previous call's begin callback. Otherwise, chained calls are normally triggered
                       in the previous call's complete callback. */
var n=e.o||e.options,i=r.o||r.options,s=n&&!1===n.sequenceQueue?"begin":"complete",c=i&&i[s],u={};u[s]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;c&&c.call(a,a),o(e)},r.o?r.o=l.extend({},i,u):r.options=l.extend({},i,u)}})),a.reverse()),o(a[0])}}else a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.")}(window.jQuery||window.Zepto||window,window,document)}));