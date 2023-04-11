# 需求
```
开发一个在线文档任务管理工具
```

> 纯手工从0到1编码，没有使用脚手架 <br/><br/>
> [前端项目GitHub地址](https://github.com/su-rm-rf/fe-step3) <br/>
> [后端项目GitHub地址](https://github.com/su-rm-rf/node_server) <br/>

> 前端运行: <br/>
> npm run dev <br/>
> npm run ssr <br/><br/>
> 后端运行: npm run dev <br/>
> 访问: http://localhost:8321/old-todo

# 技术栈
```
前端：
  编辑器：VSCode
  源码管理：Git
  包管理器：Pnpm
  编译构建：Babel、Webpack
  语言：TypeScript
  框架：React
  路由：React-Router
  状态管理：Redux
  CSS处理器：Sass、Less、PostCSS
  UI框架：AntDesign
  单元测试：Jest
```

# 组织结构
> 划分为 client, server, share 三个目录

```
build                         --- 构建脚本
dist                          --- 打包生成
public                        --- 公共资源
src
  client
    components                --- UI组件
    containers                --- 容器组件
    constants                 --- 常量
    store                     
      actions                 --- action creators
      reducers                --- reducer
    styles                    --- 样式
    utils                     --- 工具
    index.tsx                 --- 客户端入口
  server
    index.tsx                 --- 服务端入口
    render.tsx
  share
    router                    --- 路由
    store                     --- 状态管理
test
```

# 技术拆解
## css module
```
{
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  'postcss-loader',
  'less-loader',
  'sass-loader',
}

.parent {
  .child { }
  :global(.child2) { }
}

import styles from '@/styles/index.scss'

<div className={styles.parent}>
  <div className="child2"></div>
  <div className={styles.child}></div>
</div>
```

# TypeScript
```
jsx: react-jsx  转化JSX
resolveJsonModule: true  支持导入json文件
```

## webpack
> 先配置common部分，再将client和server分别合并配置

common
```
```

server
```
target: 'node',                       忽略内置模块
externalsPresets: { node: true },     忽略内置模块
externals: [nodeExternals()]          忽略node_modules中的所有模块
```

client
```
```

转化jsx和tsx  babel-loader
resolve
  extensions 后缀自动识别
  alias 模块别名

## 同构：
renderToString 将客户端组件渲染成HTML字符串
hydrate 水合，在SSR之后，在客户端对页面事件绑定等内容进行特殊处理
BrowserRouter 支持页面链接跳转
StaticRouter 支持浏览器访问

脱水
注水

## server
解析dist/static文件夹为静态访问
路由根路径，访问后进行服务端渲染
## 
client



# TypeScript配置
```
{
  "compilerOptions": {
    "target": "ES5",
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": false,
    "skipLibCheck": true
  }
}
```

# 依赖项

# 常见错误
```
Q: 找不到名称“div”。ts(2304)
Q: “App”表示值，但在此处用作类型。是否指“类型 App”?ts(2749)
A: 使用.tsx格式，而非.ts格式

无法使用 JSX，除非提供了 "--jsx" 标志。ts(17004)
```

# 性能优化
```
cacheDirectory 把转译结果缓存到文件系统中
@babel/plugin-transform-runtime 避免重复引入babel-runtime
```
