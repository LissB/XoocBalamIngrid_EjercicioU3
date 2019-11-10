var socket = io.connect('http://192.168.62.57:8084', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})
var cadena;
function render (data) {
  var html = data.map(function(elem, index) {
    Ejercicios(elem.text);
    return(`<div>
              <em>${elem.text}</em>
            </div>`);

  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}
 
function addMessage(e) {
  var message = {
    text: document.getElementById('texto').value
  };
  
  socket.emit('new-message', message);
  return false;
}

var Ejercicios = (m1) => { var r1,r2,r3,r4,r5;
  let newMensaje  = m1.match(/[aeiouAEIOU|áéíóúÁÉÍÓÚ]/g); 
  let newMensaj   = m1.match(/(\b[a-zA-Z0-9]{2,}\b)/g);
  let newMensa    = m1.match(/[0-9]{1}/g);
  let newMens     = m1.match(/\b[A-Z]/g);
  let newMen      = m1.match(/[^aeiou|AEIOU]\b\s/g);
  if (newMensaje  == null)  { r1 = 0;}  else { r1 = newMensaje.length;}
  if (newMensaj   == null)  { r2 = 0;}  else { r2 = newMensaj.length; }
  if (newMensa    == null)  { r3 = 0;}  else { r3 = newMensa.length;  }
  if (newMens     == null)  { r4 = 0;}  else { r4 = newMens.length;   }
  if (newMen      == null)  { r5 = 0;}  else { r5 = newMen.length;    }  
  document.getElementById('E1').innerHTML = `${r1}`;
  document.getElementById('E2').innerHTML = `${r2}`;
  document.getElementById('E3').innerHTML = `${r3}`;
  document.getElementById('E4').innerHTML = `${r4}`;
  document.getElementById('E5').innerHTML = `${r5}`;
}
