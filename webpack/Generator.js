const HtmlWebpackPlugin = require("html-webpack-plugin");
const glob = require("glob");//find specific patterne
const path = require("path");

module.exports = {
    generateHtmlPlugins: (templateDir) =>{
        const src = path.resolve(__dirname, "../", templateDir); //basedir/html/Home.html

        const templateFiles = glob.sync(`${src}/**/*.html`); //get all files .html wethin html folder

        return templateFiles.map((file) => {
            //html/Home.html
            const base = file.split("html")[1].substring(1);

            //Home.html
            const name = base.split(".")[0]

            //Home
            const arr = name.split("/")

            //Home
            const chunkName = arr[arr.length - 1];

            //Home
            return new HtmlWebpackPlugin({
                filename: `${name}.html`,
                template: path.resolve(__dirname, "../../", `${file}`),
                chunks: [chunkName],
            });
        });
    },
}