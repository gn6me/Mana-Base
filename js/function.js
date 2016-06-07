$(function () {
	$(".button").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val(); //button divs have to be below input field for this to work

		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) { //don't let it go below zero
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}

		$button.parent().find("input").val(newVal);
		calculate(); //run the calculate function each time button is clicked

	});

	function calculate() {
		var g = document.getElementById('g').value;
		var r = document.getElementById('r').value;
		var u = document.getElementById('u').value;
		var w = document.getElementById('w').value;
		var b = document.getElementById('b').value;
		var c = document.getElementById('c').value;
		var lands = document.getElementById('lands').value;

		//add all the mana costs together
		var mC = parseInt(g,10) + parseInt(r,10) + parseInt(u,10) + parseInt(w,10) + parseInt(b,10) + parseInt(c, 10);

		//calculate individual cost to total cost ratio
		var g = g / mC;
		var r = r / mC;
		var u = u / mC;
		var w = w / mC;
		var b = b / mC;
		var c = c / mC;

		//multiply ratio by number of lands to get individual land count
		var g = g * lands;
		var r = r * lands;
		var u = u * lands;
		var w = w * lands;
		var b = b * lands;
		var c = c * lands;

		document.getElementById('gT').innerHTML = Math.round(g); //round up or down to the nearest number. Makes things simpler
		document.getElementById('rT').innerHTML = Math.round(r);
		document.getElementById('uT').innerHTML = Math.round(u);
		document.getElementById('wT').innerHTML = Math.round(w);
		document.getElementById('bT').innerHTML = Math.round(b);
		document.getElementById('cT').innerHTML = Math.round(c);
	}
});