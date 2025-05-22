import { Component } from "@angular/core";
import { ChatComponent } from "./features/chat/chat.component";
import { CreateMessageComponent } from "./features/chat/create-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatComponent, CreateMessageComponent],
  template: `
    <main class="max-w-md mx-auto">
      <h1 class="text-2xl my-8">{{ title }}</h1>
      <app-chat></app-chat>
      <app-create-message></app-create-message>
    </main>
  `,
})
export class AppComponent {
  title = 'Chat';
}