// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2')
var modal3 = document.getElementById('myModal3')
var ts_modal = document.getElementById('ts_modal')
var ah_modal = document.getElementById('ah_modal')
var ws_modal = document.getElementById('ws_modal')
var mq_modal = document.getElementById('mq_modal')
var sr_modal = document.getElementById('sr_modal')
var ae_modal = document.getElementById('ae_modal')
var sw_modal = document.getElementById('sw_modal')

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var ts_btn = document.getElementById("ts_btn");
var ah_btn = document.getElementById("ah_btn");
var ws_btn = document.getElementById("ws_btn");
var mq_btn = document.getElementById("mq_btn");
var sr_btn = document.getElementById("sr_btn");
var ae_btn = document.getElementById("ae_btn");
var sw_btn = document.getElementById("sw_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var ts_close = document.getElementsByClassName("ts_close")[0];
var ah_close = document.getElementsByClassName("ah_close")[0];
var ws_close = document.getElementsByClassName("ws_close")[0];
var mq_close = document.getElementsByClassName("mq_close")[0];
var sr_close = document.getElementsByClassName("sr_close")[0];
var ae_close = document.getElementsByClassName("ae_close")[0];
var sw_close = document.getElementsByClassName("sw_close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
ts_btn.onclick = function() {
  ts_modal.style.display = "block";
}
ah_btn.onclick = function() {
  ah_modal.style.display = "block";
}
ws_btn.onclick = function() {
  ws_modal.style.display = "block";
}
mq_btn.onclick = function() {
  mq_modal.style.display = "block";
}
sr_btn.onclick = function() {
  sr_modal.style.display = "block";
}
ae_btn.onclick = function() {
  ae_modal.style.display = "block";
}
sw_btn.onclick = function() {
  sw_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
ts_close.onclick = function() {
  ts_modal.style.display = "none";
}
ah_close.onclick = function() {
  ah_modal.style.display = "none";
}
ws_close.onclick = function() {
  ws_modal.style.display = "none";
}
mq_close.onclick = function() {
  mq_modal.style.display = "none";
}
sr_close.onclick = function() {
  sr_modal.style.display = "none";
}
ae_close.onclick = function() {
  ae_modal.style.display = "none";
}
sw_close.onclick = function() {
  sw_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
    else if (event.target == modal2) {
    modal2.style.display = "none";
  }
    else if (event.target == modal3) {
    modal3.style.display = "none";
  }
    else if (event.target == ts_modal) {
    ts_modal.style.display = "none";
  }
    else if (event.target == ah_modal) {
    ah_modal.style.display = "none";
  }
    else if (event.target == ws_modal) {
    ws_modal.style.display = "none";
  }
    else if (event.target == mq_modal) {
    mq_modal.style.display = "none";
  }
    else if (event.target == sr_modal) {
    sr_modal.style.display = "none";
  }
    else if (event.target == ae_modal) {
    ae_modal.style.display = "none";
  }
    else if (event.target == sw_modal) {
    sw_modal.style.display = "none";
  }
}