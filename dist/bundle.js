!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),e.exports=t(3)},function(e,n,t){"use strict";var r,o=t(2);new((r=o)&&r.__esModule?r:{default:r}).default},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var o=function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("setting up"),this.boardContainer=document.querySelector(".board-container"),this.selectGameDropdown=document.querySelector(".select-game"),this.games=["stock","mps_1","mps_2","mp_3","mps_4"],console.log("dropdown",this.selectGameDropdown),this.selectGameDropdown.addEventListener("change",(function(e){console.log("changed"),n.drawBoard(e)})),this.numberOfFaces=25}return r(e,[{key:"drawBoard",value:function(e){this.selectedGame=this.games[e.target.selectedIndex],console.log("selected",this.selectedGame);var n=this.generateBoardMarkup();this.boardContainer.innerHTML=n}},{key:"generateBoardMarkup",value:function(){var e="";console.log("path?",window.location.pathname);for(var n=0;n<this.numberOfFaces;n++)e='<div class="person-container person-'+n+'">\n                        <img src="./src/assets/'+this.selectedGame+"/"+n+'.jpeg">\n                        <span class="name-container"></span>\n                    </div>';return e}}]),e}();n.default=o},function(e,n,t){}]);