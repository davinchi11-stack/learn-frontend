
// function init(){
//    var menu = document.querySelector(".menu")
//    var sectionPart = document.querySelector(".section-intro")
//    var listToggle = document.querySelector(".header ul")


//    var countSwitch = 0
//    let tl = new TimelineMax()

//    tl.fromTo(".speach",2,{opacity:"0"},{opacity:"1",ease:Expo.EaseInOut})


//    menu.addEventListener("click",function(){
        
//     var icon = this.querySelector("ion-icon")

//     if (countSwitch == 0) {
         
//         icon.setAttribute("name","close")
//         countSwitch = 1
        
//         tl.fromTo(".header li",0.2,{display:"none"},{display:"block"})
//         .fromTo(".outer",{display:"none"},{display:"block"})
//         tl.fromTo(".header li",0.5,{opacity:"0"},{opacity:"1"})

//     }else{
//         icon.setAttribute("name","menu")
//         countSwitch = 0

//         tl.fromTo(".outer",0.2,{display:"block"},{display:"none"})
//         .fromTo(".header li",{display:"block"},{display:"none"})
//         .fromTo(".header li",0.5,{opacity:"1"},{opacity:"0"})
//     }


//    })


   

// }
// init()


document.addEventListener('DOMContentLoaded', ()=>{
   const header = document.querySelector("header")
   const mobile = document.querySelector(".mobile-icons")
   const menu = document.querySelector(".menu-list ul ")
   const wrapper = document.querySelector('.wrapper')
   const  dark = document.querySelector(".dark-mode")

   mobile.addEventListener("click",()=>{
     header.classList.toggle("active")
    
   })

   dark.addEventListener("click",()=>{
    wrapper.classList.toggle("light")
   
  })


const newMenu = [menu]
   newMenu.forEach(element => {
       return element.addEventListener("click",()=>{
         header.classList.remove('active')
       })
   });
})



















