(this.webpackJsonpcountriesflag=this.webpackJsonpcountriesflag||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=a(8),i=a(14),u=a(10),s=a(2),m=a(15),E=(a(32),a(33),function(e){var t=e.flag,a=e.name,n=e.nativeName,r=e.population,c=e.region,o=e.subregion,i=e.capital,u=e.topLevelDomain,s=e.currencies,m=void 0===s?[]:s,E=e.languages,p=void 0===E?[]:E,g=e.borders,f=void 0===g?[]:g;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"CountrySelectContainer"},l.a.createElement("img",{src:t,alt:"",className:"CountrySelectImagenFlag"}),l.a.createElement("div",{className:"ContainerCountrySelectInfoData"},l.a.createElement("h2",null,a),l.a.createElement("div",{className:"CountrySelectInfoData"},l.a.createElement("div",{class:""},l.a.createElement("p",null,l.a.createElement("strong",null,"Native Name:")," ",n),l.a.createElement("p",null,l.a.createElement("strong",null,"Population:")," ",r),l.a.createElement("p",null,l.a.createElement("strong",null,"Region:")," ",c),l.a.createElement("p",null,l.a.createElement("strong",null,"Sub Region:")," ",o),l.a.createElement("p",null,l.a.createElement("strong",null,"Capital:")," ",i)),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,"Top Level Domain:")," ",u),l.a.createElement("p",null,l.a.createElement("strong",null,"Currencies:")," ",m.map((function(e){return l.a.createElement("span",null,e.name)}))),l.a.createElement("p",{className:"languages"},l.a.createElement("strong",null,"Languages:")," ",p.map((function(e){return l.a.createElement("span",null,e.name)}))))),l.a.createElement("p",{className:"borders"},l.a.createElement("strong",null,"Border Countries:")),l.a.createElement("div",{className:"ContainerBorderCountries"},f.map((function(e){return l.a.createElement("span",{className:"CountrySelectBorderCountries"},e)}))))))}),p=function(e){var t=e.match,a=e.history,r=Object(n.useState)([]),c=Object(m.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/name/".concat(t.params.id)).then((function(e){return e.json()})).then((function(e){i(e[0])})).catch((function(){console.log("Grave error")}))}),[t]),l.a.createElement("div",{className:"CountryDetailContainer"},l.a.createElement("div",{className:"BackContainer"},l.a.createElement("button",{className:"back",onClick:function(){a.goBack()}},"\u2190 Back")),l.a.createElement(E,o))},g=(a(34),function(e){var t=e.name,a=e.imgflag,n=e.descriptionflag,r=e.population,c=e.capital,o=e.region,i=Object(s.f)();return l.a.createElement("div",{className:"Flag-Container",onClick:function(){i.push("/Detalle/".concat(t))}},l.a.createElement("img",{loading:"lazy",src:a,alt:n,className:"FlagImagenFlag"}),l.a.createElement("h2",{className:"FlagTittle"},t),l.a.createElement("div",{className:"Flag-Informacion-Container"},l.a.createElement("p",null," ",l.a.createElement("strong",null,"Poblacion: ")," ",r),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Capital:")," ",c),l.a.createElement("p",null," ",l.a.createElement("strong",null,"Region:")," ",o)))}),f=(a(36),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(o.b)(),i=Object(o.c)((function(e){return e.countryListByName})),u=Object(o.c)((function(e){return e.countryListByRegion})),s=Object(o.c)((function(e){return i.length>0?i:u.length>0?u:e.countryList}));Object(n.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(e){c({type:"SET_COUNTRY_LIST",payload:e})})).catch((function(){console.log("Grave error")}))}),[c]);return l.a.createElement(l.a.Fragment,null,console.log("countryList",s),console.log("countryListByName",i),console.log("countryListByRegion",u),l.a.createElement("div",{className:"HomeHeaderSearch"},l.a.createElement("input",{type:"text",value:a,onChange:function(e){r(e.target.value),document.getElementById("SelectByRegion").selectedIndex=0,c({type:"SET_COUNTRY_BY_NAME",payload:e.target.value})},className:"HomeFilterByName",placeholder:"Busca por nombre"}),l.a.createElement("select",{onChange:function(e){r(""),c({type:"SET_COUNTRY_BY_REGION",payload:e.target.value})},className:"HomeSelectRegion",id:"SelectByRegion"},l.a.createElement("option",{value:""},"Todos"),l.a.createElement("option",{value:"Asia"},"Asia"),l.a.createElement("option",{value:"Europe"},"Europe"),l.a.createElement("option",{value:"Africa"},"Africa"),l.a.createElement("option",{value:"Oceania"},"Oceania"),l.a.createElement("option",{value:"Americas"},"Americas"))),l.a.createElement("div",{className:"HomeContainer"},s.map((function(e){return l.a.createElement(g,{key:e.numericCode,name:e.name,imgflag:e.flag,descriptionflag:e.nativeName,population:e.population,capital:e.capital,region:e.region})}))))}),d=(a(37),function(e){return l.a.createElement("div",{className:"HeaderContainer"},l.a.createElement(u.b,{to:"/",className:"HeaderTittle"},l.a.createElement("h2",null,"\xbfDonde en el mundo?")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://co.linkedin.com/in/cristian-florez-a291b3161",className:"HeaderInfoDeveloperA"},l.a.createElement("h4",{className:"HeaderInfoDeveloper"},"Cristian Florez")),l.a.createElement("a",{href:"https://github.com/krisyupher",className:"HeaderInfoDeveloperA"},l.a.createElement("h4",{className:"HeaderInfoDeveloper"},"Desarrollador FrontEnd"))))}),y=(a(38),function(){return l.a.createElement(u.a,null,l.a.createElement(d,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/countriesflag/",component:f}),l.a.createElement(s.a,{exact:!0,path:"/",component:f}),l.a.createElement(s.a,{exact:!0,path:"/Detalle/:id",component:p})))}),v=a(7),N=function(e,t){switch(t.type){case"SET_COUNTRY_LIST":return Object(v.a)(Object(v.a)({},e),{},{countryList:t.payload});case"SET_COUNTRY_BY_NAME":var a=e.countryList.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));return Object(v.a)(Object(v.a)({},e),{},{countryListByName:a,countryListByRegion:[]});case"SET_COUNTRY_BY_REGION":var n=[];if(""===t.payload){var l=e.countryList;return Object(v.a)(Object(v.a)({},e),{},{countryListByRegion:l,countryListByName:n})}var r=e.countryList.filter((function(e){return e.region===t.payload}));return console.log("country",e),Object(v.a)(Object(v.a)({},e),{},{countryListByRegion:r,countryListByName:n});default:return e}},h={countryList:[],countryListByName:[],countryListByRegion:[]};console.log("initialState",h);var O=h,b=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),C=Object(i.b)(N,O,b);c.a.render(l.a.createElement(o.a,{store:C},l.a.createElement(y,null)),document.getElementById("app"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0118a31c.chunk.js.map