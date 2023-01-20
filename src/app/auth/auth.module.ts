import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [AuthComponent],
})
export class AuthModule {}
