


$(function(){
 var $one = $(".one");
 var $two = $(".two");
 var $three = $(".three");
 var $input = $("input");
 var $button =$("button");
 var $date0;
 var $date1;
 var $date2;
 var $convertInt;
 var $getData;

function daterConvert(x){
var dateObj = new Date(x);
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

return newdate = month + "/"+ day+"/"+ year
console.log('This is daterConvert',newdate)
}



 $.ajax({
 	type:'GET',
 	url:"https://private-f3b4b-interview2.apiary-mock.com/data",
 	success:function(data){
 	   $date0= data[0].timestamp;
 	   $date1= data[1].timestamp;
 	   $date2= data[2].timestamp;
 	   $convertInt0 = parseInt($date0);
 	   $convertInt1 = parseInt($date1);
 	   $convertInt2 = parseInt($date2);

      var a = daterConvert($convertInt0);
 	    var b = daterConvert($convertInt1);
 	    var c = daterConvert($convertInt2);

     $one.html("<li class='text-center'><img class='rounded-circle center-block' src="+data[0].image+"><h1>"+ data[0].name +"</h1><p>"+a+"</p></li>");
     $two.html("<li><img class='rounded-circle' src="+data[1].image+"><h1>"+ data[1].name +"</h1><p>"+b+"</p></li>");
     $three.html("<li><img class='rounded-circle' src="+data[2].image+"><h1>"+ data[2].name +"</h1><p>"+c+"</p></li>");
     $getData = data;

    }
  
 });

    $one.on({
   	 click:function(){
      $input.val($getData[0].secret).css("background-color","red");
     }
    });

    $two.on({
   	 click:function(){
      $input.val($getData[1].secret).css("background-color","green");
     }
    });
  

   $three.on({
   	 click:function(){
      $input.val($getData[2].secret).css("background-color","pink");
     }
    });
   
    $button.on({
   	 click:function(){

      // $input.val("");
      $input[0].reset();
     }
    });


});