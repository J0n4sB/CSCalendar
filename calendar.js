



var selector, elems, makeActive;

selector = '.days li';

elems = document.querySelectorAll(selector);

makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');
    
    this.classList.add('active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);



document.getElementById("demo").innerHTML = 'JavaScript = Working';



function eventVisible(){
    document.getElementById("myModal").style.opacity = "1";
    document.getElementById("myModal").style.zIndex = "0";
}

