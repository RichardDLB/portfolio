import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
    selector: 'app-estudios',
    standalone: true, // Asegúrate de que el componente sea independiente
    imports: [CommonModule], // Importa CommonModule aquí
    templateUrl: './estudios.component.html',
    styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent {
    currentIndex = 0;

    carouselItemsEstudio = [
        {
            title: 'Tecnicatura Superior en Desarrollo de Software',
            institution: 'IFTS Buenos Aires, Argentina',
            duration: 'En curso',
            description: 'Técnico Superior en Desarrollo de Software, capacitado para producir artefactos de software, comprendiendo su diseño detallado, construcción y reutilizando elementos existentes o programándolos enteramente, conocimientos en verificación unitaria, así como su depuración, optimización y mantenimiento.'
        },
        {
            title: 'Trayecto formativo Programador Java',
            institution: 'SMATA Buenos Aires, Argentina',
            duration: 'Finalizado/ Agosto 2022 - Julio 2023',
            description: 'Formación en técnicas de programación (JAVA). Base de datos (MySQL) y Programación orientada a objetos (JAVA). Trayecto formativo para desempeñarse en roles técnicos como programadores en diversas áreas, incluyendo el desarrollo de aplicaciones, sitios web, y otras soluciones de software.'
        },
        {
            title: 'Desarrollador Web Full Stack',
            institution: 'Cámara de la Industria Argentina del Software (CESSI)',
            duration: 'Finalizado Enero 2022 - abril 2023',
            description: 'Programa diseñado para proporcionar la comprensión de los lenguajes de programación y las herramientas necesarias para construir aplicaciones web completas, desde la interfaz de usuario hasta la base de datos. Tecnologías usadas: HTML5, CSS3, BootStrap, JavaScript, Java, SpringBoot, Git, Render, Firebase.'
        },
        {
            title: 'Licenciado en Comunicación Social',
            institution: 'Universidad del Quindío, Armenia, Colombia',
            duration: 'Finalizado/ 2010 - 2015',
            description: 'Lisenciado en Comunicación Social y Periodismo, con enfasis en comunicación organizacional. Gestión estratégica de comunicación, manejo de medios y relaciones públicas en entornos corporativos e institucionales.'
        }
    ];

    moveCarousel(direction: number): void {
        this.currentIndex = (this.currentIndex + direction + this.carouselItemsEstudio.length) % this.carouselItemsEstudio.length;
    }
}