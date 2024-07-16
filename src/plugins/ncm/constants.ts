export const NCM_SHIPPING_CALCULATOR = 'uber-eats-shipping-calculator';
export const PAYMENT_METHOD_CODE = 'shift4-payment-handler';
export const SHIPPING_METHOD_CODE = 'default-shipping-calculator';

export const dummyOrderData = {
    id: 'bd1ed236-ee79-11ed-a05b-0242ac12A003',
    display_id: '2A003',
    external_id: 'NCM_ORDER_1',
    state: 'CREATED',
    status: 'SCHEDULED',
    preparation_status: 'PREPARING',
    ordering_platform: 'NCM',
    fulfillment_type: 'DELIVERY_BY_UBER',
    scheduled_order_target_delivery_time_range: {
        start_time: '2016-09-01T10:11:12.123456-0500',
        end_time: '2016-09-01T10:11:12.123456-0500',
    },
    store: {
        id: 'bd1ed236-ee79-11ed-a05b-0242ac120003',
        name: "Uber's Pizza Palace",
        partner_identifiers: [
            {
                id: 'store1',
                type: 'MERCHANT_STORE_ID',
            },
        ],
    },
    customers: [
        {
            id: '9ae8779e-1cd7-5322-86b6-d7955afd051b',
            name: {
                display_name: 'Uber L',
                first_name: 'Uber',
                last_name: 'L',
            },
            order_history: {
                past_order_count: 3,
            },
            contact: {
                phone: {
                    number: '+1-800-999-9999',
                    pin_code: '888 52 337',
                    country_iso2: 'US',
                },
            },
            is_primary_customer: true,
            tax_profile: {
                tax_ids: '123abc',
                tax_id_type: 'NIF',
                customer_full_name: 'John Smith',
                email: 'john@smith.com',
                legal_entity_name: 'John Smith, LLC',
                billing_address: '1 Broadway, New York, NY 11109',
                country: 'United States',
                encrypted_tax_id: {
                    key: 'string',
                    cipher_text: 'string',
                },
            },
            can_respond_to_fulfillment_issues: true,
        },
    ],
    deliveries: [
        {
            id: '1676a555-1a6f-4d49-be91-c9bb8f94af49',
            delivery_partner: {
                id: 'string',
                name: 'John Smith',
                vehicle: {
                    type: 'CAR',
                    make: 'Honda',
                    model: 'Accord',
                    color: 'red',
                    license_plate: 'T124224',
                    is_autonomous: true,
                    handoff_instructions: 'string',
                    passcode: 'abc123',
                },
                picture_url: 'string',
                contact: {
                    phone: {
                        number: '+1-800-999-9999',
                        pin_code: '888 52 337',
                        country_iso2: 'US',
                    },
                },
                current_location: {
                    latitude: 38.8951,
                    longitude: -77.0364,
                },
            },
            status: 'SCHEDULED',
            location: {
                type: 'GOOGLE_PLACE',
                id: '23119fca-ec44-5c6d-8dc9-2ac8cdde310d',
                street_address_line_one: '175 Greenwich St',
                street_address_line_two: '44-023',
                latitude: '38.8951',
                longitude: '-77.0364',
                unit_number: 1,
                business_name: 'Uber Technologies Inc.',
                city: 'NY',
                country: 'US',
                postal_code: '10007',
                location_type_value: 'asf-123ijfdishs_',
                client_provided_street_address_line_one: 'string',
            },
            estimated_pick_up_time: '2016-09-01T10:11:12.123456-0500',
            interaction_type: 'DOOR_TO_DOOR',
            delivery_partner_marked_not_ready_time: '2016-09-01T10:11:12.123456-0500',
            instructions: 'Please do not ring doorbell.',
        },
    ],
    carts: [
        {
            id: 'string',
            items: [
                {
                    id: 'pizza_cheese',
                    cart_item_id: 'c751e24c-ee7a-11ed-a05b-0242ac120003',
                    title: 'Cheese Pizza 18"',
                    external_data: 'chz_piz_18',
                    customer_id: '092400ec-ee7b-11ed-a05b-0242ac120003',
                    quantity: {
                        amount: 1,
                        unit: 'POUND',
                    },
                    default_quantity: {
                        amount: 1,
                        unit: 'POUND',
                    },
                    customer_requests: {
                        allergy: {
                            allergens: ['PEANUTS'],
                            instructions: 'I am allergic to peanuts.',
                        },
                        special_instructions: 'Add extra sauce',
                    },
                    selected_modifier_groups: [
                        {
                            id: '18_pizza_toppings',
                            title: 'Pizza Toppings for 18"',
                            external_data: 'piz_top_18',
                            selected_items: [{}],
                            removed_items: [{}],
                        },
                    ],
                    picture_url: 'string',
                },
            ],
            fulfillment_issues: [
                [
                    {
                        issue_type: 'OUT_OF_ITEM',
                        action_type: 'SUBSTITUTE_ITEM',
                        root_item: {
                            id: 'pizza_cheese',
                            cart_item_id: 'c751e24c-ee7a-11ed-a05b-0242ac120003',
                            title: 'Cheese Pizza 18"',
                            external_data: 'chz_piz_18',
                            customer_id: '092400ec-ee7b-11ed-a05b-0242ac120003',
                            quantity: {
                                amount: 1,
                                unit: 'POUND',
                            },
                            default_quantity: {
                                amount: 1,
                                unit: 'POUND',
                            },
                            customer_requests: {
                                allergy: {
                                    allergens: [null],
                                    instructions: 'I am allergic to peanuts.',
                                },
                                special_instructions: 'Add extra sauce',
                            },
                            selected_modifier_groups: [
                                {
                                    id: '18_pizza_toppings',
                                    title: 'Pizza Toppings for 18"',
                                    external_data: 'piz_top_18',
                                    selected_items: [null],
                                    removed_items: [null],
                                },
                            ],
                            picture_url: 'string',
                        },
                        item_availability: {
                            items_requested: {
                                amount: 1,
                                unit: 'POUND',
                            },
                            items_available: {
                                amount: 1,
                                unit: 'POUND',
                            },
                        },
                        item_substitute: {
                            id: 'pizza_cheese',
                            cart_item_id: 'c751e24c-ee7a-11ed-a05b-0242ac120003',
                            title: 'Cheese Pizza 18"',
                            external_data: 'chz_piz_18',
                            customer_id: '092400ec-ee7b-11ed-a05b-0242ac120003',
                            quantity: {
                                amount: 1,
                                unit: 'POUND',
                            },
                            default_quantity: {
                                amount: 1,
                                unit: 'POUND',
                            },
                            customer_requests: {
                                allergy: {
                                    allergens: [null],
                                    instructions: 'I am allergic to peanuts.',
                                },
                                special_instructions: 'Add extra sauce',
                            },
                            selected_modifier_groups: [
                                {
                                    id: '18_pizza_toppings',
                                    title: 'Pizza Toppings for 18"',
                                    external_data: 'piz_top_18',
                                    selected_items: [null],
                                    removed_items: [null],
                                },
                            ],
                            picture_url: 'string',
                        },
                        suspend_until: '2016-09-01T10:11:12.12-0500',
                        store_response: 'The store ran out of romaine lettuce.',
                    },
                ],
            ],
            special_instructions: 'Please add extra sauce.',
            include_single_use_items: true,
            revision_id: 'string',
            restricted_items: {
                alcohol: {
                    contain_alcoholic_item: false,
                },
                tobacco: {
                    contain_tobacco_product: true,
                },
            },
        },
    ],
    payment: {
        payment_detail: {
            order_total: {
                display_amount: 'string',
                net: {
                    amount_e5: 750000,
                    currency_code: 'USD',
                    formatted: '$7.50',
                },
                tax: {
                    amount_e5: 750000,
                    currency_code: 'USD',
                    formatted: '$7.50',
                },
                gross: {
                    amount_e5: 750000,
                    currency_code: 'USD',
                    formatted: '$7.50',
                },
                is_tax_inclusive: true,
            },
            item_charges: {
                total: {
                    display_amount: 'string',
                    net: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    tax: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    gross: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    is_tax_inclusive: true,
                },
                subtotal_including_promos: {
                    display_amount: 'string',
                    net: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    tax: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    gross: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    is_tax_inclusive: true,
                },
                price_breakdown: {
                    cart_item_id: '745b8198-7cc9-4708-8023-281c49b9411a',
                    price_type: 'OPTION',
                    quantity: {
                        amount: 1,
                        unit: 'POUND',
                    },
                    total: {
                        display_amount: 1500000,
                        net: {
                            display_amount: 'string',
                            net: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            tax: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            gross: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            is_tax_inclusive: true,
                        },
                        tax: {
                            display_amount: 'string',
                            net: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            tax: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            gross: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            is_tax_inclusive: true,
                        },
                        gross: {
                            display_amount: 'string',
                            net: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            tax: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            gross: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            is_tax_inclusive: true,
                        },
                        is_tax_inclusive: {
                            display_amount: 'string',
                            net: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            tax: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            gross: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            is_tax_inclusive: true,
                        },
                    },
                    discount: {
                        total: {
                            display_amount: 'string',
                            net: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            tax: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            gross: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            is_tax_inclusive: true,
                        },
                        quantity: {
                            amount: 1,
                            unit: 'POUND',
                        },
                    },
                    unit: {
                        display_amount: 'string',
                        net: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        tax: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        gross: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        is_tax_inclusive: true,
                    },
                },
            },
            fees: {
                total: {
                    display_amount: 'string',
                    net: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    tax: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    gross: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    is_tax_inclusive: true,
                },
                details: [
                    {
                        id: 'SMALL_ORDER_FEE',
                        amount: {
                            display_amount: 'string',
                            net: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            tax: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            gross: {
                                amount_e5: 750000,
                                currency_code: 'USD',
                                formatted: '$7.50',
                            },
                            is_tax_inclusive: true,
                        },
                    },
                ],
            },
            tips: {
                total: {
                    display_amount: 'string',
                    net: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    tax: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    gross: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    is_tax_inclusive: true,
                },
            },
            promotions: {
                total: {
                    display_amount: 'string',
                    net: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    tax: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    gross: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    is_tax_inclusive: true,
                },
                details: [
                    {
                        external_promotion_id: 'string',
                        type: 'string',
                        discount_value: 'string',
                        discount_percentage: 'string',
                        discount_delivery_fee_value: 100,
                        discount_items: [
                            {
                                external_id: 'promo_123',
                                discounted_quantity: 1,
                                discount_amount_applied: -5000,
                            },
                        ],
                    },
                ],
                order_total_excluding_promos: {
                    display_amount: 'string',
                    net: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    tax: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    gross: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    is_tax_inclusive: true,
                },
            },
            adjustment: {
                total: {
                    display_amount: 'string',
                    net: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    tax: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    gross: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                    is_tax_inclusive: true,
                },
                details: {
                    amount: {
                        display_amount: 'string',
                        net: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        tax: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        gross: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        is_tax_inclusive: true,
                    },
                    reason: 'Customer requested extra meat on salad bowl.',
                },
            },
            currency_code: 'string',
            cash_amount_due: {
                display_amount: 'string',
                net: {
                    amount_e5: 750000,
                    currency_code: 'USD',
                    formatted: '$7.50',
                },
                tax: {
                    amount_e5: 750000,
                    currency_code: 'USD',
                    formatted: '$7.50',
                },
                gross: {
                    amount_e5: 750000,
                    currency_code: 'USD',
                    formatted: '$7.50',
                },
                is_tax_inclusive: true,
            },
        },
        tax_reporting: {
            breakdown: {
                items: [
                    {
                        instance_id: 'string',
                        description: 'DELIVERY_FEE',
                        gross_amount: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        net_amount: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                    },
                ],
                fees: [
                    {
                        instance_id: 'string',
                        description: 'DELIVERY_FEE',
                        gross_amount: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        net_amount: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                    },
                ],
                promotions: [
                    {
                        instance_id: 'string',
                        description: 'DELIVERY_FEE',
                        gross_amount: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                        net_amount: {
                            amount_e5: 750000,
                            currency_code: 'USD',
                            formatted: '$7.50',
                        },
                    },
                ],
            },
            origin: {
                id: 'string',
                country_iso2: 'string',
                postal_code: 'string',
            },
            destination: {
                id: 'string',
                country_iso2: 'string',
                postal_code: 'string',
            },
            remittance_info: [
                {
                    entity: 'UBER',
                    type: 'SUBTOTAL',
                    amount: {
                        amount_e5: 750000,
                        currency_code: 'USD',
                        formatted: '$7.50',
                    },
                },
            ],
        },
    },
    is_order_accuracy_risk: true,
    store_instructions: 'add example ketchup',
    preparation_time: {
        ready_for_pickup_time_secs: 500,
        source: 'PREDICTED_BY_UBER',
        ready_for_pickup_time: '2016-09-01T10:11:12.123456-0500',
    },
    completed_time: '2016-09-01T10:11:12.123456-0500',
    eligible_actions: {
        adjust_ready_for_pickup_time: {
            is_eligible: true,
            reason: 'string',
        },
        mark_out_of_item: {
            is_eligible: true,
            reason: 'string',
        },
        cancel: {
            is_eligible: true,
            reason: 'string',
        },
        mark_cannot_fulfill: {
            is_eligible: true,
            reason: 'string',
        },
        adjust_etd_time: {
            is_eligible: true,
            reason: 'string',
        },
        customer_request_etd: {
            is_eligible: true,
            reason: 'string',
        },
    },
    failure_info: {
        reason: 'POS_DENIED',
        failure_attributed_to_party: 'UNKNOWN',
        will_merchant_be_paid: true,
        description: 'string',
    },
    created_time: '2016-09-01T10:11:12.123456-0500',
    has_membership_pass: true,
    retailer_loyalty_info: {
        loyalty_number: 1240822,
    },
};
