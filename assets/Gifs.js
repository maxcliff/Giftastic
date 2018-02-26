var api= "https://api.giphy.com/v1/gifs/search?";
var apiKey= "&api_key=7MpNhJd5p8jEFtb9I5nPKp9dlowcJ9DV";
var query= "&q=sports";



var topics=["soccer", "football", "basketball", "lacrosse", "volleyball", "gymnastics"];



    function sports(){
        for(var i =0; i < topics.length; i++){
            var newBtn = $("<button>")
            newBtn.html(topics[i])
            newBtn.addClass("topics")
            newBtn.attr("data-attr", topics[i])
            $("#buttons-div").append(newBtn)

        }
    }
        sports()

        $(document).on("click", ".topics", function(){
            
            var btnTopic = $(this).attr("data-attr")
            console.log(btnTopic)
            
            $.ajax({
                url: api + "&q=" + btnTopic + apiKey,
                method: "GET" 
            }).done(function(response){
                console.log(response)
                for(var i =0; i < response.data.length; i++){
                    console.log(response.data)
                    var newGif= $("<img>")
                    newGif.attr("src", response.data[i].images.original.url)
                    newGif.css("max-width", "200px")
                    $("#gifs-div").append(newGif)

                }
            })
        })