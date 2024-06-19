import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { DUMMY_USERS } from './dummy-users';
import { User } from './datamodels';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UsersComponent, TasksComponent,NgFor]
})
export class AppComponent {
  selecteduser!: User ;
  users: User[] = DUMMY_USERS;
  dropdownVisible = false;

  selectedUser(user: User) {
    this.selecteduser = user;
  }

  onUserSelect(event: Event) {
    const userId = (event.target as HTMLSelectElement).value;
    const user:any = this.users.find(user => user.id === userId);
    if (user) {
       this.selecteduser = user;
    }
  }

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
}
