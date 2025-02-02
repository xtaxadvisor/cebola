import { api } from '../api';
export const calendarService = {
    getEvents: () => api.get('/calendar/events'),
    getEventById: (id) => api.get(`/calendar/events/${id}`),
    createEvent: (data) => api.post('/calendar/events', data),
    updateEvent: ({ id, ...data }) => api.put(`/calendar/events/${id}`, data),
    deleteEvent: (id) => api.delete(`/calendar/events/${id}`),
    getAvailability: async (date, professionalId) => {
        const response = await api.get('/calendar/availability', {
            params: { date, professionalId }
        });
        return response.map(slot => ({
            ...slot,
            startTime: new Date(slot.startTime).toISOString(),
            endTime: new Date(slot.endTime).toISOString()
        }));
    },
    syncCalendar: (provider) => api.post('/calendar/sync', { provider }),
    sendBookingConfirmation: async (eventId) => {
        return api.post(`/calendar/events/${eventId}/confirm`);
    },
    checkAvailability: async (startTime, endTime, professionalId) => {
        return api.get('/calendar/check-availability', {
            params: { startTime, endTime, professionalId }
        });
    }
};
