(document).ready(function(){
  ('.btn').on('click', function(){
  var rng = Math.floor(Math.random()*quotes.length);
  (',quote').html('<h2>"' + quotes[rng][0] + '"</h2>');
});
var quotes = [
["I'm not in the best shape, but I want to prove to myself I can do something that seems insurmountable and inspire others by showing them no matter where they are in their fitness goals, they can do it, too. -Ruben Studdard"],
["Reading is to the mind what exercise is to the body. -Joseph Addison"],
["A muscle is like a car. If you want it to run well early in the morning, you have to warm it up. -Florence Griffith Joyner"],
["Take care of your body. It's the only place you have to live. -Jim Rohn"],
["Set Goals. Stay Quiet About Them. Smash the Shit Out of Them. Clap For Your Damn Self. Repeat."], 
["The hardest thing about exercising is to START. Once you’re exercising regularly. The hardest thing to is STOP."],
["It Takes 21 Days To Make Or Break A Habit"],
["I already know what giving up feels like. I want to see what happens If I don’t."],
["If you are persistent, You will get it. If you are consistent, You will keep it."],
["Commitment means staying loyal to what you said you were going to do long after the mood you said it in has left you."],  
];
});
//function newQuote() {
//  
//  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
//}



