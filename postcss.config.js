const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        purgecss({
            content: [
                './src/**/*.html',
                './src/**/*.vue'
            ]
        }),
        cssnano({
            preset: 'default'
        })
    ]
}