import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message.service';
import { NgForOf } from '@angular/common';
import { MessageComponent } from './message.component';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [NgForOf, MessageComponent],
    template: `
      <div>
        <app-message
          *ngFor="let message of messages; index as i"
          [message]="message"
          [no]="i">
        </app-message>
      </div>
    `,
  })
  export class ChatComponent implements OnInit {
    messages: Message[] = [];
  
    constructor(private messageService: MessageService) {}
  
    async ngOnInit() {
      await this.messageService.all();
      this.messages = this.messageService.messages;
    }
  }