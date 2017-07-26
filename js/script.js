$(function(){
// $(".nickname-form").css("display", "none");
    $('#sendie').keyup(function(e) {	
                        
            if (e.keyCode == 13) { 
            
            var text = $(this).val();
            var maxLength = $(this).attr("maxlength");  
            var length = text.length; 
                
            // send 
            if (length <= maxLength + 1) { 
                
                chat.send(text, name);	
                $(this).val("");
                
            } else {
            
                $(this).val(text.substring(0, maxLength));
                
            }	
        }
    });
    $("#nickname-input").keyup(function(e){
        if (e.keyCode == 13){
            if ($(this).val() == ""){
                console.log("Field empty");
                $(".nickname-error").text("Please enter a nickname");
            } else {
                $(".nickname-form-wrap").fadeOut();
                window.location = "chat.php";
            }
        }
    });
    $(".chat-area").fadeIn();
})