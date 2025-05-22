import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';

// ✅ Renamed to app-message
@Component({
    selector: 'app-message',
    standalone: true,
    template: `
      <article class="bg-white p-2">
        <span class="block bg-slate-200 text-slate-500">#{{ no }} - {{ message.status }}</span>
        <div [ngClass]="{'text-slate-500': message.status === 'draft'}">
          {{ message.text }}
        </div>
      </article>
    `,
    imports: [NgClass],
  })
  export class MessageComponent {
    @Input({ required: true }) message!: Message;
    @Input() no!: number | string;
  }