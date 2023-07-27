let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) { 
    for(let tablink of tablinks){
        tablink.classList.remove('active-link');
    }   
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }  
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
}


function openmenu(){
    let menu = document.getElementById("sidemenu");
    menu.style.right="0";
}
function closemenu(){
    let menu = document.getElementById("sidemenu");
    menu.style.right="-200px";
}


