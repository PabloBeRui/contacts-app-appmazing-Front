import { Router } from "@angular/router";
import { ContactsService } from "./../contacts.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-detail",
  templateUrl: "./contact-detail.component.html",
  styleUrls: ["./contact-detail.component.scss"]
})
export class ContactDetailComponent implements OnInit {
  contact: any;

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contact = this.contactsService.selectedContact;
  }

  goToUpdateContact() {
    this.router.navigate(["/edit-contact", this.contact.id]);
  }
}
