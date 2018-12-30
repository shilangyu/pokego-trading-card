(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports={base:"https://pokeapi.co/api/v2/",generation:"generation/:id/",pokemon:"pokemon/:id/",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/:id.png"}},13:function(e,t,n){"use strict";var r=n(23);n.d(t,"loadPokemonList",function(){return r.a}),n.d(t,"toggleNeededPokemonSelection",function(){return r.b}),n.d(t,"updateSearchValue",function(){return r.c});n(24)},23:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s});var r=n(21),o=n.n(r),a=n(29),c=n(30),i=n(12),u={type:"LOAD_POKEMON_LIST",payload:Object(a.a)(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.existingPokemon.generations.map(function(e){return i.base+i.generation.replace(":id",e)}),e.next=3,Promise.all(t.map(function(e){return fetch(e)}));case 3:return n=e.sent,e.next=6,Promise.all(n.map(function(e){return e.json()}));case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}},e,this)}))()},l=function(e){return{type:"TOGGLE_NEEDED_POKEMON_SELECTION",pokemonId:e}},s=function(e){return{type:"UPDATE_SEARCH_VALUE",value:e}}},24:function(e,t){},30:function(e){e.exports={existingPokemon:{generations:[1,2,3,4],pokemons:[],excludePokemons:[]}}},32:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(27),c=n.n(a),i=n(1),u=n(2),l=n(4),s=n(3),p=n(5),m=n(9),d=n(7),f=n(13),h=function(e){var t=e.name,n=e.id,r=e.togglePokemonSelection,a=e.selected;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"checkbox",name:t,onClick:function(){return r(n)},defaultChecked:a}),o.a.createElement("label",{htmlFor:t},t))},k=n(6),g=n(31),O=n(14),b=Object(k.c)({pokeselection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_POKEMON_LIST_FULFILLED":var n=t.payload.reduce(function(e,t){var n=/\/(?<id>\d{1,3})\/$/,r=t.pokemon_species.map(function(e){var t=e.name,r=e.url;return{name:t,url:r,id:Number(n.exec(r).groups.id)}});return[].concat(Object(O.a)(e),Object(O.a)(r))},[]);return n.sort(function(e,t){return e.id-t.id}),Object(d.a)({},e,{pokemonList:n});case"LOAD_POKEMON_LIST_REJECTED":return Object(d.a)({},e,{pokemonList:null});case"TOGGLE_NEEDED_POKEMON_SELECTION":var r=[];return r=r.includes(t.pokemonId)?e.neededPokemons.filter(function(e){return e!==t.pokemonId}):[].concat(Object(O.a)(e.neededPokemons),[t.pokemonId]),Object(d.a)({},e,{neededPokemons:r});case"UPDATE_SEARCH_VALUE":var o=t.value;return Object(d.a)({},e,{searchValue:o});default:return e}},pokepreview:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,e}}),E={pokeselection:{searchValue:"",neededPokemons:[],pokemonList:void 0},pokepreview:{}},v=Object(k.a)(Object(g.a)()),j=Object(k.d)(b,E,v),y={root:{width:"100%",height:"30rem",overflowY:"scroll",backgroundColor:"rgb(150, 150, 150)"},form:{display:"grid",gridTemplateColumns:"repeat(auto-fit, 130px)",gridGap:"10px"}},P=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.togglePokemonSelection,n=e.selectedPokemons,r=e.pokemonList,a=j.getState().pokeselection.searchValue;return void 0===r?o.a.createElement(o.a.Fragment,null," Pokemons loading... "):r?o.a.createElement("div",{style:y.root},o.a.createElement("form",{style:y.form},r.map(function(e){var r=e.name,c=e.id;return r.includes(a)?o.a.createElement("div",{key:r},o.a.createElement(h,{name:r,id:c,selected:n.includes(c),togglePokemonSelection:t})):null}))):o.a.createElement(o.a.Fragment,null," Error loading the Pokemons! ")}}]),t}(r.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchValue,n=e.updateSearchValue;return o.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}})}}]),t}(r.Component),L=Object(m.b)(function(e){var t=e.pokeselection;return Object(d.a)({},t)},function(e){return e(f.loadPokemonList),{toggleNeededPokemonSelection:function(t){return e(Object(f.toggleNeededPokemonSelection)(t))},updateSearchValue:function(t){return e(Object(f.updateSearchValue)(t))}}})(function(e){var t=e.searchValue,n=e.updateSearchValue,r=e.neededPokemons,a=e.toggleNeededPokemonSelection,c=e.pokemonList;return o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{searchValue:t,updateSearchValue:n}),o.a.createElement(P,{pokemonList:c,selectedPokemons:r,togglePokemonSelection:a}))}),S=n(12),x=n(10),_=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={image:null},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new window.Image;t.src=this.props.url,t.onload=function(){return e.setState({image:t})}}},{key:"render",value:function(){var e=this.props,t=e.x,n=e.y;return this.state.image?o.a.createElement(x.Image,{image:this.state.image,x:t,y:n}):o.a.createElement(x.Text,{text:"Loading sprite...",x:t,y:n})}}]),t}(r.Component),C={offset:{x:100,y:100},perRow:10},I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.spriteUrls,t=Math.min(C.perRow,e.length)*C.offset.x,n=Math.ceil(e.length/C.perRow)*C.offset.y;return o.a.createElement(x.Stage,{width:t,height:n},o.a.createElement(x.Layer,null,e.map(function(e,t){var n=C.offset.x*(t%C.perRow),r=C.offset.y*Math.floor(t/C.perRow);return o.a.createElement(_,{key:e,url:e,x:n,y:r})})))}}]),t}(r.Component),N=Object(m.b)(function(e){return{spriteUrls:e.pokeselection.neededPokemons.map(function(e){return S.sprite.replace(":id",e)})}},function(e){return{}})(function(e){return o.a.createElement(I,e)}),V=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,{store:j},o.a.createElement(L,null),o.a.createElement(N,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.344e23c1.chunk.js.map