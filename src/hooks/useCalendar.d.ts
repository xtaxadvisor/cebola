export declare function useCalendar(): {
    events: import("../services/api/calendar").Event[] | undefined;
    isLoading: boolean;
    createEvent: import("@tanstack/react-query").UseMutateFunction<import("../services/api/calendar").Event, Error, CreateEventDTO, unknown>;
    updateEvent: import("@tanstack/react-query").UseMutateFunction<import("../services/api/calendar").Event, Error, UpdateEventDTO, unknown>;
    deleteEvent: import("@tanstack/react-query").UseMutateFunction<void, Error, string, unknown>;
};
