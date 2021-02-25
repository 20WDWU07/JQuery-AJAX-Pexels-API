$(document).ready(function () {
    $("#submit").click(function() {
        $.ajax({
            url: "https://api.pexels.com/v1/search?query=cat",
            type: "GET",
            beforeSend: function (xhr) {
                // XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. 
                // This enables a Web page to update just part of a page without disrupting what the user is doing. 
                xhr.setRequestHeader('Authorization', '563492ad6f91700001000001ae12044eaf424a5fb704944366c116a7');
            },
            dataType: "json",
            success: function (result, status, xhr) {
                console.log(result);
                for (i = 0; i < result.photos.length; i++)
                {
                    let imagelist = ("<div class='col-3'><img src='" + result.photos[i].src.medium + "' alt='' width='100%'></div>");
                    $("#results").append(imagelist);
                }
            },
            error: function (xhr, status, error) {
                console.log("Status:" + status + "Error: " + error + "XHR Status Text: " + xhr.statusText + "XHR Status: " + xhr.status)
            }
        });
    });
});