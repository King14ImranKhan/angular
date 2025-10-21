import { Injectable, signal } from '@angular/core';

// Interface to define a message structure
export interface Message {
  sender: string; // "A" or "B"
  text: string;   // Message content
}

@Injectable({ providedIn: 'root' })
export class MessageService {
  // Signal to hold the array of messages
  private _messages = signal<Message[]>([]);

  // Expose messages as read-only signal to prevent direct modification from components
  messages = this._messages.asReadonly();

  // Method to send a message, pushes a new message into the signal array
  sendMessage(sender: string, text: string) {
    this._messages.set([...this._messages(), { sender, text }]);
  }
}
