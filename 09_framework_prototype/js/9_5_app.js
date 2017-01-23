Event.observe(document, "DOMContentLoaded", function() {

    // Template. Names in curly braces are names (kays) of object.
    var tmpl = new Template("Nazwa produktu: #{name}. Cena: #{price}zł.");

    var product1 = {"name" : "Kurs JS", "price" : 45.00};
    var product2 = {"name" : "Kurs PHP", "price" : 62.00};

    // The evaluate() method gets values from apropriate name (key) of object and inserts it into the template.
    $("par").innerHTML += tmpl.evaluate(product1) + "<br>";
    $("par").innerHTML += tmpl.evaluate(product2) + "<br>";
});
