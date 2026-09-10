
document.getElementById('btnAdd').addEventListener('click', function () {
  window.location.href = 'http://127.0.0.1:5501/addMonthCard.html';
});


//数据添加
window.onload = function(){


var list = JSON.parse(localStorage.getItem('monthCards')) || [];

var html = '';
for(var i = 0; i < list.length; i++){
   html += '<tr>'
    + '<td><input type="checkbox"></td>'
    + '<td>' + list[i].plateNo + '</td>'
    + '<td>' + list[i].ownerName + '</td>'
    + '<td>' + list[i].phone + '</td>'
    + '<td>' + list[i].vehicleType + '</td>'
    + '<td>' + list[i].cardType + '</td>'
    + '<td>' + list[i].payAmount + '</td>'
    + '<td>' + list[i].startDate + '</td>'
    + '<td>' + list[i].endDate + '</td>'
    + '<td>' + list[i].remainDay + '</td>'
    + '<td>' + list[i].status + '</td>'
    + '<td></td>'
    + '</tr>';

}
document.getElementById('tbody').innerHTML = html;

}
// 重置按钮
document.getElementById('btnReset').addEventListener('click', function () {
    document.getElementById('qPlateNo').value = '';   
    document.getElementById('qStatus').value = '';    
    renderTable(allCards);                            
});
