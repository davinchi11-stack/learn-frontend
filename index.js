
function init(){
   var menu = document.querySelector(".menu")
   var sectionPart = document.querySelector(".section-intro")
   var listToggle = document.querySelector(".header ul")


   var countSwitch = 0
   let tl = new TimelineMax()

   console.log(tl);


   menu.addEventListener("click",function(){
        
    var icon = this.querySelector("ion-icon")

    if (countSwitch == 0) {
         
        icon.setAttribute("name","close")
        countSwitch = 1
        
        tl.fromTo(".header li",0.2,{display:"none"},{display:"block"})
        .fromTo(".outer",{display:"none"},{display:"block"})
        tl.fromTo(".header li",0.5,{opacity:"0"},{opacity:"1"})

    }else{
        icon.setAttribute("name","menu")
        countSwitch = 0

        tl.fromTo(".header li",0.2,{display:"block"},{display:"none"})
        .fromTo(".outer",{display:"block"},{display:"none"})
        .fromTo(".header li",0.5,{opacity:"1"},{opacity:"0"})
    }


   })


   

}
init()