function onClick(){
    let button=document.getElementById('cnt')
   if(button.style.backgroundColor==='red'){
    button.style.backgroundColor ='green';
   }
   else if(button.style.backgroundColor==='green'){
    button.style.backgroundColor='blue';
   } 
   else{
    button.style.backgroundColor = 'red';
}
  
  
}


function andClick(){
    let reset=document.getElementById('cnt')
    reset.style.backgroundColor="yellow";


}