﻿'use strict'
angular.module('appData', []);


angular.module('appData')
//APP URL
.constant('appUrl', '../')
//.constant('appUrl', 'http://localhost:8080/MXQH/')
//Service URL
.constant('serviceUrl', '//localhost:13439/')
//.constant('serviceUrl', '//localhost:8080/MXQHServie/')
//.constant('serviceUrl', '//192.168.1.82:90/MXQH/MXQHServie/')
 //表單設定
.constant('Form', [
    { index: 0, title: '新增', action: 'Insert' },
    { index: 1, title: '编辑', action: 'Update' },
    { index: 2, title: '查看', action: 'Search' }
])
.constant('Version', (new Date()).toString())
    //Loading
.constant('cgBusyDefaults', {
    message: '',
    backdrop: true,
    templateUrl: '../Loading/Loading.html',
    //templateUrl: 'http://localhost:8080/MXQH/Loading/Loading.html', 
    message: '请稍等...',
    minDuration: 500,
    notBusyDisabled: true
})
.factory('templateUrl', ['$rootScope', 'appUrl', function ($rootScope, appUrl) {
    return {
        get: function (system) {
            return appUrl;
        }
    };
}])
.factory('MyPop', function () {
    return {
        Show: function (show, text) {
            if (show) {
                var en = {};
                en.title = en.title || "提示";
                en.text = text || "资料还在编辑中";
                en.type = en.type || "warning";
                en.showConfirmButton = false
                en.showCancelButton = true;
                en.cancelButtonText = en.cancelButtonText || "关闭";
                //显示提示消息
                swal(en, function (isConfirm) { });
            }
            return show;
        },
        Confirm: function (en, Do) {
            en = en || {};
            en.title = en.title || "确定";
            en.text = en.text || "确定吗";
            en.type = en.type || "warning";
            en.showConfirmButton = true
            en.showCancelButton = true;
            en.confirmButtonText = en.confirmButtonText || "确定";
            en.cancelButtonText = en.cancelButtonText || "取消";
            var bool = false;
            //显示提示消息
            swal(en, function (isConfirm) {
                if (isConfirm) {
                    Do();
                }
            });
        }
    };
})
