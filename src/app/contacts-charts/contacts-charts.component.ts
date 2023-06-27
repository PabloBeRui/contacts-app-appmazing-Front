import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";

@Component({
  selector: "app-contacts-charts",
  templateUrl: "./contacts-charts.component.html",
  styleUrls: ["./contacts-charts.component.scss"],
})
export class ContactsChartsComponent implements OnInit {
  phoneData = [];
  emailData = [];
  letterA = [];
  letterS=[]
  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe((contacts: any[]) => {
      const contactsWithEmail = contacts.filter((contact) => contact.email);
      const contactsWithoutEmail = contacts.filter((contact) => !contact.email);

      this.emailData = [
        {
          name: "con email",
          value: contactsWithEmail.length,
        },
        { name: "sin email", value: contactsWithoutEmail.length },
      ];

      const contactsWithTelephone = contacts.filter(
        (contact) => contact.telephone
      );
      const contactsWithoutTelephone = contacts.filter(
        (contact) => !contact.telephone
      );

      this.phoneData = [
        {
          name: "con telefono",
          value: contactsWithTelephone.length,
        },
        { name: "sin telefono", value: contactsWithoutTelephone.length },
      ];
      const contactsWithALetter = contacts.filter((contact) =>
        contact.name.toLowerCase().includes("a")
      );
      const contactsWithoutALetter = contacts.filter(
        (contact) => !contact.name.toLowerCase().includes("a")
      );
      this.letterA = [
        {
          name: "con a",
          value: contactsWithALetter.length,
        },
        {
          name: "sin a",
          value: contactsWithoutALetter.length,
        },
      ];
      const contactsWithSLetter = contacts.filter((contact) =>
      contact.name.toLowerCase().includes("a")
    );
    const contactsWithoutSLetter = contacts.filter(
      (contact) => !contact.name.toLowerCase().includes("s")
    );
    this.letterS = [
      {
        name: "con s",
        value: contactsWithSLetter.length,
      },
      {
        name: "sin s",
        value: contactsWithoutSLetter.length,
      },
    ];
    });
  }
}
