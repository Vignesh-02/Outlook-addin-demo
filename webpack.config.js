/* eslint-disable no-undef */
const path = require("path");

const devCerts = require("office-addin-dev-certs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");
 
const webpack = require("webpack");

const urlDev = "https://localhost:3002/";
const urlProd = "https://outlook-addin-v9y9.onrender.com/"; // CHANGE THIS TO YOUR PRODUCTION DEPLOYMENT LOCATION

async function getHttpsOptions() {
  const httpsOptions = await devCerts.getHttpsServerOptions();
  return { ca: httpsOptions.ca, key: httpsOptions.key, cert: httpsOptions.cert };
}

module.exports = async (env, options) => {
  const dev = options.mode === "development";
  const config = {
    devtool: "source-map",
    entry: {
      polyfill: ["core-js/stable", "regenerator-runtime/runtime"],
      vendor: ["react", "react-dom", "core-js", "@fluentui/react-components", "@fluentui/react-icons"],
      taskpane: ["./src/taskpane/index.jsx", "./src/taskpane/taskpane.html"],
      commands: "./src/commands/commands.js",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js",
        clean: true,
        publicPath: "/",
      },
    resolve: {
      extensions: [".html", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: "html-loader",
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          type: "asset/resource",
          generator: {
            filename: "assets/[name][ext][query]",
          },
        },
        {
            test: /\.css$/i,  // Regex to match CSS files
            use: ['style-loader', 'css-loader'],  // Loaders are used in reverse order
        },

      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "assets/*",
            to: "assets/[name][ext][query]",
          },
          {
            from: "manifest*.xml",
            to: "[name]" + "[ext]",
            transform(content) {
              if (dev) {
                return content;
              } else {
                return content.toString().replace(new RegExp(urlDev, "g"), urlProd);
              }
            },
          },
        ],
      }),

    //   new CspHtmlWebpackPlugin(
    //     {
            
    //             "base-uri": "'self'",
    //             "object-src": "'none'",
    //             "script-src": ["'self'", "'unsafe-eval'"],
    //             "style-src": ["'self'", "'unsafe-inline'"],
    //             "connect-src": [ "'self'",
    //                               "https://dummyjson.com",
    //                               "http://localhost:8000",
    //                               "127.0.0.1:8000",
                                  
    //             ],
    //             "frame-src": ["'self'"]
    //     },
    //     {
    //         enabled: true,
    //         hashingMethod: "sha256",
    //         hashEnabled: {
    //           "script-src": true,
    //           "style-src": true,
    //         },
    //         nonceEnabled: {
    //           "script-src": true,
    //           "style-src": true,
    //         },
    //       },
    //     ),
      new HtmlWebpackPlugin({
        filename: "taskpane.html",
        template: "./src/taskpane/taskpane.html",
        chunks: ["taskpane", "vendor", "polyfill"],
      }),
      new HtmlWebpackPlugin({
        filename: "commands.html",
        template: "./src/commands/commands.html",
        chunks: ["commands"],
      }),
      new webpack.ProvidePlugin({
        Promise: ["es6-promise", "Promise"],
      }),
    ],
    devServer: {
    static: "./build",
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      server: {
        // type: "http",
        type: "https",
        options: env.WEBPACK_BUILD || options.https !== undefined ? options.https : await getHttpsOptions(),
      },
      port: process.env.npm_package_config_dev_server_port || 3002,
    },
  };

  return config;
};
