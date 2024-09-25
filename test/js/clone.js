function deepClone(obj) {
  let copy;

  // 处理 null 和 基本类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 判断 obj 是否是数组
  if (Array.isArray(obj)) {
    copy = [];
  } else {
    copy = {};
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }

  return copy;
}

