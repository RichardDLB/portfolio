import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  showCvModal = false;

  openCvModal() {
    this.showCvModal = true;
  }

  closeCvModal() {
    this.showCvModal = false;
  }

  downloadCv(lang: 'es' | 'en') {
    let url = '';

    if (lang === 'es') {
      url = './assets/docs/richardCVEsp.pdf';
    } else {
      url = './assets/docs/richardCVEng.pdf';
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = lang === 'es' ? 'Richard_CV_ES.pdf' : 'Richard_CV_EN.pdf';
    link.click();

    this.closeCvModal();
  }
}

