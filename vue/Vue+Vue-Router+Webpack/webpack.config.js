var webpack = require('webpack');

module.exports = {
    // entry:{
    //     bundle:['./src/app.js']
    // },
    // output:{
    //     path:__dirname,
    //     publicPath:'/',
    //     filename:'dist/[name].js'
    // },
    devtool: false,
    entry:'./src/app.js',
    output:{
        path:__dirname,
        filename:'dist/bundle.js'
    },
    module:{
        loaders:[{
            test: /\.html$/,
            loader: 'html-loader'
        },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_moudules/,
            query:{
                presets:['es2015']
            }
        }]
    },
    resolve:{
        alias: {
            'vue': 'vue/dist/vue.min.js',
            'vue-router': 'vue-router/dist/vue-router.min.js'
        }
    },
    plugins:[
        /*
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        })
        */
    ]
}
