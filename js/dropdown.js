const downArrow = document.querySelector("#down-arrow");
const closeSign = document.querySelector("#close-sign");
const dropList = document.querySelector(".dropdown");

downArrow.addEventListener("click",showList);
closeSign.addEventListener("click",closeList);


function showList(e){

    dropList.classList.toggle("dropdown-drop");
   

    e.preventDefault();
}

function closeList(e){

    dropList.classList.toggle("dropdown-drop");


    e.preventDefault();
}
