/*************
 *  css基础  *
 *************/



/****************
 *  1.常用浏览器  *
 ****************/
// IE浏览器：trident内核，俗称IE内核
// Chrome浏览器：Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核，Blink内核由Google与Opera Software基于Webkit开发
// Firefox浏览器：Gecko内核，俗称Firefox内核
// Safari浏览器：Webkit内核
// Opera浏览器：最初是自己的Presto内核，后来是Webkit内核，现在是Blink内核
// 360、猎豹浏览器：IE+Chrome双内核
// 搜狗、遨游、QQ浏览器：Trident（兼容模式）+Webkit（高速模式）
// 百度、世界之窗浏览器：IE内核
// 2345浏览器：以前是IE，现在是IE+Chrome双内核


/****************************
 *  2.HTML头部Doctype的意义  *
 ****************************/
// <!doctype html>声明位于文档的最前面的位置，处于<html>标签之前。此标签可告知浏览器文档使用哪种HTML或者XHTML规范。（重点：告诉浏览器按照何种规范解析页面）


/************************************************
 *  3.Quirks模式是什么？它和Standards模式有什么区别  *
 ************************************************/
// Quirks Mode是一种浏览器操作模式，怪异模式（也称之为兼容模式）意味着一个相对新的浏览器故意模拟许多在旧浏览器中存在的bug，特别是在IE4和IE5中。在css中使用margin: 0 auto;使一个块居中是无效的，字体属性无法继承到table中，
// 声明<!doctype html>的文档，浏览器会选择Standards Mode
// 严格模式：页面排版及js解析是以该浏览器支持的最高标准来执行
// 混杂模式：不严格按照标准执行，主要用来兼容旧的浏览器，向后兼容


/***********************************
 *  4.div+css布局较于table布局的优点  *
 ***********************************/
// 改版更方便，只需改css文件；页面加载速度更快，结构化清晰，页面显示简洁；表现和结构相分离；易于优化seo，对搜索引擎更友好，排名更容易靠前。


/**********************************************
 *  5.img的alt与title有何异同，strong与em的异同  *
 **********************************************/
// alt：为不能显示图像、窗体或applets的用户代理，alt属性用来指定替换文字。替换文字的语言有lang属性指定。（IE浏览器在没有title时把alt当成tool tip显示）
// title：该属性为设置该属性的元素提供建议性的信息
// strong：粗体强调标签，强调，表示内容的重要性
// em：斜体强调标签，更强烈强调，表示内容的强调性


/********************************
 *  6.渐进增强和优雅降级之间的区别  *
 ********************************/
// 渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验
// 优雅降级：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容
// 区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。


/*********************************
 *  7.利用多个域名存储网站资源的好处  *
 *********************************/
// cdn缓存更方便
// 突破浏览器并发限制
// 节约cookie带宽
// 节约主域名的连接数，优化页面响应速度
// 防止不必要的安全问题


/*********************************
 *  8.网页标准和标准制定机构的重要性  *
 *********************************/
// 网页标准和标准制定机构都是为了能让web发展的更'健康'，开发者遵循统一的标准，降低开发难度，开发成本，seo也会更好做，也不会因为滥用代码导致各种bug、安全问题，最终提高网站易用性


/**************************************************
 *  9.cookie、sessionStorage、localStorage的区别  *
 **************************************************/
// sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
// Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的，Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发动过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。
// 除此之外，Web Storage拥有setItem，getItem，removeItem，clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可或缺的：Cookie的作用是与服务器进行交互，作为http规范的一部分而存在，而Web Storage仅仅是为了在本地"存储"数据而生
let setCookie = (name, value, days = 7) => {
    const d = new Date
    d.setTime(d.getTime() + 24*60*60*1000*days)
    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString()
}
let getCookie = (name) => {
    const v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
    return v ? v[2] : null
}
let delCookie = (name) => {
    setCookie(name, '', -1)
}
let setStorage = (name, value) => {
    localStorage.setItem(name, value)
}
let removeStorage = (name) => {
    localStorage.removeItem(name)
}
let getStorage = (name) => {
    return localStorage.getItem(name)
}
let clearStorage = () => {
    localStorage.clear()
}


