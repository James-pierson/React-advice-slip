(this["webpackJsonpreact-adviceslip"]=this["webpackJsonpreact-adviceslip"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),l=(a(22),a(12)),o=a(13),s=a(16),u=a(15),d=a(14),v=a.n(d),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={advice:""},e.fetchAdvice=function(){v.a.get("https://api.adviceslip.com/advice").then((function(t){var a=t.data.slip.advice;e.setState({advice:a})})).catch((function(e){console.error(e)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"heading"},e),c.a.createElement("button",{className:"button",onClick:this.fetchAdvice},c.a.createElement("span",null,"Press for advice!"))))}}]),a}(n.Component);a(40);var m=function(){return c.a.createElement("div",null,c.a.createElement(p,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cccc300f.chunk.js.map