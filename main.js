/*
1. document.getElementById()
2. documnent.querySelector()
3. document.querySelectorsAll()
4. document.getElementsByTagName();
5. document.getElementsByNames()
6. document.getElementsByClassName();
*/

const say = (str)=>{ console.log(str);}


const input = document.getElementById('test_name');
say(input);
say(input.type);
input.className = "test_input_elements";
input.step = 3;
say(input);


const msg = document.querySelector(".welcome_msg");
msg.innerHTML ="Hi! Welcome to our platform. In this platform you will be entitled to all the $250,000 that is been apportionaed to all members"