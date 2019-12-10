AV.init({
  appId: "vhqYJj5s6OKPmMUmNJ8dV8F8-gzGzoHsz",
  appKey: "K77mxzusqqFm0SDf9hMfiCwb",
  serverURLs: "https://vhqyjj5s.lc-cn-n1-shared.com"
});
var query = new AV.Query('Message');
query.find().then(function (messages){
  let array = messages.map((item) => item.attributes)
  array.forEach((item)=>{
    let li = document.createElement('li')
    li.innerText = item.content
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
  })
},function(error){
  //异常处理
  alert('提交失败')
}).then(()=>{},(error)=>{
  console.log(error)
});
messageForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  let content = messageForm.querySelector('textarea[name=content]').value
  let Message = AV.Object.extend('Message')
  let message = new Message()
  message.save({
    'content':content
  }).then(function(object){
    alert('发送成功')
    let li = document.createElement('li')
    li.innerText = object.attributes.content
    let messageList = document.querySelector('#messageList')
    messageList.appendChild(li)
  })
})