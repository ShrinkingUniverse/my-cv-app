import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title: "You can contact me via this links"

  myLinks: Contact[] =[
    new Contact( "LinkedIn", "https://www.linkedin.com/in/tatiana-grigoryeva-a25263235"),
    new Contact( "GitHub", "https://github.com/ShrinkingUniverse")
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
