
import Mock from 'mockjs';

// Mock.Random.extend({

//     custom: function () {

//         // var i = 16;

//         var array = [];

//         var n = 0;

//         for (var i = 0; i < getRandom(6,10); i++) {
//             var data = {
//                 'class_id': '123456' + i,
//                 'class_name': 'sort_' + i,
//                 'spec_class_id': Mock.Random.integer(0,2),
//                 'spec_class_name': Mock.mock('@cword(2)'),
//                 'apps': []
//             };
//             for (var j = 0; j < getRandom(4,6); j++ ) {
//                 var appData = {
//                     'corpId': Mock.Random.natural(),
//                     'order': Mock.mock('@increment'),
//                     'appId': Mock.mock('@increment'),
//                     'id': Mock.mock('@increment'),
//                     'type': Mock.Random.integer(0,1),
//                     'path': Mock.Random.image('80x80', Mock.mock('@color'), Mock.mock('@character')),
//                     'name': "应用:" + Mock.mock('@cword(2)'),
//                     'tip_count': Mock.Random.integer(0,20),
//                     'app_run_type': Mock.Random.integer(1,4),
//                     'class_id': '123456' + i,
//                     'class_name': 'sort_' + i,
//                     'spec_class_id': Mock.Random.integer(0,2),
//                 }
//                 data.apps.push(appData);
//             }
//             array.push(data);
//         }

//         // while (n < i) {

//         //     var data ={
//         //         'class_Id': Mock.Random.natural(),
//         //         'class_name': 'sort_' + n,
//         //         'spec_class_id': Mock.Random.integer(0,2),
//         //         'spec_class_name': Mock.mock('@cword(2)'),
//         //         'apps': [{
//         //             'corpId': Mock.Random.natural(),
//         //             'order': Mock.mock('@increment'),
//         //             'appId': Mock.mock('@increment'),
//         //             'id': Mock.mock('@increment'),
//         //             'type': Mock.Random.integer(0,1),
//         //             'path': Mock.Random.image('80x80', Mock.mock('@color'), Mock.mock('@character')),
//         //             'name': "应用:" + Mock.mock('@cword(2)'),
//         //             'tip_count': Mock.Random.integer(0,20),
//         //             'app_run_type': Mock.Random.integer(1,4),
//         //             'class_id': Mock.Random.natural(),
//         //             'class_name': 'sort_' + n,
//         //             'spec_class_id': Mock.Random.integer(0,2),
//         //         }]
//         //     }

//         //     array.push(data);
//         //     n++;
//         // }
//         return array;
//     }

// });
// Mock.Random.custom();
module.exports = Mock.mock(/datas\/menu\.json/,{
    'list|5':[{
        'name':'@FIRST',
        'logo':Mock.Random.image()
    }]
})
