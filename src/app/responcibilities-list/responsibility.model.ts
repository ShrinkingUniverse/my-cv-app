
export class Responsibility {
  public responsibility: string[];
  public companyName: string;
  public stack: string[];
  public urlAddress: string;

  constructor(companyName: string, responsibility: string[], stack: string[], urlAddress: string) {
    this.responsibility = responsibility;
    this.companyName = companyName;
    this.stack = stack;
    this.urlAddress = urlAddress;
  }
}
