import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";

import { HomePageRoutingModule } from "./home-routing.module";
import { Facebook } from "@ionic-native/facebook/ngx";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AngularFireAuthModule,
  ],
  declarations: [HomePage],
  providers: [Facebook],
})
export class HomePageModule {}
