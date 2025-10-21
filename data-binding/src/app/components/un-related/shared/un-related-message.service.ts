import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UnRelatedMessageService {
  private _senderMessage = signal<string>(''); // Message from Sender
  private _receiverMessage = signal<string>(''); // Message from Receiver

  senderMessage = this._senderMessage.asReadonly();
  receiverMessage = this._receiverMessage.asReadonly();

  sendFromSender(msg: string) {
    this._senderMessage.set(msg);
  }

  sendFromReceiver(msg: string) {
    this._receiverMessage.set(msg);
  }
}
