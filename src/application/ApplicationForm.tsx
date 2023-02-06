import { useState } from "react";
import { Application } from "../types/application";

type Args = {
    application: Application;
    submitted: (application:Application) => void;
}

const ApplicationForm = ({application, submitted}: Args) => {

    const [applicationState, setApplicationState] = useState({...application});

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();
        submitted(applicationState);
      };
    
      return (
        <form className="mt-2">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name, at least 4 letters"
              value={applicationState.name}
              onChange={(e) =>
                setApplicationState({ ...applicationState, name: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your company"
              value={applicationState.company}
              onChange={(e) =>
                setApplicationState({ ...applicationState, company: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your email e.g. john.doe@pts.se"
              value={applicationState.email}
              onChange={(e) =>
                setApplicationState({ ...applicationState, email: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="0 - 9, only numbers, e.g. 0701234567"
              value={applicationState.mobileNumber}
              onChange={(e) =>
                setApplicationState({ ...applicationState, mobileNumber: e.target.value })
              }
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="participationForm">Choose how to participate: 1 - In person; 0 - At distance</label>
            <input
              type="number"
              min={0}
              max={1}
              className="form-control"
              placeholder="1: In person; 0: At distance"
              value={applicationState.participationForm}
              onChange={(e) =>
                setApplicationState({ ...applicationState, participationForm
                    : parseInt(e.target.value) })
              }
            />
          </div>

          <button
            className="btn btn-success mt-2 col-md-12 text-center"
            disabled={!applicationState.name || !applicationState.email}
            onClick={onSubmit}
          >
            Submit
          </button>
        </form>
      );
};

export default ApplicationForm;