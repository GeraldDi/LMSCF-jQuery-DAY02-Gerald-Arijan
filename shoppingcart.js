
$(".testd").click(makevis);
function makevis(){
	$("#invisshoppingc").css("visibility", "visible");
};

/*var i=0;
for (i=0; i<chart.lenght; i++){
	$("#invisshoppingc").append('<li id="lielement'+i+'"> testx</li><br>');
}*/

$(".addb").on( "click", function( event ) {
	$("#invisshoppingc").append('<li class="lielement"> You clicke on Product number: '+$(this).html()+'price:'+'amount:'+ '<img src="https://www.bulgari.com/dw/image/v2/BCSG_PRD/on/demandware.static/-/Library-Sites-bulgariSharedLibrary/default/dwc9b4492f/hj/landing/NEW-bvlgari-magnificent-creations-750x750.jpg" alt="" class="picincart"> '+        '</li><br>')
	
	console.log("testxbutton ok")
});

