import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DefaultComponent } from "./default.component";

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../../modules/page/home/home.module").then(
            (m) => m.HomeModule
          ),
      },
      {
        path: "details",
        loadChildren: () =>
          import("../../modules/page/details/details.module").then(
            (m) => m.DetailsModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("../../modules/page/contact/contact.module").then(
            (m) => m.ContactModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
