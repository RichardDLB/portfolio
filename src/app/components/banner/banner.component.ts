import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isAnimating: boolean = true; // Activa la animación
  currentText: string = ''; // Texto que se mostrará progresivamente
  fullTexts: string[] = ['Richard Lopez', 'Software Developer', 'Lic. Comunicación' ]; // Textos completos
  currentIndex: number = 0; // Índice del texto actual
  typingSpeed: number = 100; // Velocidad de la animación (en milisegundos)
  eraseSpeed: number = 50; // Velocidad para borrar el texto (en milisegundos)

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.fullTexts[this.currentIndex].length) {
        this.currentText += this.fullTexts[this.currentIndex].charAt(index);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => this.eraseText(), 2000); // Espera 2 segundos antes de borrar
      }
    }, this.typingSpeed);
  }

  eraseText(): void {
    const interval = setInterval(() => {
      if (this.currentText.length > 0) {
        this.currentText = this.currentText.slice(0, -1); // Borra un carácter
      } else {
        clearInterval(interval);
        this.currentIndex = (this.currentIndex + 1) % this.fullTexts.length; // Cambia al siguiente texto
        setTimeout(() => this.typeText(), 500); // Espera 0.5 segundos antes de escribir el siguiente texto
      }
    }, this.eraseSpeed);
  }
}