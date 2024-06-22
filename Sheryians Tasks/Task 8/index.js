let input=document.querySelector("input");
let data=[
    { name:"harshita",scr:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"},
    { name:"sakshi",scr:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww"},
    { name:"astha",scr:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"},
    { name:"sarita",scr:"https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    { name:"aarti",scr:"https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"},
    { name:"janani",scr:"https://images.unsplash.com/photo-1660798027105-5da8ad164e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8fDA%3D"},
    { name:"susmita",scr:"https://plus.unsplash.com/premium_photo-1664442782488-6c97b3cbcc61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8fDA%3D"},

]
 let pers="";// isse pehle empty initialise otherwise ye undefined values le lega

 //ab foreach lga ke isme data ki value feed kr denge
 data.forEach(function(elem){
    pers+=`<div class="person">
    <div class="img">
        <img src="${elem.scr}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`;
 });

 //ab saare data ko push kr diya people ke div me and ab person utha ke le aaya HTML se
 document.querySelector(".people").innerHTML=pers;

//ab isse input ko rerad krenge ki kya input hai
 input.addEventListener("input",function(){
    //console.log(input.value); //ye input kji reading bta dega
    //filter ek function hota hai js ka jo value return krtahai kisi array pe lag ke in the form of true or false
   let matching= data.filter(function(e){
        return e.name.startsWith(input.value)
        
    })
 

 let newusers=""; //ek var bna liya new users ka 
 matching.forEach(function(elem){
    newusers+=`<div class="person">
    <div class="img">
        <img src="${elem.scr}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`;
 });
 //upar wale function ki help se jo jo match hoga wo use bhejta rhega 
 
 document.querySelector(".people").innerHTML=newusers;
});