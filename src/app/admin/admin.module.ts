import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpComponent } from './signUpComponent/sign-up.component';
import { LoginComponent } from './loginComponent/login.component';
import { AdminComponent } from './adminComponent/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: '', component: AdminMenuComponent }

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
        LoginComponent
    ]
})

export class AdminModule {}


// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// import { AdminComponent } from './adminComponent/admin.component';
// import { AdminMenuComponent } from './adminMenu/admin-menu.component';
// import { LoginComponent } from './login/login.component';
// import { SignUpComponent } from './signUp/sign-up.component';

// import { UserService } from './adminShared/user.service';

// @NgModule({
//     imports: [
//         CommonModule,
//         FormsModule,
//         RouterModule.forChild(AdminRoutes)
//     ],
//     exports: [
//         RouterModule
//     ],
//     declarations: [
//         AdminComponent,
//         AdminMenuComponent,
//         LoginComponent,
//         SignUpComponent
//     ],
//     providers: [
//         UserService,
//     ]
// })

// export class AdminModule {}
