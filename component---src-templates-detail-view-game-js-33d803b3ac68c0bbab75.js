"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[249],{1284:function(e,t,r){r.d(t,{k:function(){return l}});var a=r(7294);const l=e=>{let{children:t}=e;return a.createElement("span",{style:{},className:"i-frame-container"},t)}},2051:function(e,t,r){var a=r(7294);t.Z=e=>{let{children:t,className:r,...l}=e;return a.createElement("h4",Object.assign({},l,{className:"h4 "+(r&&r)}),t)}},6533:function(e,t,r){r.r(t);var a=r(7294),l=r(4129),n=r(6437),c=r(2981),i=r(2051),s=r(1284);t.default=e=>{let{data:t}=e;const r={renderNode:{[n.BLOCKS.EMBEDDED_ASSET]:e=>{const r=t.contentfulProjects.detailedText.references.find((t=>t.contentful_id===e.data.target.sys.id));return a.createElement("img",{style:{width:"clamp(200px, 45%, 500px)",borderRadius:"12px",margin:"8px"},src:r.url,alt:r.fileName})},[n.INLINES.HYPERLINK]:e=>{if(e.data.uri.includes("youtube.com/watch")){const t=e.data.uri.replace("watch?v=","embed/");return a.createElement(s.k,null,a.createElement("iframe",{title:"Unique Title 002",src:t,allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",allowFullScreen:!0}))}if(e.data.uri.includes("youtube.com/embed"))return a.createElement(s.k,null,a.createElement("iframe",{title:"Unique Title 002",src:e.data.uri,allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",allowFullScreen:!0}));if(e.data.uri.includes("store.steampowered")){const t=e.data.uri.replace("app","widget");return a.createElement("iframe",{title:t,src:t,frameBorder:"0",width:"100%",height:"190"})}return a.createElement("a",{style:{textDecoration:"underline"},"aria-label":"rich-text-link",target:"_blank",rel:"noreferrer",href:e.data.uri},e.data.uri)}}},o=window.location.pathname.split("/");return a.createElement("div",{className:"game-detail-content"},a.createElement(c.Z,{gobackUrl:"/"+o[1],style:{gridArea:"main"},className:"small-card-class",title:t.contentfulProjects.title},a.createElement("div",{className:"blog-post-contenxt",style:{gridArea:"text"}},(0,l.h)(JSON.parse(t.contentfulProjects.detailedText.raw),r))),a.createElement("div",{className:"game-aside"},a.createElement("img",{style:{width:"100%",height:"auto",borderRadius:"12px"},src:t.contentfulProjects.url.file.url,alt:t.contentfulProjects.url.file.fileName}),a.createElement(i.Z,null,t.contentfulProjects.infoText),t.contentfulProjects.steamId&&a.createElement("iframe",{title:t.contentfulProjects.steamId,src:"https://store.steampowered.com/widget/"+t.contentfulProjects.steamId+"/",frameBorder:"0",width:"450",height:"190"})))}}}]);
//# sourceMappingURL=component---src-templates-detail-view-game-js-33d803b3ac68c0bbab75.js.map