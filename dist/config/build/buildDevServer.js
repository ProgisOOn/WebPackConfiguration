export function buildDevServer(options) {
    var _a;
    return {
        port: (_a = options.port) !== null && _a !== void 0 ? _a : 3000,
        open: true,
        // если раздавать статику через nginx То надо будет делать проксирование на index.html
        historyApiFallback: true,
    };
}
