function throttle1(fn, delay) {
  let prev = Date.now()
  return function (){
    let context = this
    let args = arguments
    let now = Date.now()
    if (now - prev >= delay){
      fn.apply(context, args)
      prev = Date.now()
    }
  }
}

function throttle2(fn, delay) {
  let timer = null
  return function (){
    let context = this
    let args = arguments
    if (!timer){
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, delay)
    }
  }
}

