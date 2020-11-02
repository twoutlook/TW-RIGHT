var clients = [];
$(function () {
    clients = $.clientsInit();
})
$.clientsInit = function () {
    var dataJson = {
        dataItems: [],
        organize: [],
        role: [],
        duty: [],
        user: [],
        authorizeMenu: [],
        authorizeButton: []
    };
    var init = function () {
        $.ajax({
            url: "/ClientsData/GetClientsDataJson",
            type: "get",
            dataType: "json",
            async: false,
            success: function (data) {
                dataJson.dataItems = data.dataItems;
                dataJson.organize = data.organize;
                dataJson.role = data.role;
                dataJson.duty = data.duty;
                dataJson.authorizeMenu = eval(data.authorizeMenu);
                dataJson.authorizeButton = data.authorizeButton;
            }
        });
    }
    init();
    return dataJson;
}

//-------------------------------------------------------------------------------
// 获取权限的静态数据
// 需要后续完善方法 //TODO
//-------------------------------------------------------------------------------
var rightClients = [];
$(function () {
    rightClients = $.rightClientsInit();
})
$.rightClientsInit = function () {
    var dataJson = {
        dataItems: [],
        organize: [],
        role: [],
        duty: [],
        datamodels: [],
        user: [],
        authorizeMenu: [],
        authorizeButton: [],
        project: []
    };
    var init = function () {
        $.ajax({
            url: "/RightClientsData/GetClientsDataJson",
            type: "get",
            dataType: "json",
            async: false,
            success: function (data) {
                dataJson.dataItems = data.dataItems;
                dataJson.organize = data.organize;
                dataJson.role = data.role;
                dataJson.duty = data.duty;
                dataJson.datamodels = data.datamodels;
                dataJson.authorizeMenu = eval(data.authorizeMenu);
                dataJson.authorizeButton = data.authorizeButton;
                dataJson.project = data.project;
            }
        });
    }
    init();
    return dataJson;
}
