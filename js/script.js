let options = {
    startAngle: -1.55,
    size:150,
    value: 0.90,
    fill: {gradient: ["#3b5caa"]}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function (event, progress, stepValue) { 
$(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2))+ "%");
});
$(".js .bar").circleProgress({
    value: 0.70,
});
$(".react .bar").circleProgress({
    value: 0.30,
});

(function() {
    function init(){
        var speed = 300,
        easing = mina,backout;
        
        [].slice.call ( document.querySelectorAll ('#grid > a') ).forEach( function( el ) {
            var s = Snap(el.querySelector( 'svg' )), path = s.select( 'path' ),
            pathConfig = {
                from : path.attr( 'd' ),
                to : el.getAttribute( 'data-path-hover' )
            };
            el.addEventListener( 'mouseenter', function() {
                path.animate( { 'path' : pathConfig.to }, speed,easing );
            });
            el.addEventListener( 'mouseleave', function() {
                path.animate( { 'path' : pathConfig.from }, speed,easing );
            });
        });
    }
    init();
    
})();