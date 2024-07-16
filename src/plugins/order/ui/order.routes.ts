import { Route } from '@angular/router';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { PageComponent, PageService } from '@vendure/admin-ui/core';
import { OrderGuard } from './providers/routing/order.guard';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';

export const createRoutes = (pageService: PageService): Route[] => [
    {
        path: 'order',
        component: OrderListComponent,
        pathMatch: 'full',
        data: {
            locationId: 'order-list',
            breadcrumb: _('breadcrumb.orders'),
        },
        children: pageService.getPageTabRoutes('order-list'),
    },
    {
        path: 'draft/:id',
        component: OrderDetailComponent,
        canActivate: [OrderGuard],
        data: {
            locationId: 'draft-order-detail',
            breadcrumb: { label: _('breadcrumb.orders'), link: ['../'] },
        },
        children: pageService.getPageTabRoutes('draft-order-detail'),
    },
    {
        path: ':id',
        component: OrderDetailComponent,
        canActivate: [OrderGuard],
        data: {
            locationId: 'order-detail',
            breadcrumb: { label: _('breadcrumb.orders'), link: ['../'] },
        },
        children: pageService.getPageTabRoutes('order-detail'),
    },
    {
        path: 'extensions/sales/order/draft/create',
        component: OrderDetailComponent,
        canActivate: [OrderGuard],
        data: {
            locationId: 'order-detail',
            breadcrumb: { label: _('breadcrumb.orders'), link: ['../'] },
        },
        children: pageService.getPageTabRoutes('order-detail'),
    },
    {
        path: ':id/modify',
        component: OrderDetailComponent,
        canActivate: [OrderGuard],
        data: {
            locationId: 'modify-order',
            breadcrumb: { label: _('breadcrumb.orders'), link: ['../'] },
        },
        children: pageService.getPageTabRoutes('modify-order'),
    },
];
