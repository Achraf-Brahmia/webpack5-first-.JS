const path = require('path');
const {generateHtmlPlugins} = require('./Generator.js')

module.exports = {
    
    entry:{
        Home: path.resolve(__dirname, '../', 'src/js/Home.js')
    },

    output:{
        filename: 'dist/js/[name].bundle.js',
        path: path.resolve(__dirname,'../', 'dist'),
        clean: true
    },

    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: generateHtmlPlugins("html")
}