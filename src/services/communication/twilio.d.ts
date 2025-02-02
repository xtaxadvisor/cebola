declare class TwilioService {
    private static instance;
    private constructor();
    static getInstance(): TwilioService;
    sendSMS(to: string, message: string): Promise<any>;
    sendWhatsApp(to: string, message: string): Promise<any>;
    makeCall(to: string, twiml: string): Promise<any>;
}
export declare const twilioService: TwilioService;
export {};
