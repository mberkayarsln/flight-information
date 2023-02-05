const downArrow = document.querySelector("#down-arrow");
const dropList = document.querySelector(".dropdown");

downArrow.addEventListener("click",showList);
dropList.addEventListener("click",closeList);


function showList(e){

    dropList.classList.toggle("dropdown-drop");
   

    e.preventDefault();
}

function closeList(e){

    dropList.classList.toggle("dropdown-drop");


    e.preventDefault();
}
