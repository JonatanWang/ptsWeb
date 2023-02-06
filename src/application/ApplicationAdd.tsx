import { useAddApplication } from "../hooks/ApplicationHooks";
import { Application } from "../types/application";
import ParticipationForm from "../types/ParticipationForm";
import ApplicationForm from "./ApplicationForm";

const ApplicationAdd = () =>  {
    const addApplicationMutation = useAddApplication();

    const application: Application = {
        id: 0,
        name: "",
        company: "",
        email: "",
        mobileNumber: "",
        participationForm: ParticipationForm.IN_PERSON
    }

    return (
        <>
          <ApplicationForm
            application={application}
            submitted={(application) => addApplicationMutation.mutate(application)}
          />
        </>
      );
};

export default ApplicationAdd;