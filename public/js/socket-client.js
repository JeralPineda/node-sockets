// Configuración y comunicación del socket con el server
// on escuchar
// emit emitir un evento

// Referncias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOfline = document.querySelector('#lblOfline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

// Saber cuando me conecto al servidor
socket.on('connect', () => {
   lblOfline.style.display = 'none';
   lblOnline.style.display = '';
});

// Cuando me desconecto del servidor
socket.on('disconnect', () => {
   lblOfline.style.display = '';
   lblOnline.style.display = 'none';
});

// Envio de mensaje del BackEnd al FrontEnd
// Todos los clientes escuchan
socket.on('enviar-mensaje', (payload) => {
   console.log(payload);
});

// Envio de mensaje del FronEnd a BackEnd
btnEnviar.addEventListener('click', () => {
   const mensaje = txtMensaje.value;
   const payload = {
      mensaje,
      id: '123abc',
      fecha: new Date().getTime(),
   };

   socket.emit('enviar-mensaje', payload, (id) => {
      console.log('Desde el server', id);
   });
});
