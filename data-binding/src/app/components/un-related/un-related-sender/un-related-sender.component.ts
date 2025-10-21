import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UnRelatedMessageService } from '../shared/un-related-message.service';

@Component({
  selector: 'app-un-related-sender',
  standalone: true,
  templateUrl: './un-related-sender.component.html',
  imports: [FormsModule]
})
export class UnRelatedSenderComponent {
  message = '';
  receivedMessage = '';

  constructor(private messageService: UnRelatedMessageService) {
    // Listen to messages from Receiver
    effect(() => {
      this.receivedMessage = this.messageService.receiverMessage();
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.messageService.sendFromSender(this.message);
      this.message = '';
    }
  }
}
