import useFetchApplications from "../hooks/ApplicationHooks";
import { Application } from "../types/application";
import ApiStatus from "../ApiStatus";
import ParticipationForm from "../types/ParticipationForm";
import { Link, useNavigate } from "react-router-dom";

const ApplicationList = () => {
  const nav = useNavigate();

  const { data, status, isSuccess } = useFetchApplications();

  if (!isSuccess) return <ApiStatus status={status} />;

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Ansökningar skickas in för närvarande ...
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Participation Form</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((a: Application) => (
              <tr key={a.id} onClick={() => nav(`/application/${a.id}`)}>
                <td>{a.name}</td>
                <td>{a.company}</td>
                <td>{a.mobileNumber}</td>
                <td>{a.email}</td>
                <td>{ParticipationForm[a.participationForm]}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Link
        className="btn btn-warning col-md-12 text-center"
        to="/application/add"
      >
        Apply
      </Link>
    </div>
  );
};

export default ApplicationList;
