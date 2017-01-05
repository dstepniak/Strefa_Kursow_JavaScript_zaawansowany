document.addEventListener("DOMContentLoaded", function(e){
    // Event onchange for element select
    document.getElementById("links").onchange = function() {
        // variable storing element select which contains list of links
        var links = document.getElementById("links");
        // variable storing index of selected option (link)
        var index = links.selectedIndex;
        // variable storing url of selected option (link)
        var url = links[index].value;

        // The window.location.href property returns the URL of the current page, it can be also used to set this value.
        // The URL redirection
        window.location.href = url;
    }

});
