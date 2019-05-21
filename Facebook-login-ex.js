var database=[{
	username:"manyu",
	password:"hithere",
},
{
	username:"sally",
	password:"123",
},
{
	username:"ingrid",
	password:"777",
}
];

var newsfeed=[{
	username:"bobbob",
	timeline:"so tired",
},
{
	username:"saly",
	timeline:"so cool",
}
];

function isUserValid(username,password){
	for(var i = 0; i< database.length; i++){
 	if(database[i].username ===username
 		&& database[i].password===password){
 		return true;
 	}
  }
  return false;
}

function signIn(username,password){
	if (isUserValid(username,password)){
		console.log(newsfeed);
	}else{
		alert("sorry,wrong username and password!");
	}
}
 



var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt,passwordPrompt);
