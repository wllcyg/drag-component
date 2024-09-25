const PENDING = Symbol('pending');
const FULFILLED = Symbol('fulfilled');
const REJECTED = Symbol('rejected');
const isFunction = (value) => typeof value === 'function';

class MyPromise {
  constructor(handler) {
    if (!isFunction(handler)) throw new TypeError('not a function');
    this._status = PENDING;
    this._value = undefined;
    this._fultfilledQueues = [];
    this._rejectQueues = []
    try {
      handler(this._resolve.bind(this), this._reject.bind(this))
    } catch (error) {
      this._reject(error)
    }
  }

  _resolve(value) {
    const run = () => {
      if (this._status !== PENDING) return
      this._status = FULFILLED;
      const runFulfilled = (v) => {
        let cb
        while ((cb = this._fultfilledQueues.shift())) {
          cb(v)
        }
      }
      const runRejected = (r) => {
        let cb
        while ((cb = this._rejectQueues.shift())) {
          cb(r)
        }
      }
      if (value instanceof MyPromise) {
        value.then(val => {
          this._value = val
          runFulfilled(val)
        }, err => {
          this._value = err
          runRejected(err)
        })
      } else {
        this._value = value
        runFulfilled(value)
      }
    }
    setTimeout(run, 0)
  }

  _reject(err) {
    if (this._status !== PENDING) return
    const run = () => {
      this._status = REJECTED;
      this._value = err
      let cb
      while ((cb = this._rejectQueues.shift())) {
        cb(err)
      }
    }
    setTimeout(run, 0)
  }

  then(onFulfilled, onRejected) {
    const {_value, _status} = this
    return new MyPromise((resolve, reject) => {
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            resolve(value)
          } else {
            const result = onFulfilled(value)
            if (result instanceof MyPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          }
        } catch (err) {
          reject(err)
        }
      }
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            reject(error)
          } else {
            const result = onRejected(error)
            if (result instanceof MyPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          }
        } catch (err) {
          reject(err)
        }
      }
      switch (_status) {
        case PENDING:
          this._fultfilledQueues.push(fulfilled)
          this._rejectQueues.push(rejected)
          break;
        case FULFILLED:
          fulfilled(_value)
          break;
        case REJECTED:
          rejected(_value)
          break;
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(onFinally) {
    return this.then(
      value => MyPromise.resolve(onFinally()).then(() => value),
      reason => MyPromise.resolve(onFinally()).then(() => {
        throw reason
      })
    )
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let result = []
      let count = 0
      for (let [i, p] of promises.entries()) {
        this.resolve(p).then(res => {
          result[i] = res
          count++
          if (count === promises.length) resolve(result)
        }, err => reject(err))
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      for (const p of promises) {
        this.resolve(p).then(res => resolve(res), err => reject(err))
      }
    })

  }

  static resolve(value) {
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason))
  }
}


const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success this is promise')
  }, 1000)
})
p1.then(res => {
  console.log(res)
}).
  catch(err => console.log(err))
