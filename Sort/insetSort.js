/*
 * @Description: 插入排序
 * @Author: Qinaj
 * @Date: 2024-01-10 22:45:40
 * @LastEditTime: 2024-01-10 22:48:39
 * @LastEditors: Qinaj
 */
function insertSort(data){
   for(let i=1; i<data.length; i++){
      let preIndex = i -1;
      let cur = data[i]
      while(preIndex >= 0 && cur <data[preIndex]){
         data[preIndex +1] = data[preIndex]
         preIndex --
      }
      data[preIndex+1] = cur
   }
   return data
}
