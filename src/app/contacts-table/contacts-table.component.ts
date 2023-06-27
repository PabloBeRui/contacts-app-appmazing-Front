import { Router } from "@angular/router";
import { ContactsService } from "./../contacts.service";
import { Component, OnInit } from "@angular/core";
import { DialogConfirmationComponent } from "../dialog-confirmation/dialog-confirmation.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-contacts-table",
  templateUrl: "./contacts-table.component.html",
  styleUrls: ["./contacts-table.component.scss"],
})
export class ContactsTableComponent implements OnInit {
  contacts: any = [];
  contactDetail: any;
  selectedContact: any;
  constructor(
    private ContactsService: ContactsService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.ContactsService.getContacts().subscribe((data) => {
      this.contacts = data;
    });
  }
  viewContactDetail(contact: any) {
    this.contactDetail = contact;
    this.ContactsService.selectedContact = this.contactDetail;
    this.router.navigate(["/contact", this.contactDetail.id]);
  }

  openConfirmationDialog(contactId: string) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { contactId: contactId },
    });
  }
}
