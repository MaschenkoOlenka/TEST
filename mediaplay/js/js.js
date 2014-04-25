$(document).ready(function() {
    $(".bord").toggle(function(){
        $(this).parent(".question").addClass('show');
        $(this).parent(".question").find(".toggle").slideToggle()
    },function(){
        $(this).parent(".question").removeClass('show');
        $(this).parent(".question").find(".toggle").slideToggle()
    });
    $('.feedback').submit(function(){
        var ok = ( $('#name').val() && $('#mail').val() && $('#head').val() && $('#mess').val() && $('#file').val()); 
        $('.feedback input[type=text]').each(function() {
        if(!$(this).val().length) {
              $(this).parent("div").addClass("error")
            } else {$(this).parent("div").removeClass("error")}
        });
        if(!$('#file').val()) {
              $('#file').parent("div").addClass("error")
            } else {$('#file').parent("div").removeClass("error")};
        if(!$('#mess').val()) {
              $('#mess').parent("div").addClass("error")
            } else {$('#mess').parent("div").removeClass("error")};
        var email = $('#mail').val();
        if(Valid(email)) {
            $('#mail').parent("div").removeClass("error")
        } else {$('#mail').parent("div").addClass("error")};
        function Valid(email) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(email);
        }
        if (!ok) {
            return false
        } else {return true}
    });
});