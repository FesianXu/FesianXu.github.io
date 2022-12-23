/***********************************************
  needShareButton
  - Version 1.0.0
  - Copyright 2015 Dzmitry Vasileuski
	- Licensed under MIT (http://opensource.org/licenses/MIT)
***********************************************/
!function(){
// find closest
function e(e,o){if("string"==typeof o){var t=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;if(t)for(;e;){if(t.bind(e)(o))return e;e=e.parentElement}return!1}for(;e;){if(e==o)return e;e=e.parentElement}return!1}
// share button class
window.needShareButton=function(o,t){
// create element reference
var n=this;
// integrate custom options
for(var r in n.elem=o||"need-share-button",
/* Helpers
     ***********************************************/
// get title from html
n.getTitle=function(){var e;
// check querySelector existance for old browsers
return document.querySelector&&(e=document.querySelector("title"))?e.innerText:document.title},
// get image from html
n.getImage=function(){var e;
// check querySelector existance for old browsers
return document.querySelector&&(e=document.querySelector('meta[property="og:image"]')||document.querySelector('meta[name="twitter:image"]'))?e.getAttribute("content"):""},
// get description from html
n.getDescription=function(){var e;
// check querySelector existance for old browsers
return document.querySelector?(e=document.querySelector('meta[property="og:description"]')||document.querySelector('meta[name="twitter:description"]')||document.querySelector('meta[name="description"]'))?e.getAttribute("content"):"":(e=document.getElementsByTagName("meta").namedItem("description"))?e.getAttribute("content"):""},
// share urls for all networks
n.share={weibo:function(e){var o=i(e),t="http://v.t.sina.com.cn/share/share.php?title="+encodeURIComponent(o.title)+"&url="+encodeURIComponent(o.url)+"&pic="+encodeURIComponent(o.image);n.popup(t)},wechat:function(e){var o=i(e),t="https://api.qinco.me/api/qr?size=400&content="+encodeURIComponent(o.url),n=e.querySelector(".need-share-button_dropdown"),r=n.getElementsByClassName("need-share-wechat-code-image")[0];r?r.remove():((r=document.createElement("img")).src=t,r.alt="loading wechat image...",r.setAttribute("class","need-share-wechat-code-image"),n.appendChild(r))},douban:function(e){var o=i(e),t="https://www.douban.com/share/service?name="+encodeURIComponent(o.title)+"&href="+encodeURIComponent(o.url)+"&image="+encodeURIComponent(o.image);n.popup(t)},qqzone:function(e){var o=i(e),t="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title="+encodeURIComponent(o.title)+"&url="+encodeURIComponent(o.url)+"&pics="+encodeURIComponent(o.image)+"&desc="+encodeURIComponent(o.description);n.popup(t)},renren:function(e){var o=i(e),t="http://widget.renren.com/dialog/share?title="+encodeURIComponent(o.title)+"&resourceUrl="+encodeURIComponent(o.url)+"&pic="+encodeURIComponent(o.image)+"&description="+encodeURIComponent(o.description);n.popup(t)},mailto:function(e){var o=i(e),t="mailto:?subject="+encodeURIComponent(o.title)+"&body=Thought you might enjoy reading this: "+encodeURIComponent(o.url)+" - "+encodeURIComponent(o.description);window.location.href=t},twitter:function(e){var o=i(e),t=o.protocol+"twitter.com/intent/tweet?text=";t+=encodeURIComponent(o.title)+"&url="+encodeURIComponent(o.url),n.popup(t)},pinterest:function(e){var o=i(e),t=o.protocol+"pinterest.com/pin/create/bookmarklet/?is_video=false";t+="&media="+encodeURIComponent(o.image),t+="&url="+encodeURIComponent(o.url),t+="&description="+encodeURIComponent(o.title),n.popup(t)},facebook:function(e){var o=i(e),t=o.protocol+"www.facebook.com/share.php?";t+="u="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),n.popup(t)},googleplus:function(e){var o=i(e),t=o.protocol+"plus.google.com/share?";t+="url="+encodeURIComponent(o.url),n.popup(t)},reddit:function(e){var o=i(e),t=o.protocol+"www.reddit.com/submit?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),n.popup(t)},delicious:function(e){var o=i(e),t=o.protocol+"del.icio.us/post?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),t+="&notes="+encodeURIComponent(o.description),n.popup(t)},stumbleupon:function(e){var o=i(e),t=o.protocol+"www.stumbleupon.com/submit?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),n.popup(t)},linkedin:function(e){var o=i(e),t=o.protocol+"www.linkedin.com/shareArticle?mini=true";t+="&url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),t+="&source="+encodeURIComponent(o.source),n.popup(t)},slashdot:function(e){var o=i(e),t=o.protocol+"slashdot.org/bookmark.pl?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),n.popup(t)},technorati:function(e){var o=i(e),t=o.protocol+"technorati.com/faves?";t+="add="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),n.popup(t)},posterous:function(e){var o=i(e),t=o.protocol+"posterous.com/share?";t+="linkto="+encodeURIComponent(o.url),n.popup(t)},tumblr:function(e){var o=i(e),t=o.protocol+"www.tumblr.com/share?v=3";t+="&u="+encodeURIComponent(o.url),t+="&t="+encodeURIComponent(o.title),n.popup(t)},googlebookmarks:function(e){var o=i(e),t=o.protocol+"www.google.com/bookmarks/mark?op=edit";t+="&bkmk="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),t+="&annotation="+encodeURIComponent(o.description),n.popup(t)},newsvine:function(e){var o=i(e),t=o.protocol+"www.newsvine.com/_tools/seed&save?";t+="u="+encodeURIComponent(o.url),t+="&h="+encodeURIComponent(o.title),n.popup(t)},evernote:function(e){var o=i(e),t=o.protocol+"www.evernote.com/clip.action?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),n.popup(t)},friendfeed:function(e){var o=i(e),t=o.protocol+"www.friendfeed.com/share?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),n.popup(t)},vkontakte:function(e){var o=i(e),t=o.protocol+"vkontakte.ru/share.php?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),t+="&description="+encodeURIComponent(o.description),t+="&image="+encodeURIComponent(o.image),t+="&noparse=true",n.popup(t)},odnoklassniki:function(e){var o=i(e),t=o.protocol+"www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";t+="&st.comments="+encodeURIComponent(o.description),t+="&st._surl="+encodeURIComponent(o.url),n.popup(t)},mailru:function(e){var o=i(e),t=o.protocol+"connect.mail.ru/share?";t+="url="+encodeURIComponent(o.url),t+="&title="+encodeURIComponent(o.title),t+="&description="+encodeURIComponent(o.description),t+="&imageurl="+encodeURIComponent(o.image),n.popup(t)}},
// open share link in a popup
n.popup=function(e){
// set left and top position
var
// fix dual screen mode
o=void 0!==window.screenLeft?window.screenLeft:screen.left,t=void 0!==window.screenTop?window.screenTop:screen.top,
// calculate top and left position
n=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-300+o,r=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-250+t,
// show popup
i=window.open(e,"targetWindow","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600, height=500, top="+r+", left="+n);
// Puts focus on the newWindow
window.focus&&i.focus()},
/* Set options
     ***********************************************/
