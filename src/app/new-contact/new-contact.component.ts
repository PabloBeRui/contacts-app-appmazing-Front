import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.component.html",
  styleUrls: ["./new-contact.component.scss"],
})
export class NewContactComponent implements OnInit {
  name: string;
  surname: string;
  lastname: string;
  telephone: string;
  email: string;

  constructor(
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {}

  newContact() {
    const contact = {
      name: this.name,
      surname: this.surname,
      lastname: this.lastname,
      telephone: this.telephone,
      email: this.email,
    };
    this.contactService.newContact(contact);
    this.router.navigate(["/"]);
  }
}
