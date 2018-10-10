$(document).ready(function(){
    $('.search_input').on('focus', function(){
        $(this).parent().css('width','700px');
        $(this).parent().css('position','absolute');
        $(this).css('width','700px');
        $(this).parent().children('input[type="submit"]').css('right','12px');
    });
    $('.search_input').on('blur', function(){
        $(this).parent().css('width','180px');
        $(this).parent().css('position','relative');
        $(this).css('width','160px');
        $(this).parent().children('input[type="submit"]').css('right','32px');
    });
    $('.fancybox').fancybox({
        closeBtn:true,
        padding: 0,
        margin: 0,
        wrapCSS: 'popup',
        autoSize: true,
        theme: 'light'
    });
    $('.top_menu a').on('click', function(){
        if($(this).next('ul').length == 1)
        {
            $(this).next('ul').toggle();
            return false;
        }
    });
    $('body').on('click', function(){
        console.log('ok');
        $('.top_menu li ul').hide();
    });
    $(document).on('af_complete', function(event, response) {
        var form = response.form;
        if (form.attr('id') == 'send_order_form') {
            $('.fancybox-close').trigger('click');
        }
        else {
            console.log(response)
        }
    });
});
