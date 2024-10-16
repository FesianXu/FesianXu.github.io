/*!
 * 漢字標準格式 v3.3.0 | MIT License | css.hanzi.co
 * Han.css: the CSS typography framework optimised for Hanzi
 */
!function(e,n){
// CommonJS
"object"==typeof module&&"object"==typeof module.exports?module.exports=n(e,!0):"function"==typeof define&&define.amd?define((function(){return n(e,!0)})):n(e)}("undefined"!=typeof window?window:this,(function(e,n){"use strict";var t=e.document,i=t.documentElement,r=t.body,a="3.3.0",o=function(e,n){return new o.fn.init(e,n)};o.version=a,o.fn=o.prototype={version:a,constructor:o,
// Body as the default target context
context:r,
// Root element as the default condition
condition:i,
// Default rendering routine
routine:[
// Initialise the condition with feature-detecting
// classes (Modernizr-alike), binding onto the root
// element, possibly `<html>`.
"initCond",
// Address element normalisation
"renderElem",
// Handle Biaodian
/* 'jinzify', */
"renderJiya","renderHanging",
// Address Biaodian correction
"correctBiaodian",
// Address Hanzi and Western script mixed spacing
"renderHWS",
// Address presentational correction to combining ligatures
"substCombLigaWithPUA"],init:function(){return arguments[0]&&(this.context=arguments[0]),arguments[1]&&(this.condition=arguments[1]),this},setRoutine:function(e){return Array.isArray(e)&&(this.routine=e),this},
// Note that the routine set up here will execute
// only once. The method won't alter the routine in
// the instance or in the prototype chain.
render:function(e){var n=this;return(e=Array.isArray(e)?e:this.routine).forEach((function(e){"string"==typeof e&&"function"==typeof n[e]?n[e]():Array.isArray(e)&&"function"==typeof n[e[0]]&&n[e.shift()].apply(n,e)})),this}},o.fn.init.prototype=o.fn
/**
 * Shortcut for `render()` under the default
 * situation.
 *
 * Once initialised, replace `Han.init` with the
 * instance for future usage.
 */,o.init=function(){return o.init=o().render()};var c,s,d,u,l,h,p,f,g,b,m,v,y,x,E,w,N,C,T,S,L,k,z,I,M,R,j,A,P,H={
/**
   * Western punctuation (西文標點符號)
   */
punct:{base:"[…,.;:!?‽_]",sing:"[‐-—…]",middle:"[\\/~\\-&‐-—_]",open:"['\"‘“\\(\\[¡¿⸘«‹‚“„]",close:"['\"”’\\)\\]»›‛”‟]",end:"['\"”’\\)\\]»›‛”‟‼‽⁇-⁉,.;:!?]"},
/**
   * CJK biaodian (CJK標點符號)
   */
biaodian:{base:"[︰．、，。：；？！ー]",liga:"[—…⋯]",middle:"[·＼／－゠＆・＿]",open:"[「『《〈（〔［｛【〖]",close:"[」』》〉）〕］｝】〗]",end:"[」』》〉）〕］｝】〗︰．、，。：；？！ー]"},
/**
   * CJK-related blocks (CJK相關字符區段)
   *
   *  1. 中日韓統一意音文字：[\u4E00-\u9FFF]
         Basic CJK unified ideographs
   *  2. 擴展-A區：[\u3400-\u4DB5]
         Extended-A
   *  3. 擴展-B區：[\u20000-\u2A6D6]（[\uD840-\uD869][\uDC00-\uDED6]）
         Extended-B
   *  4. 擴展-C區：[\u2A700-\u2B734]（\uD86D[\uDC00-\uDF3F]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD869[\uDF00-\uDFFF]）
         Extended-C
   *  5. 擴展-D區：[\u2B740-\u2B81D]（急用漢字，\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1F]）
         Extended-D
   *  6. 擴展-E區：[\u2B820-\u2F7FF]（暫未支援）
         Extended-E (not supported yet)
   *  7. 擴展-F區（暫未支援）
         Extended-F (not supported yet)
   *  8. 筆畫區：[\u31C0-\u31E3]
         Strokes
   *  9. 意音數字「〇」：[\u3007]
         Ideographic number zero
   * 10. 相容意音文字及補充：[\uF900-\uFAFF][\u2F800-\u2FA1D]（不使用）
         Compatibility ideograph and supplement (not supported)

         12 exceptions:
         [\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]

         https://zh.wikipedia.org/wiki/中日韓統一表意文字#cite_note-1

   * 11. 康熙字典及簡化字部首：[\u2F00-\u2FD5\u2E80-\u2EF3]
         Kangxi and supplement radicals
   * 12. 意音文字描述字元：[\u2FF0-\u2FFA]
         Ideographic description characters
   */
hanzi:{base:"[一-鿿㐀-䶵㇀-㇣〇﨎﨏﨑﨓﨔﨟﨡﨣﨤﨧-﨩]|[\ud800-\udbff][\udc00-\udfff]",desc:"[⿰-⿺]",radical:"[⼀-⿕⺀-⻳]"},
/**
   * Latin script blocks (拉丁字母區段)
   *
   * 1. 基本拉丁字母：A-Za-z
        Basic Latin
   * 2. 阿拉伯數字：0-9
        Digits
   * 3. 補充-1：[\u00C0-\u00FF]
        Latin-1 supplement
   * 4. 擴展-A區：[\u0100-\u017F]
        Extended-A
   * 5. 擴展-B區：[\u0180-\u024F]
        Extended-B
   * 5. 擴展-C區：[\u2C60-\u2C7F]
        Extended-C
   * 5. 擴展-D區：[\uA720-\uA7FF]
        Extended-D
   * 6. 附加區：[\u1E00-\u1EFF]
        Extended additional
   * 7. 變音組字符：[\u0300-\u0341\u1DC0-\u1DFF]
        Combining diacritical marks
   */
latin:{base:"[A-Za-z0-9À-ÿĀ-ſƀ-ɏⱠ-Ɀ꜠-ꟿḀ-ỿ]",combine:"[̀-́᷀-᷿]"},
/**
   * Elli̱niká (Greek) script blocks (希臘字母區段)
   *
   * 1. 希臘字母及擴展：[\u0370–\u03FF\u1F00-\u1FFF]
        Basic Greek & Greek Extended
   * 2. 阿拉伯數字：0-9
        Digits
   * 3. 希臘字母變音組字符：[\u0300-\u0345\u1DC0-\u1DFF]
        Combining diacritical marks
   */
ellinika:{base:"[0-9Ͱ-Ͽἀ-῿]",combine:"[̀-᷀ͅ-᷿]"},
/**
   * Kirillica (Cyrillic) script blocks (西里爾字母區段)
   *
   * 1. 西里爾字母及補充：[\u0400-\u0482\u048A-\u04FF\u0500-\u052F]
        Basic Cyrillic and supplement
   * 2. 擴展B區：[\uA640-\uA66E\uA67E-\uA697]
        Extended-B
   * 3. 阿拉伯數字：0-9
        Digits
   * 4. 西里爾字母組字符：[\u0483-\u0489\u2DE0-\u2DFF\uA66F-\uA67D\uA69F]（位擴展A、B區）
        Cyrillic combining diacritical marks (in extended-A, B)
   */
kirillica:{base:"[0-9Ѐ-҂Ҋ-ӿԀ-ԯꙀ-ꙮ꙾-ꚗ]",combine:"[҃-҉ⷠ-ⷿ꙯-꙽ꚟ]"},
/**
   * Kana (假名)
   *
   * 1. 日文假名：[\u30A2\u30A4\u30A6\u30A8\u30AA-\u30FA\u3042\u3044\u3046\u3048\u304A-\u3094\u309F\u30FF]
        Japanese Kana
   * 2. 假名補充[\u1B000\u1B001]（\uD82C[\uDC00-\uDC01]）
        Kana supplement
   * 3. 日文假名小寫：[\u3041\u3043\u3045\u3047\u3049\u30A1\u30A3\u30A5\u30A7\u30A9\u3063\u3083\u3085\u3087\u308E\u3095\u3096\u30C3\u30E3\u30E5\u30E7\u30EE\u30F5\u30F6\u31F0-\u31FF]
        Japanese small Kana
   * 4. 假名組字符：[\u3099-\u309C]
        Kana combining characters
   * 5. 半形假名：[\uFF66-\uFF9F]
        Halfwidth Kana
   * 6. 符號：[\u309D\u309E\u30FB-\u30FE]
        Marks
   */
kana:{base:"[アイウエオ-ヺあいうえお-ゔゟヿ]|\ud82c[\udc00-\udc01]",small:"[ぁぃぅぇぉァィゥェォっゃゅょゎゕゖッャュョヮヵヶㇰ-ㇿ]",combine:"[゙-゜]",half:"[ｦ-ﾟ]",mark:"[゠ゝゞ・-ヾ]"},
/**
   * Eonmun (Hangul, 諺文)
   *
   * 1. 諺文音節：[\uAC00-\uD7A3]
        Eonmun (Hangul) syllables
   * 2. 諺文字母：[\u1100-\u11FF\u314F-\u3163\u3131-\u318E\uA960-\uA97C\uD7B0-\uD7FB]
        Eonmun (Hangul) letters
   * 3. 半形諺文字母：[\uFFA1-\uFFDC]
        Halfwidth Eonmun (Hangul) letters
   */
eonmun:{base:"[가-힣]",letter:"[ᄀ-ᇿㅏ-ㅣㄱ-ㆎꥠ-ꥼힰ-ퟻ]",half:"[ﾡ-ￜ]"},
/**
   * Zhuyin (注音符號, Mandarin & Dialect Phonetic Symbols)
   *
   * 1. 國語注音、方言音符號：[\u3105-\u312D][\u31A0-\u31BA]
        Bopomofo phonetic symbols
   * 2. 平上去聲調號：[\u02D9\u02CA\u02C5\u02C7\u02EA\u02EB\u02CB] （**註：**國語三聲包含乙個不合規範的符號）
        Level, rising, departing tones
   * 3. 入聲調號：[\u31B4-\u31B7][\u0358\u030d]?
        Checked (entering) tones
   */
zhuyin:{base:"[ㄅ-ㄭㆠ-ㆺ]",initial:"[ㄅ-ㄙㄪ-ㄬㆠ-ㆣ]",medial:"[ㄧ-ㄩ]",final:"[ㄚ-ㄩㄭㆤ-ㆳㆸ-ㆺ]",tone:"[˙ˊ˅ˇˋ˪˫]",checked:"[ㆴ-ㆷ][̍͘]?"}},O=(c="[\\x20\\t\\r\\n\\f]",s=H.punct.open,H.punct.close,d=H.punct.end,u=H.punct.middle,l=H.punct.sing,h=s+"|"+d+"|"+u,p=H.biaodian.open,f=H.biaodian.close,g=H.biaodian.end,b=H.biaodian.middle,m=H.biaodian.liga+"{2}",v=p+"|"+g+"|"+b,y=H.kana.base+H.kana.combine+"?",x=H.kana.small+H.kana.combine+"?",E=H.kana.half,w=H.eonmun.base+"|"+H.eonmun.letter,N=H.eonmun.half,C=H.hanzi.base+"|"+H.hanzi.desc+"|"+H.hanzi.radical+"|"+y,T=H.ellinika.combine,S=H.latin.base+T+"*",L=H.ellinika.base+T+"*",k=H.kirillica.combine,z=H.kirillica.base+k+"*",M=C+"|(?:"+(I=S+"|"+L+"|"+z)+"|['’])+",R=H.zhuyin.initial,j=H.zhuyin.medial,A=H.zhuyin.final,P=H.zhuyin.tone+"|"+H.zhuyin.checked,{
/* Character-level selector (字級選擇器)
     */
char:{punct:{all:new RegExp("("+h+")","g"),open:new RegExp("("+s+")","g"),end:new RegExp("("+d+")","g"),sing:new RegExp("("+l+")","g")},biaodian:{all:new RegExp("("+v+")","g"),open:new RegExp("("+p+")","g"),close:new RegExp("("+f+")","g"),end:new RegExp("("+g+")","g"),liga:new RegExp("("+m+")","g")},hanzi:new RegExp("("+C+")","g"),latin:new RegExp("("+S+")","ig"),ellinika:new RegExp("("+L+")","ig"),kirillica:new RegExp("("+z+")","ig"),kana:new RegExp("("+y+"|"+x+"|"+E+")","g"),eonmun:new RegExp("("+w+"|"+N+")","g")},
/* Word-level selectors (詞級選擇器)
     */
group:{biaodian:[new RegExp("(("+v+"){2,})","g"),new RegExp("("+m+p+")","g")],punct:null,hanzi:new RegExp("("+C+")+","g"),western:new RegExp("("+S+"|"+L+"|"+z+"|"+h+")+","ig"),kana:new RegExp("("+y+"|"+x+"|"+E+")+","g"),eonmun:new RegExp("("+w+"|"+N+"|"+h+")+","g")},
/* Punctuation Rules (禁則)
     */
jinze:{hanging:new RegExp(c+"*([、，。．])(?!"+g+")","ig"),touwei:new RegExp("("+p+"+)("+M+")("+g+"+)","ig"),tou:new RegExp("("+p+"+)("+M+")","ig"),wei:new RegExp("("+M+")("+g+"+)","ig"),middle:new RegExp("("+M+")("+b+")("+M+")","ig")},zhuyin:{form:new RegExp("^˙?("+R+")?("+j+")?("+A+")?("+P+")?$"),diao:new RegExp("("+P+")","g")},
/* Hanzi and Western mixed spacing (漢字西文混排間隙)
     * - Basic mode
     * - Strict mode
     */
hws:{base:[new RegExp("("+C+")("+I+"|"+s+")","ig"),new RegExp("("+I+"|"+d+")("+C+")","ig")],strict:[new RegExp("("+C+")"+c+"?("+I+"|"+s+")","ig"),new RegExp("("+I+"|"+d+")"+c+"?("+C+")","ig")]},
// The feature displays the following characters
// in its variant form for font consistency and
// presentational reason. Meanwhile, this won't
// alter the original character in the DOM.
"display-as":{"ja-font-for-hant":[
// '夠 够',
"查 査","啟 啓","鄉 鄕","值 値","污 汚"],"comb-liga-pua":[["a[̍͘]","󰁡"],["e[̍͘]","󰁥"],["i[̍͘]","󰁩"],["o[̍͘]","󰁯"],["u[̍͘]","󰁵"],["ㆴ[̍͘]","󳆴"],["ㆵ[̍͘]","󳆵"],["ㆶ[̍͘]","󳆶"],["ㆷ[̍͘]","󳆷"]],"comb-liga-vowel":[["a[̍͘]","󰁡"],["e[̍͘]","󰁥"],["i[̍͘]","󰁩"],["o[̍͘]","󰁯"],["u[̍͘]","󰁵"]],"comb-liga-zhuyin":[["ㆴ[̍͘]","󳆴"],["ㆵ[̍͘]","󳆵"],["ㆶ[̍͘]","󳆶"],["ㆷ[̍͘]","󳆷"]]},
// The feature actually *converts* the character
// in the DOM for semantic reason.
// Note that this could be aggressive.
"inaccurate-char":[["[•‧]","·"],["⋯⋯","……"],["──","——"],["‵","‘"],["′","’"],["‶","“"],["″","”"]]});o.UNICODE=H,o.TYPESET=O,
// Aliases
o.UNICODE.cjk=o.UNICODE.hanzi,o.UNICODE.greek=o.UNICODE.ellinika,o.UNICODE.cyrillic=o.UNICODE.kirillica,o.UNICODE.hangul=o.UNICODE.eonmun,o.UNICODE.zhuyin.ruyun=o.UNICODE.zhuyin.checked,o.TYPESET.char.cjk=o.TYPESET.char.hanzi,o.TYPESET.char.greek=o.TYPESET.char.ellinika,o.TYPESET.char.cyrillic=o.TYPESET.char.kirillica,o.TYPESET.char.hangul=o.TYPESET.char.eonmun,o.TYPESET.group.hangul=o.TYPESET.group.eonmun,o.TYPESET.group.cjk=o.TYPESET.group.hanzi;var B,D={
/**
   * Query selectors which return arrays of the resulted
   * node lists.
   */
id:function(e,n){return(n||t).getElementById(e)},tag:function(e,n){return this.makeArray((n||t).getElementsByTagName(e))},qs:function(e,n){return(n||t).querySelector(e)},qsa:function(e,n){return this.makeArray((n||t).querySelectorAll(e))},parent:function(e,n){return n?function(){if("function"==typeof D.matches){for(;!D.matches(e,n);){if(!e||e===t.documentElement){e=void 0;break}e=e.parentNode}return e}}():e?e.parentNode:void 0},
/**
   * Create a document fragment, a text node with text
   * or an element with/without classes.
   */
create:function(e,n){var i="!"===e?t.createDocumentFragment():""===e?t.createTextNode(n||""):t.createElement(e);try{n&&(i.className=n)}catch(e){}return i},
/**
   * Clone a DOM node (text, element or fragment) deeply
   * or childlessly.
   */
clone:function(e,n){return e.cloneNode("boolean"!=typeof n||n)},
/**
   * Remove a node (text, element or fragment).
   */
remove:function(e){return e.parentNode.removeChild(e)},
/**
   * Set attributes all in once with an object.
   */
setAttr:function(e,n){if("object"==typeof n){var t=n.length;
// Native `NamedNodeMap``:
if("object"==typeof n[0]&&"name"in n[0])for(var i=0;i<t;i++)void 0!==n[i].value&&e.setAttribute(n[i].name,n[i].value);
// Plain object:
else for(var r in n)n.hasOwnProperty(r)&&void 0!==n[r]&&e.setAttribute(r,n[r]);return e}},
/**
   * Indicate whether or not the given node is an
   * element.
   */
isElmt:function(e){return e&&e.nodeType===Node.ELEMENT_NODE},
/**
   * Indicate whether or not the given node should
   * be ignored (`<wbr>` or comments).
   */
isIgnorable:function(e){return!!e&&("WBR"===e.nodeName||e.nodeType===Node.COMMENT_NODE)},
/**
   * Convert array-like objects into real arrays.
   */
makeArray:function(e){return Array.prototype.slice.call(e)},
/**
   * Extend target with an object.
   */
extend:function(e,n){if(("object"==typeof e||"function"==typeof e)&&"object"==typeof n)for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}},F=
/*!
 * Fibre.js v0.2.1 | MIT License | github.com/ethantw/fibre.js
 * Based on findAndReplaceDOMText
 */
function(n){var t="0.2.1",i=n.NON_INLINE_PROSE,r=n.PRESETS.prose.filterElements,a=(e||{}).document||void 0;function o(e,n,t){var i=Element.prototype,r=i.matches||i.mozMatchesSelector||i.msMatchesSelector||i.webkitMatchesSelector;return e instanceof Element?r.call(e,n):!(!t||!/^[39]$/.test(e.nodeType))}if(void 0===a)throw new Error("Fibre requires a DOM-supported environment.");var c=function(e,n){return new c.fn.init(e,n)};return c.version=t,c.matches=o,c.fn=c.prototype={constructor:c,version:t,finder:[],context:void 0,portionMode:"retain",selector:{},preset:"prose",init:function(e,n){if(n&&(this.preset=null),this.selector={context:null,filter:[],avoid:[],boundary:[]},!e)throw new Error("A context is required for Fibre to initialise.");return e instanceof Node?e instanceof Document?this.context=e.body||e:this.context=e:"string"==typeof e&&(this.context=a.querySelector(e),this.selector.context=e),this},filterFn:function(e){var n=this.selector.filter.join(", ")||"*",t=this.selector.avoid.join(", ")||null,i=o(e,n,!0)&&!o(e,t);return"prose"===this.preset?r(e)&&i:i},boundaryFn:function(e){var n=o(e,this.selector.boundary.join(", ")||null);return"prose"===this.preset&&i(e)||n},filter:function(e){return"string"==typeof e&&this.selector.filter.push(e),this},endFilter:function(e){return e?this.selector.filter=[]:this.selector.filter.pop(),this},avoid:function(e){return"string"==typeof e&&this.selector.avoid.push(e),this},endAvoid:function(e){return e?this.selector.avoid=[]:this.selector.avoid.pop(),this},addBoundary:function(e){return"string"==typeof e&&this.selector.boundary.push(e),this},removeBoundary:function(){return this.selector.boundary=[],this},setMode:function(e){return this.portionMode="first"===e?"first":"retain",this},replace:function(e,t){var i=this;return i.finder.push(n(i.context,{find:e,replace:t,filterElements:function(e){return i.filterFn(e)},forceContext:function(e){return i.boundaryFn(e)},portionMode:i.portionMode})),i},wrap:function(e,t){var i=this;return i.finder.push(n(i.context,{find:e,wrap:t,filterElements:function(e){return i.filterFn(e)},forceContext:function(e){return i.boundaryFn(e)},portionMode:i.portionMode})),i},revert:function(e){var n=this.finder.length;e=Number(e)||(0===e?Number(0):"all"===e?n:1);if(void 0===n||0===n)return this;e>n&&(e=n);for(var t=e;t>0;t--)this.finder.pop().revert();return this}},
// Deprecated API(s)
c.fn.filterOut=c.fn.avoid,
// Make sure init() inherit from Fibre()
c.fn.init.prototype=c.fn,c}(
/**
 * findAndReplaceDOMText v 0.4.3
 * @author James Padolsey http://james.padolsey.com
 * @license http://unlicense.org/UNLICENSE
 *
 * Matches the text of a DOM node against a regular expression
 * and replaces each match (or node-separated portions of the match)
 * in the specified element.
 */
function(){var e="first",n=t,i={}.hasOwnProperty;function r(){
// Try deprecated arg signature first:
return a.apply(null,arguments)||o.apply(null,arguments)}function a(e,n,t,i,a){if(n&&!n.nodeType&&arguments.length<=2)return!1;var c,s="function"==typeof t;s&&(c=t,t=function(e,n){return c(e.text,n.startIndex)});
// Awkward support for deprecated argument signature (<0.4.0)
var d=o(n,{find:e,wrap:s?null:t,replace:s?t:"$"+(i||"&"),prepMatch:function(e,n){
// Support captureGroup (a deprecated feature)
if(!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";if(i>0){var t=e[i];e.index+=e[0].indexOf(t),e[0]=t}return e.endIndex=e.index+e[0].length,e.startIndex=e.index,e.index=n,e},filterElements:a});return r.revert=function(){return d.revert()},!0}
/** 
   * findAndReplaceDOMText
   * 
   * Locates matches and replaces with replacementNode
   *
   * @param {Node} node Element or Text node to search within
   * @param {RegExp} options.find The regular expression to match
   * @param {String|Element} [options.wrap] A NodeName, or a Node to clone
   * @param {String|Function} [options.replace='$&'] What to replace each match with
   * @param {Function} [options.filterElements] A Function to be called to check whether to
   *	process an element. (returning true = process element,
   *	returning false = avoid element)
   */function o(e,n){return new c(e,n)}
/**
   * Finder -- encapsulates logic to find and replace.
   */
function c(e,n){var t=n.preset&&r.PRESETS[n.preset];if(n.portionMode=n.portionMode||"retain",t)for(var a in t)i.call(t,a)&&!i.call(n,a)&&(n[a]=t[a]);this.node=e,this.options=n,
// ENable match-preparation method to be passed as option:
this.prepMatch=n.prepMatch||this.prepMatch,this.reverts=[],this.matches=this.search(),this.matches.length&&this.processMatches()}return r.NON_PROSE_ELEMENTS={br:1,hr:1,
// Media / Source elements:
script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,
// Input elements
input:1,textarea:1,select:1,option:1,optgroup:1,button:1},r.NON_CONTIGUOUS_PROSE_ELEMENTS={
// Elements that will not contain prose or block elements where we don't
// want prose to be matches across element borders:
// Block Elements
address:1,article:1,aside:1,blockquote:1,dd:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,nav:1,noscript:1,ol:1,output:1,p:1,pre:1,section:1,ul:1,
// Other misc. elements that are not part of continuous inline prose:
br:1,li:1,summary:1,dt:1,details:1,rp:1,rt:1,rtc:1,
// Media / Source elements:
script:1,style:1,img:1,video:1,audio:1,canvas:1,svg:1,map:1,object:1,
// Input elements
input:1,textarea:1,select:1,option:1,optgroup:1,button:1,
// Table related elements:
table:1,tbody:1,thead:1,th:1,tr:1,td:1,caption:1,col:1,tfoot:1,colgroup:1},r.NON_INLINE_PROSE=function(e){return i.call(r.NON_CONTIGUOUS_PROSE_ELEMENTS,e.nodeName.toLowerCase())}
// Presets accessed via `options.preset` when calling findAndReplaceDOMText():
,r.PRESETS={prose:{forceContext:r.NON_INLINE_PROSE,filterElements:function(e){return!i.call(r.NON_PROSE_ELEMENTS,e.nodeName.toLowerCase())}}},r.Finder=c,c.prototype={
/**
     * Searches for all matches that comply with the instance's 'match' option
     */
search:function(){var e,n=0,t=0,i=this.options.find,r=this.getAggregateText(),a=[],o=this;return i="string"==typeof i?RegExp(String(i).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1"),"g"):i,function r(c){for(var s=0,d=c.length;s<d;++s){var u=c[s];if("string"==typeof u){if(i.global)for(;e=i.exec(u);)a.push(o.prepMatch(e,n++,t));else(e=u.match(i))&&a.push(o.prepMatch(e,0,t));t+=u.length}else
// Deal with nested contexts: (recursive)
r(u)}}(r),a},
/**
     * Prepares a single match with useful meta info:
     */
prepMatch:function(e,n,t){if(!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");return e.endIndex=t+e.index+e[0].length,e.startIndex=t+e.index,e.index=n,e},
/**
     * Gets aggregate text within subject node
     */
getAggregateText:function(){var e=this.options.filterElements,n=this.options.forceContext;
/**
       * Gets aggregate text of a node without resorting
       * to broken innerText/textContent
       */
return function t(i,r){if(3===i.nodeType)return[i.data];if(e&&!e(i))return[];r=[""];var a=0;if(i=i.firstChild)do{if(3!==i.nodeType){var o=t(i);n&&1===i.nodeType&&(!0===n||n(i))?(r[++a]=o,r[++a]=""):("string"==typeof o[0]&&(
// Bridge nested text-node data so that they're
// not considered their own contexts:
// I.e. ['some', ['thing']] -> ['something']
r[a]+=o.shift()),o.length&&(r[++a]=o,r[++a]=""))}else r[a]+=i.data}while(i=i.nextSibling);return r}(this.node)},
/** 
     * Steps through the target node, looking for matches, and
     * calling replaceFn when a match is found.
     */
processMatches:function(){var e,n,t,i=this.matches,r=this.node,a=this.options.filterElements,o=[],c=r,s=i.shift(),d=0,u=0,l=[r];e:for(;;){if(3===c.nodeType&&(!n&&c.length+d>=s.endIndex?
// We've found the ending
n={node:c,index:u++,text:c.data.substring(s.startIndex-d,s.endIndex-d),indexInMatch:d-s.startIndex,indexInNode:s.startIndex-d,// always zero for end-portions
endIndexInNode:s.endIndex-d,isEnd:!0}:e&&
// Intersecting node
o.push({node:c,index:u++,text:c.data,indexInMatch:d-s.startIndex,indexInNode:0}),!e&&c.length+d>s.startIndex&&(
// We've found the match start
e={node:c,index:u++,indexInMatch:0,indexInNode:s.startIndex-d,endIndexInNode:s.endIndex-d,text:c.data.substring(s.startIndex-d,s.endIndex-d)}),d+=c.data.length),t=1===c.nodeType&&a&&!a(c),e&&n){if(c=this.replaceMatch(s,e,o,n),
// processMatches has to return the node that replaced the endNode
// and then we step back so we can continue from the end of the 
// match:
d-=n.node.data.length-n.endIndexInNode,e=null,n=null,o=[],u=0,!(s=i.shift()))break;// no more matches
}else if(!t&&(c.firstChild||c.nextSibling)){
// Move down or forward:
c.firstChild?(l.push(c),c=c.firstChild):c=c.nextSibling;continue}
// Move forward or up:
for(;;){if(c.nextSibling){c=c.nextSibling;break}if((c=l.pop())===r)break e}}},
/**
     * Reverts ... TODO
     */
revert:function(){
// Reversion occurs backwards so as to avoid nodes subsequently
// replaced during the matching phase (a forward process):
for(var e=this.reverts.length;e--;)this.reverts[e]();this.reverts=[]},prepareReplacementString:function(n,t,i,r){var a=this.options.portionMode;return a===e&&t.indexInMatch>0?"":(n=n.replace(/\$(\d+|&|`|')/g,(function(e,n){var t;switch(n){case"&":t=i[0];break;case"`":t=i.input.substring(0,i.startIndex);break;case"'":t=i.input.substring(i.endIndex);break;default:t=i[+n]}return t})),a===e?n:t.isEnd?n.substring(t.indexInMatch):n.substring(t.indexInMatch,t.indexInMatch+t.text.length))},getPortionReplacementNode:function(e,t,i){var r=this.options.replace||"$&",a=this.options.wrap;if(a&&a.nodeType){
// Wrapper has been provided as a stencil-node for us to clone:
var o=n.createElement("div");o.innerHTML=a.outerHTML||(new XMLSerializer).serializeToString(a),a=o.firstChild}if("function"==typeof r)return(r=r(e,t,i))&&r.nodeType?r:n.createTextNode(String(r));var c="string"==typeof a?n.createElement(a):a;return(r=n.createTextNode(this.prepareReplacementString(r,e,t,i))).data&&c?(c.appendChild(r),c):r},replaceMatch:function(e,t,i,r){var a,o,c=t.node,s=r.node;if(c===s){var d=c;t.indexInNode>0&&(
// Add `before` text node (before the match)
a=n.createTextNode(d.data.substring(0,t.indexInNode)),d.parentNode.insertBefore(a,d));
// Create the replacement node:
var u=this.getPortionReplacementNode(r,e);return d.parentNode.insertBefore(u,d),r.endIndexInNode<d.length&&(// ?????
// Add `after` text node (after the match)
o=n.createTextNode(d.data.substring(r.endIndexInNode)),d.parentNode.insertBefore(o,d)),d.parentNode.removeChild(d),this.reverts.push((function(){a===u.previousSibling&&a.parentNode.removeChild(a),o===u.nextSibling&&o.parentNode.removeChild(o),u.parentNode.replaceChild(d,u)})),u}
// Replace matchStartNode -> [innerMatchNodes...] -> matchEndNode (in that order)
a=n.createTextNode(c.data.substring(0,t.indexInNode)),o=n.createTextNode(s.data.substring(r.endIndexInNode));for(var l=this.getPortionReplacementNode(t,e),h=[],p=0,f=i.length;p<f;++p){var g=i[p],b=this.getPortionReplacementNode(g,e);g.node.parentNode.replaceChild(b,g.node),this.reverts.push(function(e,n){return function(){n.parentNode.replaceChild(e.node,n)}}(g,b)),h.push(b)}var m=this.getPortionReplacementNode(r,e);return c.parentNode.insertBefore(a,c),c.parentNode.insertBefore(l,c),c.parentNode.removeChild(c),s.parentNode.insertBefore(m,s),s.parentNode.insertBefore(o,s),s.parentNode.removeChild(s),this.reverts.push((function(){a.parentNode.removeChild(a),l.parentNode.replaceChild(c,l),o.parentNode.removeChild(o),m.parentNode.replaceChild(s,m)})),m}},r}()),q=((B=D.create("div")).appendChild(D.create("","0-")),B.appendChild(D.create("","2")),B.normalize(),2!==B.firstChild.length);function U(e){return"function"==typeof e||e instanceof Element?e:void 0}function _(e){var n=0===e.index&&e.isEnd?"biaodian cjk":"biaodian cjk portion "+(0===e.index?"is-first":e.isEnd?"is-end":"is-inner"),t=D.create("h-char-group",n);return t.innerHTML=e.text,t}function Y(e){var n=D.create("div"),t=e.charCodeAt(0).toString(16);return n.innerHTML='<h-char unicode="'+t+'" class="biaodian cjk '+function(e){return e.match(O.char.biaodian.open)?"bd-open":e.match(O.char.biaodian.close)?"bd-close bd-end":e.match(O.char.biaodian.end)?/(?:\u3001|\u3002|\uff0c)/i.test(e)?"bd-end bd-cop":"bd-end":e.match(new RegExp(H.biaodian.liga))?"bd-liga":e.match(new RegExp(H.biaodian.middle))?"bd-middle":""}(e)+'">'+e+"</h-char>",n.firstChild}D.extend(F.fn,{normalize:function(){return q&&this.context.normalize(),this},
// Force punctuation & biaodian typesetting rules to be applied.
jinzify:function(e){return this.filter(e||null).avoid("h-jinze").replace(O.jinze.touwei,(function(e,n){var t=D.create("h-jinze","touwei");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""})).replace(O.jinze.wei,(function(e,n){var t=D.create("h-jinze","wei");return t.innerHTML=n[0],0===e.index?t:""})).replace(O.jinze.tou,(function(e,n){var t=D.create("h-jinze","tou");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""})).replace(O.jinze.middle,(function(e,n){var t=D.create("h-jinze","middle");return t.innerHTML=n[0],0===e.index&&e.isEnd||1===e.index?t:""})).endAvoid().endFilter()},groupify:function(e){e=D.extend({biaodian:!1,
//punct: false,
hanzi:!1,// Includes Kana
kana:!1,eonmun:!1,western:!1},e||{});return this.avoid("h-word, h-char-group"),e.biaodian&&this.replace(O.group.biaodian[0],_).replace(O.group.biaodian[1],_),(e.hanzi||e.cjk)&&this.wrap(O.group.hanzi,D.clone(D.create("h-char-group","hanzi cjk"))),e.western&&this.wrap(O.group.western,D.clone(D.create("h-word","western"))),e.kana&&this.wrap(O.group.kana,D.clone(D.create("h-char-group","kana"))),(e.eonmun||e.hangul)&&this.wrap(O.group.eonmun,D.clone(D.create("h-word","eonmun hangul"))),this.endAvoid(),this},charify:function(e){return(e=D.extend({avoid:!0,biaodian:!1,punct:!1,hanzi:!1,// Includes Kana
latin:!1,ellinika:!1,kirillica:!1,kana:!1,eonmun:!1},e||{})).avoid&&this.avoid("h-char"),e.biaodian&&this.replace(O.char.biaodian.all,U(e.biaodian)||function(e){return Y(e.text)}).replace(O.char.biaodian.liga,U(e.biaodian)||function(e){return Y(e.text)}),(e.hanzi||e.cjk)&&this.wrap(O.char.hanzi,U(e.hanzi||e.cjk)||D.clone(D.create("h-char","hanzi cjk"))),e.punct&&this.wrap(O.char.punct.all,U(e.punct)||D.clone(D.create("h-char","punct"))),e.latin&&this.wrap(O.char.latin,U(e.latin)||D.clone(D.create("h-char","alphabet latin"))),(e.ellinika||e.greek)&&this.wrap(O.char.ellinika,U(e.ellinika||e.greek)||D.clone(D.create("h-char","alphabet ellinika greek"))),(e.kirillica||e.cyrillic)&&this.wrap(O.char.kirillica,U(e.kirillica||e.cyrillic)||D.clone(D.create("h-char","alphabet kirillica cyrillic"))),e.kana&&this.wrap(O.char.kana,U(e.kana)||D.clone(D.create("h-char","kana"))),(e.eonmun||e.hangul)&&this.wrap(O.char.eonmun,U(e.eonmun||e.hangul)||D.clone(D.create("h-char","eonmun hangul"))),this.endAvoid(),this}}),D.extend(o,{isNodeNormalizeNormal:q,find:F,createBDGroup:_,createBDChar:Y}),D.matches=o.find.matches,["setMode","wrap","replace","revert","addBoundary","removeBoundary","avoid","endAvoid","filter","endFilter","jinzify","groupify","charify"].forEach((function(e){o.fn[e]=function(){return this.finder||(
// Share the same selector
this.finder=o.find(this.context)),this.finder[e](arguments[0],arguments[1]),this}}));var W={};function V(e,n){var t,i=D.create("canvas");return i.width="50",i.height="20",i.style.display="none",r.appendChild(i),(t=i.getContext("2d")).textBaseline="top",t.font="15px "+n+", sans-serif",t.fillStyle="black",t.strokeStyle="black",t.fillText(e,0,0),{node:i,context:t,remove:function(){D.remove(i,r)}}}function Z(e,n){var t,i=e.context,r=n.context;try{for(var a=1;a<=20;a++)for(var o=1;o<=50;o++){if(void 0===t&&i.getImageData(o,a,1,1).data[3]!==r.getImageData(o,a,1,1).data[3]){t=!1;break}if("boolean"==typeof t)break;50===o&&20===a&&void 0===t&&(t=!0)}
// Remove and clean from memory
return e.remove(),n.remove(),e=null,n=null,t}catch(e){}return!1}W.writeOnCanvas=V,W.compareCanvases=Z,W.detectFont=function(e,n,t){return n=V(t=t||"辭Q",n=n||"sans-serif"),!Z(e=V(t,e),n)},W.support=function(){var n,a="Webkit Moz ms".split(" "),o=D.create("h-test");
// Create an element for feature detecting
// (in `testCSSProp`)
function c(e){var n,t=e.charAt(0).toUpperCase()+e.slice(1);return(e+" "+a.join(t+" ")+t).split(" ").forEach((function(e){"string"==typeof o.style[e]&&(n=!0)})),n||!1}function s(e,n){var t,a,o,c=r||D.create("body"),s=D.create("div"),d=r?s:c;n="function"==typeof n?n:function(){};return t=["<style>",e,"</style>"].join(""),d.innerHTML+=t,c.appendChild(s),r||(c.style.background="",c.style.overflow="hidden",o=i.style.overflow,i.style.overflow="hidden",i.appendChild(c)),
// Callback
a=n(d,e),
// Remove the injected scope
D.remove(d),r||(i.style.overflow=o),!!a}function d(n,i){var r;return e.getComputedStyle?r=t.defaultView.getComputedStyle(n,null).getPropertyValue(i):n.currentStyle&&(
// for IE
r=n.currentStyle[i]),r}return{columnwidth:c("columnWidth"),fontface:(s('@font-face { font-family: font; src: url("//"); }',(function(e,t){var i=D.qsa("style",e)[0],r=i.sheet||i.styleSheet,a=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";n=/src/i.test(a)&&0===a.indexOf(t.split(" ")[0])})),n),ruby:function(){var e,n=D.create("ruby"),t=D.create("rt"),r=D.create("rp");return n.appendChild(r),n.appendChild(t),i.appendChild(n),
// Browsers that support ruby hide the `<rp>` via `display: none`
e="none"===d(r,"display")||
// but in IE, `<rp>` has `display: inline`, so the test needs other conditions:
"ruby"===d(n,"display")&&"ruby-text"===d(t,"display"),
// Remove and clean from memory
i.removeChild(n),n=null,t=null,r=null,e}(),"ruby-display":function(){var e=D.create("div");return e.innerHTML='<h-test-a style="display: ruby;"></h-test-a><h-test-b style="display: ruby-text-container;"></h-test-b>',"ruby"===e.querySelector("h-test-a").style.display&&"ruby-text-container"===e.querySelector("h-test-b").style.display}(),"ruby-interchar":function(){var e,n="inter-character",t=D.create("div");return t.innerHTML='<h-test style="-moz-ruby-position:'+n+";-ms-ruby-position:"+n+";-webkit-ruby-position:"+n+";ruby-position:"+n+';"></h-test>',(e=t.querySelector("h-test").style).rubyPosition===n||e.WebkitRubyPosition===n||e.MozRubyPosition===n||e.msRubyPosition===n}(),textemphasis:c("textEmphasis"),
// Address feature support test for `unicode-range` via
// detecting whether it's Arial (supported) or
// Times New Roman (not supported).
unicoderange:function(){var e;return s('@font-face{font-family:test-for-unicode-range;src:local(Arial),local("Droid Sans")}@font-face{font-family:test-for-unicode-range;src:local("Times New Roman"),local(Times),local("Droid Serif");unicode-range:U+270C}',(function(){e=!W.detectFont("test-for-unicode-range",// treatment group
'Arial, "Droid Sans"',// control group
"Q")})),e}(),writingmode:c("writingMode")}}(),W.initCond=function(e){e=e||i;var n,t="";for(var r in W.support)n=(W.support[r]?"":"no-")+r,e.classList.add(n),t+=n+" ";return t};var $=W.support["ruby-interchar"];
// 1. Simple ruby polyfill;
// 2. Inter-character polyfill for Zhuyin
function J(e){var n,t=D.create("!"),i=e.classList;return t.appendChild(D.clone(e)),D.tag("rt",t.firstChild).forEach((function(e){var t,r=D.create("!"),a=[];
// Consider the previous nodes the implied
// ruby base
do{if(!(t=(t||e).previousSibling)||t.nodeName.match(/((?:h\-)?r[ubt])/i))break;r.insertBefore(D.clone(t),r.firstChild),a.push(t)}while(!t.nodeName.match(/((?:h\-)?r[ubt])/i));
// Create a real `<h-ru>` to append.
n=i.contains("zhuyin")?ne(r,e):ee(r,e);
// Replace the ruby text with the new `<h-ru>`,
// and remove the original implied ruby base(s)
try{e.parentNode.replaceChild(n,e),a.map(D.remove)}catch(e){}})),Q(t)}function G(e){var n=D.create("!");return n.appendChild(D.clone(e)),D.tag("rt",n.firstChild).forEach((function(e){var n,t,i=D.create("!"),r=[];
// Consider the previous nodes the implied
// ruby base
do{if(!(n=(n||e).previousSibling)||n.nodeName.match(/((?:h\-)?r[ubt])/i))break;i.insertBefore(D.clone(n),i.firstChild),r.push(n)}while(!n.nodeName.match(/((?:h\-)?r[ubt])/i));(t=D.create("rt")).innerHTML=te(e),e.parentNode.replaceChild(t,e)})),n.firstChild}
// 3. Complex ruby polyfill
// - Double-lined annotation;
// - Right-angled annotation.
function K(e){var n,t,i,r,a,o=D.create("!"),c=e.classList;return o.appendChild(D.clone(e)),n=o.firstChild,t=i=D.tag("rb",n),r=t.length,(a=n.querySelector("rtc.zhuyin"))&&(i=D.tag("rt",a).map((function(e,n){if(t[n]){var i=ne(t[n],e);try{t[n].parentNode.replaceChild(i,t[n])}catch(e){}return i}})),
// Remove the container once it's useless
D.remove(a),n.setAttribute("rightangle","true")),
// Then, normal annotations other than Zhuyin
D.qsa("rtc:not(.zhuyin)",n).forEach((function(e,t){var a;a=D.tag("rt",e).map((function(e,n){var a,o,s=Number(e.getAttribute("rbspan")||1),d=0,u=[];s>r&&(s=r);do{try{a=i.shift(),u.push(a)}catch(e){}if(void 0===a)break;d+=Number(a.getAttribute("span")||1)}while(s>d);if(s<d){if(u.length>1)return void console.error("An impossible `rbspan` value detected.",ruby);u=D.tag("rb",u[0]),i=u.slice(s).concat(i),u=u.slice(0,s),d=s}o=ee(u,e,{class:c,span:d,order:t});try{u[0].parentNode.replaceChild(o,u.shift()),u.map(D.remove)}catch(e){}return o})),i=a,1===t&&n.setAttribute("doubleline","true"),
// Remove the container once it's useless
D.remove(e)})),Q(o)}
// Create a new fake `<h-ruby>` element so the
// style sheets will render it as a polyfill,
// which also helps to avoid the UA style.
function Q(e){var n=e.firstChild,t=D.create("h-ruby");return t.innerHTML=n.innerHTML,D.setAttr(t,n.attributes),t.normalize(),t}function X(e){if(!e instanceof Element)return e;var n=e.classList;return n.contains("pinyin")?n.add("romanization"):n.contains("romanization")?n.add("annotation"):n.contains("mps")?n.add("zhuyin"):n.contains("rightangle")&&n.add("complex"),e}
/**
 * Create and return a new `<h-ru>` element
 * according to the given contents
 */function ee(e,n,t){var i=D.create("h-ru");n=D.clone(n);return(t=t||{}).annotation="true",Array.isArray(e)?i.innerHTML=e.map((function(e){return void 0===e?"":e.outerHTML})).join("")+n.outerHTML:(i.appendChild(D.clone(e)),i.appendChild(n)),D.setAttr(i,t),i}
/**
 * Create and return a new `<h-ru>` element
 * in Zhuyin form
 */function ne(e,n){e=D.clone(e);
// Create an element to return
var t=D.create("h-ru");return t.setAttribute("zhuyin",!0),
// - <h-ru zhuyin>
// -   <rb><rb/>
// -   <h-zhuyin>
// -     <h-yin></h-yin>
// -     <h-diao></h-diao>
// -   </h-zhuyin>
// - </h-ru>
t.appendChild(e),t.innerHTML+=te(n),t}
/**
 * Create a Zhuyin-form HTML string
 */function te(e){
// #### Explanation ####
// * `zhuyin`: the entire phonetic annotation
// * `yin`:    the plain pronunciation (w/out tone)
// * `diao`:   the tone
// * `len`:    the length of the plain pronunciation (`yin`)
var n,t,i,r="string"==typeof e?e:e.textContent;return i=(n=r.replace(O.zhuyin.diao,""))?n.length:0,t=r.replace(n,"").replace(/[\u02C5]/g,"ˇ").replace(/[\u030D]/g,"͘"),0===i?"":'<h-zhuyin length="'+i+'" diao="'+t+'"><h-yin>'+n+"</h-yin><h-diao>"+t+"</h-diao></h-zhuyin>"}
/**
 * Normalize `ruby` elements
 */D.extend(W,{
// Address normalisation for both simple and complex
// rubies (interlinear annotations)
renderRuby:function(e,n){n=n||"ruby";var t=D.qsa(n,e);D.qsa("rtc",e).concat(t).map(X),t.forEach((function(e){var n,t=e.classList;t.contains("complex")?n=K(e):t.contains("zhuyin")&&(n=$?G(e):J(e)),
// Finally, replace it
n&&e.parentNode.replaceChild(n,e)}))},simplifyRubyClass:X,getZhuyinHTML:te,renderComplexRuby:K,renderSimpleRuby:J,renderInterCharRuby:G})
/**
 * Normalisation rendering mechanism
 */,D.extend(W,{
// Render and normalise the given context by routine:
// ruby -> u, ins -> s, del -> em
renderElem:function(e){this.renderRuby(e),this.renderDecoLine(e),this.renderDecoLine(e,"s, del"),this.renderEm(e)},
// Traverse all target elements and address
// presentational corrections if any two of
// them are adjacent to each other.
renderDecoLine:function(e,n){var t=D.qsa(n||"u, ins",e),i=t.length;e:for(;i--;){var r=t[i],a=null;do{if(!(a=(a||r).previousSibling))continue e;t[i-1]===a&&r.classList.add("adjacent")}while(D.isIgnorable(a))}},
// Traverse all target elements to render
// emphasis marks.
renderEm:function(e,n){var t=n?"qsa":"tag";n=n||"em";D[t](n,e).forEach((function(e){var n=o(e);W.support.textemphasis?n.avoid("rt, h-char").charify({biaodian:!0,punct:!0}):n.avoid("rt, h-char, h-char-group").jinzify().groupify({western:!0}).charify({hanzi:!0,biaodian:!0,punct:!0,latin:!0,ellinika:!0,kirillica:!0})}))}}),o.normalize=W,o.localize=W,o.support=W.support,o.detectFont=W.detectFont,o.fn.initCond=function(){return this.condition.classList.add("han-js-rendered"),o.normalize.initCond(this.condition),this},["Elem","DecoLine","Em","Ruby"].forEach((function(e){var n="render"+e;o.fn[n]=function(e){return o.normalize[n](this.context,e),this}})),D.extend(o.support,{
// Assume that all devices support Heiti for we
// use `sans-serif` to do the comparison.
heiti:!0,
// 'heiti-gb': true,
songti:o.detectFont('"Han Songti"'),"songti-gb":o.detectFont('"Han Songti GB"'),kaiti:o.detectFont('"Han Kaiti"'),
// 'kaiti-gb': Han.detectFont( '"Han Kaiti GB"' ),
fangsong:o.detectFont('"Han Fangsong"')}),o.correctBiaodian=function(e){e=e||t;var n=o.find(e);return n.avoid("h-char").replace(/([‘“])/g,(function(e){var n=o.createBDChar(e.text);return n.classList.add("bd-open","punct"),n})).replace(/([’”])/g,(function(e){var n=o.createBDChar(e.text);return n.classList.add("bd-close","bd-end","punct"),n})),o.support.unicoderange?n:n.charify({biaodian:!0})},o.correctBasicBD=o.correctBiaodian,o.correctBD=o.correctBiaodian,D.extend(o.fn,{biaodian:null,correctBiaodian:function(){return this.biaodian=o.correctBiaodian(this.context),this},revertCorrectedBiaodian:function(){try{this.biaodian.revert("all")}catch(e){}return this}}),
// Legacy support (deprecated):
o.fn.correctBasicBD=o.fn.correctBiaodian,o.fn.revertBasicBD=o.fn.revertCorrectedBiaodian;var ie,re="<<hws>>",ae=D.create("h-hws");function oe(e,n){return e.isEnd&&0===e.index?n[1]+re+n[2]:0===e.index?function(e,n){var t,i,r=e;if(n=n||"",D.isElmt(e.nextSibling)||(t=e,i=e.nextSibling,t&&i&&t.parentNode===i.parentNode))return n+re;
// One of the parental elements of the current text
// node would definitely have a next sibling, since
// it is of the first portion and not `isEnd`.
for(;!r.nextSibling;)r=r.parentNode;return e!==r&&r.insertAdjacentHTML("afterEnd","<h-hws hidden> </h-hws>"),n}(e.node,e.text):e.text}function ce(e){return 0===e.index?D.clone(ae):""}function se(e){var n=e.node.parentNode;return 0===e.index&&(ie=e.endIndexInNode-2),"h-hws"!==n.nodeName.toLowerCase()||1!==e.index&&e.indexInMatch!==ie||n.classList.add("quote-inner"),e.text}function de(e){var n=e.node.parentNode;return"h-hws"===n.nodeName.toLowerCase()&&n.classList.add("quote-outer"),e.text}ae.setAttribute("hidden",""),ae.innerHTML=" ",D.extend(o,{renderHWS:function(e,n){
// Elements to be filtered according to the
// HWS rendering mode.
var i=n?"textarea, code, kbd, samp, pre":"textarea",r=n?"strict":"base",a=(e=e||t,o.find(e));
// Return the finder instance for future usage
return a.avoid(i).replace(o.TYPESET.hws[r][0],oe).replace(o.TYPESET.hws[r][1],oe).replace(new RegExp("("+re+")+","g"),ce).replace(/([\'"])\s(.+?)\s\1/g,se).replace(/\s[‘“]/g,de).replace(/[’”]\s/g,de).normalize(),a}}),D.extend(o.fn,{renderHWS:function(e){return o.renderHWS(this.context,e),this},revertHWS:function(){return D.tag("h-hws",this.context).forEach((function(e){D.remove(e)})),this.HWS=[],this}});var ue="bd-hangable",le=o.find.matches;function he(){var e,n=D.create("div");return n.innerHTML="<span>a b</span><span style=\"font-family: 'Han Space'\">a b</span>",r.appendChild(n),e=n.firstChild.offsetWidth!==n.lastChild.offsetWidth,D.remove(n),e}o.support["han-space"]=he(),D.extend(o,{detectSpaceFont:he,isSpaceFontLoaded:he(),renderHanging:function(e){e=e||t;var n=o.find(e);return n.avoid("textarea, code, kbd, samp, pre").avoid("h-char.bd-hangable").replace(O.jinze.hanging,(function(e){if(/^[\x20\t\r\n\f]+$/.test(e.text))return"";var n,t,i,r,a=e.node.parentNode;return(n=D.parent(a,"h-jinze"))&&function(e){var n=e.nextSibling;n&&le(n,"h-cs.jinze-outer")?n.classList.add("hangable-outer"):e.insertAdjacentHTML("afterend",'<h-cs hidden class="jinze-outer hangable-outer"> </h-cs>')}(n),r=e.text.trim(),(t=o.createBDChar(r)).innerHTML="<h-inner>"+r+"</h-inner>",t.classList.add(ue),(i=D.parent(a,"h-char.biaodian"))?(i.classList.add(ue),le(a,"h-inner, h-inner *")?r:t.firstChild):t})),n}}),D.extend(o.fn,{renderHanging:function(){var e=this.condition.classList;return o.isSpaceFontLoaded=he(),o.isSpaceFontLoaded&&e.contains("no-han-space")&&(e.remove("no-han-space"),e.add("han-space")),o.renderHanging(this.context),this},revertHanging:function(){return D.qsa("h-char.bd-hangable, h-cs.hangable-outer",this.context).forEach((function(e){var n=e.classList;n.remove("bd-hangable"),n.remove("hangable-outer")})),this}});var pe,fe,ge="bd-jiya",be="bd-consecutive",me='<h-cs hidden class="jinze-outer jiya-outer"> </h-cs>';le=o.find.matches;function ve(e){return e.replace(/(biaodian|cjk|bd-jiya|bd-consecutive|bd-hangable)/gi,"").trim()}function ye(e){var n,t=e.text,i=e.node.parentNode,r=D.parent(i,"h-char.biaodian"),a=o.createBDChar(t);return a.innerHTML="<h-inner>"+t+"</h-inner>",a.classList.add(ge),(n=D.parent(i,"h-jinze"))&&function(e){le(e,".tou, .touwei")&&!le(e.previousSibling,"h-cs.jiya-outer")&&e.insertAdjacentHTML("beforebegin",me);le(e,".wei, .touwei")&&!le(e.nextSibling,"h-cs.jiya-outer")&&e.insertAdjacentHTML("afterend",me)}(n),r?(r.classList.add(ge),le(i,"h-inner, h-inner *")?t:a.firstChild):a}function xe(e){var n,t=pe,i=e.node.parentNode,r=D.parent(i,"h-char.biaodian"),a=D.parent(r,"h-jinze");return n=r.classList,t&&r.setAttribute("prev",t),fe&&n.contains("bd-open")&&fe.pop().setAttribute("next","bd-open"),fe=void 0,e.isEnd?(pe=void 0,n.add(be,"end-portion")):(pe=ve(r.getAttribute("class")),n.add(be)),a&&(fe=function(e,n){var t,i;le(e,".tou, .touwei")&&(t=e.previousSibling,le(t,"h-cs")&&(t.className="jinze-outer jiya-outer",t.setAttribute("prev",n.prev)));le(e,".wei, .touwei")&&(i=e.nextSibling,le(i,"h-cs")&&(i.className="jinze-outer jiya-outer "+n.class,i.removeAttribute("prev")));return[t,i]}(a,{prev:t,class:ve(r.getAttribute("class"))})),e.text}o.renderJiya=function(e){e=e||t;var n=o.find(e);return n.avoid("textarea, code, kbd, samp, pre, h-cs").avoid("h-char.bd-jiya").charify({avoid:!1,biaodian:ye}).endAvoid().avoid("textarea, code, kbd, samp, pre, h-cs").replace(O.group.biaodian[0],xe).replace(O.group.biaodian[1],xe),n},D.extend(o.fn,{renderJiya:function(){return o.renderJiya(this.context),this},revertJiya:function(){return D.qsa("h-char.bd-jiya, h-cs.jiya-outer",this.context).forEach((function(e){var n=e.classList;n.remove("bd-jiya"),n.remove("jiya-outer")})),this}});var Ee="textarea, code, kbd, samp, pre";function we(e,n,t){return function(){var i=o.localize.writeOnCanvas(n,e),r=o.localize.writeOnCanvas(t,e);return o.localize.compareCanvases(i,r)}}function Ne(){return we('"Romanization Sans"',"i̍","󰁩")}function Ce(e){return function(n){n=n||t;var i=o.find(n).avoid(Ee);return e.forEach((function(e){i.replace(new RegExp(e[0],"ig"),(function(n,t){var i=D.clone(Te);
// Put the original content in an inner container
// for better presentational effect of hidden text
return i.innerHTML="<h-inner>"+t[0]+"</h-inner>",i.setAttribute("display-as",e[1]),0===n.index?i:""}))})),i}}var Te=D.create("h-char","comb-liga");return D.extend(o,{isVowelCombLigaNormal:we('"Romanization Sans"',"a̍","󰁡"),isVowelICombLigaNormal:Ne(),isZhuyinCombLigaNormal:we('"Zhuyin Kaiti"',"ㆴ͘","󳆴"),isCombLigaNormal:Ne()(),// ### Deprecated
substVowelCombLiga:Ce(o.TYPESET["display-as"]["comb-liga-vowel"]),substZhuyinCombLiga:Ce(o.TYPESET["display-as"]["comb-liga-zhuyin"]),substCombLigaWithPUA:Ce(o.TYPESET["display-as"]["comb-liga-pua"]),substInaccurateChar:function(e){e=e||t;var n=o.find(e);n.avoid(Ee),o.TYPESET["inaccurate-char"].forEach((function(e){n.replace(new RegExp(e[0],"ig"),e[1])}))}}),D.extend(o.fn,{"comb-liga-vowel":null,"comb-liga-vowel-i":null,"comb-liga-zhuyin":null,"inaccurate-char":null,substVowelCombLiga:function(){return this["comb-liga-vowel"]=o.substVowelCombLiga(this.context),this},substVowelICombLiga:function(){return this["comb-liga-vowel-i"]=o.substVowelICombLiga(this.context),this},substZhuyinCombLiga:function(){return this["comb-liga-zhuyin"]=o.substZhuyinCombLiga(this.context),this},substCombLigaWithPUA:function(){return o.isVowelCombLigaNormal()?o.isVowelICombLigaNormal()||(this["comb-liga-vowel-i"]=o.substVowelICombLiga(this.context)):this["comb-liga-vowel"]=o.substVowelCombLiga(this.context),o.isZhuyinCombLigaNormal()||(this["comb-liga-zhuyin"]=o.substZhuyinCombLiga(this.context)),this},revertVowelCombLiga:function(){try{this["comb-liga-vowel"].revert("all")}catch(e){}return this},revertVowelICombLiga:function(){try{this["comb-liga-vowel-i"].revert("all")}catch(e){}return this},revertZhuyinCombLiga:function(){try{this["comb-liga-zhuyin"].revert("all")}catch(e){}return this},revertCombLigaWithPUA:function(){try{this["comb-liga-vowel"].revert("all"),this["comb-liga-vowel-i"].revert("all"),this["comb-liga-zhuyin"].revert("all")}catch(e){}return this},substInaccurateChar:function(){return this["inaccurate-char"]=o.substInaccurateChar(this.context),this},revertInaccurateChar:function(){try{this["inaccurate-char"].revert("all")}catch(e){}return this}}),e.addEventListener("DOMContentLoaded",(function(){var e;
// Use the shortcut under the default situation
i.classList.contains("han-init")?o.init():(e=t.querySelector(".han-init-context"))&&(o.init=o(e).render())})),
// Expose to global namespace
void 0!==n&&!1!==n||(e.Han=o),o}));