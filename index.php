


<?php session_start(); ?>
<!DOCTYPE php>
<html>


<head>
	<link rel="stylesheet" type="text/css" href="cal.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/91/three.js"></script>

</head>
<body onload=" createDiv(); dateCheck();">



	<p id="demo"></p>

	<div class="month">      
		<ul>
			<li class="prev">&#10094;</li>
			<li class="next">&#10095;</li>
			<li>
				December<br>
				<span style="font-size:18px">2018</span>
			</li>
		</ul>
	</div>
	<button class="button events" id="eventButton" onclick="eventVisible();">Add Event</button>

<!-- Days of the Week list -->
	<ul class="weekdays">
		<li>Mo</li>
		<li>Tu</li>
		<li>We</li>
		<li>Th</li>
		<li>Fr</li>
		<li>Sa</li>
		<li>Su</li>
	</ul>
	<div id="wrapper">
		<div id="main"></div>
	</div>



<!-- The Add event pop up window. -->
	<div id="myModal" class="modal"><h1>Event</h1>
		<form onSubmit="WriteToFile(this)">
			<label>Event Title:</label><br>
			<input type="text" name="EventTitle" id="eventTitle" size="20">
			<br><br>
			<label>Date (day/month/year)</label><br>
			<input type="text" name="LastName" id="lastName" size="20">
			<br><br>
			<label>Location</label><br>
			<input type="text" name="location" id="loc" size="20">
			<br><br>
			<input type="submit" value="submit">
		</form>
	</div>

<!--
<script type="text/javascript">
	document.getElementById("demo").innerHTML = 'JONAS';



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

</script>

-->


<script type="text/javascript" src="calendar.js"></script>
</body>
</html>

