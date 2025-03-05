const gulp = require('gulp')

function funcaoPadrao(callback) {
    setTimeout(() => {        
        console.log('Executando via Gulp')
        callback()
    }, 2000)
}

function dizOi(callback) {
    setTimeout(() => {
        console.log('Oi')
        dizTchau()
        callback()
    }, 3000)
}

function dizTchau() {
    console.log('Tchau') 
}

exports.parallel = gulp.parallel(funcaoPadrao, dizOi)
exports.series = gulp.series(funcaoPadrao, dizOi)
