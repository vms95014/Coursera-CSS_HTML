var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (name in names) {
  var str = names[name];

  firstChar = names[name].toLowerCase().charAt(0);
  if (firstChar =="j") {
    Bye.speak(names[name]);
  } 
  else {
    Hello.speak(names[name]);
  }
}
