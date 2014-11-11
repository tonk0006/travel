
document.addEventListener("DOMContentLoaded", init);

function init() {
    $(function() {
        $( "#price-slider" ).slider({
            range: true,
            min: 100,
            max: 2000,
            step: 50,
            slide: function( event, ui ) {
        $( "#text-value" ).val( "$" + ui.value );
              }
        });
        $( "#text-value" ).val( "$" + $( "#price-slider" ).slider( "value" ) );
      });
}   