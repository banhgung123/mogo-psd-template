"use strict";var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),expandClass="is-expand";menuToggle.addEventListener("click",function(e){menuHeader.classList.contains(expandClass)?(menuHeader.classList.remove(expandClass),menuToggle.classList.add("fa-bars"),menuToggle.classList.remove("fa-times")):(menuHeader.classList.add(expandClass),menuToggle.classList.remove("fa-bars"),menuToggle.classList.add("fa-times"))}),window.addEventListener("click",function(e){e.target.contains(menuToggle)||(menuHeader.classList.remove(expandClass),menuToggle.classList.add("fa-bars"),menuToggle.classList.remove("fa-times"))});var scrollToTopBtn=document.getElementById("scrollToTopBtn"),rootElement=document.documentElement,showBtnClass="showBtn";function handleScroll(){var e=rootElement.scrollHeight-rootElement.clientHeight;.6<rootElement.scrollTop/e?scrollToTopBtn.classList.add(showBtnClass):scrollToTopBtn.classList.remove(showBtnClass)}function scrollToTop(){rootElement.scrollTo({top:0,behavior:"smooth"})}document.addEventListener("scroll",handleScroll),scrollToTopBtn.addEventListener("click",scrollToTop);var activeLink="header--active";menuHeader.addEventListener("click",function(e){if(e.target&&"A"==e.target.nodeName){for(var t=menuHeader.children,s=0;s<t.length;s++)t[s].children[0].classList.remove(activeLink);e.target.classList.add(activeLink)}},!0),$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})});