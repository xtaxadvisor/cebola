import { api } from '../api';
import { addMinutes } from 'date-fns';
export const consultationService = {
    getAll: () => api.get('/consultations'),
    getById: (id) => api.get(`/consultations/${id}`),
    getByClient: (clientId) => api.get(`/clients/${clientId}/consultations`),
    getByProfessional: (professionalId) => api.get(`/professionals/${professionalId}/consultations`),
    getAvailability: async (date, professionalId, duration = 60) => {
        const response = await api.get('/consultations/availability', {
            params: { date, professionalId, duration }
        });
        // Process the slots to ensure they're properly formatted
        return response.map(slot => ({
            ...slot,
            startTime: new Date(slot.startTime).toISOString(),
            endTime: new Date(slot.endTime).toISOString()
        }));
    },
    schedule: async (data) => {
        // Validate time slot availability before scheduling
        const availability = await consultationService.getAvailability(data.startTime, data.professionalId);
        const requestedSlot = {
            startTime: new Date(data.startTime).toISOString(),
            endTime: new Date(data.endTime).toISOString()
        };
        const isAvailable = availability.some(slot => slot.startTime === requestedSlot.startTime &&
            slot.endTime === requestedSlot.endTime &&
            slot.available);
        if (!isAvailable) {
            throw new Error('Selected time slot is no longer available');
        }
        return api.post('/consultations', data);
    },
    update: ({ id, ...data }) => api.put(`/consultations/${id}`, data),
    cancel: (id, reason) => api.put(`/consultations/${id}/cancel`, { reason }),
    generateMeetingLink: (id) => api.post(`/consultations/${id}/meeting-link`),
    uploadDocument: (id, file) => {
        const formData = new FormData();
        formData.append('document', file);
        return api.post(`/consultations/${id}/documents`, formData);
    },
    getRecording: (id) => api.get(`/consultations/${id}/recording`),
    // New helper methods for the booking calendar
    generateTimeSlots: (date, duration = 30) => {
        const slots = [];
        let currentTime = new Date(date);
        currentTime.setHours(9, 0, 0, 0); // Start at 9 AM
        const endTime = new Date(date);
        endTime.setHours(17, 0, 0, 0); // End at 5 PM
        while (currentTime < endTime) {
            const slotEnd = addMinutes(currentTime, duration);
            slots.push({
                startTime: currentTime.toISOString(),
                endTime: slotEnd.toISOString(),
                available: true
            });
            currentTime = slotEnd;
        }
        return slots;
    },
    checkSlotAvailability: async (startTime, endTime, professionalId) => {
        try {
            const response = await api.get('/consultations/check-availability', {
                params: { startTime, endTime, professionalId }
            });
            return response.available;
        }
        catch (error) {
            console.error('Error checking slot availability:', error);
            return false;
        }
    }
};
