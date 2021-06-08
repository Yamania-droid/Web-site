import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentService } from './shared/services/content.service';
import { DocumentCardComponent } from './component/document-card/document-card.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { AuthorizationAdminComponent } from './component/authorization-admin/authorization-admin.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { DocumentListComponent } from './component/document-list/document-list.component';
import { AdminPanelTableComponent } from './component/admin-panel-table/admin-panel-table.component';
import { BindProductComponent } from './component/bind-product/bind-product.component';
import { AdminDialogProductComponent } from './component/admin-dialog-product/admin-dialog-product.component';
import { AdminDialogDocumentUpdateComponent } from './component/admin-dialog-document-update/admin-dialog-document-update.component';
import { TransfereService } from './httpservice/transfere.service';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";


// import { AUTH_API_URL } from './component/app-injection-tokens';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardAll } from './component/navigation/protection/protection-auth';
import { ModeratorTableComponent } from './component/moderator-table/moderator-table.component';
import { ModerDataWindowComponent } from './component/moder-data-window/moder-data-window.component';
import { ModalCreateDocumentComponent } from './component/modal-create-document/modal-create-document.component';
import { RegisterUserComponent } from './component/register-user/register-user.component';
import { D0wnoloadFileComponent } from './component/d0wnoload-file/d0wnoload-file.component';




export function tokenGetter(){
var x = localStorage.getItem('token');
  
  return x
}



const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMMM YYYY',
  },
  display: {
    dateInput: 'DD MMMM YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};



const appRoutes: Routes=[
  { path: '', component: DocumentListComponent},
  { path: 'documents/:id', component:DocumentCardComponent},
  //{ path: '/getdocumentsext/:page=&:pageSize=' , component:DocumentCardComponent},
  { path: 'homepage', component:DocumentListComponent},
  { path: 'login', component:AuthorizationAdminComponent},
  { path: 'admin-panel/auth_yes', component:AdminPanelTableComponent, canActivate:[AuthGuardAll]},
  { path: 'admin-panel/bind-product/:id', component:BindProductComponent, canActivate:[AuthGuardAll] },
  { path: 'admin-panel/account-logic', component:ModeratorTableComponent, canActivate:[AuthGuardAll] },
  { path: '**', component:NotfoundComponent },
 ]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PdfViewerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    JwtModule.forRoot({
      config:{
        tokenGetter,
        headerName: "Authorization",
        allowedDomains: ['194.147.78.175']
      }
    })
  

    
  ],
  entryComponents:[
    AdminDialogProductComponent,
    AdminDialogDocumentUpdateComponent,
    ModerDataWindowComponent,
    ModalCreateDocumentComponent,
    RegisterUserComponent,
    D0wnoloadFileComponent
  ],
  declarations: [
    AppComponent,
    DocumentCardComponent,
    NavigationComponent,
    AuthorizationAdminComponent,
    DocumentListComponent,
    AdminPanelTableComponent,
    BindProductComponent,
    AdminDialogProductComponent,
    AdminDialogDocumentUpdateComponent,
    ModeratorTableComponent,
    ModerDataWindowComponent,
    ModalCreateDocumentComponent,
    RegisterUserComponent,
    D0wnoloadFileComponent,

   
 
    
   

    
  ],
  providers: [ContentService,  TransfereService, { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
  bootstrap: [AppComponent]

})
export class AppModule { }
