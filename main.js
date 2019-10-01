
window.onscroll = (x)=>{
  if(window.scrollY > 0){
    topNav.classList.add('top-active')
  }else{
    topNav.classList.remove('top-active')
  }
}