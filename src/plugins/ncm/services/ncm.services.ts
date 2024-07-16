import { Inject, Injectable } from '@nestjs/common';
import {
    ID,
    Logger,
    Order,
    OrderService,
    RequestContext,
    ShippingCalculationResult,
    ShippingMethod,
    TransactionalConnection,
} from '@vendure/core';
import axios from 'axios';
import { NCM_SHIPPING_CALCULATOR } from '../constants';

interface NcmDeliveryPickup {
    creation: string;
    destination: string;
    type: string;
}
interface NcmAddress {
    creation: string;
    destination: string;
    type: string;
}

interface NcmDeliveryCreationRequestBody {
    pickup_at: number;
    order_items: string;
}

@Injectable()
export class NcmService {
    constructor(
        private connection: TransactionalConnection,
        private orderService: OrderService,
    ) {}

    async getNcmDeliveryRate(ctx: RequestContext, order: Order): Promise<ShippingCalculationResult> {
        // This is where we would make an API request to Uber Eats to get exact delivery rates
        try {
            const deliveryRateFinal = await this.getNcmDeliveryRateFinal(ctx, order);
            if (!deliveryRateFinal) {
                return {
                    price: 0,
                    taxRate: 0,
                    priceIncludesTax: ctx.channel.pricesIncludeTax,
                };
            }
            const totalPrice = deliveryRateFinal.totalPrice;
            return {
                price: Number(totalPrice || 0) * 100,
                taxRate: 0,
                priceIncludesTax: ctx.channel.pricesIncludeTax,
                metadata: {
                    estimates: deliveryRateFinal,
                },
            };
        } catch (e) {
            Logger.error(`Failed to get Uber Eats delivery rates: ${e}`);
            return {
                price: 0,
                taxRate: 0,
                priceIncludesTax: ctx.channel.pricesIncludeTax,
            };
        }
    }

    async getNcmDeliveryRateFinal(ctx: RequestContext, order: Order) {
        // This is where we would make an API request to Uber Eats to get a list of available delivery rates
        // const authenticationToken = await this.getUberEatsOAuthToken(ctx, order);
        // if (!authenticationToken) {
        //     return;
        // }
        /*const requestBody: UberEatsDeliveryEstimateRequestBody = {
            pickup: {
                store_id: '12345'
            },
            dropoff_address: {
                place: {
                    id: '12345',
                    provider: 'google'
                },
                location: {
                    latitude: 37.7749,
                    longitude: 122.4194
                },
                formatted_address: '123 Main St, San Francisco, CA 94105',
                apt_floor_suite: 'Apt 123'
            },
            pickup_times: [Math.floor(Date.now() / 1000)],
            order_summary: {
                currency_code: 'USD',
                order_value: 100
            }
        };*/
        // const shipMethod = await this.getUberEatsShippingMethod(ctx);
        // if (!shipMethod) {
        //     Logger.error(`No Uber Eats shipping method found for channel ${ctx.channelId}`);
        //     return;
        // }
        // const storeID = ctx.channel.customFields?.ncmStoreId;
        // if (!storeID) {
        //     Logger.error(`No Uber Eats store ID found for restaurant id ${ctx.channelId}`);
        //     return;
        // }
        // if (!order.shippingAddress.customFields?.googlePlaceId) {
        //     Logger.error(`No googlePlaceId found for order ${order.id}`);
        //     return;
        // }
        // const requestBody: UberEatsDeliveryEstimateRequestBody = {
        //     pickup: {
        //         store_id: storeID,
        //     },
        //     dropoff_address: {
        //         place: {
        //             id: order.shippingAddress.customFields.googlePlaceId,
        //             provider: 'google',
        //         },
        //         location: {
        //             latitude: order.shippingAddress.customFields?.latitude,
        //             longitude: order.shippingAddress.customFields?.longitude,
        //         },
        //         formatted_address: this.getFormattedAddress(order),
        //         apt_floor_suite: order.shippingAddress?.streetLine2,
        //     },
        //     pickup_times: [this.getMaxPickUpTime(order)],
        //     order_summary: {
        //         currency_code: order.currencyCode,
        //         order_value: order.totalWithTax / 100,
        //     },
        // };
        // let data = '';
        // const config = {
        //     method: 'get',
        //     maxBodyLength: Infinity,
        //     url: 'https://demo.nepalcanmove.com/api/v1/shipping-rate?creation=TINKUNE&destination=POKHARA&type=Pickup/Collect',
        //     headers: {
        //         Authorization: `Bearer a3dede0dcfb45e2af76ced9f7a74909aac9d0a45`,
        //     },
        //     data: data,
        // };
        console.log('thi is log before');
        const options = {
            method: 'GET',
            url: 'https://demo.nepalcanmove.com/api/v1/shipping-rate',
            params: {
                creation: 'TINKUNE',
                destination: 'POKHARA',
                type: 'Pickup/Collect',
            },
        };
        const response = await axios.request(options);
        console.log('Resonsoe ', response.data);

        // async function test() {
        //     const response = await axios.request(options);
        //     console.log(response);
        // }
        // test();

        //const response = await axios.request(options);
        //console.log(response.data);
        //const ncmToken = 'a3dede0dcfb45e2af76ced9f7a74909aac9d0a45';
        // const response = await axios.get(
        //     ' https://demo.nepalcanmove.com/api/v1/shipping-rate?creation=TINKUNE&destination=POKHARA&type=Pickup/Collect',
        //     {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: `Token ${ncmToken}`,
        //         },
        //         data: requestBody,
        //     },
        // );
        //const response = await axios.request(config);
        // console.log(response, 'Ths is response from axios ');
        if (response.status !== 200) {
            Logger.error(`Failed to get Uber Eats delivery rates: ${response.data}`);
            return;
        }
        Logger.info(`Uber Eats delivery rates: ${response.data}`);

        // This is where we would calculate the total delivery rate
        const deliveryRateEstimates: any[] = response.data.estimates;
        const deliveryRateTotal = response.data['charge'];
        console.log(deliveryRateTotal);
        return {
            totalPrice: deliveryRateTotal,
            estimates: deliveryRateEstimates,
            estimateID: response.data.estimate_id,
        };
    }

