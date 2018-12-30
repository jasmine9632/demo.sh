let n
init()
setInterval(() => {
    makeLeave(getImage(n))
    .one('transitioned', (e)=>{
    makeEnter($(e.currentTarget))
})
makeCurrent(getImage(n+1))
n += 1
}, 3000)







function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
  }
  
  function x(n){
      var i = $('.images img').length
    if(n>i){
      n = n%i
      if (n===0){
        n =i
      }
    }
    return n
  }

function init(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter')
  }
function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('current leave').addClass('enter')
}
