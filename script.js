// let temporaryUrl = window.location.toString();
// console.log(temporaryUrl);
// let img = document.createElement('img');
// document.body.append(img);


// let res = fetch('https://api.github.com/users/6thSence');
//   // .then(res => res.json()
//   )
//   // .then(json =>{document.body.innerHTML = "<img url=" + json.avatar_url+">"  + "<div>" + json.name + "</div>"+ "<div>"+ json.bio + "</div>"+ "<a href=" + json.url + ">" + json.url + "</a>" })
//   // .catch(err => console.log(err));

let url = window.location.toString();	
let getName = () => {
	let urlSplit = url.split('=');
	let name = urlSplit[1];
	if (name == undefined) {
		name = 'LenaMakeeva';
	}
}
let img = document.createElement('img');
document.body.append(img);
fetch(`https://api.github.com/users/${getName()}`)
	.then(res => res.json)
	.then(json => { 
		console.log(json);
		console.log(json.avatar_url);
		img.src = json.avatar_url;
	}
	)
	.catch(err => console.log(err));