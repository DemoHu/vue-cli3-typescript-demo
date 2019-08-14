/*
 * @Author: Siwen
 * @Date: 2019-08-08 14:59:53
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-08 15:18:22
 * @Description: WebSocket封装
 */

let Socket: any
let setIntervalWesocketPush: any

/**建立连接 */
export function createSocket(userId?: string | number ): void {
  if (!Socket) {
    console.log('建立websocket连接')
    Socket = new WebSocket(`${process.env.VUE_APP_WS_URL}${userId}`)
    Socket.onopen = onopenWS
    Socket.onmessage = onmessageWS
    Socket.onerror = onerrorWS
    Socket.onclose = oncloseWS
  } else {
    console.log('websocket已连接')
  }
}
/**打开WS之后发送数据 */
export function onopenWS(): void {
  sendPing() //发送心跳
  sendWSPush([
    { expireTime: 3600, toggle: 1, type: 'orderOpen' },
    { expireTime: 3600, toggle: 1, type: 'lotteryOpen' },
    { expireTime: 3600, toggle: 1, type: 'roomOrderLogin' }
  ])
}
/**连接失败重连 */
export function onerrorWS():void {
  Socket.close()
  clearInterval(setIntervalWesocketPush)
  Socket = false
  console.log('连接失败重连中')
  createSocket()
}
/**WS数据接收统一处理 */
export function onmessageWS(e: any) {
  window.dispatchEvent(new CustomEvent('onmessageWS', {
    detail: {
      data: e.data
    }
  }))
}
/**发送数据
 * @param eventType: orderOpen 个人开奖  lotteryOpen 彩票开奖推送
 */
export function sendWSPush(eventTypeArr: object | any[]) {
  const obj:object = {
    appId: 'airShip',
    cover: 0,
    event: eventTypeArr
  }
  if (Socket && Socket.readyState === 3) {
    Socket.close()
    createSocket()
  } else if (Socket.readyState === 1) {
    Socket.send(JSON.stringify(obj))
  } else if (Socket.readyState === 0) {
    setTimeout(() => {
      Socket.send(JSON.stringify(obj))
    }, 3000)
  }
}
/**断开重连 */
export function oncloseWS() {
  clearInterval(setIntervalWesocketPush)
  console.log('websocket已断开....正在尝试重连')
  Socket = false
  createSocket()
}
/**发送心跳 */
export function sendPing() {
  Socket.send('ping')
  setIntervalWesocketPush = setInterval(() => {
    Socket.send('ping')
  }, 5000)
}
