import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './signUpComponent/sign-up.component';
import { LoginComponent } from './loginComponent/login.component';
import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

import { UserService } from './admin-shared/user.service';

const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: '', component: AdminMenuComponent, canActivate: [UserService] }

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        LoginComponent,
        SignUpComponent
    ],
    providers: [
        UserService,
    ]
})

export class AdminModule {}

