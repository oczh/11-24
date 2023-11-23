import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

const routes: Routes = [
 {path: 'temp-driv-form', component: TemplateDrivenFormComponent},
 {path: 'reactiv-form', component: ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
