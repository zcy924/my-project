import {Routes, RouterModule} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home.component';
import {CanDeactivateGuard} from './can-deactivate-guard.service';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canDeactivate: [CanDeactivateGuard]
    }
];

export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
