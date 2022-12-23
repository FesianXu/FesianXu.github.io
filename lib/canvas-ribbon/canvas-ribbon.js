/**
 * Created by zproo on 2017/4/8.
 */
!function(){function e(e,n,t){return Number(e.getAttribute(n))||t}
// 获取自定义配置
var n=document.getElementById("ribbon");// 当前加载的script
config={zIndex:e(n,"zIndex",-1),// z-index
alpha:e(n,"alpha",.6),// alpha
ribbon_width:e(n,"size",90)};var t=document.createElement("canvas");t.style.cssText="position:fixed;top:0;left:0;z-index:"+config.zIndex,document.getElementsByTagName("body")[0].appendChild(t);var i,o=t,a=o.getContext("2d"),// 获取canvas 2d上下文
c=window.devicePixelRatio||1,// the size of one CSS pixel to the size of one physical pixel.
d=window.innerWidth,// 返回窗口的文档显示区的宽高
l=window.innerHeight,r=config.ribbon_width,h=Math,u=0,x=2*h.PI,// 圆周率*2
f=h.cos,// cos函数返回一个数值的余弦值（-1~1）
g=h.random;// 返回0-1随机数
// 图形透明度
function m(){
// 路径没有填满屏幕宽度时，绘制路径
for(a.clearRect(0,0,d,l),// 擦除之前绘制内容
i=[{x:0,y:.7*l+r},{x:0,y:.7*l-r}];i[1].x<d+r;)b(i[0],i[1])}function b(e,n){a.beginPath(),// 创建一个新的路径
a.moveTo(e.x,e.y),// path起点
a.lineTo(n.x,n.y);// path终点
var t=n.x+(2*g()-.25)*r,o=s(n.y);a.lineTo(t,o),a.closePath(),u-=x/-50,
// 随机生成并设置canvas路径16进制颜色
a.fillStyle="#"+(127*f(u)+128<<16|127*f(u+x/3)+128<<8|127*f(u+x/3*2)+128).toString(16),a.fill(),// 根据当前样式填充路径
i[0]=i[1],// 起点更新为当前终点
i[1]={x:t,y:o}}function s(e){var n=e+(2*g()-1.1)*r;return n>l||n<0?s(e):n}o.width=d*c,// 返回实际宽高
o.height=l*c,a.scale(c,c),// 水平、竖直方向缩放
a.globalAlpha=config.alpha,document.onclick=m,document.ontouchstart=m,m()}();