/***************************
 *  10.简述src和href的区别  *
 ***************************/
// src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。
// src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在的位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。
// <script src="js.js"></script>
// 当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部的原因。
// href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加<link href="common.css" rel="stylesheet"/>那么浏览器会识别该文档为css文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式
// link属于html标签，@import是css提供的方法。在页面加载的时候，link会同时被加载，而@import引用的css会在页面加载完成后才会加载引用的css；@import只有在ie5以上才可以被识别，而link是html标签，不存在浏览器兼容性问题；link引入样式的权重大于@import的引用（@import是将引用的样式导入到当前的页面中）


/*********************************
 *  11.网页制作用到的图片格式有哪些  *
 *********************************/
// png-8，png-24，jpeg，gif，svg，webp
// webp格式是Google开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有jpeg的2/3，并能节省大量的服务器带宽资源和数据空间。facebook ebay等知名网站已经开始测试并使用webp格式。
// 在质量相同的情况下，webp格式图像的体积要比jpeg格式图像小40%


/********************
 *  12.什么是微格式  *
 ********************/
// 微格式是一种让机器可读的语义化XHTML词汇的集合，是结构化数据的开放标准。是为特殊应用而制定的特殊格式。
// 优点：将智能数据添加到网页上，让网站内容在搜索引擎结果界面可以显示额外的提示。（应用范例：豆瓣）


/***************************************
 *  13.js请求一般情况下哪些地方会有缓存处理  *
 ***************************************/
// dns缓存，cdn缓存，浏览器缓存，服务器缓存


/**************************************
 *  14.如何解决网站大量图片加载缓慢的问题  *
 **************************************/
// 图片懒加载
// css图片可以用CSSsprite，SVGsprite，Iconfont，Base64等技术
// 先展示缩略图，提供查看原图的方法
// 根据图片展示位置的大小，适量压缩图片大小


/******************************
 *  15.如何理解HTML结构的语义化  *
 ******************************/
// 当去掉或者样式丢失的时候能让页面呈现清晰的结构
// 有利于seo优化，利于被搜索引擎收录
// 方便开发和维护


/*****************************
 *  16.前端对seo优化有哪些处理  *
 *****************************/
// meta标签优化，包括title，description，keywords，anthor，category，language等
// 关键词和关键词密度
// 合理的标签使用


/*****************************
 *  17.给DOM设置css样式的方式  *
 *****************************/
// 外部样式表，引入外部css文件
// 内部样式表，css代码放在<head>标签内部
// 内联样式，将css样式直接定义在HTML元素内部


/***********************
 *  18.css有哪些选择器  *
 ***********************/
// 派生选择器（HTML标签申明），优先级1
// id选择器（DOM的id申明），优先级100
// 类选择器（样式类名申明），优先级10
// 属性选择器（DOM的属性申明，属于css2，ie6不支持）
// 后代选择器（空格隔开）
// 群组选择器（逗号隔开）

// id选择器，100
// 类选择器（class名），10
// 标签选择器
// 相邻选择器，p+span
// 子选择器ul>li
// 后代选择器li a
// 通配符选择器（*）
// 属性选择器（a[rel="external"]）
// 伪类选择器（a:hover,li:nth-child(2)）
// 优先级：!important>id>class>tag


/*******************************************************
 *  19.通过哪些属性定义，使一个DOM元素不显示在浏览器可视范围内  *
 *******************************************************/
// display: none;隐藏对应的元素但不挤占该元素原来的空间
// visibility: hidden;隐藏对应的元素且挤占该元素原来的空间
// 设置宽高为0，透明度为0，z-index: -1000;


/***********************************************
 *  20.超链接访问过后hover样式就不出现的问题如何解决  *
 ***********************************************/
// 属性排序规则遵循爱恨原则LoVe/HAte：（link，visited，hover，active）


