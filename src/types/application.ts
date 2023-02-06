import ParticipationForm from "./ParticipationForm";

export type Application = {
    id: number;
    name: string;
    company: string;
    mobileNumber: string;
    email: string;
    participationForm: ParticipationForm
};

