let textarea= document.querySelector("textarea");
let counter= document.querySelector("#counter");
textarea.addEventListener("input",function(){
    counter.textContent=textarea.value.length;
})