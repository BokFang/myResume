//悬浮的导航栏
!function(){
  let view = document.querySelector('#topNav')
  let controller = {
    view: null,
    init: function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents:function(){
      scroll()
      window.addEventListener('scroll',scroll)
      function scroll(){
        if(window.scrollY > 0){
          topNav.classList.add('top-active')
        }else{
          topNav.classList.remove('top-active')
        }
      }
    }
  }
  controller.init(view)
}.call()