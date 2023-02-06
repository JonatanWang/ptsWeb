import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplicationList from "../application/ApplicationList";
import "./App.css";
import Header from "./Header";
import ApplicationSuccess from "../application/ApplicationSuccess";
import ApplicationAdd from "../application/ApplicationAdd";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header subtitle="Välkommen till evenemanget!"></Header>
        <Routes>
          <Route path="/" element={<ApplicationList></ApplicationList>}></Route>
          <Route path="/application/:id" element={<ApplicationSuccess></ApplicationSuccess>}></Route>
          <Route path="/application/success" element={<ApplicationSuccess></ApplicationSuccess>}></Route>
          <Route path="/application/add" element={<ApplicationAdd></ApplicationAdd>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