// create default options
n.options={iconStyle:"default",// default or box
boxForm:"horizontal",// horizontal or vertical
position:"bottomCenter",// top / middle / bottom + Left / Center / Right
protocol:-1===["http","https"].indexOf(window.location.href.split(":")[0])?"https://":"//",networks:"Weibo,Wechat,Douban,QQZone,Twitter,Pinterest,Facebook,GooglePlus,Reddit,Linkedin,Tumblr,Evernote"},t)t.hasOwnProperty(r)&&(n.options[r]=t[r]);
// convert networks string into array
//root.options.networks = root.options.networks.toLowerCase().split(",");
function i(e){
// integrate data attribute options
var o={};for(var t in n.options)n.options.hasOwnProperty(t)&&(o[t]=n.options[t]);
// these attrs must get dynamically.
for(var r in o.url=window.location.href,o.title=n.getTitle(),o.image=n.getImage(),o.description=n.getDescription(),e.dataset)
// replace only 'share-' prefixed data-attributes
if(r.match(/share/)){var i=r.replace(/share/,"");if(!i.length)continue;i=i.charAt(0).toLowerCase()+i.slice(1);var c=e.dataset[r];"networks"===i?
//val = val.toLowerCase().split(",");
c=c.split(","):"url"===i&&c&&"/"===c[0]&&(
// fix relative url problem.
c=location.origin+c),o[i]=c}return o}n.options.networks=n.options.networks.split(","),
// close on click outside
document.addEventListener("click",(function(o){var t=document.querySelector(".need-share-button-opened");if(e(o.target,".need-share-button-opened"))setTimeout((function(){t.classList.remove("need-share-button-opened"),
// hide wechat code image when close the dropdown.
t.querySelector(".need-share-wechat-code-image")&&t.querySelector(".need-share-wechat-code-image").remove()}),1);else if(t)t.classList.remove("need-share-button-opened"),
// hide wechat code image when close the dropdown.
t.querySelector(".need-share-wechat-code-image")&&t.querySelector(".need-share-wechat-code-image").remove();else{var r=e(o.target,n.elem);r&&(r.classList.contains("need-share-button-opened")||(!function(o){
// create dropdown
var t=document.createElement("span");if(t.className="need-share-button_dropdown",!o.querySelector(".need-share-button_dropdown")){var r=i(o);
// set dropdown row length
"box"==r.iconStyle&&"horizontal"==r.boxForm?t.className+=" need-share-button_dropdown-box-horizontal":"box"==r.iconStyle&&"vertical"==r.boxForm&&(t.className+=" need-share-button_dropdown-box-vertical"),
// set dropdown position
setTimeout((function(){switch(r.position){case"topLeft":t.className+=" need-share-button_dropdown-top-left";break;case"topRight":t.className+=" need-share-button_dropdown-top-right";break;case"topCenter":t.className+=" need-share-button_dropdown-top-center",t.style.marginLeft=-t.offsetWidth/2+"px";break;case"middleLeft":t.className+=" need-share-button_dropdown-middle-left",t.style.marginTop=-t.offsetHeight/2+"px";break;case"middleRight":t.className+=" need-share-button_dropdown-middle-right",t.style.marginTop=-t.offsetHeight/2+"px";break;case"bottomLeft":t.className+=" need-share-button_dropdown-bottom-left";break;case"bottomRight":t.className+=" need-share-button_dropdown-bottom-right";break;default:t.className+=" need-share-button_dropdown-bottom-center",t.style.marginLeft=-t.offsetWidth/2+"px"}}),1);
// fill fropdown with buttons
var c="default"==r.iconStyle?"need-share-button_link need-share-button_":"need-share-button_link-"+r.iconStyle+" need-share-button_link need-share-button_";for(var a in r.networks)if(r.networks.hasOwnProperty(a)){var p=document.createElement("span"),d=(a=r.networks[a].trim()).toLowerCase();p.className=c+d,-1===["weibo","wechat","douban","qqzone","renren"].indexOf(d)?p.className+=" social-"+d:p.className+=" icon-"+d,p.dataset.network=d,p.title=a,t.appendChild(p)}t.addEventListener("click",(function(t){if(e(t.target,".need-share-button_link"))return t.preventDefault(),t.stopPropagation(),n.share[t.target.dataset.network](o),!1})),o.appendChild(t)}}(r),setTimeout((function(){r.classList.add("need-share-button-opened")}),1)))}}))}}();