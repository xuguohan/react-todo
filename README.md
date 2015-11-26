##react-todos
###一、项目介绍

使用react写todos。虽然react遵循CommonJS规范，可是我习惯了AMD规范，此例子使用AMD规范。借助于（requirejs-react-jsx）,在define之前将jsx转换为js文件被引入。
整个项目中引入：
- 路由控制（router/router.jsx）
- 入口页面配置（index） 
      引入入口配置，方便前后端完全分离，后端服务器只需存放index.html。提供数据接口，无需再关心模板、路由。

### 一、安装依赖
 + 安装node
 + 安装npm
 + 安装grunt
 +  安装 grunt-cli
 +  在项目根目录下执行  npm install 
 +  在项目根目录下执行 bower install (bower 安装require的路径删除了，所以我把依赖一并提交了，无需运行了.据说bower已经只有一人维护了)

### 三、运行
+ 在项目根目录下 执行 grunt server