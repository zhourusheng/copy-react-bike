import React from 'react'
import { Select } from 'antd'

const { Option } = Select

// 时间格式化
const formatDate = (time) => {
  if (!time) return ''
  const date = new Date(time)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

// pagination 翻页
const pagination = (data, callback) => {

}

// 格式化金额,单位:分(eg:430分=4.30元)
// suffix-后缀
// prefix-前缀
const formatFee = (fee, suffix = '') => {

}



export default {
  formatDate,
  pagination,
  formatFee
}