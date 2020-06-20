import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule }  from  "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { FormAddDepartamentoComponent } from './form-add-departamento/form-add-departamento.component';


const routes: Route[] = [
  {path: '', component: DepartamentosComponent},
  {path: 'departamentos', component: DepartamentosComponent},
  {path: 'municipios', component: MunicipiosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    MunicipiosComponent,
    DialogContentComponent,
    FormAddDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
