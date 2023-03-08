# 前端工程化

- webpack 5
- vue3
- npm init -y
    初始化 项目为node 后端项目 package.json 项目描述文件
    npm i -g yarn  安装到全局
    npm i webpack  安装到当前项目
- yarn
    npm 的代替品， 来自facebook
    npm i
    yarn add
    yarn add webpack -D

- 工程化在代码的开发阶段
    development     代码开发  vite  webpack  babel  搭建开发阶段的脚手架
        npm i webpack -D
    test        测试阶段
    production  上线阶段    vue


yarn global add / npm i -g / nodemon  


- 工程化的套件 devDependiences
    - webpack webpack-cli 5.0
    - src 代码开发目录
        main.js rukouwenjian
        index.html 首页 root 挂载点
    - 如何在web-server 在:8888 index.
        html显示
    - main.js
        createApp App.vue根组件
    - webpack --model=development
        启动webpack 工程化 为代码开发做准备
        webpack-cli  --model-development 命令参数
        
        npm run dev
        webpack  webpack.config.js
- webpack 配置
    - 最基本的就是 entry  output 的概念

    npm i -D webpack-dev-server


- loader 的重要概念
    - 在webpack  entry 到output  中间
        module  匹配每个规则
        在使用相应的loader 去处理的过程

- webpack-dev-server
    为了性能， 把代码放到内存里

- hash?
    根据文件内容进行计算 得到一个唯一值
    为了防止浏览器的缓存 cleanWebpackPlugin 清空一下

- --mode=
    development     开发阶段
    produntion      上线  代码压缩  http 传输 越小越好

- vite 完胜 webpack
    更快 启动快  重新编译快
    vite 使用了GO(rust) 代替node 编译
    webpack 生态成熟

- babel 是什么
    JS 的编译器 正因为babel， es6+  大胆使用起来
    @babel/core  babel核心库
    @babel/cli   minglinghang
    @babel/preset-env   预处理方式   preset env 按照你的当前环境来编译