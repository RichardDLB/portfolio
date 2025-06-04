import { Routes } from '@angular/router';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormLoginComponent } from './components/form-login/form-login.component';


export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
    },

    {
        path: "dashboard",
        component: DashboardComponent
    },

    {
        path: "nav",
        component: NavComponent
    },

    {
        path: "banner",
        component: BannerComponent
    },

    {
        path: "estudios",
        component: EstudiosComponent
    },

    {
        path: "experiencia",
        component: ExperienciaComponent
    },

    {
        path: "proyectos",
        component: ProyectosComponent
    },

    {
        path: "contacto",
        component: ContactoComponent
    },   
    
    {
        path: "profile",
        component: ProfileComponent
    },   

    {
        path: "FormLoginComponent",
        component: FormLoginComponent
    }   
];
