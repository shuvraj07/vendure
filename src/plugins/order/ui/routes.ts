import { registerRouteComponent } from '@vendure/admin-ui/core';
import { GreeterComponent } from './components/greeter.componets';
import { PageComponent, PageService } from '@vendure/admin-ui/core';
export default [
    registerRouteComponent({
        path: 'orders',
        title: 'order',
        component: PageComponent,
        breadcrumb: 'orders',
    }),
];
