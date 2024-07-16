import { addNavMenuItem, registerBulkAction } from '@vendure/admin-ui/core';

export default [
    addNavMenuItem(
        {
            id: 'orders',
            label: 'Orders',
            requiresPermission: 'SuperAdmin',
            icon: 'orders',
            routerLink: ['/extensions/sales/orders'],
        },
        'sales',
    ),
];
