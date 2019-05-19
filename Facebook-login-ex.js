var database=[{
	username:"manyu",
	password:"hithere",
}];

var newsfeed=[{
	username:"bob",
	timeline:"so tired",
},
{
	username:"saly",
	timeline:"so cool",
}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user,pass){
	if (user===database[0].username 
		&& pass===database[0].password){
		console.log(newsfeed);
	}else{
		alert("sorry,wrong username and password!");
	}
}


signIn(userNamePrompt,passwordPrompt);