document.addEventListener('click', function (e) {
    const el = e.target;
    var blocks = document.getElementsByClassName('block__item');
    var items = document.getElementsByClassName('tabs__item');
    if(blocks.length === items.length){
        if (el.classList.contains('block__item')) {
            for (var i = 0; i < blocks.length; i++) {
                blocks[i].classList.remove("block__item_active");
                items[i].classList.remove("tabs__item_active");
                if (el == blocks[i]) {
                    items[i].classList.add("tabs__item_active");
                }
            }
            el.classList.add("block__item_active");
        }
    }else(console.error('check tabs and blocks'));
});