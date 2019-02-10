const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const withCSS = require("@zeit/next-css");

module.exports = withFonts(
    withSass(
        withCSS({
            webpack: function (config) {
                config.module.rules.push({
                    test: /\.(eot|woff|woff2|svg|png|jpg|gif)$/,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 100000,
                            name: "[name].[ext]"
                        }
                    }
                });
                return config;
            }
        })
    )
);
