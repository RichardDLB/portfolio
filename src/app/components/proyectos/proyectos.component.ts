import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-proyectos',
  standalone: true, // Asegúrate de que el componente sea independiente
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  currentIndexProyectos = 0;

  carouselItemsProyectos = [
    {
      title: 'Trabajo Práctico Final Integrador',
      institution: ' Desarrollo de Sistemas Orientados a Objetos ',
      page: 'https://github.com/RichardDLB/Trabajo-Practico-Final-Integrador-POO',
      description: 'Sistema de gestión de obras urbanas del GCBA. Desarrollo con POO, importación de datasets desde un archivo csv, limpieza y normalización de datos, y persistencia de objetos con ORM Peewee en una base de datos SQLite. '
    },
    {
      title: 'PortFolio',
      institution: 'Proyecto Final Argentina Programa',
      page: 'https://arprofront.web.app/',
      description: 'El proyecto consistió en desarrollar una plataforma web donde los usuarios pudieran registrarse, autenticarse con JWT y crear un perfil para personalizar una plantilla de portfolio. Se utilizó Angular con TypeScript para el frontend, Spring Boot (Java) para el backend, y MySQL como base de datos. Firebase gestionó la autenticación y el almacenamiento de archivos, mientras que Render se usó para el despliegue. La aplicación permite a los usuarios mostrar sus habilidades y proyectos de manera profesional y dinámica.'
    }
  ];

  moveCarouselProyectos(direction: number): void {
    this.currentIndexProyectos = (this.currentIndexProyectos + direction + this.carouselItemsProyectos.length) % this.carouselItemsProyectos.length;
  }

}
