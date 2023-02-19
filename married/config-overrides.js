module.exports = {
    webpack: function (config, env) {
        config.output.filename = 'static/js/[name].[contenthash:8].js';
        config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';

        const miniCssExtractPlugin = config.plugins.find(element => element.constructor.name === "MiniCssExtractPlugin");
        if (miniCssExtractPlugin?.options) {
            miniCssExtractPlugin.options.filename = "static/css/[name].[contenthash:8].css";
            miniCssExtractPlugin.options.chunkFilename = "static/css/[name].[contenthash:8].css";
        }
        return config;
    },
};
