const alertMsgs = (function alertMsgs()
{
    function loadingMsg(element)
    {
        if (element.hasClass('alert-error')) {
            element.toggleClass('alert-error alert-info');
        }

        element.html('<div class="loadingIndicator" style="float: left; width: 20px; margin-right: 5px;"></div>' + 'Loading...');
        element.show();
    }

    function errorMsg(element, msg)
    {
        if (element.hasClass('alert-info')) {
            element.toggleClass('alert-info alert-error');
        }
        element.text("Error: " + msg);

        let max_length = 150;
        if (element.html().length > max_length) {
            var short_content   = element.html().substr(0,max_length);
            var long_content  = element.html().substr(max_length);
            element.html(short_content+'<a href="#" class="read_more"> ... show more</a>'+
                '<span class="more_text" style="display:none;">'+long_content+'</span>'+'<a href="#" class="read_less" style="display:none;"> show less</a>');
            element.find('a.read_more').click(function(event) {
                event.preventDefault();
                $(this).hide();
                $('.read_less').show();
                $(this).parents('.collapseMsg').find('.more_text').show();
            });

            element.find('a.read_less').click(function(event) {
                event.preventDefault();
                $(this).hide();
                $('.read_less').hide();
                $('.read_more').show();
                $(this).parents('.collapseMsg').find('.more_text').hide();
            });
        }

        element.show();
    }

})();