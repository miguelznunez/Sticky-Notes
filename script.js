const createBox = document.getElementsByClassName("createBox")[0];
const notes = document.getElementsByClassName("notes")[0];
const input = document.getElementById("user-input");
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
var i = 0;

contentArray.forEach(divMaker);

function divMaker(text){
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  h1.textContent = text;

  div.className = "note";
  div.setAttribute('style', 'margin:'+margin()+'; transform:'+rotate()+'; background:'+color()+'');
  div.appendChild(h1);

  notes.appendChild(div);

  div.addEventListener("mouseenter", function(){
    div.style.transform = "scale(1.1)";
  })

  div.addEventListener("mouseleave", function(){
    div.style.transform = "scale(1)";
    div.style.transform = rotate();
  })
}

function addNote(){
  contentArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(contentArray));
  divMaker(input.value);
  input.value = '';
}

function createNote(){
  if(createBox.style.display === "none")
    createBox.style.display = "block";
  else
    createBox.style.display = "none";
}

function deleteNotes(){
  localStorage.clear();
  notes.innerHTML = '';
  contentArray = [];
}

function margin(){
  var random_margin = ["-5px","1px", "5px", "10px","15px","20px"];

  return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate(){
  var random_degree = ["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)", "rotate(-10deg)"];

  return random_degree[Math.floor(Math.random() * random_degree.length)];
}

function color(){
  var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];

  if(i > random_colors.length - 1){
    i = 0;
  }
  return random_colors[i++];
}

createBox.addEventListener('keydown', function(event){
  if(event.key === 'Enter')
    addNote();
})
