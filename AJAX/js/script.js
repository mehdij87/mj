//Event handeling
document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector("button").addEventListener("click", () => {
       
               $ajaxUtils.sendGetRequest("/AJAX/data/names.json", (res) => {
                   var message = res.firstName + " " + res.lastName;
                   if (res.likesYou) {
                       message += " Likes you";
                   }
                   else {
                       message+= " Dont likes you"
                   }
                //    console.log(name);
            document.querySelector("#content").innerHTML = "<H2>Hello " + message + "! </H2>";
        });
        
    
    });
    
});