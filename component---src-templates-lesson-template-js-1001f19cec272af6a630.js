(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{182:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(185),o=(r(230),r(78),r(56)),i=(r(26),r(232)),s=r(1),c=r.n(s),u=function(e){var t=e.path,r=e.data.site.siteMetadata,n=r.repoName,l="https://codesandbox.io/s/github/"+r.repoOwner+"/"+n+"/tree/master/"+t;return a.a.createElement("a",{href:l,rel:"noopener noreferrer",target:"_blank"},"Click here to start your exercises!")};u.propTypes={path:c.a.string.isRequired,repoName:c.a.string,repoOwner:c.a.string};var m=function(e){return a.a.createElement(o.StaticQuery,{query:"4280386281",render:function(t){return a.a.createElement(u,Object.assign({data:t},e))},data:i})},d=(r(175),function(e){var t=e.lesson,r=e.slug,n=t.frontmatter,l=n.title,i=n.description,s=(n.exerciseLinks,n.timeToCompletion),c=n.videoLinks,u=n.readingLinks,d=n.preReadQuizLink,p=n.course,f=r.toLowerCase().split("/courses/")[1];return a.a.createElement("div",{className:"Lesson"},a.a.createElement(o.Link,{className:"Lesson-homeButton",to:"/courses/"+p+"/"},"Back to ",p),a.a.createElement("h2",{className:"Lesson-title"},l),a.a.createElement("div",{className:"Lesson-body"},s&&a.a.createElement("p",null,"⌛ Average time to completion ="," ",a.a.createElement("span",{className:"Lesson-time"},s," ⌛")),a.a.createElement("p",null,i),a.a.createElement("h3",null,"Pre-Session Learning Materials (required)"),a.a.createElement("p",null,"Check out this content before your session begins to get an idea of what you will be working on."),c&&c.map(function(e){return a.a.createElement("iframe",{key:e,width:"560",height:"315",src:e,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}),a.a.createElement("h3",null,"Pre-read Materials (bonus)"),a.a.createElement("p",null,"We've curated these resources to give you greater depth on these subjects. Don't feel like you have to read them all.",a.a.createElement("br",null),"Taking the time to go through all of these resources will definitely put you on the road to expert-level knowledge in this subject matter."),u&&a.a.createElement("ul",null,u.map(function(e){return a.a.createElement("li",{key:e.title},a.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},e.title),a.a.createElement("p",null,"- ",e.description))})),a.a.createElement("h3",null,"Pre-read Quiz"),a.a.createElement("p",null,"Test your knowledge from the pre-read material"," ",a.a.createElement("a",{href:d,rel:"noopener noreferrer",target:"_blank"},"here"),"!"),a.a.createElement("h3",null,"Exercises"),a.a.createElement(m,{path:f}),a.a.createElement("h3",null,"Session Feedback"),a.a.createElement("p",null,"We need as much feedback as possible to make this platform more effective for you and others like you. Please take a moment to fill out this session survey "," ",a.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform",rel:"noopener noreferrer",target:"_blank"},"here"),".")))});r.d(t,"query",function(){return p});var p="1005274477";t.default=function(e){var t=e.data,r=t.site.siteMetadata,n=r.title,o=r.subtitle,i=t.markdownRemark.frontmatter,s=i.title,c=i.description,u=t.markdownRemark.fields.slug,m=null!==c?c:o;return a.a.createElement(l.a,{title:s+" - "+n,description:m},a.a.createElement(d,{lesson:t.markdownRemark,slug:u}))}},185:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(193),o=r.n(l),i=(r(155),function(e){var t=e.children,r=e.title,n=e.description;return a.a.createElement("div",{className:"Layout"},a.a.createElement(o.a,null,a.a.createElement("html",{lang:"en"}),a.a.createElement("title",null,r),a.a.createElement("meta",{name:"description",content:n})),t)});r.d(t,"a",function(){return i})},230:function(e,t,r){"use strict";r(231)("link",function(e){return function(t){return e(this,"a","href",t)}})},231:function(e,t,r){var n=r(12),a=r(20),l=r(22),o=/"/g,i=function(e,t,r,n){var a=String(l(e)),i="<"+t;return""!==r&&(i+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),i+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(i),n(n.P+n.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},232:function(e){e.exports={data:{site:{siteMetadata:{repoName:"awesome-learning-exercises",repoOwner:"Cooperbuilt"}}}}}}]);
//# sourceMappingURL=component---src-templates-lesson-template-js-1001f19cec272af6a630.js.map