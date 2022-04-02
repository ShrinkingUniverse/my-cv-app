
export class Responsibility {
  public responsibility: string[];
  public companyName: string

  constructor(companyName:string, responsibility: string[]) {
    this.responsibility = responsibility;
    this.companyName = companyName
  }
}
