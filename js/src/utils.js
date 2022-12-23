/* global NexT: true */
NexT.utils=NexT.$u={
/**
   * Wrap images with fancybox support.
   */
wrapImageWithFancyBox:function(){$(".content img").not("[hidden]").not(".group-picture img, .post-gallery img").each((function(){var e=$(this),i=e.attr("title"),t=e.parent("a");if(t.size()<1){var n=e.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");t=e.wrap('<a href="'+n+'"></a>').parent("a")}t.addClass("fancybox fancybox.image"),t.attr("rel","group"),i&&(t.append('<p class="image-caption">'+i+"</p>"),
//make sure img title tag will show correctly in fancybox
t.attr("title",i))})),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({
//placeholder: '/images/loading.gif',
effect:"fadeIn",threshold:0})},
/**
   * Tabs tag listener (without twitter bootstrap).
   */
registerTabsTag:function(){var e=".tabs ul.nav-tabs ";
// Binding `nav-tabs` & `tab-content` by real time permalink changing.
$((function(){$(window).bind("hashchange",(function(){var i=location.hash;""!==i&&($(e+'li:has(a[href="'+i+'"])').addClass("active").siblings().removeClass("active"),$(i).addClass("active").siblings().removeClass("active"))})).trigger("hashchange")})),$(e+".tab").on("click",(function(e){
// Prevent selected tab to select again.
if(e.preventDefault(),!$(this).hasClass("active")){
// Add & Remove active class on `nav-tabs` & `tab-content`.
$(this).addClass("active").siblings().removeClass("active");var i=$(this).find("a").attr("href");$(i).addClass("active").siblings().removeClass("active"),
// Clear location hash in browser if #permalink exists.
""!==location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}}))},registerESCKeyEvent:function(){$(document).on("keyup",(function(e){27===e.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))}))},registerBackToTop:function(){var e=$(".back-to-top");$(window).on("scroll",(function(){e.toggleClass("back-to-top-on",window.pageYOffset>50);var i=$(window).scrollTop()/NexT.utils.getContentVisibilityHeight(),t=Math.round(100*i),n=t>100?100:t;$("#scrollpercent>span").html(n)})),e.on("click",(function(){$("body").velocity("scroll")}))},
/**
   * Transform embedded video to support responsive layout.
   * @see http://toddmotto.com/fluid-and-responsive-youtube-and-vimeo-videos-with-fluidvids-js/
   */
embeddedVideoTransformer:function(){var e=$("iframe"),i=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));
// Supported Players. Extend this if you need more players.
function t(e){return{width:e.width(),height:e.height()}}function n(e,i){return i/e*100}e.each((function(){var e,a=this,s=$(this),o=t(s);if(this.src.search(i)>0){
// Calculate the video ratio based on the iframe's w/h dimensions
var r=n(o.width,o.height);
// Replace the iframe's dimensions and position the iframe absolute
// This is the trick to emulate the video ratio
s.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});
// Wrap the iframe in a new <div> which uses a dynamically fetched padding-top property
// based on the video's w/h dimensions
var c=document.createElement("div");
// Additional adjustments for 163 Music
if(c.className="fluid-vids",c.style.position="relative",c.style.marginBottom="20px",c.style.width="100%",c.style.paddingTop=r+"%",
// Fix for appear inside tabs tag.
""===c.style.paddingTop&&(c.style.paddingTop="50%"),a.parentNode.insertBefore(c,a),c.appendChild(a),this.src.search("music.163.com")>0)
// 163 Music Player has a fixed height, so we need to reset the aspect radio
((e=t(s)).width>o.width||e.height<o.height)&&(c.style.paddingTop=n(e.width,o.height)+"%")}}))},
/**
   * Add `menu-item-active` class name to menu item
   * via comparing location.path with menu item's href.
   */
addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href^="'+e+'"]:first').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},
/**
   * Escape meta symbols in jQuery selectors.
   *
   * @param selector
   * @returns {string|void|XML|*}
   */
escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){!this.isDesktop()||this.isPisces()||this.isGemini()||$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),i=e[0],t=i.offsetWidth-i.clientWidth;return e.remove(),t},getContentVisibilityHeight:function(){var e=$("#content").height(),i=$(window).height();return e>i?e-i:$(document).height()-i},getSidebarb2tHeight:function(){
//var sidebarb2tHeight = (CONFIG.sidebar.b2t) ? 24 : 0;
return CONFIG.sidebar.b2t?$(".back-to-top").height():0},getSidebarSchemePadding:function(){var e="block"==$(".sidebar-nav").css("display")?$(".sidebar-nav").outerHeight(!0):0,i=$(".sidebar-inner"),t=i.innerWidth()-i.width();return this.isPisces()||this.isGemini()?2*t+e+2*CONFIG.sidebar.offset+this.getSidebarb2tHeight():2*t+e/2}
/**
   * Affix behaviour for Sidebar.
   *
   * @returns {Boolean}
   */
//  needAffix: function () {
//    return this.isPisces() || this.isGemini();
//  }
},$(document).ready((function(){function e(e){e=e||"auto",$(".site-overview, .post-toc").css("max-height",e)}!
/**
   * Init Sidebar & TOC inner dimensions on all pages and for all schemes.
   * Need for Sidebar/TOC inner scrolling if content taller then viewport.
   */
function(){var i;$(window).on("resize",(function(){i&&clearTimeout(i),i=setTimeout((function(){e(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}),0)}));
// Initialize Sidebar & TOC Width.
var t=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width","calc(100% + "+t+"px)");$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width","calc(100% + "+t+"px)");
// Initialize Sidebar & TOC Height.
e(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}()}));