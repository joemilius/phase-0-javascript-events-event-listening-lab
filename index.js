

function addingEventListener() {
    const input = document.getElementById('button');
    
function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
}
addingEventListener();

let inputValue = ''
const formInput = document.getElementById('form-input')

formInput.addEventListener('change', function(event){
  inputValue = event.target.value
})

const form = document.getElementById('form')
form.addEventListener('submit', function(event){
   event.preventDefault()
   const li = document.createElement('li')
   li.textContent = inputValue 
   const ul = document.getElementById("text-container")
   ul.append(li)
})



















// const input = document.getElementById('input');
//     function thereIsNoTry(){
//         alert("May the force be with you.");
//     };
//     input.addEventListener('click', thereIsNoTry);