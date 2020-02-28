/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
