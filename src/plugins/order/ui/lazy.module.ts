import { NgModule, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule, DataService } from '@vendure/admin-ui/core';
import { EditorModule } from '@tinymce/tinymce-angular';

import { Observable, of } from 'rxjs';
import { OrderListComponent } from './components/order-list/order-list.component';
//import { OrderDetailComponent } from './components/order-detail/order-detail.component';

import { map } from 'rxjs/operators';

@NgModule({
    imports: [
        SharedModule,

        RouterModule.forChild([
            {
                path: 'order',
                pathMatch: 'full',
                component: OrderListComponent,
                data: { breadcrumb: 'Marketing' },
            },

            // {
            //     path: 'create',
            //     component: OrderDetailComponent,
            //     data: {
            //         breadcrumb: [
            //             {
            //                 label: 'template',
            //                 link: ['/extensions', 'sales', 'order', 'draft'],
            //                 // requiresPermission: 'SuperAdmin',
            //             },
            //             {
            //                 label: 'Create template',
            //                 link: [],
            //                 // requiresPermission: 'SuperAdmin',
            //             },
            //         ],
            //     },
            // },
        ]),
    ],
    declarations: [OrderListComponent],
})
export class OrderUIModule {}
export function popUpUpdateBreadcrumb() {
    return [
        {
            label: 'PopUp',
            link: ['/extensions', 'popup'],
            // requiresPermission: 'SuperAdmin',
        },
        {
            label: 'id',
            link: [],
            // requiresPermission: 'SuperAdmin',
        },
    ];
}
