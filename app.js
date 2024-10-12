let btn=document.querySelector(".btn");
let popup=document.querySelector(".popup");
let popbtn=document.querySelector("#popbtn");


btn.addEventListener("click",()=>{
    console.log("hello");
    popup.classList.add("clicker")
    btn.innerHTML="success";
    btn.style.backgroundColor="green";
})

popbtn.addEventListener("click",()=>{
    popup.classList.remove("clicker")
    setTimeout(() => {
        window.location.reload();
    }, 1000);
})
