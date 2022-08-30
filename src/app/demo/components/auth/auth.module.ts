import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        InputTextModule
    ],
    declarations: [
      SignUpComponent
    ]
})
export class AuthModule { }
