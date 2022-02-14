const path = require('path');

module.exports = {
    mode: 'development',
    
    devtool: 'eval-source-map',

    devServer:{
        static: {
            directory: path.resolve(__dirname, '../', 'dist'),
            watch: true
        },

        port: 3000,
        open: true,

        client:{
           logging: 'error',

           overlay:{
            errors: true
           },
           progress: true
          },

          devMiddleware:{
            writeToDisk: true
        }
    }
}