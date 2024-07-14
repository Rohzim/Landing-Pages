let navleftkey = document.querySelector("#navleftkey")
let navrightkey = document.querySelector("#navrightkey")


navrightkey.style.cursor ="pointer"
navrightkey.style.color = "green"
navleftkey.style.cursor ="pointer"
navleftkey.style.color = "green"

let about = document.querySelector("#about")
let write = document.querySelector("#write")
let home = document.querySelector("#home")
let contact = document.querySelector("#contact")

navrightkey.addEventListener("click",function(){
    
    about.style.display ="none"
    write.style.display ="none"
    home.style.display ="block"
    contact.style.display ="block"

})

navleftkey.addEventListener("click",function(){
    about.style.display ="block"
    write.style.display ="block"
    home.style.display ="none"
    contact.style.display ="none"

})