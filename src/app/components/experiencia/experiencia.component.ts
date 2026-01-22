import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
    selector: 'app-experiencia',
    standalone: true, // Asegúrate de que el componente sea independiente
    imports: [CommonModule], // Importa CommonModule aquí
    templateUrl: './experiencia.component.html',
    styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

    currentIndexExperiencia = 0;

    carouselItemsExperiencia = [
        {
            title: 'Landing Page Tintico',
            institution: 'Cafetería de especialidad Tintico',
            page: 'https://tinticocafeteria.github.io/Tintico/',
            description: 'Desarrollado con el objetivo de crear una presencia digital atractiva y funcional. Utilizamos tecnologías modernas como HTML5 para la estructura del contenido, CSS3 y Bootstrap para un diseño responsive y adaptable a cualquier dispositivo, JavaScript para agregar interactividad y dinamismo. Además, se emplearon plantillas de BootstrapMade para optimizar el proceso de diseño y garantizar un resultado profesional. El código fuente se gestionó mediante Git, lo que permitió un control de versiones eficiente y colaborativo. Finalmente, la página se despliega utilizando el servicio de hosting de GitHub.'
        },
        {
            title: 'Landing Page El Ingeniero C&L',
            institution: 'Ferretería y materiales para la construcción El Ingeniero C&L',
            page: 'https://elingenierocyl.github.io/ferreteria/index.html',
            description: 'Se utilizaron tecnologías modernas y eficientes para garantizar un diseño atractivo, funcional y responsive. Utilizamos HTML5 para la estructura del contenido, CSS3 y Bootstrap para el diseño y la adaptabilidad en diferentes dispositivos, y JavaScript para agregar interactividad y dinamismo. Además, se emplearon plantillas de BootstrapMade para optimizar el proceso de diseño y asegurar un resultado profesional. El código fuente se gestionó mediante Git. Finalmente, la página se despliega utilizando el servicio de hosting de GitHub, asegurando un acceso rápido y confiable para los usuarios.'
        },
        {
            title: 'Landing Page M. Rubio Topografía',
            institution: 'Empresa especializada en servicios topográficos M. Rubio Topografía',
            page: 'https://mrtopografia.github.io/MRTopografia/',
            description: 'Diseño y desarrollo de la página web para MR Topografía, una empresa especializada en servicios topográficos y geodésicos de alta precisión. El objetivo era crear una presencia digital que transmitiera profesionalismo, confianza y expertise técnico. Tecnologías modernas como HTML5 para la estructura del contenido, CSS3 y Bootstrap para un diseño responsive y adaptable a cualquier dispositivo.'
        },
        {
            title: 'Landing Page Carlitos Performance',
            institution: 'Empresa especializada en servicios electromicánicos',
            page: 'https://tallercarlitosperformance.github.io/carlitosperformance/',
            description: 'Desarrollo del sitio web oficial para CarlitosPerformance, un taller mecánico con más de dos décadas de trayectoria. Este proyecto me permitió aplicar mis habilidades en desarrollo front-end para crear una presencia digital profesional y funcional que refleja los valores de honestidad y calidad del negocio.'
        }
    ];

    moveCarouselExperiencia(direction: number): void {
        this.currentIndexExperiencia = (this.currentIndexExperiencia + direction + this.carouselItemsExperiencia.length) % this.carouselItemsExperiencia.length;
    }

}