    async ncmDeliveryBulkCreation(ctx: RequestContext, orderIDs: ID[]) {
        const theTrackingURLs = [];
        for (const orderID of orderIDs) {
            const theURL = await this.createNcmDelivery(ctx, orderID);
            if (theURL) {
                theTrackingURLs.push(theURL);
            }
        }
        return theTrackingURLs;
    }

    async createNcmDelivery(ctx: RequestContext, orderID: ID) {
        const theOrder = await this.orderService.findOne(ctx, orderID, [
            'lines',
            'lines.productVariant',
            'customer',
            'shippingLines',
            'shippingLines.shippingMethod',
        ]);
        console.log('Order ', theOrder);
        if (!theOrder) {
            throw new Error(`Order not found for ID ${orderID}`);
        }
        console.log('This time it is working ');

        if (!theOrder.customer) {
            throw new Error(`No customer found for order ${orderID}`);
        }
        if (!theOrder.shippingAddress.fullName) {
            throw new Error(`No proper shipping address name found for order ${orderID}`);
        }
        if (!theOrder.shippingAddress.phoneNumber) {
            throw new Error(`No proper shipping address phone number found for order ${orderID}`);
        }

        // interface NcmRequestBody {
        //     // name: string;
        //     phone: string;
        //     phone2: string;
        //     cod_charge: string;
        //     address: string;
        //     fbranch: string; // You may need to adjust this based on your context
        //     branch: string; // You may need to adjust this based on your context
        //     package: string;
        //     vref_id: string;
        //     instruction: string; // Yo
        // }
        // console.log('This time it is working end ');
        // const ncmDeliveryRequestBody: NcmRequestBody = {
        //     //name: 'shuva',
        //     phone: theOrder.shippingAddress.phoneNumber,
        //     phone2: '',
        //     cod_charge: theOrder.totalWithTax.toString(),
        //     address: 'Bays pokharai',
        //     fbranch: 'TINKUNE', // You may need to adjust this based on your context
        //     branch: 'BIRATNAGAR', // You may need to adjust this based on your context
        //     package: theOrder.lines.map(line => line.productVariant.product.name).join(', '),
        //     vref_id: theOrder.code,
        //     instruction: 'Test Instruction', // You may need to adjust this based on your context
        // const uberEatsDeliveryRequestBody: UberEatsDeliveryCreateRequestBody = {
        //     estimate_id: '123', //to find the estimate id
        //     pickup_at: this.getMaxPickUpTime(theOrder),
        //     external_order_id: theOrder.code,
        //     order_items: theOrder.lines.map(line => ({
        //         name: line.productVariant.product.name,
        //         quantity: line.quantity,
        //         description: line.productVariant.product.description,
        //         external_id: line.productVariant.sku,
        //         price: line.unitPriceWithTax / 100,
        //         currency_code: theOrder.currencyCode,
        //         item_type: 'REGULAR',
        //     })),

        //             "name":"John Doe",
        //  "phone":"9847023226",
        //  "phone2":"",
        // "cod_charge":"2200",
        //  "address":"Byas Pokhari",
        //  "fbranch":"TINKUNE",
        // "branch":"BIRATNAGAR",
        //  "package": "Jeans Pant",
        //  "vref_id" : "VREF234",
        // README.md 4/6/2023
        // 8 / 9
        //  "instruction" : "Test Instruction"
        // pickup: {
        //     store_id: storeID,
        // },
        // dropoff: {
        //     address: {
        //         place: {
        //             id: theOrder.shippingAddress.customFields.googlePlaceId,
        //             provider: 'google',
        //         },
        //         location: {
        //             latitude: theOrder.shippingAddress.customFields?.latitude,
        //             longitude: theOrder.shippingAddress.customFields?.longitude,
        //         },
        //         formatted_address: this.getFormattedAddress(theOrder),
        //         apt_floor_suite: theOrder.shippingAddress?.streetLine2,
        //     },
        //     type: 'DELIVERY',
        //     contact: {
        //         first_name: theOrder.shippingAddress.fullName.split(' ')[0],
        //         last_name: theOrder.shippingAddress.fullName.substring(
        //             theOrder.shippingAddress.fullName.indexOf(' ') + 1,
        //         ),
        //         phone: theOrder.shippingAddress.phoneNumber,
        //         email: theOrder.customer?.emailAddress,
        //     },
        // },
        // external_user_id: theOrder.customer.id.toString(),
        //};
        console.log('This time it is working all end final');

        //

        // const token = 'a3dede0dcfb45e2af76ced9f7a74909aac9d0a45';
        // console.log(token);
        // const response = await axios.post('https://demo.nepalcanmove.com/api/v1/order/create', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${token}`,
        //     },
        //     data: 'ncmDeliveryRequestBody',
        // });
        let data = JSON.stringify({
            name: 'John Doe',
            phone: '9847023226',
            phone2: '',
            cod_charge: '2200',
            address: 'Byas Pokhari',
            fbranch: 'TINKUNE',
            branch: 'BIRATNAGAR',
            package: 'Jeans Pant',
            vref_id: 'VREF234',
            instruction: 'Test Instruction',
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://demo.nepalcanmove.com/api/v1/order/create',
            headers: {
                Authorization: 'Token 9a965ac8f55682d0ff1fa8db9be27f8c0798ec1b',
                'Content-Type': 'application/json',
            },
            data: data,
        };
        const response = await axios.request(config);
        console.log('Resonsoe ', response.data);
        console.log(response, 'This is response');
        if (response.status !== 200) {
            console.log('This is resposne from status code');
            Logger.error(`Failed to create NCM delivery: ${response.data}`);
            return;
        }
        Logger.info(`NCm delivery created: ${response.data}`);
        return response.data.order_tracking_url as string;
    }
    async createNcmOrderComment(ctx: RequestContext, orderId: ID, comment: string) {
        // Check if the comment is provided
        if (!comment) {
            throw new Error('Comment is required');
        }

        // Get the access token for authorizatio

        // Define the request body
        const requestBody = {
            orderid: orderId,
            comments: comment,
        };

        try {
            const token = 'a3dede0dcfb45e2af76ced9f7a74909aac9d0a45';
            // Make the POST request to the endpoint
            const response = await axios.post('https://demo.nepalcanmove.com/api/v1/comment', requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`,
                },
            });

            // Log and return the response
            console.log(response, 'This is response');
            if (response.status !== 200) {
                Logger.error(`Failed to create NCM order comment: ${response.data}`);
                return;
            }
            Logger.info(`NCM order comment created: ${response.data}`);
            return response.data;
        } catch (error) {
            Logger.error(`Error creating NCM order comment: ${error}`);
            throw new Error(`Error creating NCM order comment: ${error}`);
        }
    }
    async getNcmOrderStatus(ctx: RequestContext, orderId: ID) {
        // Check if the order ID is provided
        if (!orderId) {
            throw new Error('Order ID is required');
        }

        // Get the access token for authorization

        try {
            // Make the GET request to the endpoint
            const token = ' a3dede0dcfb45e2af76ced9f7a74909aac9d0a45';
            const response = await axios.get(`https://demo.nepalcanmove.com/api/v1/order/status`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`,
                },
                params: {
                    id: orderId,
                },
            });

            // Log and return the response
            console.log(response, 'This is response');
            if (response.status !== 200) {
                Logger.error(`Failed to fetch order status: ${response.data}`);
                return;
            }
            Logger.info(`Order status fetched: ${response.data}`);
            return response.data;
        } catch (error) {
            Logger.error(`Error fetching order status: ${error}`);
            throw new Error(`Error fetching order status: ${error}`);
        }
    }
    getFormattedAddress(order: Order) {
        // This is where we would format the address for the Uber Eats API
        return `${order.shippingAddress.streetLine1}, ${order.shippingAddress.city}, ${order.shippingAddress.province}, ${order.shippingAddress.postalCode}`;
    }

    async getNcmShippingMethod(ctx: RequestContext) {
        // This is where we would get the uber eats shipping method from the database
        const shipMethod = await this.connection
            .getRepository(ctx, ShippingMethod)
            .createQueryBuilder('shippingMethod')
            .leftJoinAndSelect('shippingMethod.channels', 'channel')
            .where('shippingMethod.deletedAt is NULL')
            .andWhere('channel.id = :channelId', { channelId: ctx.channelId })
            .andWhere('shippingMethod.calculator like :code', { code: `%${NCM_SHIPPING_CALCULATOR}%` })
            .getOne();
        return shipMethod;
    }
}
