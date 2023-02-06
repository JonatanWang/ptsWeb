type Args = {
    status: "idle" | "loading" | "success" | "error"
}

const ApiStatus = ({status}: Args) => {
    switch(status) {
        case "idle":
            return <div>Idle...</div>;
        case "loading":
            return <div>Loading...</div>;
        case "error":
            return <div>Error communicating with the back-end.</div>
        default:
            throw Error("Unknow Api status.");
    }
};

export default ApiStatus;