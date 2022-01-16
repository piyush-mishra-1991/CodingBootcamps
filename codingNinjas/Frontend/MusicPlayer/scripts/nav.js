/* 
    Handles Nav menu for mobile screens (via hamburger icon)
*/

const navList = document.querySelector(".nav-list");
const navToggleBtn = document.querySelector(".nav-toggle-mobile");

navToggleBtn.addEventListener('click',()=>{
    const isVisibile = navList.getAttribute("data-visibility");
    if(isVisibile==="true"){
        navList.setAttribute("data-visibility",false);
        navToggleBtn.setAttribute("aria-expanded",false);
    }else{
        navList.setAttribute('data-visibility', true);
        navToggleBtn.setAttribute('aria-expanded', true);
    }
});

/*
    Dropdown Button on Aside section:
*/





/*
    Handles Stopping of animations whenever window resizing occurs. If this is not included,
    then mobile-nav menu can quickly appear & dissappear for a while. This removes that.
    Referred from : https://css-tricks.com/stop-animations-during-window-resizing/
*/
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});