/***********************
 *  21.什么是css hark  *
 ***********************/
// 针对不同的浏览器写不同的css代码


/*********************************
 *  22.行内元素和块级元素的具体区别  *
 *********************************/
// 块级元素独占一行，width，height，padding，margin，都可控制
// 内联元素和相邻的内联元素在同一行，width，height，padding的top/bottom，margin的top/bottom都不可改变
// 常见inline-block：<input>、<img>、<button>、<textarea>、<label>


/*************************************
 *  23.什么是外边距重叠，重叠的结果是什么  *
 *************************************/
// 相邻的盒子的外边距结合成一个单独的外边距


/****************************************
 *  24.rgba()和opacity的透明效果有什么不同  *
 ****************************************/
// opacity作用于元素，以及元素内的所有内容
// rgba()只作用于元素的内容颜色或者背景色


/*****************************************************
 *  25.css中可以让文字在垂直和水平方向上重叠的两个属性是什么  *
 *****************************************************/
// line-height，letter-spacing


/*****************************
 *  26.使浮动元素垂直居中的办法  *
 *****************************/
// position: absolute; left: 50%; top: 50%; margin-top: -100px; margin-left: -100px;
// position: absolute; margin: auto; left: 0; top: 0;right: 0; bottom: 0;
// 垂直居中<img>：<img>的容器display: table-cell; text-align: center; vertical-align: center;


/********************
 *  27.px和em的区别  *
 ********************/
// px是固定值，em继承父级元素的字体大小，1em默认是16px


/*******************
 *  28.简介盒子模型  *
 *******************/
// IE盒子模型（宽高包括内边距和边框）、标准的w3c盒子模型（宽高仅包括内容宽高）
// 盒模型：内容、内边距、外边距（一般不计入盒子实际宽度）、边框


/************************
 *  30.为什么要初始化样式  *
 ************************/
// 不同的浏览器对标签的默认样式值不同，若不初始化会造成不同的浏览器之间的显示差异，初始化css会对搜索引擎优化造成小影响


/*****************
 *  31.BFC是什么  *
 *****************/
// BFC(块级格式上下文)，一个创建了新的BFC的盒子是独立布局的，盒子内的元素的布局不会影响盒子外面的元素。在同一个BFC中的两个相邻的盒子在垂直方向发生margin重叠的问题
// BFC是指浏览器中创建了一个独立的渲染区域，该区域内所有元素的布局不会影响到区域外元素的布局，这个渲染区域只对块级元素起作用


/*********************
 *  32.IE的双边距bug  *
 *********************/
// 块级元素float后设置横向margin，ie6显示的margin比设置的较大。解决办法：加入 display: inline;


/****************************
 *  33.HTML与XHTML有什么区别  *
 ****************************/
// 主要是XHTML的一些规则不同：
// 所有的标记都必须要有一个相应的结束标记
// 所有标签的元素和属性的名字都必须使用小写
// 所有的xml标记都必须合理嵌套
// 所有的属性必须用引号""括起来
// 把所有<和&特殊符号用编码表示
// 给所有属性附一个值
// 不要在注释内容中使用"--"
// 图片必须有说明文字


/*************************
 *  34.html常见兼容性问题  *
 *************************/
// 双边距bug float引起的，使用display: inline;
// 3像素问题，使用float引起的，使用display: inline; margin: -3px;
// 超链接hover点击后失效，使用正确的书写顺序：爱恨原则LoVe/HAte：（link，visited，hover，active）
// IE z-index问题，给父级添加position: relative;
// png透明问题，使用js代码修改
// min-height最小高度，!important解决
// select在IE6下遮盖，使用iframe嵌套
// 为什么没有办法定义1px左右的宽度容器（ie6默认的行高造成的，使用overflow: hidden; zoom: 0.08; line-height: 1px;）
// ie6不支持png透明背景，解决办法：ie6下使用gif图片


/*********************************
 *  35.对web标准以及w3c的理解与认识  *
 *********************************/
