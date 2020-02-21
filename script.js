
let i = 0;
function form(event){
    let elements = document.getElementsByTagName("input");

    while(i <= elements.length){
        if(event.target.id == "next"){ 
            if(i != 0){
                let y = i - 1;
                document.getElementById(elements[y].id).style.visibility = "hidden";
            }
            document.getElementById(elements[i].id).style.visibility = "visible";
            i++
            
        } else if (event.target.id == "back" && i != 0){
            i--
            let x = i - 1;
            document.getElementById(elements[x].id).style.visibility = "visible";

            document.getElementById(elements[i].id).style.visibility = "hidden";
        } 
        break; 
    }
}

document.getElementById("next").addEventListener("click", form, false);
document.getElementById("back").addEventListener("click", form, false);





