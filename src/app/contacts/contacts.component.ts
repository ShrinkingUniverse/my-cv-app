
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact.model';
import { Messages } from './message.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: string = 'You can contact me via this links';

  myLinks: Contact[] = [
    new Contact( "LinkedIn", "https://www.linkedin.com/in/tatiana-grigoryeva-a25263235"),
    new Contact( "GitHub", "https://github.com/ShrinkingUniverse")
  ]

  newMessage: Messages = new Messages();
  AddNewMessage(mes: Messages) {
    console.log("New Message from " + mes.senderName + " - " + mes.messageBody);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.AddNewMessage(this.newMessage);
      this.newMessage = new Messages();
      form.reset();
      this.formSubmitted = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