// 标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外链css和js脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性


/*********************************************
 *  36.行内元素有哪些，块级元素有哪些，css的盒模型  *
 *********************************************/
// 行内元素：a、b、i、span、input、select
// 块级元素：div、p、h1、form、ul
// 空元素：br、hr、img、input、link、meta
// css盒模型包括：内容、border、margin、padding


/*****************************
 *  37.前端页面的三层结构及作用  *
 *****************************/
// 结构层HTML，表现层css，行为层js


/******************************************
 *  38.b标签和strong标签，i标签和em标签的区别  *
 ******************************************/
// 后者有语义，前者没有


/*************************
 *  39.display属性的作用  *
 *************************/
// display: block;行内元素转换为块级元素
// display: inline;块级元素转换为行内元素
// display: inline-block;转为内联元素


/****************
 *  HTML语义化  *
 ****************/
// HTML5新语义元素：<article>定义文章；<aside>定义页面内容以外的内容；<details>定义用户能够查看或隐藏的额外细节；<figcaption>定义<figure>元素的标题；<figure>规定自包含内容，比如图示、图标、照片、代码清单等；<footer>定义文档或节的页脚；<header>规定文档或节的页眉；<main>规定文档的主内容；<mark>定义重要的或强调的文本；<nav>定义导航链接；<section>定义文档中的节；<summary>定义<detail>元素的可见标题；<time>定义日期/时间
// 优点：易于用户阅读，样式丢失的时候能让页面呈现清晰的结构；有利于seo，搜索引擎根据标签来确定上下文和各个关键字的权重；方便其他设备解析，如盲人阅读器根据语义渲染网页；有利于开发和维护，语义化更具有可读性，代码更好维护，与css3关系更和谐


/************************************
 *  meta viewport是做什么用的，怎么写  *
 ************************************/
// 作用：让网页开发者控制viewport的大小和缩放
// <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />


/****************
 *  如何清除浮动  *
 ****************/
// 1.给父级元素添加属性overflow: hidden;
// 2.给父级元素添加属性:after{content: '', display: block; visiblity; height: 0; clear: both;}
// 3.给父级设置合适的宽高
// 4.给父级添加子元素并设置属性clear: both;


/****************
 *  如何垂直居中  *
 ****************/
// 1.position: absolute; top: 50%; margin-top: -100px;或者transform: translateY(-50%)
// 2.display: flex; align-items: center;
// 3.父级display: table; 子级display: table-cell;



/************
 *  js基础  *
 ************/



/***************************************
 *  1.javascript的typeof返回哪些数据类型  *
 ***************************************/
// object、number、string、function、boolean、undefined


/***************************************
 *  2.列举3种强制类型转换和2种隐式类型转换  *
 ***************************************/
// 强制：Number()，String()，Boolean()，parseInt()，parseFloat()
// 隐式：四则运算（+-*/），判断语句（if，==，===）


/****************************
 *  3.split()，join()的区别  *
 ****************************/
// 前者是切割成数组的形式，后者是将数组转换成字符串


/***********************************************
 *  4.数组方法pop()，push()，unshift()，shift()  *
 ***********************************************/
// push()尾部添加，pop()尾部删除
// unshift()头部添加，shift()头部删除


/*********************************
 *  5.js事件绑定和普通事件有什么区别  *
 *********************************/
// 普通事件如：btn.onclick = () => {}; 若给btn添加多个onclick事件，则后面添加的事件会覆盖前面的事件
// 事件绑定如：btn.addEventListener('click', () => {}); 若给btn添加多个事件绑定，则多个事件将会依次触发


/*************************
 *  6.IE和DOM事件流的区别  *
 *************************/
// IE事件流为冒泡型事件，DOM为捕获型事件，执行顺序不一样
// IE参数为'onclick'，fn；DOM参数为'click'，fn，useCapture
// 事件名称IE加'on'，DOM不加
// IE的this指向window，DOM的this指向当前dom元素


