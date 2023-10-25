
const friendEl = document.getElementById('right');
var count=0
const addfriend=()=>{
     if(count==0)
     {
        friendEl.style.color="green";
        count=1;
        console.log("one")
     }else{
        friendEl.style.color="red";
        count=0;
        console.log("two")
     }
}
friendEl.addEventListener('click',addfriend)

// heart feature
const heartFeature = document.getElementById('favorite');
const likehoverEl=document.getElementById('like-hover');
const poppingheart=()=>{
    likehoverEl.style.transform="translate(20%,-30%) scale(1)"

    setTimeout(()=>{
        likehoverEl.style.transform="translate(20%,-30%) scale(0)";
    },2000)
}
heartFeature.addEventListener('click',poppingheart);
const double=document.getElementById('double');
 double.addEventListener('dblclick',poppingheart)

 //status vala part
let arr=[
    {
        dp:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHwwfDB8fHww",
        story:"https://media.istockphoto.com/id/1286914710/photo/beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=OWj7b23a0GsBjPebwWUR_sA9r7uzLKd-3Z1Llr8ErWg="
    },

    {
       dp:"https://media.istockphoto.com/id/1425300476/photo/beautiful-woman.jpg?s=2048x2048&w=is&k=20&c=p7fIPx1Glqpc1syJrJloJwQY4vU727oALnz6DPh99nM=",
       story:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fHww"
    },

    {
       dp:"https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHwwfDB8fHww",
       story:"https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHwwfDB8fHww",
    },

    {
        dp:"https://images.unsplash.com/photo-1462804993656-fac4ff489837?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1534008757030-27299c4371b6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
        dp:"https://media.istockphoto.com/id/1425302451/photo/beautiful-emotional-woman.webp?b=1&s=170667a&w=0&k=20&c=ThPzfgMoekmVPQXc5MRg71sRQKcVC0I7hcEIHjIEu8s=",
        story:"https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",
    }

]
const statEl = document.getElementById('stat');
 var clutter="";

 arr.forEach((ele,indx)=>
 {
      clutter +=`
       <div class="activeStatus">
       <img id="${indx}"src="${ele.dp}" alt="">  
       </div> 
      `
 })
 statEl.innerHTML=clutter
 
 const fullScreenEl=document.getElementById('fullScreen')
 statEl.addEventListener('click',(event)=>{
         
      fullScreenEl.style.display="block"
      fullScreenEl.style.zIndex="1"
      fullScreenEl.style.backgroundImage=`url(${arr[event.target.id].story})`;

      setTimeout(()=>{
        fullScreenEl.style.display="none";
      },2000)

 })  

