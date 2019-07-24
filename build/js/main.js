document.addEventListener('click', function (e) {
    const el = e.target;
    var blocks = document.getElementsByClassName('block__item');
    var items = document.getElementsByClassName('tabs__item');
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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0O1xuICAgIHZhciBibG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdibG9ja19faXRlbScpO1xuICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYnNfX2l0ZW0nKTtcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdibG9ja19faXRlbScpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibG9ja3NbaV0uY2xhc3NMaXN0LnJlbW92ZShcImJsb2NrX19pdGVtX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgIGlmIChlbCA9PSBibG9ja3NbaV0pIHtcbiAgICAgICAgICAgICAgICBpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKFwidGFic19faXRlbV9hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImJsb2NrX19pdGVtX2FjdGl2ZVwiKTtcbiAgICB9XG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
