function displayProperties(value){
	var properties = [];
	for (var prop in document) {
		properties.push(prop);
	}
	properties.sort();
	for (var i = 0; i < properties.length - 1; i++) {
		console.log(properties[i]);
	}
}
