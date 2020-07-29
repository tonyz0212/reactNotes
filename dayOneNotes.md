dayOne notes
实际dom 和 virtual dom的区别
-实际dom 很heavy，非常多属性
-更新virtual dom 是不会更新界面的，去渲染的时候才会更新界面

浏览器不能解析jsx 所以我们需要babel来转移成纯js


1.4 React高效的原因
1）用虚拟DOM，不总是 直接的操作DOM
2） DOM dif 算法，最小化页面重绘

