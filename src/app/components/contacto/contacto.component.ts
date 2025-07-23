import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-contacto',
  imports: [FormsModule], // Añade FormsModule aquí
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  // Objeto para almacenar los datos del formulario
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Tu clave pública de EmailJS
  private emailJsPublicKey = 'P0G6z1NU3pYz5QSV9';

  constructor() {
    // Inicializa EmailJS cuando el componente se crea
    emailjs.init(this.emailJsPublicKey);
  }

  async sendEmail() {
    try {
      // Configuración de EmailJS
      const serviceID = 'service_mvkc7ip';
      const templateID = 'template_4yx9lgh';
      
      // Envía el formulario
      const response = await emailjs.send(serviceID, templateID, {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message
      });

      console.log('Correo enviado con éxito!', response);
      alert('¡Mensaje enviado con éxito!');
      
      // Resetea el formulario
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  }
}