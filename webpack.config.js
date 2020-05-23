/*
 * @Descripttion : 
 * @version      : 
 * @Author       : tky
 * @Date         : 2020-05-23 16:52:08
 * @LastEditors  : tky
 * @LastEditTime : 2020-05-23 19:03:49
 */
const path = require('path')

//通过Node模块操作，向外暴露一个配置对象
module.exports = {
    entry: path.join(__dirname, './src/entry.js'),//打包文件
    output: {
        path: path.join(__dirname, "./dist"),//打包好输出文件
        filename: 'bundle.js'//打包好文件的文件名
    },
    mode: 'development'//设置 mode
}