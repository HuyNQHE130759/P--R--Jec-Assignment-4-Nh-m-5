import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'spa',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',

    srcDir: path.resolve(__dirname, 'app'),
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {

    },
    /*
     ** Global CSS
     */
    css: [
        '@/assets/scss/main.scss',
        '@/assets/css/tailwind.css',
        '@/assets/fonts/icons/style.css',
        '@fortawesome/fontawesome-free/css/all.css',

    ],

    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        '~/plugins/element-ui',
    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    
    ],

    env: {
    
    },

    modules: [
    ],

    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        extractCSS: true,
        uglify: {
            cache: path.resolve(__dirname, '.build-cache/webpack-uglify'),
            sourceMap: true,
        },
        postcss: {
            plugins: {
                tailwindcss: path.resolve(__dirname, './app/tailwind.config.js'),
            },
        },
        preset: {
            stage: 1, // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
        },

        optimization: {
            minimize: true,

            splitChunks: {
                chunks: 'all',

                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },

                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },

            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                }),
            ],
        },
    },
};
