import axios from './request'

export const getUserInfo = () => {
  return axios.get('/user/getInfo')
}
export const roomList = (lotteryType: number = 4) => {
  return axios.get('/goods/roomList', { params: { lotteryType }})
}
