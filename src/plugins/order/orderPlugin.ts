import {
    CustomerService,
    EventBus,
    LanguageCode,
    PluginCommonModule,
    PromotionEvent,
    TransactionalConnection,
    VendurePlugin,
} from '@vendure/core';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import path from 'path';

@VendurePlugin({
    imports: [PluginCommonModule],
})
export class OrderPlugin {
    static ui: AdminUiExtension = {
        //     id: 'feedback 1',
        //     extensionPath: path.join(__dirname, 'ui'),
        //     routes: [{ route: 'sales', filePath: 'routes.ts' }],
        //     providers: ['providers.ts'],
        // };
        extensionPath: path.join(__dirname, 'ui'),
        ngModules: [
            {
                type: 'lazy',
                route: 'sales',
                ngModuleFileName: 'lazy.module.ts',
                ngModuleName: 'OrderUIModule',
            },
            {
                type: 'shared',
                ngModuleFileName: 'shared.module.ts',
                ngModuleName: 'OrderExtensionModule',
            },
        ],
    };
}
