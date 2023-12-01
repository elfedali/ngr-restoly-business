import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AvatarComponent } from "./components/avatar/avatar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [NavbarComponent, AvatarComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, AvatarComponent],
})
export class SharedModule {}
