//导航栏跳转
!function(){
  let view = document.querySelector('nav.navigation')
  let controller = {
    view:null,
    init:function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents:function(){
      let aTags = view.querySelectorAll('nav.navigation > ul > li > a')
      for(let i = 0;i < aTags.length-1;i++){
        aTags[i].addEventListener('click',
          (x)=>{
            x.preventDefault()
            let href = x.currentTarget.getAttribute('href')
            let element = document.querySelector(href)
            let top = element.offsetTop
            let currentTop = window.scrollY
            let targetTop = top - 60
            let distance = (targetTop - currentTop)/25
            let n = 0
            let timer = setInterval(()=>{
                  if(n === 25){
                  window.clearInterval(timer)
                  return
                }          
                n = n + 1
                window.scrollTo(0,currentTop + distance * n)
                },15 )
          }
        )
      }
    }
  }
  controller.init(view)
}.call()
