import MiniCssExtractPlugin from 'mini-css-extract-plugin';
export function buildLoaders(options) {
    var isDev = options.mode === 'development';
    var cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    };
    var assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };
    var svgLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                }
            }
        ],
    };
    var sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssLoaderWithModules,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };
    var tsxLoader = {
        test: /\.tsx?$/,
        use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }],
        exclude: /node_modules/,
    };
    return [
        assetLoader,
        sassLoader,
        tsxLoader,
        svgLoader,
    ];
}
