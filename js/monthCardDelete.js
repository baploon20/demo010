// 单条删除（新增文件）


document.getElementById('tbody').addEventListener('click', function (e) {
    
    var plate = e.target.dataset.plate;
    if (!plate) return;

    
    if (!confirm('确定删除车牌号 ' + plate + ' 的记录吗？')) return;

    
    var newList = [];
    for (var i = 0; i < allCards.length; i++) {
        if (allCards[i].plateNo !== plate) newList.push(allCards[i]);
    }
    allCards = newList;

    
    localStorage.setItem('monthCards', JSON.stringify(allCards));

    
    renderTable(allCards);
});
