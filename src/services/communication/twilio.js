class TwilioService {
    static instance;
    constructor() { }
    static getInstance() {
        if (!TwilioService.instance) {
            TwilioService.instance = new TwilioService();
        }
        return TwilioService.instance;
    }
    async sendSMS(to, message) {
        try {
            const response = await fetch('/.netlify/functions/send-sms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ to, message })
            });
            if (!response.ok)
                throw new Error('Failed to send SMS');
            return await response.json();
        }
        catch (error) {
            console.error('SMS sending error:', error);
            throw error;
        }
    }
    async sendWhatsApp(to, message) {
        try {
            const response = await fetch('/.netlify/functions/send-whatsapp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ to, message })
            });
            if (!response.ok)
                throw new Error('Failed to send WhatsApp message');
            return await response.json();
        }
        catch (error) {
            console.error('WhatsApp sending error:', error);
            throw error;
        }
    }
    async makeCall(to, twiml) {
        try {
            const response = await fetch('/.netlify/functions/make-call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ to, twiml })
            });
            if (!response.ok)
                throw new Error('Failed to initiate call');
            return await response.json();
        }
        catch (error) {
            console.error('Call initiation error:', error);
            throw error;
        }
    }
}
export const twilioService = TwilioService.getInstance();
