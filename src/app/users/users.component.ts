import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { User } from '../datamodels';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrl: './users.component.css',
    imports: [CardComponent]
})
export class UsersComponent {
  @Input() user!: User;
  @Input() selected!:boolean;
  @Output() select = new EventEmitter<User>();

  imgPath(): string {
    return 'users/' + this.user.avatar;
  }

  onSelectedUser() {
    this.select.emit(this.user);
  }
}
