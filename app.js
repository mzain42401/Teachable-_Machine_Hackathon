const toggleIcons=()=>{
    let bar=document.getElementById('bar')
    console.log(bar.classList);
   
    bar.classList.toggle("fa-xmark")
 let ul=document.getElementById("navRef")
    ul.classList.toggle("active")
}