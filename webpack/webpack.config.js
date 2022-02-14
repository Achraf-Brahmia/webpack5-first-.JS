const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');

module.exports = ({env}) =>{
    const GetENV = require(`./webpack.${env}.js`);

    return merge(common ,GetENV);
}