/********************************
 *  7.IE和标准下有哪些兼容性的写法  *
 ********************************/
// var ev = ev || window.event
// document.documentElement.clintWidth || document.body.clientWidth
// var target = ev.srcElement || ev.target


/************************
 *  8.call和apply的区别  *
 ************************/
// call和apply都是为了一个本不属于一个对象的方法，让这个对象去执行
// toString.call([],1,2,3)
// toString.apply([],[1,2,3])
// Object.call(this,obj1,obj2,obj3)
// Object.apply(this,arguments)
// https://blog.csdn.net/liuyingv8/article/details/80582478


/*******************
 *  9.b继承a的方法  *
 *******************/
// function b() {}
// b.prototype = new a


/***************************
 *  10.this指针，闭包，作用域  *
 ***************************/
// this：指向执行上下文
// 闭包：内层作用域可以访问外层作用域的变量
// 作用域：定义一个函数就开辟了一个局部作用域，整个js执行环境有一个全局作用域


/*********************
 *  11.事件委托是什么  *
 *********************/
// 符合w3c标准的事件绑定addEventListener/attachEvent
// 利用事件冒泡的原理，让自己所触发的事件，让他的父元素代替执行
// 可以将子元素的事件绑定在父元素上，这样所有的子元素都能触发该事件
// https://www.cnblogs.com/soyxiaobi/p/9498357.html


/******************************************
 *  12.闭包是什么，有什么特性，对页面有什么影响  *
 ******************************************/
// 闭包就是能够读取其他函数内部变量的函数
// 在一个函数内部定义一个全局函数，就可以在父函数外部调用父函数内部的变量
// 闭包的缺点：滥用闭包函数会造成内存泄漏，因为闭包中引用到的包裹函数中定义的变量都永远不会被释放，所以我们应该在必要的时候，及时释放这个闭包函数
// 内存泄漏是指程序中已动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果
// https://www.cnblogs.com/cxying93/p/6103375.html


/*******************************
 *  13.如何阻止事件冒泡和默认行为  *
 *******************************/
// 标准浏览器做法：e.stoPropagation()
// IE9之前的做法：event.cancelBubble=true
// 阻止默认事件：return false; e.preventDefault();


/****************************************
 *  14.添加、删除、替换、插入到某个节点的方法  *
 ****************************************/
// obj.appendChild()
// obj.insertBefore(newNode, node)
// obj.replaceChild(newNode, node)
// obj.removeChild()


/************************************
 *  15.js的本地对象，内置对象和宿主对象  *
 ************************************/
// 本地对象为array，obj，regexp等可以new实例化
// 内置对象为global,math等不可以实例化的
// 宿主为浏览器自带的document，window等


/*******************************************
 *  16.document load和document ready的区别  *
 *******************************************/
// document.onload是在结构和样式加载完才执行js
// window.onload不仅仅是要在结构和样式加载完，还要执行完所有的样式、图片这些资源文件，全部加载完才会触发window.onload事件
// document.ready原生中没有这个方法，jquery中有$().ready()


/*************************
 *  17.'=='和'==='的不同  *
 *************************/
// '=='会自动转换类型，'==='不会
// '==='先判断左右两边的数据类型，如果数据类型不一致，直接返回false，之后才会进行两边值的判断


/********************
 *  18.js的同源策略  *
 ********************/
// 一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合
// 同源策略带来的麻烦：ajax在不同域名下的请求无法实现


/***************************
 *  19.编写一个数组去重的方法  *
 ***************************/
// 1、先创建一个空数组，用来保存最终的结果
// 2、循环原数组中的每个元素
// 3、在对每个元素进行二次循环，判断是否有与之相同的元素，如果没有，将把这个元素放到新数组中
// 4、返回这个新数组


/**********************************
 *  20.js是一门什么样的语言，他的特点  *
 **********************************/
// 运行在浏览器中，面向对象，动态语言


/**************************
 *  21.js的数据类型都有什么  *
 **************************/
