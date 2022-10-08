
	
	var keys = [1,2,3,4,5];
	var values = ["JavaScript", "Contest", "for", "getting", "marks"];
	var map = new Map();
	for(var i = 0; i < keys.length; i++)
    {
		map.set(keys[i], values[i]);
	}
	for (var key of map.keys()) 
    {
		document.write(key + " => " + map.get(key) + "</br>")
	}
				
