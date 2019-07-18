$(document).ready(function(){


$("#tab_dialer").show();
$("#tab_contactList").hide();
$("#tab_contactAdd").hide();
$("#tab_gesture").hide();

$("#tab_1").addClass("active");


$("#tab_1").click(function(){

	$("#tab_dialer").show();
	$("#tab_contactList").hide();
	$("#tab_contactAdd").hide();
	$("#tab_gesture").hide();

	$("#tab_1").addClass("active");
});

$("#tab_2").click(function(){

	$("#tab_dialer").hide();
	$("#tab_contactList").show();
	$("#tab_contactAdd").hide();
	$("#tab_gesture").hide();


$("#tab_2").addClass("active");
});

$("#tab_3").click(function(){

	$("#tab_dialer").hide();
	$("#tab_contactList").hide();
	$("#tab_contactAdd").show();
	$("#tab_gesture").hide();

$("#tab_3").addClass("active");

});

$("#tab_4").click(function(){

	$("#tab_dialer").hide();
	$("#tab_contactList").hide();
	$("#tab_contactAdd").hide();
	$("#tab_gesture").show();

$("#tab_4").addClass("active");

});



$(".btn_num").click(function(){

	console.log($(this).text());

	$("#textbox_dialer").val( $("#textbox_dialer").val() + $(this).text());

});

$("#btn_clear").click(function(){

	//var getDialerVal = $("#textbox_dialer").val();
	//console.log(getDialerVal);
	//$("#textbox_dialer").val(getDialerVal.slice(0,-1));

	$("#textbox_dialer").val("");

});



$("#btn_dialer").click(function(){

	alert("Dialling number : " + $("#textbox_dialer").val());

});

var downX=0;
var downY=0;

$("#gesture_area").mousedown(function(event){
	
	$("#gesture_output").text("Mouse Down");

	downX = event.pageX;
	downY = event.pageY;

}).mouseup(function(){
	
	var upX = event.pageX;
	var upY = event.pageY;

	if(upY < downY)
		$("#gesture_output").text("Swipe Up");
	else if(upY > downY)
		$("#gesture_output").text("Swipe Down");
	else if(upX < downX)
		$("#gesture_output").text("Swipe Left");
	else if (upX > downX)
		$("#gesture_output").text("Swipe Right");
	else
		$("#gesture_output").text("Mouse Up");

}).dblclick(function(){
	$("#gesture_output").text("Double Click");
});


$(".swipeArea").mousedown(function(event){

	downX = event.pageX;
	downY = event.pageY;

}).mouseup(function(){

	var upX = event.pageX;
	var upY = event.pageY;
	console.log(upX + "   "+ downY);
		

	if(upX < downX)
		{
			right();
			
		}
	else if (upX > downX)
		{
				
			left();
			
		}
	else
		$("#gesture_output").text("Mouse Up");

});


$(document).keydown(function(e){
	
	
	if(e.keyCode=='39'){

		right();
			
	}else if(e.keyCode=='37'){

			left();

	}

});


function right(){

	var idVal = $(".active").attr('value');
			//console.log(idVal);
			if(idVal == 4)
				idVal = 3;

			var idAppendCurrent = "#tab_" + idVal;
		 	var idAppenndNext = "#tab_" + (parseInt(idVal)+1);
		 	console.log(idAppendCurrent);
		 	console.log(idAppenndNext);
		 	$(idAppenndNext).addClass("active");
		 	$(idAppendCurrent).removeClass("active");
		

				
				 if((parseInt(idVal)+1)==2){

				 		$("#tab_dialer").hide();
						$("#tab_contactList").show();
						$("#tab_contactAdd").hide();
						$("#tab_gesture").hide();
				 	
				 }else if((parseInt(idVal)+1)==3){

				 		$("#tab_dialer").hide();
						$("#tab_contactList").hide();
						$("#tab_contactAdd").show();
						$("#tab_gesture").hide();

				 	}
				 else{
				 		$("#tab_dialer").hide();
						$("#tab_contactList").hide();
						$("#tab_contactAdd").hide();
						$("#tab_gesture").show();
				 }


}


function left(){

		var idVal = $(".active").attr('value');
		
			if(idVal==1)
				idVal=2;
			//console.log(idVal);
			var idAppendCurrent = "#tab_" + idVal;
		 	var idAppenndNext = "#tab_" + (parseInt(idVal)-1);
		 	console.log(idAppendCurrent);
		 	console.log(idAppenndNext);
		 	$(idAppenndNext).addClass("active");
		 	$(idAppendCurrent).removeClass("active");
		

		if((idVal-1) == 1)
		{
				$("#tab_dialer").show();
				$("#tab_contactList").hide();
				$("#tab_contactAdd").hide();
				$("#tab_gesture").hide();
		}
		else if((parseInt(idVal)-1)==2){

		 		$("#tab_dialer").hide();
				$("#tab_contactList").show();
				$("#tab_contactAdd").hide();
				$("#tab_gesture").hide();
		 	
		 }else if((parseInt(idVal)-1)==3){

		 		$("#tab_dialer").hide();
				$("#tab_contactList").hide();
				$("#tab_contactAdd").show();
				$("#tab_gesture").hide();

		 	}
		 else{
		 		$("#tab_dialer").hide();
				$("#tab_contactList").hide();
				$("#tab_contactAdd").hide();
				$("#tab_gesture").show();
		 }
}


});