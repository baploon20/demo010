//  新增月卡页：返回按钮 


const btnBack = document.getElementById('btnBack');



btnBack.addEventListener('click', function () {
    
    
    console.log('点了返回按钮，准备跳转');

    
    window.location.href = 'monthCard.html';
});

const btnSubmit =document.getElementById('btnSubmit');
        

btnSubmit.addEventListener('click', function(){

    console.log('点击了保存按钮，数据保存')

    var card={};

    card.plateNo = document.getElementById('plateNo').value.trim();
    card.ownerName = document.getElementById('ownerName').value.trim();
    card.phone = document.getElementById('phone').value.trim();
    card.vehicleType = document.getElementById('vehicleType').value.trim();
    card.cardType = document.getElementById('cardType').value.trim();
    card.payAmount = document.getElementById('payAmount').value.trim();
    card.startDate = document.getElementById('startDate').value.trim();
    card.endDate = document.getElementById('endDate').value.trim();

    var list =JSON.parse(localStorage.getItem('monthCards')) || [];

    //  自动计算剩余天数和状态 
    var end = new Date(card.endDate);       
    var today = new Date();                 
    end.setHours(0, 0, 0, 0);               
    today.setHours(0, 0, 0, 0);
    var days = (end - today) / 86400000;    

    card.remainDay = days;
    card.status = days >= 0 ? '可用' : '已过期';


    document.getElementById('remainDay').value = days;
    document.getElementById('status').value = card.status;


    

    list.push(card);
    
    localStorage.setItem('monthCards', JSON.stringify(list));


})