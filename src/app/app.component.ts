import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public users$: Observable<User[]>;

  constructor(private readonly _user: UserService) {}

  ngOnInit() {
    this.users$ = this._user.getUsers();
  }
}
