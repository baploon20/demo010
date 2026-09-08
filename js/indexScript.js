// ========== 新增月卡页：返回按钮 ==========


const btnBack = document.getElementById('btnBack');



btnBack.addEventListener('click', function () {
    
    
    console.log('点了返回按钮，准备跳转');

    
    window.location.href = 'monthCard.html';
});
