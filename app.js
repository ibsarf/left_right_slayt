let leftContainer=document.querySelector(".left-container");
let rightContainer=document.querySelector(".right-container");

// console.log(rightCContainer);

leftContainer.addEventListener("mouseover",()=>{
    rightContainer.classList.add("active");
    rightContainer.style.opacity=.3;
});
leftContainer.addEventListener("mouseleave",()=>{
    rightContainer.classList.remove("active");
    rightContainer.style.opacity=1;
});
rightContainer.addEventListener("mouseover", function(){
    leftContainer.classList.add("active");
    leftContainer.style.opacity=.3;
});
rightContainer.addEventListener("mouseleave",function () {
    leftContainer.classList. remove("active") ;
    leftContainer.style.opacity=1;  
})

