var req = new XMLHttpRequest();
req.open('GET', 'https://api.themoviedb.org/3/movie/upcoming');
req.setRequestHeader('Accept', 'application/json');
req.onreadystatechange = function(){
	if(this.readyState === 4){
		console.log('Status:', this.status);
		console.log('Headers:', this.getAllResponseHeaders())
	};
	console.log('Body:', this.responseText);
	res = JSON.parse(req.responseText);
	document.write(res);
};
request.send();
