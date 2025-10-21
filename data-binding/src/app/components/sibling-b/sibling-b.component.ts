import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, Message } from '../sharedsiblings/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sibling-b',
  standalone: true,
  templateUrl: './sibling-b.component.html',
  imports: [FormsModule, CommonModule]
})
export class SiblingBComponent {
  message: string = ''; // Input field for message to Sibling A
  messagesFromA: Message[] = []; // Stores messages received from Sibling A

  constructor(private messageService: MessageService) {
    // Track changes in messages signal
    effect(() => {
      // Filter messages sent by Sibling A
      this.messagesFromA = this.messageService.messages().filter(msg => msg.sender === 'A');
    });
  }

  // Called when Send button is clicked
  sendMessage() {
    if (this.message.trim()) {
      this.messageService.sendMessage('B', this.message); // Send message as sender "B"
      this.message = ''; // Clear input field
    }
  }
}
