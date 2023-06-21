import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://newsapi.org",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/v2",
      },
    })
  );
};
