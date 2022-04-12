
export class Messages {
  public senderName?: string;
  public senderAddress?: string;
  public messageBody?: string;

  constructor(senderName?: string, senderAddress?: string, messageBody?: string) {
    this.senderName = senderName;
    this.senderAddress = senderAddress;
    this.messageBody = messageBody;
  }
}

