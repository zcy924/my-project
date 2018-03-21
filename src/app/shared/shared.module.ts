import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import {NgZorroAntdExtraModule} from 'ng-zorro-antd-extra';
import {AlainThemeModule} from '@delon/theme';
import {AlainACLModule} from '@delon/acl';
import {ZORROMODULES, ABCMODULES} from '../delon.module';
// i18n
import {TranslateModule} from '@ngx-translate/core';

// region: third libs
import {CountdownModule} from 'ngx-countdown';
import {PlatformModule} from '@microon/platform';
import {TreeModule} from 'angular-tree-component';
import {QuestionControlService} from '@shared/components/dynaimc-form/question-control.service';
import {LoadingSpinnerService} from '@shared/services/loading-spinner.service';
import {ImageLoaderService} from '@shared/services/image-loader.service';
import {PreloaderService} from '@shared/services/preloader.service';
import {ToggleFullscreenDirective} from '@shared/directives/toggle-fullscreen.directive';
import {AceEditorDirective} from '@shared/directives/ace-editor.directive';
import {SafePipe} from '@shared/pipes/SafePipe';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NgxEchartsModule} from 'ngx-echarts';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {AdDirective} from '@shared/directives/ad.directive';
import {ViewInfoComponent} from '@shared/components/view/view-info.component';
import {ViewDetailComponent} from '@shared/components/view/view-detail.component';
import {ViewRankComponent} from '@shared/components/view/view-rank.component';
import {AngularSplitModule} from 'angular-split';

const THIRDMODULES = [CountdownModule];
// endregion

// region: your componets & directives
const COMPONENTS = [
    ViewInfoComponent,
    ViewDetailComponent,
    ViewRankComponent
];
const DIRECTIVES = [
    AdDirective
];
// endregion
const viewClassArray = [];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,

        NgxEchartsModule,
        PerfectScrollbarModule,

        AngularSplitModule,

        NgZorroAntdModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule.forChild(),
        ...ABCMODULES,
        AlainACLModule,
        // third libs
        ...THIRDMODULES,
        TreeModule
    ],
    declarations: [
        ToggleFullscreenDirective,
        AceEditorDirective,
        ...viewClassArray,

        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
        SafePipe
    ],
    providers: [
        PreloaderService,
        ImageLoaderService,
        LoadingSpinnerService,
        QuestionControlService,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxEchartsModule,
        AngularSplitModule,
        PerfectScrollbarModule,
        ...ZORROMODULES,
        NgZorroAntdExtraModule,
        AlainThemeModule,
        PlatformModule,
        ...ABCMODULES,
        // i18n
        TranslateModule,
        // third libs
        ...THIRDMODULES,
        // your components
        ...COMPONENTS,
        ...DIRECTIVES,
        TreeModule,
        ToggleFullscreenDirective,
        AceEditorDirective,
        ...viewClassArray,
        SafePipe
    ],
    entryComponents: [
        ...COMPONENTS
    ]
})
export class SharedModule {
}
