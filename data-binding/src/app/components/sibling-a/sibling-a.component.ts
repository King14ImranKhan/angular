import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, Message } from '../sharedsiblings/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sibling-a',
  standalone: true,
  templateUrl: './sibling-a.component.html',
  imports: [FormsModule, CommonModule]
})
export class SiblingAComponent {
  message: string = ''; // Input field for message to Sibling B
  messagesFromB: Message[] = []; // Stores messages received from Sibling B

  constructor(private messageService: MessageService) {
    // effect() tracks changes to the signal and runs the function whenever messages update
    effect(() => {
      // Filter messages sent by Sibling B and store in local variable
      this.messagesFromB = this.messageService.messages().filter(msg => msg.sender === 'B');
    });
  }

  // Called when Send button is clicked
  sendMessage() {
    if (this.message.trim()) {
      this.messageService.sendMessage('A', this.message); // Send message as sender "A"
      this.message = ''; // Clear input field
    }
  }
}
