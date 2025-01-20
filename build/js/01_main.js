const body=$("body"),navToggle=$('[data-element~="navToggle"]'),subNavToggle=$('[data-element~="subNavToggle"]'),bannerToggle=$('[data-element~="bannerToggle"]'),toggleNav=()=>{body.hasClass("is-nav-open")?body.removeClass("is-nav-open"):body.addClass("is-nav-open")},toggleSubNav=()=>{body.hasClass("is-sub-nav-open")?body.removeClass("is-sub-nav-open"):body.addClass("is-sub-nav-open")},toggleBannerNav=()=>{body.hasClass("is-banner-nav-open")?body.removeClass("is-banner-nav-open"):body.addClass("is-banner-nav-open")},handleScroll=()=>{$(window).scrollTop()>0?body.addClass("is-scrolled"):body.removeClass("is-scrolled")};navToggle.on("click",toggleNav),subNavToggle.on("click",toggleSubNav),bannerToggle.on("click",toggleBannerNav),$(window).on("scroll",handleScroll),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();let o=document.querySelector(this.getAttribute("href"));const s=document.querySelector('[data-element="header"]');if(o){let e=s.offsetHeight+30,n=o.getBoundingClientRect().top+window.scrollY-e;window.scrollTo({top:n,behavior:"smooth"})}}))}),$(document).ready((function(){var e=$(".wishes__slider");e.slick({dots:!1,infinite:!0,speed:500,slidesToShow:5,arrows:!1,centerMode:!0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1400,settings:{slidesToShow:4}},{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]}),$(".wishes__controls .prev").on("click",(function(){e.slick("slickPrev")})),$(".wishes__controls .next").on("click",(function(){e.slick("slickNext")}))})),$(document).ready((function(){var e=$(".analitics__slider");e.slick({dots:!1,infinite:!0,speed:500,slidesToShow:4,arrows:!1,centerMode:!0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]}),$(".analitics__controls .prev").on("click",(function(){e.slick("slickPrev")})),$(".analitics__controls .next").on("click",(function(){e.slick("slickNext")}))})),$(document).ready((function(){var e=$(".recomend__slider");e.slick({dots:!1,infinite:!0,speed:500,slidesToShow:3,arrows:!1,centerMode:!0,focusOnSelect:!0,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]}),$(".analitics__controls .prev").on("click",(function(){e.slick("slickPrev")})),$(".analitics__controls .next").on("click",(function(){e.slick("slickNext")}))})),$(document).ready((function(){var e=$(".news__slider");e.slick({dots:!1,infinite:!0,speed:300,arrows:!1,slidesToShow:1}),$(".news__controls .prev").on("click",(function(){e.slick("slickPrev")})),$(".news__controls .next").on("click",(function(){e.slick("slickNext")}))})),$(document).ready((function(){$(".footer__up").on("click",(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)}))})),$(document).ready((function(){var e=$('.weekdays__wrapper aside h2:contains("#ИсторияДобровольца")').next("div").find("a");e.slice(4).addClass("is-hidden"),$(".show-stories.button.button--light").on("click",(function(){"Смотреть еще"===$(this).text().trim()?(e.removeClass("is-hidden"),$(this).text("Скрыть")):(e.slice(4).addClass("is-hidden"),$(this).text("Смотреть еще"))}))})),$(document).ready((function(){function e(){let e=12;(window.innerWidth||document.documentElement.clientWidth)<1e3&&(e=6),$(".weekdays__slide-wrapper a").slice(e).addClass("is-hidden")}e(),$(window).resize(e),$(".show-all-weekdays").on("click",(function(){var o=$(this);$(".weekdays__slide-wrapper a.is-hidden").length>0?($(".weekdays__slide-wrapper a.is-hidden").removeClass("is-hidden"),o.text("Скрыть")):(e(),o.text("Смотреть еще"))}))}));
//# sourceMappingURL=../sourcemaps/01_main.js.map
