


var utc = new Date().toJSON().slice(8,10).replace(/-/g,'/');




//document.getElementById("demo").innerHTML = utc;

function dateCheck(){

    var i;
    for (i = 0; i <30; i++){
        if(document.getElementById('P' + i).innerHTML == utc){
            document.getElementById("P" +i).style.color = 'white';
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
for(i = 0; i <30; i++){


var div = document.createElement("div");
div.id = i;
div.style.backgroundColor= "red";
div.style.width= "14%";
div.style.height= "180px";
div.style.textAlign= "left";
div.style.float= "left";
div.style.border= "solid";
div.style.borderColor= "black";




//div.innerHTML = i;

document.getElementById("main").appendChild(div);

    var para = document.createElement("P");
    para.id = 'P'+i;
    var t = document.createTextNode(i);
    para.appendChild(t);
    document.getElementById(i).appendChild(para);


}




}





