(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,n,t){e.exports=t(281)},281:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),i=t.n(o),c=t(15),l=t(16),s=t(18),u=t(17),m=t(19),w=t(26),p=t(70),d=t.n(p),h=t(68),f=t.n(h),g=t(48),b=t.n(g),v=t(67),k=t.n(v),y=t(69),O=t.n(y),E=t(21),j=t.n(E),C=t(50),x={searchValue:"",neededPokemons:[],offeredPokemons:[]},S=[],P=function(e){return function(){e.apply(void 0,arguments),S.forEach(function(e){return e(N())})}},N=function(){return JSON.parse(JSON.stringify(x))},R=function(e){return S.push(e)},I=P(function(e){return x.searchValue=e}),M=function(e){return P(function(n,t){var a=x[e+"Pokemons"].find(function(e){return n===e.id});a||""===t?""===t?x[e+"Pokemons"]=Object(C.a)(x[e+"Pokemons"].filter(function(e){return e.id!==n})):t!==a.variation&&(x[e+"Pokemons"]=[].concat(Object(C.a)(x[e+"Pokemons"].filter(function(e){return e.id!==n})),[{id:n,variation:t}])):x[e+"Pokemons"]=[].concat(Object(C.a)(x[e+"Pokemons"]),[{id:n,variation:t}])})},z=P(function(e){var n=e.neededPokemons,t=e.offeredPokemons;x.neededPokemons=n,x.offeredPokemons=t}),L=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={labelWidth:0,value:"",visible:!0},t.handleChange=function(e){var n=e.target.value;t.props.addPokemonSelection(n),t.setState({value:n})},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({labelWidth:i.a.findDOMNode(this.InputLabelRef).offsetWidth}),R(function(n){var t=n.searchValue,a=e.props.name.includes(t.toLowerCase());a!==e.state.visible&&e.setState({visible:a})})}},{key:"render",value:function(){var e=this,n=this.props,t=n.classes,a=n.name;return this.state.visible&&r.a.createElement(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,xl:2},r.a.createElement(k.a,{variant:"outlined",className:t.formControl},r.a.createElement(f.a,{ref:function(n){return e.InputLabelRef=n}},a),r.a.createElement(O.a,{value:this.state.value,onChange:this.handleChange,input:r.a.createElement(d.a,{labelWidth:this.state.labelWidth})},r.a.createElement(b.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(b.a,{value:"normal"},"Normal"),r.a.createElement(b.a,{value:"shiny"},r.a.createElement("span",{className:t.shiny},"Shiny")))))}}]),n}(r.a.Component),W=Object(w.withStyles)(function(e){return{formControl:{display:"flex",flexWrap:"wrap",margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit},shiny:{color:"#e5f442"}}})(L),A=t(47),B=t.n(A),U=t(71),T=t.n(U),D=function(e,n){return{name:e,pokeapiUrl:"https://pokeapi.co/api/v2/pokemon-species/".concat(n,"/"),sprites:{normal:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),shiny:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/".concat(n,".png")},id:n}},F=[new D("bulbasaur",1),new D("ivysaur",2),new D("venusaur",3),new D("charmander",4),new D("charmeleon",5),new D("charizard",6),new D("squirtle",7),new D("wartortle",8),new D("blastoise",9),new D("caterpie",10),new D("metapod",11),new D("butterfree",12),new D("weedle",13),new D("kakuna",14),new D("beedrill",15),new D("pidgey",16),new D("pidgeotto",17),new D("pidgeot",18),new D("rattata",19),new D("raticate",20),new D("spearow",21),new D("fearow",22),new D("ekans",23),new D("arbok",24),new D("pikachu",25),new D("raichu",26),new D("sandshrew",27),new D("sandslash",28),new D("nidoran\u2640",29),new D("nidorina",30),new D("nidoqueen",31),new D("nidoran\u2642",32),new D("nidorino",33),new D("nidoking",34),new D("clefairy",35),new D("clefable",36),new D("vulpix",37),new D("ninetales",38),new D("jigglypuff",39),new D("wigglytuff",40),new D("zubat",41),new D("golbat",42),new D("oddish",43),new D("gloom",44),new D("vileplume",45),new D("paras",46),new D("parasect",47),new D("venonat",48),new D("venomoth",49),new D("diglett",50),new D("dugtrio",51),new D("meowth",52),new D("persian",53),new D("psyduck",54),new D("golduck",55),new D("mankey",56),new D("primeape",57),new D("growlithe",58),new D("arcanine",59),new D("poliwag",60),new D("poliwhirl",61),new D("poliwrath",62),new D("abra",63),new D("kadabra",64),new D("alakazam",65),new D("machop",66),new D("machoke",67),new D("machamp",68),new D("bellsprout",69),new D("weepinbell",70),new D("victreebel",71),new D("tentacool",72),new D("tentacruel",73),new D("geodude",74),new D("graveler",75),new D("golem",76),new D("ponyta",77),new D("rapidash",78),new D("slowpoke",79),new D("slowbro",80),new D("magnemite",81),new D("magneton",82),new D("farfetchd",83),new D("doduo",84),new D("dodrio",85),new D("seel",86),new D("dewgong",87),new D("grimer",88),new D("muk",89),new D("shellder",90),new D("cloyster",91),new D("gastly",92),new D("haunter",93),new D("gengar",94),new D("onix",95),new D("drowzee",96),new D("hypno",97),new D("krabby",98),new D("kingler",99),new D("voltorb",100),new D("electrode",101),new D("exeggcute",102),new D("exeggutor",103),new D("cubone",104),new D("marowak",105),new D("hitmonlee",106),new D("hitmonchan",107),new D("lickitung",108),new D("koffing",109),new D("weezing",110),new D("rhyhorn",111),new D("rhydon",112),new D("chansey",113),new D("tangela",114),new D("kangaskhan",115),new D("horsea",116),new D("seadra",117),new D("goldeen",118),new D("seaking",119),new D("staryu",120),new D("starmie",121),new D("mr mime",122),new D("scyther",123),new D("jynx",124),new D("electabuzz",125),new D("magmar",126),new D("pinsir",127),new D("tauros",128),new D("magikarp",129),new D("gyarados",130),new D("lapras",131),new D("ditto",132),new D("eevee",133),new D("vaporeon",134),new D("jolteon",135),new D("flareon",136),new D("porygon",137),new D("omanyte",138),new D("omastar",139),new D("kabuto",140),new D("kabutops",141),new D("aerodactyl",142),new D("snorlax",143),new D("articuno",144),new D("zapdos",145),new D("moltres",146),new D("dratini",147),new D("dragonair",148),new D("dragonite",149),new D("mewtwo",150),new D("mew",151)],J=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.addPokemonSelection,t=e.rootStyles,a=e.title;return r.a.createElement(B.a,{style:t},r.a.createElement(j.a,{container:!0,spacing:24},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(T.a,{align:"center",variant:"h4"},a)),F.map(function(e){var t=e.name,a=e.id;return r.a.createElement(W,{key:a,name:t,id:a,addPokemonSelection:function(e){return n(a,e)}})})))}}]),n}(a.Component),V=t(107),q=t.n(V),G=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).onChange=function(e){I(e.target.value)},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(q.a,{onChange:this.onChange,label:"Search",fullWidth:!0,margin:"normal",variant:"outlined"})}}]),n}(a.Component),$={pokelist:{height:"30rem",overflowY:"scroll",overflowX:"hidden"}},H=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(j.a,{container:!0,spacing:24},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(G,null)," ",r.a.createElement("br",null)),r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(J,{title:"Pokemons you are looking for",rootStyles:$.pokelist,addPokemonSelection:M("needed")})),r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(J,{title:"Pokemons you can give",rootStyles:$.pokelist,addPokemonSelection:M("offered")})))}}]),n}(a.Component),X=t(22),Y=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={image:void 0},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=new window.Image;n.crossOrigin="Anonymous",n.src=this.props.url,n.onload=function(){return e.setState({image:n})},n.onerror=function(){return e.setState({image:null})}}},{key:"render",value:function(){var e=this.props,n=e.x,t=e.y;return void 0===this.state.image?r.a.createElement(X.Text,{text:"Loading sprite...",x:n,y:t}):this.state.image?r.a.createElement(X.Image,{image:this.state.image,x:n,y:t}):r.a.createElement(X.Text,{text:"Sprite not found!",x:n,y:t})}}]),n}(a.Component),K=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.spriteUrls,t=e.text,a=e.config,o=e.yOffset,i=e.gradientColors,c=Math.min(a.sprite.perRow,n.length)*a.sprite.offset.x,l=Math.ceil(n.length/a.sprite.perRow)*a.sprite.offset.y;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.Rect,{y:o,width:c,height:l,fillLinearGradientStartPoint:{x:0,y:0},fillLinearGradientEndPoint:{x:c,y:l},fillLinearGradientColorStops:[0,i[0],1,i[1]]}),r.a.createElement(X.Text,{y:o,text:t,width:c,height:l,align:"center",verticalAlign:"middle",fontFamily:"Staatliches",fontSize:48}),n.map(function(e,n){var t=a.sprite.offset.x*(n%a.sprite.perRow),i=a.sprite.offset.y*Math.floor(n/a.sprite.perRow)+o;return r.a.createElement(Y,{key:e,url:e,x:t,y:i})}))}}]),n}(a.Component),Q=t(49),Z=t.n(Q),_=t(117),ee=t.n(_),ne=t(118),te=t.n(ne),ae=t(119),re=t.n(ae),oe=t(36),ie=t(120),ce=t(6),le=t.n(ce),se=t(108),ue=t.n(se),me=t(110),we=t.n(me),pe=t(111),de=t.n(pe),he=t(115),fe=t.n(he),ge=t(109),be=t.n(ge),ve=t(112),ke=t.n(ve),ye=t(113),Oe=t.n(ye),Ee=t(114),je=t.n(Ee),Ce=t(116),xe=t.n(Ce),Se=t(72),Pe=t.n(Se),Ne={success:ue.a,warning:be.a,error:we.a,info:de.a};var Re=Object(w.withStyles)(function(e){return{success:{backgroundColor:ke.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:Oe.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var n=e.classes,t=e.className,a=e.message,o=e.onClose,i=e.variant,c=Object(ie.a)(e,["classes","className","message","onClose","variant"]),l=Ne[i];return r.a.createElement(Pe.a,Object.assign({className:le()(n[i],t),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:n.message},r.a.createElement(l,{className:le()(n.icon,n.iconVariant)}),a),action:[r.a.createElement(je.a,{key:"close","aria-label":"Close",color:"inherit",className:n.close,onClick:o},r.a.createElement(fe.a,{className:n.icon}))]},c))}),Ie=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={open:!0},t.handleClose=t.handleClose.bind(Object(oe.a)(Object(oe.a)(t))),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"handleClose",value:function(e,n){"clickaway"!==n&&this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,n=e.variant,t=e.children,a=e.timeout,o=void 0===a?4e3:a;return r.a.createElement(xe.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:o,onClose:this.handleClose},r.a.createElement(Re,{onClose:this.handleClose,variant:n,message:t}))}}]),n}(r.a.Component),Me=Object(w.withStyles)(function(e){return{margin:{margin:e.spacing.unit}}})(Ie),ze=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={importError:!1},t.onSaveButtonClick=function(e){var n=document.createElement("a");n.href=document.querySelector("canvas").toDataURL("image/png"),n.download="Trading-Card.png",n.click()},t.onExportButtonClick=function(e){var n=N(),t={neededPokemons:n.neededPokemons,offeredPokemons:n.offeredPokemons},a=document.createElement("a"),r=new Blob([JSON.stringify(t)],{type:"text/plain"});a.href=URL.createObjectURL(r),a.download="Exported-Trading-Card.json",a.click()},t.onImportButtonClick=function(){var e=document.createElement("input");e.type="file",e.onchange=function(e){var n=e.target.files;if(1===n.length&&/.*\.json$/.test(n[0].name)){var a=new FileReader;a.onload=function(e){var n=e.target.result;try{z(JSON.parse(n))}catch(a){return void t.setState({importError:!0})}},a.readAsText(n[0])}else t.setState({importError:!0})},e.click()},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state.importError;return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(Me,{variant:"error"},"Could not import the trading card, incorrect file :("),r.a.createElement(Z.a,{variant:"contained",className:e.button,onClick:this.onSaveButtonClick},r.a.createElement(ee.a,{className:e.leftIcon}),"Save"),r.a.createElement(Z.a,{variant:"contained",className:e.button,onClick:this.onExportButtonClick},r.a.createElement(te.a,{className:e.leftIcon}),"Export"),r.a.createElement(Z.a,{variant:"contained",className:e.button,onClick:this.onImportButtonClick},r.a.createElement(re.a,{className:e.leftIcon}),"Import"))}}]),n}(a.Component),Le=Object(w.withStyles)(function(e){return{button:{margin:e.spacing.unit},leftIcon:{marginRight:e.spacing.unit}}})(ze),We={sprite:{offset:{x:100,y:100},perRow:10}},Ae=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;R(function(){return e.forceUpdate()})}},{key:"render",value:function(){var e=N().neededPokemons.map(function(e){var n=e.id,t=e.variation;return F.find(function(e){return e.id===n}).sprites[t]}),n=N().offeredPokemons.map(function(e){var n=e.id,t=e.variation;return F.find(function(e){return e.id===n}).sprites[t]}),t=Math.min(We.sprite.perRow,e.length)*We.sprite.offset.x,a=Math.ceil(e.length/We.sprite.perRow)*We.sprite.offset.y,o=Math.min(We.sprite.perRow,n.length)*We.sprite.offset.x,i=Math.ceil(n.length/We.sprite.perRow)*We.sprite.offset.y;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.Stage,{width:Math.max(t,o),height:a+i},r.a.createElement(X.Layer,null,r.a.createElement(K,{spriteUrls:e,text:"Pokemons I'm looking for",config:We,yOffset:0,gradientColors:["#113977","#4689f2"]}),r.a.createElement(K,{spriteUrls:n,text:"Pokemons I can give",config:We,yOffset:a,gradientColors:["#166021","#46f15f"]}))),e.length+n.length!==0&&r.a.createElement(Le,null))}}]),n}(a.Component),Be=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement(Ae,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,2,1]]]);
//# sourceMappingURL=main.30641dac.chunk.js.map