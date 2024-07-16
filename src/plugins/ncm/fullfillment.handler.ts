import { FulfillmentHandler, Injector, LanguageCode } from '@vendure/core';
import { NcmService } from './services/ncm.services';

let ncmService: NcmService;
export const ncmFulfillmentHandler = new FulfillmentHandler({
    code: 'ncm-fulfillment-handler',
    description: [
        {
            languageCode: LanguageCode.en,
            value: 'Ncm Fulfillment Handler',
        },
    ],
    args: {},

    init: (injector: Injector) => {
        ncmService = injector.get(NcmService);
    },

    createFulfillment: async (ctx, orders, lines, args) => {
        // Create the uber eats fulfillment
        const orderIDs = orders.map(o => o.id);
        const trackingURLs = await ncmService.ncmDeliveryBulkCreation(ctx, orderIDs);
        return {
            method: 'ncm',
            trackingUrls: trackingURLs,
        };
    },

    /*onFulfillmentTransition: async (fromState, toState, { fulfillment }) => {
        if (toState === 'Cancelled') {
            await shipomatic.transaction.cancel({
                transaction_id: fulfillment.customFields.shippingTransactionId,
            });
        }
    }*/
});
