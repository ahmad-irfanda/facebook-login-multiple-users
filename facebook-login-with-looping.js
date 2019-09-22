// Facebook Login With Looping
// author : Ahmad Irfanda
// https://www.instagram.com/ahmad_irfanda_

var database = [
    {
        username: "irfanda", 
        password: "123456"
    }, 
    {
        username: "anam", 
        password: "ayu123"
    }, 
    {
        username: "irsyad", 
        password: "eliza"
    }, 
    {
        username: "roy", 
        password: "sindi123"
    }
];

// if the login has been successful
// Newsfeed will appear in the console (google chrome) in developer mode (Ctrl + Shift + i)
var newsfeed = [
    {
        username: "Hatta - Sindi",
        timeline: "i'm so excited today .."
    }, 
    {
        username: "Roy - Sindi", 
        timeline: "Hey, Do you have recomendation about nice vacation . . ?"
    }
];


function isUserValid(username, password){
    for(var i=0; i < database.length; i++){
        if(database[i].username === username &&
        database[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if(isUserValid(username, password)){
        alert("Welcome Back ");
        console.log(newsfeed);
    }else{
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);