// 月卡查询功能

// 全部数据
var allCards = JSON.parse(localStorage.getItem('monthCards')) || [];


function renderTable(list) {
    var html = '';
    for (var i = 0; i < list.length; i++) {
        var c = list[i];
        html += '<tr>'
            + '<td><input type="checkbox"></td>'
            + '<td>' + c.plateNo + '</td>'
            + '<td>' + c.ownerName + '</td>'
            + '<td>' + c.phone + '</td>'
            + '<td>' + c.vehicleType + '</td>'
            + '<td>' + c.cardType + '</td>'
            + '<td>' + c.payAmount + '</td>'
            + '<td>' + c.startDate + '</td>'
            + '<td>' + c.endDate + '</td>'
            + '<td>' + c.remainDay + '</td>'
            + '<td>' + c.status + '</td>'
            + '<td></td>'
            + '</tr>';
    }
    document.getElementById('tbody').innerHTML = html;
    document.getElementById('totalCount').innerHTML = list.length;
}

// 页面加载后显示全部数据（含总条数）
window.addEventListener('load', function () {
    renderTable(allCards);
});

// 查询按钮：按车牌号关键字
document.getElementById('btnQuery').addEventListener('click', function () {
    var plate = document.getElementById('qPlateNo').value.trim();

    var result = [];
    for (var i = 0; i < allCards.length; i++) {
        var c = allCards[i];
        if (plate && (c.plateNo).indexOf(plate) === -1) continue;
        result.push(c);
    }
    renderTable(result);
});
