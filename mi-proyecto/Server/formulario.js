const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/enviar-correo', (req, res) => {
  const { nombre, correo, telefono, mensaje } = req.body;

  // Configura el transporter de Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tu_correo@gmail.com',
      pass: 'tu_contraseña',
    },
  });

  // Configura el correo
  const mailOptions = {
    from: 'gaspararmando@gmail.com',
    to: '202201712@est.umss.edu', // Cambia esto al correo de destino
    subject: 'Mensaje de contacto',
    text: `
      Nombre: ${nombre}
      Correo: ${correo}
      Teléfono: ${telefono}
      Mensaje: ${mensaje}
    `,
  };

  // Envía el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Correo enviado con éxito');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
