function searchfun(){
    let input, filter, ul, li, a, i;
    input = document.getElementById("searchId");
    filter = input.value.toUpperCase();
    ul = document.getElementById("Menus");
    li = ul.getElementsByTagName("li");

    for (i = 0; i< li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
    }else {
        li[i].style.display = "none";
      }
    }
}


//onclick evt//
function openteu(langName, elmnt, color){
    let i, tabcont, tablink;

    tabcont = document.getElementsByClassName("tabcont");
    for(i = 0; i < tabcont.length; i++){
        tabcont[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for(i = 0; i < tablink.length; i++){
          tablink[i].className = tablink[i].className.replace("active", "");
    }

    document.getElementById(langName).style.display = "block";
    
    langName.currentTarget.className += " active";
    elmnt.style.backgroundColor = color;
}