/*
 * @Description: 一个字符串是否是另一个字符串的子集
 * @Author: Qinaj
 * @Date: 2024-01-13 22:36:03
 * @LastEditTime: 2024-01-22 21:47:35
 * @LastEditors: Qinaj
 */
function stringAllContains(orgStr = '', str = ''){
   if(!str?.length) return false
   let i = 0
   let arr = orgStr.split('')
   while(i >=0 && i<str.length){
      let curIndex = arr.findIndex(item => item === str[i])
      if(curIndex > -1){
         arr.splice(curIndex, 1)
         i += 1
      }else{
        return false
      }
   }
   return true
   
}
//删除之后反复更新orgStr参数 可以防止顺序错乱问题 因为删除就会更新原值
console.log(stringContains('haha哈哈哈23','haha呵哈哈哈23'))