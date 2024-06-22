// let home =document.querySelector('#home');
// let about =document.querySelector('#about');
// let contact =document.querySelector('#contact');

// let hometext=document.querySelector('#hometext');
// let abouttext=document.querySelector('#abouttext');
// let contacttext=document.querySelector('#contacttext');

// hometext.style.display="block";
// hometext.style.width="50%"

// home.addEventListener("click",function(){
// saaretextHatao()
// hometext.style.display="block";
// hometext.style.width="50%"
// })

// about.addEventListener("click",function(){
//     saaretextHatao()
//     abouttext.style.display="block";
//     abouttext.style.width="50%"
// })

// contact.addEventListener("click",function(){
//     saaretextHatao()
//     contacttext.style.display="block";
//     contacttext.style.width="50%"
// })

// function saaretextHatao(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display="none";
//     })
// }
//saaretextHatao() is function sbko htadega and jsipe click krenge toh wo sbse pehle sbko hta dena aage ke dikhenge


//More opptimised code
var divs =document.querySelectorAll('.tabs');
var texts =document.querySelectorAll('h3');

texts[0].style.display="block";
texts[0].style.width="50%";

divs.forEach(function(div,index){
    div.addEventListener("click",function(){
        hideAllTexts();
        texts[index].style.display="block";
        texts[index].style.width="50%";
    });
});
function hideAllTexts(){
    texts.forEach(function(text){
        text.style.display="none"
    });
}