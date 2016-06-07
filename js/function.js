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
		var gR = g / mC;
		var rR = r / mC;
		var uR = u / mC;
		var wR = w / mC;
		var bR = b / mC;
		var cR = c / mC;

		//multiply ratio by number of lands to get individual land count
		var gL = gR * lands;
		var rL = rR * lands;
		var uL = uR * lands;
		var wL = wR * lands;
		var bL = bR * lands;
		var cL = cR * lands;

		document.getElementById('gT').innerHTML = Math.round(gL); //round up or down to the nearest number. Makes things simpler
		document.getElementById('rT').innerHTML = Math.round(rL);
		document.getElementById('uT').innerHTML = Math.round(uL);
		document.getElementById('wT').innerHTML = Math.round(wL);
		document.getElementById('bT').innerHTML = Math.round(bL);
		document.getElementById('cT').innerHTML = Math.round(cL);
	}
});