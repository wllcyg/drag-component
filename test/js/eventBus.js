class EventEmitter {
  constructor() {
    this._event = this._event || new Map();
    this._maxListeners = this._maxListeners || 10;
  }

  emit(eventName, ...args) {
    let handle = null
    handle = this._event.get(eventName)
    if (Array.isArray(handle)) {
      handle.forEach(fn => {
        if (args.length > 0) {
          fn.apply(this, args)
        } else {
          fn.call(this)
        }
      })
    } else if (handle && typeof handle === 'function') {
      if (args.length > 0) {
        handle.apply(this, args)
      } else {
        handle.call(this)
      }
    }
    return true
  }

  addListener(eventName, fn) {
    let handle = this._event.get(eventName)
    if (!handle) {
      this._event.set(eventName, fn)
    } else if (handle && typeof handle === 'function') {
      this._event.set(eventName, [handle, fn])
    } else {
      handle.push(fn)
    }
  }


  removeListener(eventName, fn) {
    let handle = this._event.get(eventName)
    if (handle && typeof handle === 'function') {
      this._event.delete(eventName)
    } else if (Array.isArray(handle)) {
      let index = -1
      for (let i = 0; i < handle.length; i++) {
        if (handle[i] === fn) {
          index = i
          break
        }
      }
      if (index !== -1) {
        handle.splice(index, 1)
        if (handle.length === 1) {
          this._event.set(eventName, handle[0])
        }
      } else {
        return this
      }
    }
  }

}


const eventBus = new EventEmitter()
