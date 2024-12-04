const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener("click", show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display = 'flex';
    openMenu.style.visibility = "hidden";
    closeMenu.style.visibility = "visible";
    mainMenu.style.top = '0';
    document.querySelector(".container").style.filter = 'blur(5px)';
}

function close(){
    openMenu.style.visibility = "visible";
    closeMenu.style.visibility = "none";
    mainMenu.style.top = '-100%';
    mainMenu.style.visibility = 'visible';
    document.querySelector(".container").style.filter = 'blur(0px)';
}