let images=document.querySelectorAll(".gallery a")
let popup=document.querySelector(".popup")
let bigImage=document.querySelector(".popup .inner img")
let closeIcon=document.querySelector(".close-icon")
let nextBtn=document.querySelector(".next")
let prevBtn=document.querySelector(".prev")
images.forEach((image)=>{
        image.addEventListener("click",(e)=>{
            e.preventDefault()
            openImage()
            changeImage(image)
            image.classList.add("showSlide")
        })
})
 
function openImage(){
    popup.style.display="flex";
}
function closeImage() {
    popup.style.display="none";
}

function changeImage(item) {
    let imgSrc = item.getAttribute("href");
    bigImage.setAttribute("src",imgSrc)
}
closeIcon.addEventListener("click",()=>{
    closeImage()
})

function nextElement(item) {
  
    if (item.nextElementSibling !== null) {
        item.nextElementSibling.classList.add("showSlide");
        changeImage(item.nextElementSibling);
    }
    else {
        item.parentElement.children[0].classList.add("showSlide");
        changeImage(item.parentElement.children[0]);
    }
    
    item.classList.remove("showSlide");
}
nextBtn.addEventListener("click",()=>{
    let showSlide=document.querySelector(".showSlide")
    nextElement(showSlide)
})

function prevElement(item) {
    let length = item.parentElement.children.length;

    if (item.previousElementSibling !== null) {
      item.previousElementSibling.classList.add("showSlide");
      changeImage(item.previousElementSibling);
    } else {
      item.parentElement.children[length - 1].classList.add("showSlide");
      changeImage(item.parentElement.children[length - 1])   
    }
    item.classList.remove("showSlide")
}
prevBtn.addEventListener("click",()=>{
    let showSlide=document.querySelector(".showSlide")
    prevElement(showSlide)
})
popup.addEventListener("click",(e)=>{
    if (e.target.classList.contains("popup")) {
        closeImage()
    }
})

document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && popup.style.display === "flex") {
      closeImage();
    }
    else if(e.code==="ArrowRight"){
        let nextImg=document.querySelector(".showSlide")
        nextElement(nextImg)
    } 
    else if(e.code==="ArrowLeft"){
        let previousImg=document.querySelector(".showSlide")
        prevElement(previousImg)
    }

});

