//Declare global variables
var t, p;

//Starts the timer and counts down. Calling the playSound function as the timer reaches 0
function countDown()
{
	if (document.getElementById('time').innerHTML <= "1")
	{
		clearTimeout(t);
		document.getElementById('time').innerHTML = "0";
		document.getElementById('title').innerHTML = "0";
		playSound();
	}
	else
	{
		var time = document.getElementById('time').innerHTML;
		time--;
		document.getElementById('time').innerHTML = time;
		document.getElementById('title').innerHTML = time;
		t = setTimeout(countDown, 1000);
	}
}

//Resets the time and clears both the count down and play sound loop
function reset()
{
	document.getElementById('time').innerHTML = "75";
	document.getElementById('title').innerHTML = "75";
	clearTimeout(t);
	clearTimeout(p);
}

//Loads and plays the beeping sound in a loop every 0.5 seconds
function playSound()
{
	var sound = document.getElementById("audio");
	sound.play();
	p = setTimeout(countDown, 500);
}