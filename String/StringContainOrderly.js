/*
 * @Description: 两段字符串 判断子字符串是父字符串的完全子集--有序的
 * @Author: Qinaj
 * @Date: 2024-01-22 21:48:17
 * @LastEditTime: 2024-01-22 22:27:54
 * @LastEditors: Qinaj
 */
function stringAllContains(orgStr = '', str = ''){
    if(!str?.length || str.length > orgStr.length) return false
    let i = 0,j = 0;
    while (j<str.length && i < orgStr.length && i >= j) {
        if(orgStr[i] === str[j]){
            i++;
            j++;
        }else{
            i++;
            continue;
        }
        
    }
    return j === str.length
 }
 //删除之后反复更新orgStr参数 可以防止顺序错乱问题 因为删除就会更新原值
stringAllContains('1234','125')