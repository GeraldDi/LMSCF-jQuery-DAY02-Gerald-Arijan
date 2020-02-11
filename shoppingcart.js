
$(".testd").click(makevis);
function makevis(){
	$("#invisshoppingc").css("visibility", "visible");
};

/*var i=0;
for (i=0; i<chart.lenght; i++){
	$("#invisshoppingc").append('<li id="lielement'+i+'"> testx</li><br>');
}*/

product0=0;
product1=0;
product2=0;
product3=0;

$(".addb").on( "click", function( event ) {

price=document.getElementById('price0').innerHTML

var idnumber=$(this).attr("id").slice(4)

var combinded="product" +idnumber;

	$("#invisshoppingc").append('<li class="lielement">'+$(this).html().slice(0,9)+'<br>'+' price: '+document.getElementById('price'+idnumber).innerHTML+
	' amount: '+(product0+1) +'<img src="img/pic1big.jpg" alt="" class="picincart"> '+'</li><br>') /* replace product0+1 with productn+1 */
		
		product0++; /*replace with productn++*/
		console.log(price)
		console.log("product 0 anzahl:" +product0)

	/*testxx=(product+parseInt(idnumber));
	console.log("var test="+(product+idnumber)+1)
	console.log("combinded ist:"+combinded)*/

/*looking for ways ro combine variable + number in one

	var testXX = ("product"+idnumber);     
		console.log("testXX="+testXX)
		console.log("testXX-value="+testXX.value)
		console.log("testXX-value="+$("testXX").attr("value"))
		console.log("testXX="+testXX)
		console.log($("testXX").val())
		console.log("testXXXXX-value="+(product0+1))

		var test ttt=(product +=idnumber);
		console.log("testtt="testtt)*/


	var tsum=product0*parseInt(document.getElementById('price0').innerHTML) +product1*parseInt(document.getElementById('price1').innerHTML) +
	product2*parseInt(document.getElementById('price2').innerHTML) +product3*parseInt(document.getElementById('price3').innerHTML);
	$("#tcost").text(tsum);

	$("#tax").text(tsum*0.22);

	if(tsum <80){
		$("#shipping").text("9")  }else{
			$("#shipping").text("6")
		}

	console.log("tsum=" + product0 +"price0= " + document.getElementById('price0').innerHTML);

	
	console.log("beide multipliziert=" + product0*parseInt(document.getElementById('price0').innerHTML));


	
	  

});


