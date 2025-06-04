import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavComponent } from "../../components/nav/nav.component";
import { FormLoginComponent } from '../../components/form-login/form-login.component';

@Component({
  selector: 'app-profile',
  imports: [FooterComponent, NavComponent, FormLoginComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
