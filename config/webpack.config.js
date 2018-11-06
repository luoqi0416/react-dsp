const webpack =require('webpack');
// const CopyWebpackPlugin =require('copy-webpack-plugin');
const HtmlWebpackPlugin =require('html-webpack-plugin');

console.log(process.env.NODE_ENV)
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