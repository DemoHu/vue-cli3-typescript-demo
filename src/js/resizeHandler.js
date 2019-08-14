/*
 * @Author: Siwen
 * @Date: 2019-08-13 16:38:12
 * @LastEditors: Siwen
 * @LastEditTime: 2019-08-13 16:47:58
 * @Description: 
 */
const resizeHandler = () => {
  const rect = document.body.getBoundingClientRect()
  sessionStorage.setItem('rectWidth', rect.width - 1)
}
resizeHandler()
window.addEventListener('resize', resizeHandler)
