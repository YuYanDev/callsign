export const ajax = (method, url, params) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText)
          } else {
            reject(xhr.status)
          }
        }
      }
  
      if (method === 'get' || method === 'GET') {
        if (typeof params === 'object') {
          params = Object.keys(params)
            .map(function(key) {
              return (
                encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
              )
            })
            .join('&')
        }
        url = params ? url + '?' + params : url
        xhr.open(method, url, true)
        xhr.send()
      }
      if (method === 'post' || method === 'POST') {
        xhr.open(method, url, true)
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        xhr.send(JSON.stringify(params))
      }
    })
  }

