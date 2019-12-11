!function(){
  let view = document.querySelector('#Comments')
  let model = {
    //获取数据
    fetch: function(){
      var query = new AV.Query('Message');
      return query.find()
    },
    //创建数据
    save: function(content){
      let Message = AV.Object.extend('Message')
      let message = new Message()
      return message.save({
        'content':content
      })
    },
    init:function(){
      AV.init({appId: "vhqYJj5s6OKPmMUmNJ8dV8F8-gzGzoHsz",appKey: "K77mxzusqqFm0SDf9hMfiCwb",serverURLs: "https://vhqyjj5s.lc-cn-n1-shared.com"})
    },
  }
  let controller = {
    view:null,
    model:null,
    init: function(view){
      this.view = view
      this.model = model
      
      this.model.init()
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.loadMessage()
      this.bindEvents()
    },
    loadMessage:function(){
      this.model.fetch().then((messages)=>{
        let array = messages.map((item) => item.attributes)
        array.forEach((item)=>{
          let li = document.createElement('li')
          li.innerText = item.content
          let messageList = document.querySelector('#messageList')
          this.messageList.appendChild(li)
        })
      },function(error){
        //异常处理
        alert('提交失败')
      }).then(()=>{},(error)=>{
        console.log(error)
      });
    },
    bindEvents:function(){
      messageForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage:function(){
      let content = messageForm.querySelector('textarea[name=content]').value
        this.model.save(content).then(function(object){
        alert('发送成功')
        let li = document.createElement('li')
        li.innerText = object.attributes.content
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
      })
    }
  }
  controller.init(view)
}.call()
