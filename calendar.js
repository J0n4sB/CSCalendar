


var utc = new Date().toJSON().slice(8,10).replace(/-/g,'/');




//document.getElementById("demo").innerHTML = utc;

function dateCheck(){

    var i;
    for (i = 1; i <31; i++){
        if(document.getElementById('day' +i).innerHTML == utc){
            document.getElementById("day"+i).style.color = 'white';
        }
    }


/*    var x = document.getElementsByTagName("li");
    var i;
    for (i = 0; i < x.length; i++) {
        //document.getElementById("demo").innerHTML = x.length;
    if (x[i].innerHTML == utc){
      document.getElementById("demo").innerHTML = x[i].innerHTML;
      x[i].style.color = "white";
  }
}*/

}



function eventVisible(){
    document.getElementById("myModal").style.opacity = "1";
    document.getElementById("myModal").style.zIndex = "0";
}







function createDiv(){

    var i;
    var j;
    for(i = 1; i <32; i++){

        if(i <10){
            j = '0'+i;
        }
        else{
            j = i;
        }


        var div = document.createElement("div");
        div.id = i;



        div.style.backgroundColor= "red";
        div.style.width= "14%";
        div.style.height= "180px";
        div.style.textAlign= "left";
        div.style.float= "left";
        div.style.border= "solid";
        div.style.borderColor= "black";
//This creates the div box






//div.innerHTML = i;

document.getElementById("main").appendChild(div);



div.innerHTML = '<table style="width:70%">'+
'<tr><td class="day" id="day'+ i + '">' + j +'</td></tr><tr><td  class="WC" id="WID'+ i + '">partly cloudy</td></tr><tr><td id="event">Birthday</td> </tr></table>'



document.getElementById("WID1").style.color = 'green';//changes to specific element

//This creates the P element (P1, P2, P3 are the ID's)

}




}





