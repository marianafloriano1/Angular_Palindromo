import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  templateUrl: './palindromo.component.html',
  styleUrl: './palindromo.component.css'
})
export class PalindromoComponent {
  entrada: string = '';

  verificarPalindromo(): boolean {
    if (this.entrada.trim() === '') {
      return false; 
    }

    const cleanedInput = this.entrada.replace(/\s+/g, '').toLowerCase();

    return cleanedInput === cleanedInput.split('').reverse().join('');
  }
}
