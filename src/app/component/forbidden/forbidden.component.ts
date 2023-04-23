import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserAuthService } from "src/app/services/user-auth/user-auth.service";

@Component({
  selector: "app-forbidden",
  templateUrl: "./forbidden.component.html",
  styleUrls: ["./forbidden.component.css"],
})
export class ForbiddenComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  getReturnUrl() {
    this.userAuthService.clear();
    this.router.navigate(["/login"]);
  }
}
