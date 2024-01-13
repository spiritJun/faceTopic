/*
 * @Description: 快速排序
 * @Author: Qinaj
 * @Date: 2023-11-28 23:34:25
 * @LastEditTime: 2023-11-29 00:04:52
 * @LastEditors: Qinaj
 */
export function quickSort(arr){
  if(!arr || !arr.length) return []
  const middleNum = Math.floor(arr.length / 2)
  const middleCur = arr.splice(middleNum,1)[0]
  const left = [], right = [];
  for(let i = 0;i < arr.length;i++) {
     if(arr[i] < middleCur){
        left.push(arr[i]);
     }else{
        right.push(arr[i]);
     }
  }
  return [...quickSort(left),middleCur,...quickSort(right)];
}