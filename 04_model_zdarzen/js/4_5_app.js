document.addEventListener("DOMContentLoaded", function() {
    var box = document.getElementById('content');
    var message = document.getElementById('message');

    box.addEventListener('mousewheel', function() {
        // The variable storing event for window
        var e = window.event;
        // The wheelDelta property takes value 120 when mousewheel turns up or -120 when mousewheel turns down.
        var mv = e.wheelDelta;
        message.innerText = "Wystąpiło zdarzenie mousewheel";
        message.innerText = mv;
        if (mv > 0) {
            message.innerText = "Nastąpiło przesunięcie kółka myszki do góry";
        } else {
            message.innerText = "Nastąpiło przesunięcie kółka myszki na dół";
        }
    });
});
