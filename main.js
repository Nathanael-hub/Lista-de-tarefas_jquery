$(document).ready(function(){
    $('#tform').submit(function(e){
        e.preventDefault();
        const tText = $('#NovaTarefa').val();
            $('#tlist').append('<li>' + tText + '</li>');
            $('#novaTarefa').val();
        
    });

    $('#tlist').on('click', 'li', function(){
        $(this).toggleClass('done');
    
    });
});