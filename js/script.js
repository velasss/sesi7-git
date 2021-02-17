let count = 1;
let clickcount = document.getElementById("clickcount");

function addClickCount() {
    count++;
    clickcount.innerHTML = count;
}

function minClickCount() {
    count--;
    clickcount.innerHTML = count;
}

let changeBackgroundColor = (colour) => {
    btnAddClickCount.style.backgroundColor =colour;
}

let hideForm = () => {
    dataDiri.style.display = "none";
}

let showForm = () => {
    dataDiri.style.display = "block";
}