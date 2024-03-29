/* ========================================================================
* Bootstrap: scrollspy.js v3.3.2
* http://getbootstrap.com/javascript/#scrollspy
* ========================================================================
* Copyright 2011-2015 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
* ======================================================================== */
/**
 * Custom by iissnan
 *
 * - Add a `clear.bs.scrollspy` event.
 * - Esacpe targets selector.
 */
!function(t){"use strict";
// SCROLLSPY CLASS DEFINITION
// ==========================
function s(e,i){this.$body=t(document.body),this.$scrollElement=t(e).is(document.body)?t(window):t(e),this.options=t.extend({},s.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}
// SCROLLSPY PLUGIN DEFINITION
// ===========================
function e(e){return this.each((function(){var i=t(this),o=i.data("bs.scrollspy"),r="object"==typeof e&&e;o||i.data("bs.scrollspy",o=new s(this,r)),"string"==typeof e&&o[e]()}))}s.VERSION="3.3.2",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s=this,e="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(e="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map((function(){var s=t(this),o=s.data("target")||s.attr("href"),r=/^#./.test(o)&&t(NexT.utils.escapeSelector(o));// Need to escape selector.
return r&&r.length&&r.is(":visible")&&[[r[e]().top+i,o]]||null})).sort((function(t,s){return t[0]-s[0]})).each((function(){s.offsets.push(this[0]),s.targets.push(this[1])}))},s.prototype.process=function(){var s,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),r=this.offsets,l=this.targets,n=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=o)return n!=(s=l[l.length-1])&&this.activate(s);if(n&&e<r[0])return t(this.selector).trigger("clear.bs.scrollspy"),// Add a custom event.
this.activeTarget=null,this.clear();for(s=r.length;s--;)n!=l[s]&&e>=r[s]&&(!r[s+1]||e<=r[s+1])&&this.activate(l[s])},s.prototype.activate=function(s){this.activeTarget=s,this.clear();var e=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]',i=t(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=t.fn.scrollspy;t.fn.scrollspy=e,t.fn.scrollspy.Constructor=s,
// SCROLLSPY NO CONFLICT
// =====================
t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this}
// SCROLLSPY DATA-API
// ==================
,t(window).on("load.bs.scrollspy.data-api",(function(){t('[data-spy="scroll"]').each((function(){var s=t(this);e.call(s,s.data())}))}))}(jQuery);