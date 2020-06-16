module.exports = {
    configureWeboack:{
        resolve:{
            extension:[],
            // @ 表示src
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'views':'@/views',
                'network':'@/network',
            }
        }
    }
}