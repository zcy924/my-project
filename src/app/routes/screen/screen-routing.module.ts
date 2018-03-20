import {Routes, RouterModule} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {ScreenComponent} from './screen.component';

export const routes: Routes = [
    {
        path: '',
        component: ScreenComponent
    }
];

export const ScreenRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
