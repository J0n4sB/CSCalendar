


document.getElementById("demo").innerHTML = 'JONAS';

function WriteToFile(passForm) {
 
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("/Users/School/Desktop/filename.txt", True);
 
    var firstName = document.getElementById('FirstName');
    var lastName  = document.getElementById('lastName');
 
    s.writeline("First Name :" + FirstName);
    s.writeline("Last Name :" + lastName);
 
    s.writeline("-----------------------------");
    s.Close();
 }


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


