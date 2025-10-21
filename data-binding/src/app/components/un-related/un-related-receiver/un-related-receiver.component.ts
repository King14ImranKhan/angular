import { Component, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UnRelatedMessageService } from '../shared/un-related-message.service';

@Component({
  selector: 'app-un-related-receiver',
  standalone: true,
  templateUrl: './un-related-receiver.component.html',
  imports: [FormsModule]
})
export class UnRelatedReceiverComponent {
  message = '';
  receivedMessage = '';

  constructor(private messageService: UnRelatedMessageService) {
    // Listen to messages from Sender
    effect(() => {
      this.receivedMessage = this.messageService.senderMessage();
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.messageService.sendFromReceiver(this.message);
      this.message = '';
    }
  }
}
