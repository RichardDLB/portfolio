import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { BannerComponent } from "../banner/banner.component";
import { EstudiosComponent } from "../estudios/estudios.component";
import { ExperienciaComponent } from "../experiencia/experiencia.component";
import { ProyectosComponent } from "../proyectos/proyectos.component";
import { ContactoComponent } from "../contacto/contacto.component";
import { FooterComponent } from "../footer/footer.component";
import { FloatingButtonComponent } from "../floating-button/floating-button.component";
import { FormLoginComponent } from "../form-login/form-login.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent, BannerComponent, EstudiosComponent, ExperienciaComponent, ProyectosComponent, ContactoComponent, FooterComponent, FloatingButtonComponent, FormLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
