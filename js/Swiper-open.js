//轮播图
!function(){
  let view = document.querySelector('swiper-container')
  let controller = {
    view:null,
    init:function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents:function(){
      window.onload = function() {
        var mySwiper = new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })  
      }
    }
  }
  
  controller.init(view)
}.call()