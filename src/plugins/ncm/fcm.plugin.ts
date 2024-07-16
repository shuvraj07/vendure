import { PluginCommonModule, LanguageCode, VendurePlugin } from '@vendure/core';
import { NcmService } from './services/ncm.services';
import { ncmRateCalculator } from './shippingMethod/shiping.calulator';
import { ncmFulfillmentHandler } from './fullfillment.handler';

declare module '@vendure/core/dist/entity/custom-entity-fields' {
    interface CustomAddressFields {
        googlePlaceId: string;
        latitude?: number;
        longitude?: number;
    }

    interface CustomProductVariantFields {
        preparationTime: number;
    }

    interface CustomChannelFields {
        uberEatsStoreId?: string;
        uberEatsClientId?: string;
        uberEatsClientSecret?: string;
    }

    interface CustomOrderFields {
        uberEatsOrderId?: string;
    }
}

@VendurePlugin({
    imports: [PluginCommonModule],
    entities: [],
    providers: [NcmService],
    compatibility: '^2.0.0',
    configuration: config => {
        // Add the Uber Eats shipping calculator to the list of available shipping calculators
        config.shippingOptions.shippingCalculators.push(ncmRateCalculator);

        // Add the Uber Eats fulfillment handler to the list of available fulfillment handlers
        config.shippingOptions.fulfillmentHandlers.push(ncmFulfillmentHandler);

        // Add custom google address fields to the Address entity

        config.customFields.Channel.push({
            name: 'StoreId',
            type: 'string',
            nullable: true,
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: 'Ncm Store ID',
                },
            ],
        });
        config.customFields.Order.push({
            name: 'OrderId',
            type: 'string',
            nullable: true,
            label: [
                {
                    languageCode: LanguageCode.en,
                    value: 'Uber Eats Order ID',
                },
            ],
        });
        return config;
    },
})
export class UberEatsPlugin {}
