Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1] && Array.isArray(arguments[1])) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}


Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  const _this = this
  const args = [...arguments].slice(1)
  return function F() {
    if (this instanceof F) {// 判断是否是构造函数调用
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}


function myInstanceof(obj, cons) {
  // 获取对象的原型
  let leftVal = obj.__proto__
  let rigthVal = cons.prototype
  while (true) {
    if (!leftVal) {
      return false
    }

    if (leftVal === rigthVal) {
      return true
    }

    leftVal = leftVal.__proto__
  }
}
// 定义一个构造函数
function Person(name) {
  this.name = name;
}

// 创建一个对象
const person = new Person('Alice');
console.log(myInstanceof(person, Person)); // 输出: true
console.log(myInstanceof(person, Object)); // 输出: true
console.log(myInstanceof(person, String)); // 输出: false



const obj = {
  a: 'why',
  b: 'code'
}

function foo(a, b) {
  console.log(this, a, b)
}

foo.myCall(obj, 1, 2)
foo.myApply(obj, [333, 2222])
const res = foo.myBind(obj, 2323, 3)
res()
console.log('this is new foo')


function myNew(foo, ...args) {
  const obj = Object.create(foo.prototype);
  foo.apply(obj, args);
  return obj;
}
