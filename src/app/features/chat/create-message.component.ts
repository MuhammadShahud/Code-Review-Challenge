import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../../services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-create-message',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, MessageComponent, NgIf, NgClass],
    template: `
      <div *ngIf="!message.isEmpty()">
        <app-message [message]="message" no="preview"></app-message>
      </div>
  
      <form (ngSubmit)="onSubmit()">
        <label class="mt-4">
          <div>Write Message</div>
          <textarea
            class="block w-full"
            required
            name="text"
            [(ngModel)]="message.text">
          </textarea>
        </label>
  
        <button
          type="submit"
          [disabled]="message.status === 'pending'"
          class="pointer bg-blue-400 py-2 px-4 mt-2 w-full"
          [ngClass]="{'bg-gray-400': message.status === 'pending'}">
          Send
        </button>
      </form>
    `,
  })
  export class CreateMessageComponent {
    message: Message = new Message('', 'draft');
  
    constructor(private messageService: MessageService) {}
  
    async onSubmit() {
      this.message.status = 'pending';
  
      const res = await fetch('http://127.0.0.1:4010/messages/send', {
        method: 'POST', // ✅ Changed from GET
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: this.message.text }),
      });
  
      this.message.status = res.status === 204 ? 'sent' : 'failed';
      await this.messageService.add(this.message);
      this.message = new Message('', 'draft');
    }
  }
  