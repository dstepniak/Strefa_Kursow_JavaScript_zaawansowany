document.addEvent("DOMContentLoaded", function() {
    $("button").addEvent("click", function() {
        var el = new Element("a", {
            href: "http://strefakursow.pl",
            class: "text-success",
            html: "Strefa kursów"
        });
        // alert(el);
        // $("content").appendChild(el);
        // The grab() method by default appends specified element - inserts it at the end
        $("content").grab(el);
        // The grab() method with the second parameter inserts elenent at specified position
        $("content").grab(el, "top");
        // The replaces() metod replaces specified element with the new elenent
        el.replaces($("info"));
    });
});
