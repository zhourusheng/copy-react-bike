import JsonP from 'JsonP'
import axios from 'axios'
import { message } from 'antd'

class Axios {
  // JsonP
  static jsonP(options) {
    return new Promise((resolve, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, (err, response) => {
        if (response.status === 'success') {
          resolve(response)
        } else {
          reject(response.messsage)
        }
      })
    })
  }

  // ajax
  static ajax(options) {
    const baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then(response => {
        const data = response.data
        if (response.status === '200') {
          if (data.code === '0') {
            resolve(data)
          } else {
            message.error(data.msg)
          }
        } else {
          reject(data)
        }
      })
    })
  }
}

export default Axios