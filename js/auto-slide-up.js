!function(){
  let view = document.querySelector('nav.navigation')
  let controller = {
    view:null,
    init:function(view){
      this.view = view
      this.bindEvents()
    },
    bindEvents:function(){
      scroll()
      window.addEventListener('scroll',scroll)
      function scroll(){
        let specicalTags = document.querySelectorAll('[nav]')
        let minIndex = 0
        for(let i = 1; i < specicalTags.length; i++){
          if(Math.abs(specicalTags[i].offsetTop - window.scrollY) < Math.abs(specicalTags[minIndex].offsetTop - window.scrollY)){
            minIndex = i
          }
        }
        let id = specicalTags[minIndex].id
        let a = document.querySelector(`a[href="#${id}"]`)
        let li = a.parentNode
        let AllLi = li.parentNode.children
        for(let i = 0; i < specicalTags.length; i++){
          AllLi[i].classList.remove('active')
        }
        li.classList.add('active')
      }
    }
  }
  controller.init(view)
}.call()