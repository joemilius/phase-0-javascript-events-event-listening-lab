

function addingEventListener() {
    const input = document.getElementById('input');
    function thereIsNoTry(){
        alert("May the force be with you.");
    };
    input.addEventListener('click', thereIsNoTry);
}
addingEventListener();