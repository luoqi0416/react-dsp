# **项目总结**
![项目图片](http://on-img.com/chart_image/5b96717be4b08faf8c4d3279.png)

## 目录

- [Webpack搭建](#webpack)
- [Server搭建](#server)
- [Node_modules依赖](#node_modules)
- [Utils](#Utils)
    - [cookie](#cookie)
    - [http](#http)
- [Router](#Router)
    - [config](#config)
    - [routeView](#routeView)
- [Store](#Store)
    - [store](#store)
    - [sagas](#sagas)
    - [reducers](#reducers)
- [Antd](#Antd)
- [Echarts](#Echarts)
    - [D3](#D3)
    - [Highcharts](#Highcharts)
    - [FusionCharts](#FusionCharts)

<hr>

## **webpack**

```js
const webpack =require('webpack');
// const CopyWebpackPlugin =require('copy-webpack-plugin');
const HtmlWebpackPlugin =require('html-webpack-plugin');
let config = {
    mode:process.env.NODE_ENV,//环境模式配置development为开发环境，production为生产环境
    entry :{//入口配置，可以是string|Array<string>|object(复杂配置方式，可对多个项目进行管理))
        main:['@babel/polyfill','./src/main.js']//@babel/polyfill垫片：相当于用es5规范封装了些es6的功能
    },
    output:{
        filename:'[name].js',
        path:process.cwd()+'/dist',
        publicPath:'/'//静态资源加载路径
    },
    module:{
        rules :[
            {
                test:/\.jsx|js$/,
                use:'babel-loader',
                exclude:/node_modules/,//排除加载某些文件
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:30240//文件小于该值时转为base64，否则使用file-loader,这样做的好处是减少http请求,对于电商这种需要渲染大量图片的网站效果最明显
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        //创建一个在编译时可以配置的全局常量.这可能会对开发模式和发布模式的构建允许不同的行为非常有用。
        new webpack.DefinePlugin({
            "process.env":{"NODE_ENV":JSON.stringify(process.env.NODE_ENV)}
        }),
        //copy文件
        // new CopyWebpackPlugin([
        //     {from:'./src/assets',to:'./assets'}
        // ]),
        new HtmlWebpackPlugin({
            // filename:'hoogoo.html',
            title:'dsp',
            template:'tpl/index.html'
        })
    ],
    devServer:{
        historyApiFallback:true,
        port:3000,
        open:true,
        // openPage:'./hoogoo.html',默认打开页面，不配置为/
        // contentBase:'./dist'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    devtool:process.env.NODE_ENV==='production'?'':'cheap-module-eval-source-map',
    optimization:{
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /(react|react-dom)/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};

if(process.env.NODE_ENV==='production'){
    config.plugins.concat([

    ])
};
module.exports =config;
```

```diff
{
    "scripts": {
+       "start": "npm run dev",
+        "dev": "cross-env NODE_ENV=development webpack-dev-server --config config/webpack.config.js",
-        "build": "cross-env NODE_ENV=production webpack --config config/webpack.config.js"
    }
}
```
<hr>

## **server**
<hr>

## **node_modules**
<hr>

## **Utils**
<hr>

* ### cookie

* ### http
<hr>

## **Router**

* ### config

* ### routeView
<hr>

## **Store**

* ### store

* ### sagas

* ### reducers
<hr>

## **Antd**
<hr>

## **webpack**
<hr>

## **Echarts**

### `D3`

>D3.js是一个用于根据数据操作文档的JavaScript库。D3可帮助您使用HTML，SVG和CSS将数据变为现实。D3强调Web标准，为您提供现代浏览器的全部功能，而无需将自己与专有框架联系起来，将强大的可视化组件和数据驱动方法结合到DOM操作中。

* D3允许您将任意数据绑定到文档对象模型（DOM），然后将数据驱动的转换应用于文档。例如，您可以使用D3从数组中生成HTML表。或者，使用相同的数据创建具有平滑过渡和交互的交互式SVG条形图。

* D3不是一个单一的框架，旨在提供所有可能的功能。相反，D3解决了问题的关键：基于数据有效地处理文档。这避免了专有的表示，并提供了非凡的灵活性，暴露了HTML，SVG和CSS等Web标准的全部功能。D3的开销极小，支持大型数据集和交互动画的动态行为。D3的功能风格允许通过各种官方和社区开发的模块重用代码。
[D3链接](https://d3js.org/)

### `Highcharts`

>兼容 `IE6+`、完美支持移动端、图表类型丰富、方便快捷的 HTML5 交互性图表库； 成熟稳定的商业软件，72 个全球 100 强企业共同的信任。
[Highcharts链接](https://www.hcharts.cn/)

### `FusionCharts`

>FusionCharts成立于2002年，已被全球750,000名开发人员下载超过140万次。“开发人员，开发人员”是我们的使命宣言，我们的团队专注于让开发人员的生活快乐，同时帮助世界有效地沟通和理解数据。
[FusionCharts链接](https://www.fusioncharts.com/)

<hr>

## webpack
## webpack
## webpack