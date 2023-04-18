import { DateInput } from "@fullcalendar/core";

export interface IEvento {
    id?: React.Key,
    title: string,
    start?: DateInput,
    end?: DateInput
}