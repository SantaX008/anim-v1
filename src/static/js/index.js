let items = document.querySelectorAll('.craft-container-thing');
Array.prototype.map.call(items, (item) => {
    item.addEventListener('click', function () {
        item.classList.add('ready');
        document.querySelectorAll('.ready').length === 4 ?  document.querySelector('.craft-container-info').classList.add('show') : false;
    })
})