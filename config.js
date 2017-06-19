//静态服务器配置，可同时配置多个，域名需host到127.0.0.1
exports.Server = {
    "3000": {
        //静态文件根目录
        "basePath": "/Users/qiankun/work/baidu/other/riot-zero/src"

    }
};
//转发规则——静态服务器没有响应的或者忽略的请求将根据一下规则转发
exports.TranspondRules = {
    "3000": {
        //目标服务器的ip和端口，域名也可，但注意不要被host了
       targetServer: {
           
           "port": "",
           "host": "",
            "headers": {
                "cookie": ""}
        }
    },
    "ajaxOnly": false
};

var bird = require('gulp-bird');
bird.start(exports.Server, exports.TranspondRules);
