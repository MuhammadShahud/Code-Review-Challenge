// Strongly typed, public fields, improved method name
export class Message {
    constructor(
      public text: string,
      public status: 'sent' | 'draft' | 'pending' | 'failed'
    ) {}
  
    isEmpty(): boolean {
      return this.text.trim() === '';
    }
  }