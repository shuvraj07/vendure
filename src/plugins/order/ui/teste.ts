import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule, addNavMenuSection, addNavMenuItem } from '@vendure/admin-ui/core';

@NgModule({
    imports: [SharedModule],
    providers: [
        addNavMenuItem(
            {
                id: 'orders',
                label: 'Orders',
                requiresPermission: 'SuperAdmin',
                icon: 'orders',
                routerLink: ['/extensions/sales/order'],
            },
            'sales',
        ),
    ],
})
export class OrderExtensionModule {}
