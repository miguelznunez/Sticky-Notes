const createBox = document.getElementsByClassName("createBox")[0];
const notes = document.getElementsByClassName("notes")[0];
const input = document.getElementById("user-input");
var contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var i = 0;

const margin = () => {
  var random_margin = ["-5px","1px", "5px", "10px","15px","20px"];
  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

const rotate = () => {
  var random_degree = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];
  return random_degree[Math.floor(Math.random() * random_degree.length)];
}

const color = () => {
  var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
  if(i > random_colors.length - 1){
    i = 0;
  }
  return random_colors[i++];
}

createBox.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    contentArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(contentArray));
    divMaker(input.value);
    input.value = '';
  }
});

document.getElementById("createNote").addEventListener("click", () => {
  createBox.style.display = "block";
});

document.getElementById("hide").addEventListener("click", () =>{
  createBox.style.display = "none";
});

document.getElementById("deleteNotes").addEventListener("click", () => {
  localStorage.clear();
  notes.innerHTML = '';
  contentArray = [];
});

contentArray.forEach(divMaker);

function divMaker(text){
  var div = document.createElement("div");
  div.className = 'note';
  div.innerHTML = '<div class="details">'+
                    '<h1>'+text+'</h1>'+
                  '</div>';

  div.setAttribute('style', 'margin:'+margin() +'; transform:'+rotate()+'; background:'+color()+'');

  notes.appendChild(div);

  div.addEventListener("mouseenter", () => {
    div.style.transform = "scale(1.1)";
  })

  div.addEventListener("mouseleave", () => {
    div.style.transform = "scale(1)";
    div.style.transform = rotate();
  })
}
