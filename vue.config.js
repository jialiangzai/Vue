/* 覆盖webpack的配置 */
module.exports = {
    devServer: { // 自定义服务配置
      open: true,
      port: 3000
    },
    lintOnSave: true // 关闭eslint检查
  }