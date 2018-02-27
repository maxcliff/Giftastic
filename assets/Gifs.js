var api= "https://api.giphy.com/v1/gifs/search?";
var apiKey= "&api_key=7MpNhJd5p8jEFtb9I5nPKp9dlowcJ9DV";
var query= "&q=sports";



var topics=["soccer", "football", "basketball", "lacrosse", "volleyball", "gymnastics"];



    function sports(){
        $("#buttons-div").empty()
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
                $("#gifs-div").empty();
                for(var i =0; i < response.data.length; i++){
                    console.log(response.data)
                    var newGif= $("<img>")
                    newGif.attr("data-still", response.data[i].images.original_still.url)
                    newGif.attr("data-animate", response.data[i].images.original.url)
                    newGif.attr("src", response.data[i].images.original_still.url)
                    newGif.attr(response.data[i].rating)
                    newGif.css("max-width", "200px")
                    newGif.addClass("gif-image")
                    $("#gifs-div").append(newGif)
                    
                    

                }
            })
   
        })

        $("#btnSearch").on("click", function(){
           var userInput= $("#mySearch").val()
           topics.push(userInput)

            sports()
        })

        var animated = false;
        $(document).on("click", ".gif-image", function(){
            if (!animated){
                var animation = $(this).attr("data-animate")
                $(this).attr("src", animation)
                animated = true;
                console.log(animated)
                
            }else {
                var still= $(this).attr("data-still")
                $(this).attr("src", still)
                animated = false;
                console.log(animated)
            }
        })