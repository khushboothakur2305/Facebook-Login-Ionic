import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  userDetail = false;
  Details;
  constructor(private fb: Facebook, private auth: AngularFireAuth) {}
  login() {
    this.fb
      .login(["public_profile", "email"])
      .then((res: FacebookLoginResponse) => {
        console.log("Logged into Facebook!", res);
        this.getUserDetail(res.authResponse.userID);
      })
      .catch((e) => console.log("Error logging into Facebook", e));
  }
  getUserDetail(userid: any) {
    this.userDetail = true;
    this.fb
      .api("/" + userid + "/?fields=id,email,name,picture.type(large)", [
        "public_profile",
      ])
      .then((response) => {
        console.log(response);
        this.Details = response;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
