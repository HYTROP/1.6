!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";o.r(t);o(2),o(3);var r=document.querySelector(".text-description"),n=document.querySelector(".text"),c=document.querySelector(".read-more__button"),s=document.querySelector(".show-more__text"),i=document.querySelector(".show-more__arrow");c.onclick=function(){i.classList.toggle("rotate"),r.classList.toggle("text-start"),n.classList.toggle("read-more-320"),"Скрыть"===s.textContent?s.textContent="Читать далее":s.textContent="Скрыть"};new Swiper(".swiper",{pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'"></span>'}},breakpoints:{320:{slidesPerView:2,spaceBetween:190,initialSlide:0,watchOverflow:!0},767:{slidesPerView:3,spaceBetween:26,watchOverflow:!1},1440:{slidesPerView:4,spaceBetween:54,watchOverflow:!1}}});var l=document.querySelector(".__text"),a=document.querySelector(".__btn"),u=document.querySelector(".__img"),d=document.querySelector(".swiper-slide-hidden"),m=document.querySelector(".swiper-slide-hidden2");a.onclick=function(){u.classList.toggle("rotate"),"Скрыть"===l.textContent?l.textContent="Показать все":l.textContent="Скрыть",d.classList.toggle("swiper-slide-hidden"),m.classList.toggle("swiper-slide-hidden"),d.classList.toggle("swiper-slide-open"),m.classList.toggle("swiper-slide-open")};var f=document.querySelector(".show-more-services"),y=document.querySelector(".__btn-tech"),_=document.querySelector(".__text-tech"),p=document.querySelector(".__img-tech");y.onclick=function(){p.classList.toggle("rotate"),f.classList.toggle("show-more-service-active"),f.classList.toggle("show-more-service"),"Скрыть"===_.textContent?_.textContent="Показать все":_.textContent="Скрыть"};var v=document.querySelector(".header-menu"),b=document.querySelector(".burger-menu__btn"),g=document.querySelector(".burger__overlay"),w=document.querySelector(".header-menu__btn-close"),L=!1;b.addEventListener("click",(function(){L?(document.body.classList.remove("no-scroll"),g.classList.remove("burger__overlay--is-active"),v.classList.remove("header-menu--is-active"),L=!1):(g.classList.add("burger__overlay--is-active"),v.classList.add("header-menu--is-active"),document.body.classList.add("no-scroll"),L=!0)})),w.addEventListener("click",(function(){L&&(g.classList.remove("burger__overlay--is-active"),v.classList.remove("header-menu--is-active"),document.body.classList.remove("no-scroll"),L=!1)}));var S=document.querySelectorAll(".button-call"),q=document.querySelector(".wrapper__modal-call"),h=q.querySelector(".modal-call__btn-close"),x=document.querySelectorAll(".button-message"),k=document.querySelector(".wrapper__modal-feedback"),O=k.querySelector(".modal-feedback__btn-close"),C=function(e,t,o,r){e.forEach((function(e){e.addEventListener("click",(function(){t.classList.add(r),document.body.classList.add("body-fixed")}))})),o.addEventListener("click",(function(){t.classList.remove(r),screen.width<1440&&v.classList.contains("header-menu--active")||document.body.classList.remove("body-fixed")})),t.addEventListener("click",(function(e){e.target==t&&(t.classList.remove(r),screen.width<1440&&v.classList.contains("header-menu--active")||document.body.classList.remove("body-fixed"))}))};C(S,q,h,"wrapper__modal-call--open"),C(x,k,O,"wrapper__modal-feedback--open");var E=k.querySelector(".modal-feedback"),P=document.body.querySelector(".modal-call__input"),j=document.body.querySelector(".modal-feedback__input"),B=function(e){return function(){e.focus()}};P.addEventListener("transitionstart",B(P)),E.addEventListener("transitionstart",B(j))},function(e,t,o){},function(e,t,o){}]);
//# sourceMappingURL=bundle.js.map