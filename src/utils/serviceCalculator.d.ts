/**
 * Service types and their base pricing
 */
export declare const ServiceTypes: {
    readonly TAX_PLANNING: "tax-planning";
    readonly FINANCIAL_REVIEW: "financial-review";
    readonly INVESTMENT_ADVISORY: "investment-advisory";
    readonly BUSINESS_CONSULTING: "business-consulting";
    readonly TAX_PREPARATION: "tax-preparation";
};
/**
 * Service pricing configuration
 */
export declare const ServicePricing: Record<ServiceType, ServicePriceConfig>;
/**
 * Discount tiers based on total service value
 */
export declare const DiscountTiers: {
    threshold: number;
    percentage: number;
}[];
/**
 * Service type definition
 */
export type ServiceType = typeof ServiceTypes[keyof typeof ServiceTypes];
/**
 * Service price configuration interface
 */
export interface ServicePriceConfig {
    basePrice: number;
    hourlyRate: number;
    minimumHours: number;
}
/**
 * Service request interface
 */
export interface ServiceRequest {
    type: ServiceType;
    hours?: number;
    quantity?: number;
    addons?: ServiceAddon[];
}
/**
 * Service addon interface
 */
export interface ServiceAddon {
    name: string;
    price: number;
    quantity?: number;
}
/**
 * Cost breakdown interface
 */
export interface CostBreakdown {
    subtotal: number;
    addons: number;
    discount: number;
    total: number;
    details: {
        basePrice: number;
        hourlyCharges: number;
        addonBreakdown: Array<{
            name: string;
            quantity: number;
            price: number;
            total: number;
        }>;
        appliedDiscount: {
            percentage: number;
            amount: number;
        };
    };
}
/**
 * Calculates the total cost for requested services including any applicable discounts
 * @param services - Array of service requests
 * @returns Detailed cost breakdown
 * @throws Error if input validation fails
 */
export declare function calculateServicesCost(services: ServiceRequest[]): CostBreakdown;
