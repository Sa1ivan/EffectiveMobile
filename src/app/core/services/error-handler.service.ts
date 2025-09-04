import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  constructor(private snack: MatSnackBar) {}

  public show(message: string | null) {
    if (!message) return;
    this.snack.open(message, 'Закрыть', { duration: 5000 });
  }
}
