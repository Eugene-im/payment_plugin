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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xuICAgIHZhciBibG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibG9ja19faXRlbScpO1xuICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYnNfX2l0ZW0nKTtcbiAgICBpZihibG9ja3MubGVuZ3RoID09PSBpdGVtcy5sZW5ndGgpe1xuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdibG9ja19faXRlbScpKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2Nrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJsb2Nrc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvY2tfX2l0ZW1fYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT0gYmxvY2tzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYmxvY2tfX2l0ZW1fYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfWVsc2UoY29uc29sZS5lcnJvcignY2hlY2sgdGFicyBhbmQgYmxvY2tzJykpO1xufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
