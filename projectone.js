<script>
$(document).ready(function() {
   
    $('#navigation ul li a').hover(
        function() {
            $(this).stop().animate({ fontSize: '0.75em'}, 200);
        },
        function() {
            $(this).stop().animate({ fontSize: '0.5em'}, 200);
        }
    );

    
    $('.images img.preview').hide().fadeIn(1000);

  
    $('.images img:last-child').css('border', '2px solid #yellow');
});
</script>