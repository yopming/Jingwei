$(document).ready(function() {
    var $location = location.hash;
    
    //点击事件
    $('#dev-affix li').bind('click', function() {
        if($(this).hasClass('head')) {
            return false;
        }
        $('#dev-affix .active').removeClass('active');
        $(this).addClass('active');
    });

});
