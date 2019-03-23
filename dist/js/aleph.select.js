$(function(){
    $('.custom-select').each(function(){

        $(this).wrap('<div class="select-container"></div>');
        $(this).after('<div class="select"></div><div class="select-options"></div>');

        var options = $(this).children('option'),
            customSelect = $(this).next('.select');
    
        customSelect.text( options.eq(0).text() );
    
        for ( var i = 0; i < options.length; i++ ) {
            $(this)
                .siblings('.select-options')
                .append('<li rel="' + options.eq(i).attr('value') + '">' + options.eq(i).text() + '</li>');
        }
    
        customSelect.on('click', function(e){
            e.stopPropagation();
            $('.select.active').not(this).each(function(){
                $(this)
                    .removeClass('active')
                    .next('.select-options')
                    .hide();
            });
    
            $(this)
                .toggleClass('active')
                .next('.select-options')
                .toggle();
        });
    
        var customOptions = $('.select-options').children('li');
    
        customOptions.on('click', function(){
            $(this)
                .parent()
                .siblings('select')
                .children('option[value="' + $(this).attr('rel') + '"]')
                .attr('selected', 'selected');
    
            $(this)
                .parent()
                .hide()
                .prev('.select')
                .text($(this).text())
                .removeClass('active');
        });
        
        $(document).on('click', function(){
            $('.select').removeClass('active');
            $('.select-options').hide();
        });
    });
});