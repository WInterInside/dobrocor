const body=$("body"),navToggle=$('[data-element~="navToggle"]'),subNavToggle=$('[data-element~="subNavToggle"]'),bannerToggle=$('[data-element~="bannerToggle"]'),toggleNav=()=>{body.hasClass("is-nav-open")?body.removeClass("is-nav-open"):body.addClass("is-nav-open")},toggleSubNav=()=>{body.hasClass("is-sub-nav-open")?body.removeClass("is-sub-nav-open"):body.addClass("is-sub-nav-open")},toggleBannerNav=()=>{body.hasClass("is-banner-nav-open")?body.removeClass("is-banner-nav-open"):body.addClass("is-banner-nav-open")},handleScroll=()=>{$(window).scrollTop()>0?body.addClass("is-scrolled"):body.removeClass("is-scrolled")};navToggle.on("click",toggleNav),subNavToggle.on("click",toggleSubNav),bannerToggle.on("click",toggleBannerNav),$(window).on("scroll",handleScroll),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();let o=document.querySelector(this.getAttribute("href"));const n=document.querySelector('[data-element="header"]');if(o){let e=n.offsetHeight+30,l=o.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:l,behavior:"smooth"})}}))}),$(document).ready((function(){var e=$(".docs__slider");e.slick({dots:!1,infinite:!0,speed:500,slidesToShow:5,arrows:!1,centerMode:!0,variableWidth:!0,focusOnSelect:!0,centerPadding:"10px",autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1e3,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:1}}]}),$(".prev").on("click",(function(){e.slick("slickPrev")})),$(".next").on("click",(function(){e.slick("slickNext")}))})),$(document).ready((function(){$(".footer__up").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)}))}));
//# sourceMappingURL=../sourcemaps/01_main.js.map
