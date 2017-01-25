document.addEvent("DOMContentLoaded", function() {
    $("button").addEvent("click", function() {
        // Fx.Tween() - object of animation
        var anim = new Fx.Tween("info", {
            // duration: "long",
            duration: 2000, // duration of animation in miliseconds
            property: "height"  // css property which is animated
        });
        // The start() metod - starts animation, parameters are initial and final values of css property.
        // anim.start(40, 80);
        // The set() method - sets value of css property.
        anim.set(100);
        anim.start(100, 40);
    });
});
