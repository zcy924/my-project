import {Component} from "@angular/core";

@Component({
  template: `
    <nz-alert nzShowIcon [nzType]="type" [nzMessage]="message" [nzDescription]="description"></nz-alert>
  `
})
export class WarningMessageComponent {
  type;
  message;
  description;
}
