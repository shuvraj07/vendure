import { Injector, LanguageCode, ShippingCalculator } from '@vendure/core';
import { NcmService } from '../services/ncm.services';
import { NCM_SHIPPING_CALCULATOR } from '../constants';

let ncmService: NcmService;
export const ncmRateCalculator = new ShippingCalculator({
    code: NCM_SHIPPING_CALCULATOR,
    description: [{ languageCode: LanguageCode.en, value: 'Ncm Shipping Calculator' }],
    args: {
        clientID: {
            type: 'string',
            label: [{ languageCode: LanguageCode.en, value: 'Client ID' }],
        },
        clientSecret: {
            type: 'string',
            label: [{ languageCode: LanguageCode.en, value: 'Client Secret' }],
            ui: { component: 'password-form-input' },
        },
    },
    init: (injector: Injector) => {
        ncmService = injector.get(NcmService);
    },
    calculate: (ctx, order, args) => {
        return ncmService.getNcmDeliveryRate(ctx, order);
    },
});
