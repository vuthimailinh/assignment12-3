let selectday = document.getElementById("day");
let selectmonth = document.getElementById("month");
let selectyear = document.getElementById("year");

for(let i = 1; i<= 31; i++){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    selectday.appendChild(option);
}
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
for(let i = 0; i < months.length; i++){
    let option = document.createElement("option");
    option.text = months[i];
    option.value = i + 1;
    selectmonth.appendChild(option);
}

let yearCurrent = new Date().getFullYear();
for(let i = yearCurrent; i >= 1900; i--){
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    selectyear.appendChild(option);
}

function openQuestion(){
    let ques = document.querySelector('.question');
    ques.classList.toggle('show')
}
function openQuestion1(){
    let ques = document.querySelector('.question1');
    ques.classList.toggle('show')
}

document.getElementById("first_name").addEventListener('blur', function() {
    let firstname = document.getElementById("first_name");
    let error = document.getElementById("error");

    if(firstname.value.trim() === ""){
        error.textContent = "What's your name?"
        error.style.display = 'block';
    }
    else{
        error.style.display = 'none';
    }
});
document.getElementById("surname").addEventListener('blur', function() {
    let surname = document.getElementById("surname");
    let error_1 = document.getElementById("error_1");

    if(surname.value.trim() === ""){
        error_1.textContent = "What's your name?"
        error_1.style.display = 'block';
    }
    else{
        error_1.style.display = 'none';
    }
});

document.getElementById("phone").addEventListener('blur', function() {
    let surname = document.getElementById("phone");
    let error_2 = document.getElementById("error_2");

    if(surname.value.trim() === ""){
        error_2.textContent = "Please enter your email address."
        error_2.style.display = 'block';
    }
    else{
        error_2.style.display = 'none';
    }
});
document.getElementById("password").addEventListener('blur', function() {
    let surname = document.getElementById("password");
    let error_3 = document.getElementById("error_3");

    if(surname.value.trim() === ""){
        error_3.textContent = "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
        error_3.style.display = 'block';
    }
    else{
        error_3.style.display = 'none';
    }
});
document.getElementById("day").addEventListener('input', checkAge);
document.getElementById("month").addEventListener('input', checkAge);
document.getElementById("year").addEventListener('input', checkAge);
function checkAge(){
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let now = new Date();
    let birthday = new Date(year, month, day);
    let age = now.getFullYear() - birthday.getFullYear();
    let change = now.getMonth() - birthday.getMonth();
    if(change < 0 || (change == 0 && birthday.getDay() < now.getDay())){
        age --;
    }
    let error_4 = document.getElementById("error_4");
    if(age < 14){
        error_4.textContent = "It looks like you've entered the wrong info. Please make sure that you use your real date of birth."
        error_4.style.display = 'block';
    }else{
        error_4.style.display = 'none';
    }
}

