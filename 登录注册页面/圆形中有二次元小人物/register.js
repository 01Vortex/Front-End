$(document).ready(function () {
    // 初始化iCheck
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    // 表单验证
    $("#zc").validate({
        rules: {
            confirm: {
                equalTo: "#pwd"
            }
        },
        messages: {
            username: {
                required: "请输入您的用户名"
            },
            password: {
                required: "请输入您的密码"
            },
            confirm: {
                required: "请再次输入您的密码",
                equalTo: "两次输入的密码不一致"
            },
        }
    });

    // 禁用右键点击
    document.oncontextmenu = function() {
        return false;
    };

    // 处理info和refresh链接点击事件
    $('#info').on('click', function(event) {
        event.preventDefault();
        info();
    });

    $('#refresh').on('click', function(event) {
        event.preventDefault();
        refresh();
    });
});

$(document).ready(function () {
    // 初始化iCheck
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });

    // 表单验证
    $("#zc").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            confirm: {
                equalTo: "#pwd"
            }
        },
        messages: {
            username: {
                required: "请输入您的用户名"
            },
            email: {
                required: "请输入您的邮箱",
                email: "请输入有效的邮箱地址"
            },
            password: {
                required: "请输入您的密码"
            },
            confirm: {
                required: "请再次输入您的密码",
                equalTo: "两次输入的密码不一致"
            },
        }
    });

    // 禁用右键点击
    document.oncontextmenu = function() {
        return false;
    };

    // 处理info和refresh链接点击事件
    $('#info').on('click', function(event) {
        event.preventDefault();
        info();
    });

    $('#refresh').on('click', function(event) {
        event.preventDefault();
        refresh();
    });
});