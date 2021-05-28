const socketController = (socket) => {
   console.log('Cliente conectado', socket.id);

   socket.on('disconnect', () => {
      console.log('Cliente desconectado', socket.id);
   });

   //  Que todos los clientes reciban el mensaje
   socket.on('enviar-mensaje', (payload, callback) => {
      const id = 123456;
      callback({ id });

      //   Broadcast : manda el msj a todos
      socket.broadcast.emit('enviar-mensaje', payload);
   });
};

module.exports = {
   socketController,
};
