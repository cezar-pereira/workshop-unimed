function goToPosition(self){
    let element = document.querySelector(self).offsetTop;
    window.scrollTo({top: element - 70, behavior: "smooth"});
    hideMenu();
}

function showMenu(){
    let navDisabled = document.querySelector('#nav-mobile-disabled');
    let navEnabled = document.querySelector('#nav-mobile-enabled');
    navEnabled.style.visibility = 'visible';
    navDisabled.style.visibility = "hidden";

}

function hideMenu(){
    let navDisabled = document.querySelector('#nav-mobile-disabled');
    let navEnabled = document.querySelector('#nav-mobile-enabled');
    navEnabled.style.visibility = 'hidden';
    navDisabled.style.visibility = "visible";
}

function register(){
    console.log('save');
}