// 基本数据类型：String，Number，Boolean，Object，undefined，Null
// 引用数据类型：Object(Array，Date，RegExp，Function)
// 如何判断某变量是否为数组类型？
// 方法一：判断其是否具有数组性质，如slice()方法，可自己给该变量定义slice()方法，故有时会失效
// 方法二：obj instanceof Array 在某些IE版本中不正确
// 方法三：toString.call([1,2,3]);/[object Array]


/************************************
 *  22.已知id的input输入框，怎么获取值  *
 ************************************/
// document.querySelector('#' + id).value


/************************************
 *  23.获取页面中所有的checkbox怎么做  *
 ************************************/
var domList = document.getElementsByTagName('input')
var checkBoxList = [];//返回的所有的checkbox
var len = domList.length;　　//缓存到局部变量
while (len--) {　　//使用while的效率会比for循环更高
    if (domList[len].type == 'checkbox') {
        checkBoxList.push(domList[len]);
    }
}


/**********************************************************
 *  24.设置一个已知id的div的html的内容为xxxx，字体颜色设置为黑色  *
 **********************************************************/
let dom=document.getElementById('id')
dom.innerHTML='xxxx'
dom.style.color='#000'


/****************************************************************
 *  25.将已知字符创’get-element-by-id‘，写一个fn将其转化成驼峰表示法  *
 ****************************************************************/
function combo(msg) {
    let arr = msg.split('-')
    arr.forEach((item, idx) => {
        arr[idx] = arr[idx].charAt(0).toUpperCase() + arr[idx].substr(1, arr[idx].length - 1)
    })
    msg = arr.join('')
    return msg
}
// charAt() 返回指定位置的字符
// toUpperCase() 把字符串转换为大写 
// substr() 从起始索引号提取字符串中指定数目的字符
// substring() 提取字符串中两个指定的索引号之间的字符


/*********************
 *  26.数组的一些方法  *
 *********************/
// concat() 连接两个或更多的数组，并返回结果
// join(',') 把数组的所有元素放入到一个字符串，元素通过指定的分隔符进行分隔
// pop() 删除并返回数组的最后一个元素
// push() 向数组的末尾添加一个或更多元素，并返回新的长度
// reverse() 颠倒数组中元素的顺序
// shift() 删除并返回数组的第一个元素
// unshift() 向数组的开头添加一个更多元素，并返回新的长度
// slice(start, end) 从某个已有的数组返回选定的元素
// sort(sortBy) 对数组的元素进行排序, 从小到大：sortBy = (a,b) => {return a-b}
// splice(idx, deleteNum, newStr) 删除元素，并向数组添加新元素，newStr可选
// toSource() 返回该对象的源代码
// toString() 把数组转换为逗号','隔开的字符串，并返回结果
// toLocaleString() 把数组转换为本地字符串，并返回结果
// valueOf() 返回数组对象的原始值


/***********************
 *  27.字符串的一些方法  *
 ***********************/
// charAt() 返回指定位置的字符
// charCodeAt() 返回指定位置的字符的Unicode编码
// concat() 连接字符串
// indexOf() 检索字符串
// match() 找到一个或者多个正则表达式的匹配
// replace() 替换与正则表达式匹配的子串
// search() 检索与正则表达式相匹配的值
// slice() 提取字符串的片段，返回被提取的部分
// split() 将字符串分割为字符串数组
// substr() 从起始索引号提取字符串中指定数目的字符
// substring() 提取字符串中两个指定的索引号之间的字符


/**********************************************
 *  28.写一个函数，将'<', '>', '&', '"'进行转译  *
 **********************************************/
function translateHtml(str) {
    return str.replace(/[<>"&]/g, (match) => {
        switch(match) {
            case '<':
                return '&lt;'
                break
            case '>':
                return '&gt;'
                break
            case '"':
                return '&amp;'
                break
            case '&':
                return '&quot;'
                break
        }
    })
}


/**********************************************
 *  28.写一个函数，将'<', '>', '&', '"'进行转译  *
 **********************************************/