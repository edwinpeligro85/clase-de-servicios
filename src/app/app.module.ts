import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HttpClientModule } from "@angular/common/http";
import { UserService } from "./user.service";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, UserComponent],
  bootstrap: [AppComponent],
  providers: [UserService]
})
export class AppModule {}
