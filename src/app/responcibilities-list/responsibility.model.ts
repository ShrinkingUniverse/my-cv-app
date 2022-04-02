
export class Responsibility {
  public responsibility: string[];
  public companyName: string;
  public stack: string[];

  constructor(companyName: string, responsibility: string[], stack: string[]) {
    this.responsibility = responsibility;
    this.companyName = companyName;
    this.stack = stack;
  }
}
