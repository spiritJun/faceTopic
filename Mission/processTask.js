/*
 * @Description:
 * @Author: Qinaj
 * @Date: 2023-11-04 23:20:58
 * @LastEditTime: 2023-11-22 22:59:53
 * @LastEditors: Qinaj
 */
/**  https://juejin.cn/post/7246313318544244791
 * @description 实现一个函数，一依次执行一系列任务
 * 1. 所有任务全部完成后可以得到每个任务的执行结果
 * 2. 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 3. 每个任务都有原子性，即不可中断，只能在两个任务之间中断
 * @param {...Function} tasks 任务列表每个任务无参 异步
 */
function processTasks(...tasks) {
  let isRunning = false;
  let result = [];
  let prom = null; // 声明一个变量用于保存 Promise 的状态
  let i = 0;
  return {
    async start() {
      return new Promise(async (resolve, reject) => {
        // 每次执行 start 之前判断一下 prom 是否有值，有值就直接返回结果值
        if (prom) {
          prom.then(resolve, reject);
          return;
        }
        // 如果是运行状态就什么也不做
        if (isRunning) {
          return;
        }
        isRunning = true;
        while (i < tasks.length) {
          try {
            result.push(await tasks[i]());
          } catch (err) {
            isRunning = false; // 重置 isRunning 的状态
            reject(err);
            prom = Promise.reject(err); // 失败的时候保存状态
            return;
          }
          i++;
          // 但是当我们执行的是最后一个任务的话中断也没有意义了，所以 i 必须小于 tasks.length
          if (!isRunning && i < tasks.length) {
            return;
          }
        }
        isRunning = false; // 重置 isRunning 的状态
        resolve(result);
        prom = Promise.resolve(result); // 成功的时候保存状态
      });
    },
    async pause() {
      isRuning = false; // 中断时设为 false
    },
  };
}

