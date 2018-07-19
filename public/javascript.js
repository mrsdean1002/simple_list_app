$(document).ready(function(){

  var quotes = [
  {
  quote: "I'm not in the best shape, but I want to prove to myself I can do something that seems insurmountable and inspire others by showing them no matter where they are in their fitness goals, they can do it, too.", 
  name: "Ruben Studdard"
 },
  {
    quote: "Reading is to the mind what exercise is to the body.",
     name: "Joseph Addison"
   },
  {
    quote: "A muscle is like a car. If you want it to run well early in the morning, you have to warm it up.",
     name: "Florence Griffith Joyner"
  },
  {
    quote: "Take care of your body. It's the only place you have to live.",
    name: "Jim Rohn"
   },
  {
    quote: "Set Goals. Stay Quiet About Them. Smash the Shit Out of Them. Clap For Your Damn Self. Repeat.",
   name: "Unknown"
 },
 {
   quote: "The hardest thing about exercising is to START. Once you’re exercising regularly. The hardest thing to is STOP.",
   name: "Unknown"   
 },
   {
     quote: "It Takes 21 Days To Make Or Break A Habit",
     name: "Unknown"
   },
   {
     quote: "I already know what giving up feels like. I want to see what happens If I don’t.",
     name: "Uknown"
   },
   {
     quote: "If you are persistent, You will get it. If you are consistent, You will keep it.",
     name: "Unknown"
   },
   {
     quote: "Commitment means staying loyal to what you said you were going to do long after the mood you said it in has left you.",
     name: "Unknown"
   },  
  ];

 console.log("Test 1")
 

 $('#quoteButton').click(function(evt){
   evt.preventDefault();
   
   var numberOfQuotes = quotes.length; //should the -1 go after quotes.length, ex: quotes.length -1, or stay like it is
   var randomNumber= Math.floor(Math.random()*numberOfQuotes);
   var quoteText = quotes[randomNumber].quote;
   var quotePerson = quotes[randomNumber].name; 
   $('#quoteContainer').html(quoteText + " -" + quotePerson);

   console.log(quoteText, quotePerson)
 });
});

