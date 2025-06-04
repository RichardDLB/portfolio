import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { EstudiosComponent } from '../../components/estudios/estudios.component';
import { ExperienciaComponent } from '../../components/experiencia/experiencia.component';
import { ProyectosComponent } from "../../components/proyectos/proyectos.component";
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { FloatingButtonComponent } from '../../components/floating-button/floating-button.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-dashboard',
  imports: [NavComponent, BannerComponent, EstudiosComponent, ExperienciaComponent, ProyectosComponent, ContactoComponent, FloatingButtonComponent, FooterComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
