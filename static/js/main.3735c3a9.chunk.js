(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e){e.exports={existingPokemon:{generations:[1,2,3,4],pokemons:[],excludePokemons:[]}}},136:function(e,t,n){e.exports=n(308)},308:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),c=n(16),s=n(17),l=n(19),u=n(18),m=n(20),d=n(36),p=n(26),f=n(44),h=n(59),k=n(35),g=n(79),O=n.n(g),v=n(77),b=n.n(v),E=n(60),y=n.n(E),j=n(76),S=n.n(j),P=n(78),w=n.n(P),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={age:"",name:"hai",labelWidth:0},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r)),r&&n.props.addPokemonSelection(r)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({labelWidth:i.a.findDOMNode(this.InputLabelRef).offsetWidth})}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,a=t.name;t.selected;return r.a.createElement(S.a,{variant:"outlined",className:n.formControl},r.a.createElement(b.a,{ref:function(t){return e.InputLabelRef=t},htmlFor:"outlined-age-simple"},a),r.a.createElement(w.a,{value:this.state.age,onChange:this.handleChange,input:r.a.createElement(O.a,{labelWidth:this.state.labelWidth,name:"age"})},r.a.createElement(y.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(y.a,{value:"normal"},"Normal"),r.a.createElement(y.a,{value:"shiny"},r.a.createElement("span",{className:n.shiny},"Shiny"))))}}]),t}(r.a.Component),C=Object(k.withStyles)(function(e){return{formControl:{display:"flex",flexWrap:"wrap",margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit},shiny:{color:"#e5f442"}}})(x),I=n(28),L=n(134),N=n(45),D=Object(I.c)({pokeselection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_POKEMON_LIST_FULFILLED":var n=t.payload.reduce(function(e,t){var n=/\/(?<id>\d{1,3})\/$/,a=t.pokemon_species.map(function(e){var t=e.name,a=e.url;return{name:t,url:a,id:Number(n.exec(a).groups.id)}});return[].concat(Object(N.a)(e),Object(N.a)(a))},[]);return n.sort(function(e,t){return e.id-t.id}),Object(p.a)({},e,{pokemonList:n});case"LOAD_POKEMON_LIST_REJECTED":return Object(p.a)({},e,{pokemonList:null});case"ADD_NEEDED_POKEMON_SELECTION":var a=Object(N.a)(e.neededPokemons);return a.find(function(e){return e.pokemonId===t.pokemonId})?a=e.neededPokemons.map(function(e){return e.pokemonId===t.pokemonId?{pokemonId:t.pokemonId,variation:t.variation}:e}):a.push({pokemonId:t.pokemonId,variation:t.variation}),Object(p.a)({},e,{neededPokemons:a});case"ADD_OFFERED_POKEMON_SELECTION":var r=Object(N.a)(e.offeredPokemons);return r.find(function(e){return e.pokemonId===t.pokemonId})?r=e.offeredPokemons.map(function(e){return e.pokemonId===t.pokemonId?{pokemonId:t.pokemonId,variation:t.variation}:e}):r.push({pokemonId:t.pokemonId,variation:t.variation}),Object(p.a)({},e,{offeredPokemons:r});case"UPDATE_SEARCH_VALUE":var o=t.value;return Object(p.a)({},e,{searchValue:o});default:return e}},pokepreview:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1?arguments[1]:void 0).type,e}}),_={pokeselection:{searchValue:"",neededPokemons:[],offeredPokemons:[],pokemonList:void 0},pokepreview:{}},A=Object(I.a)(Object(L.a)()),M=Object(I.d)(D,_,A),R=n(27),V=n.n(R),T=n(57),U=n.n(T),F=n(132),W=n.n(F),K=n(135),z=n(5),G=n.n(z),H=n(123),J=n.n(H),B=n(125),$=n.n(B),X=n(126),Y=n.n(X),q=n(130),Q=n.n(q),Z=n(127),ee=n.n(Z),te=n(128),ne=n.n(te),ae=n(129),re=n.n(ae),oe=n(131),ie=n.n(oe),ce=n(80),se=n.n(ce),le=n(124),ue=n.n(le),me={success:J.a,warning:ue.a,error:$.a,info:Y.a};var de=Object(k.withStyles)(function(e){return{success:{backgroundColor:ee.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:ne.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,n=e.className,a=e.message,o=e.onClose,i=e.variant,c=Object(K.a)(e,["classes","className","message","onClose","variant"]),s=me[i];return r.a.createElement(se.a,Object.assign({className:G()(t[i],n),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(s,{className:G()(t.icon,t.iconVariant)}),a),action:[r.a.createElement(re.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:o},r.a.createElement(Q.a,{className:t.icon}))]},c))}),pe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},n.handleClose=function(e,t){"clickaway"!==t&&n.setState({open:!1})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.variant,n=e.children;return r.a.createElement(ie.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:6e3,onClose:this.handleClose},r.a.createElement(de,{onClose:this.handleClose,variant:t,message:n}))}}]),t}(r.a.Component),fe=Object(k.withStyles)(function(e){return{margin:{margin:e.spacing.unit}}})(pe),he=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.addPokemonSelection,n=e.selectedPokemons,a=e.pokemonList,o=e.rootStyles,i=M.getState().pokeselection.searchValue;return r.a.createElement(U.a,{style:o},void 0===a?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null)," ",r.a.createElement("br",null),r.a.createElement(fe,{variant:"info"},"Loading pok\xe9mons...")):a?r.a.createElement(V.a,{container:!0,spacing:24},a.map(function(e){var a=e.name,o=e.id;return a.includes(i)?r.a.createElement(V.a,{item:!0,key:a,xs:12,sm:6,md:4,lg:3,xl:2},r.a.createElement(C,{name:a,id:o,selected:n.includes(o),addPokemonSelection:function(e){return t(o,e)}})):null})):r.a.createElement(r.a.Fragment,null," Error loading the Pokemons! "))}}]),t}(a.Component),ke=n(133),ge=n.n(ke),Oe=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onChange=function(e){n.props.updateSearchValue(e.target.value)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.searchValue;return r.a.createElement(ge.a,{onChange:this.onChange,label:"Search",fullWidth:!0,margin:"normal",variant:"outlined",value:e})}}]),t}(a.Component),ve={pokelist:{height:"30rem",overflowY:"scroll",overflowX:"hidden"}},be=Object(d.b)(function(e){var t=e.pokeselection;return Object(p.a)({},t)},function(e){return e(f.loadPokemonList),{addNeededPokemonSelection:function(t,n){return e(Object(f.addNeededPokemonSelection)(t,n))},addOfferedPokemonSelection:function(t,n){return e(Object(f.addOfferedPokemonSelection)(t,n))},updateSearchValue:function(t){return e(Object(f.updateSearchValue)(t))}}})(function(e){var t=e.searchValue,n=e.updateSearchValue,a=e.neededPokemons,o=e.addNeededPokemonSelection,i=e.offeredPokemons,c=e.addOfferedPokemonSelection,s=e.pokemonList;return r.a.createElement(V.a,{container:!0,spacing:24},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(Oe,{searchValue:t,updateSearchValue:n})," ",r.a.createElement("br",null)),r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(he,{rootStyles:ve.pokelist,pokemonList:s,selectedPokemons:a,addPokemonSelection:o})),r.a.createElement(V.a,{item:!0,xs:6},r.a.createElement(he,{rootStyles:ve.pokelist,pokemonList:s,selectedPokemons:i,addPokemonSelection:c})))}),Ee=n(37),ye=n(23),je=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={image:void 0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new window.Image;t.src=this.props.url,t.onload=function(){return e.setState({image:t})},t.onerror=function(){return e.setState({image:null})}}},{key:"render",value:function(){var e=this.props,t=e.x,n=e.y;return void 0===this.state.image?r.a.createElement(ye.Text,{text:"Loading sprite...",x:t,y:n}):this.state.image?r.a.createElement(ye.Image,{image:this.state.image,x:t,y:n}):r.a.createElement(ye.Text,{text:"Sprite not found!",x:t,y:n})}}]),t}(a.Component),Se=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.spriteUrls,n=e.text,a=e.config,o=e.yOffset,i=e.gradientColors,c=Math.min(a.sprite.perRow,t.length)*a.sprite.offset.x,s=Math.ceil(t.length/a.sprite.perRow)*a.sprite.offset.y;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye.Rect,{y:o,width:c,height:s,fillLinearGradientStartPoint:{x:0,y:0},fillLinearGradientEndPoint:{x:c,y:s},fillLinearGradientColorStops:[0,i[0],1,i[1]]}),r.a.createElement(ye.Text,{y:o,text:n,width:c,height:s,align:"center",verticalAlign:"middle",fontFamily:"Staatliches",fontSize:48}),t.map(function(e,t){var n=a.sprite.offset.x*(t%a.sprite.perRow),i=a.sprite.offset.y*Math.floor(t/a.sprite.perRow)+o;return r.a.createElement(je,{key:e,url:e,x:n,y:i})}))}}]),t}(a.Component),Pe={sprite:{offset:{x:100,y:100},perRow:10}},we=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.neededSpriteUrls,n=e.offeredSpriteUrls,a=Math.min(Pe.sprite.perRow,t.length)*Pe.sprite.offset.x,o=Math.ceil(t.length/Pe.sprite.perRow)*Pe.sprite.offset.y,i=Math.min(Pe.sprite.perRow,n.length)*Pe.sprite.offset.x,c=Math.ceil(n.length/Pe.sprite.perRow)*Pe.sprite.offset.y;return r.a.createElement(ye.Stage,{width:Math.max(a,i),height:o+c},r.a.createElement(ye.Layer,null,r.a.createElement(Se,{spriteUrls:t,text:"Pokemons I'm looking for",config:Pe,yOffset:0,gradientColors:["#113977","#4689f2"]}),r.a.createElement(Se,{spriteUrls:n,text:"Pokemons I can give",config:Pe,yOffset:o,gradientColors:["#166021","#46f15f"]})))}}]),t}(a.Component),xe=Object(d.b)(function(e){var t=e.pokeselection;return{neededSpriteUrls:t.neededPokemons.map(function(e){var t=e.pokemonId;return e.variation,Ee.sprite.replace(":id",t)}),offeredSpriteUrls:t.offeredPokemons.map(function(e){var t=e.pokemonId;return e.variation,Ee.sprite.replace(":id",t)})}},function(e){return{}})(we),Ce=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:M},r.a.createElement(be,null),r.a.createElement(xe,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e){e.exports={base:"https://pokeapi.co/api/v2/",generation:"generation/:id/",pokemon:"pokemon/:id/",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/:id.png"}},44:function(e,t,n){"use strict";var a=n(82);n.d(t,"addNeededPokemonSelection",function(){return a.a}),n.d(t,"addOfferedPokemonSelection",function(){return a.b}),n.d(t,"loadPokemonList",function(){return a.c}),n.d(t,"updateSearchValue",function(){return a.d});n(83)},82:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return m});var a=n(81),r=n.n(a),o=n(121),i=n(122),c=n(37),s={type:"LOAD_POKEMON_LIST",payload:Object(o.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.existingPokemon.generations.map(function(e){return c.base+c.generation.replace(":id",e)}),e.next=3,Promise.all(t.map(function(e){return fetch(e)}));case 3:return n=e.sent,e.next=6,Promise.all(n.map(function(e){return e.json()}));case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}))()},l=function(e,t){return{type:"ADD_NEEDED_POKEMON_SELECTION",pokemonId:e,variation:t}},u=function(e,t){return{type:"ADD_OFFERED_POKEMON_SELECTION",pokemonId:e,variation:t}},m=function(e){return{type:"UPDATE_SEARCH_VALUE",value:e}}},83:function(e,t){}},[[136,2,1]]]);
//# sourceMappingURL=main.3735c3a9.chunk.js.map