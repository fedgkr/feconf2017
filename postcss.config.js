module.exports = {
    plugins: [
        require('autoprefixer')({browsers: ['last 2 versions', 'ie 9']}),
        require('cssnano')()
    ]
};
