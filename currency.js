const currency_type     = document.querySelector("#currency_type");
const amount            = document.querySelector(".amount");
const conversion_result = document.querySelector(".conversion_result");

let base_currencies = {
    '$':790,
    '€':910,
    '£':815,
};


// Attach an event listener tp the  input element
// amount.oninput = function(){};

amount.addEventListener("input",function(evt){
    // console.log(evt);
    let amt             = evt.target.value;
    let conversion_rate = base_currencies[currency_type.value];
    conversion_result.innerHTML = `${currency_type.value}${amt} to NGN : ${Number(conversion_rate * amt)}`;
});


// Attaching event listener to the currency_type
currency_type.addEventListener('change',function(e){
    let conversion_rate = base_currencies[e.target.value];
    let amt  = amount.value;
    conversion_result.innerHTML = `${e.target.value}${amt} to NGN : ${Number(conversion_rate * amt)}`;
});


// adding event listerner the input element
const info   = document.querySelector(".info");
const target = document.querySelector(".target");

// info.onchange = (evt)=>{
//     target.value = evt.target.value;
// };

// info.onkeyup = (evt)=>{
//     target.value = evt.target.value;
// };

// info.onkeydown = (evt)=>{
//     target.value = evt.target.value;
// };

// info.onmouseenter = (evt)=>{
//     target.value = evt.keycode || evt.which;
// };

// info.onmouseenter = (evt)=>{
//     console.log("hell0")
// };
// info.onmouseleave = (evt)=>{
//     console.log("hell01")
// };

info.onfocus = (evt)=>{
    evt.target.style.backgroundColor = "red";
};


let page = document.body;
let circle = document.querySelector('.circle');

page.addEventListener("mousemove",function(evt){
    console.log(evt);
    console.log(` ClientX: ${evt.clientX} PageX ${ evt.pageX }  X ${ evt.x }`);
    console.log(` ClientY: ${evt.clientY} PageY ${ evt.pageY }  Y ${ evt.y }`);

    // let el = document.createElement('div');
    //     el.className = "cross_line";
    //     el.style.right = evt.clientX + 'px';

    // let el2 = document.createElement('div');
    //     el2.className = "v_line";
    //     el2.style.top = evt.clientY + 'px';

        // Moving the circle round the cscreen
        circle.style.top      = evt.clientY + 'px';
        circle.style.right    = evt.clientX + 'px';


    // evt.target.appendChild(el);
    // evt.target.appendChild(el2); 
});




