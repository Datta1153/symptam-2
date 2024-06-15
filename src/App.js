import logo from "./logo.svg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa} from '@fortawesome/free-solid-svg-icons'
import "./App.css";
function App() {
  return (
    <div className="container-fluid d-flex flex-column vh-100">
      <div className="row h-100">
        <div className="col-lg-8 d-none d-lg-flex">
          <div className="position-relative auth-bg rounded-lg w-100 m-3 me-0">
            <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
              <h1 className="mt-0 mb-4 text-success fw-bold">Symptam</h1>
              <div className="w-75">
                <p className="text-light">
                  Symptam is a cloud-based software that helps doctors and
                  healthcare providers with a seamless and efficient solution
                  for all their administrative needs. This user-friendly
                  software streamlines appointment scheduling at hospital desk
                  with a hassle-free & user-friendly interface, secure
                  e-prescription generation, efficient prescription retrieval,
                  and integrated health records.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center">
          <div className="card h-75 px-5 ">
            <div className="card-body  d-flex flex-column justify-content-evenly align-items-center">
              <h1 className="card-title mt-0 text-success fw-bold">Symptam</h1>
              <form>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Remember me
                    <a style={{ color: "blue", cursor: "pointer" }}>
                      {" "}
                      Forgot Password ?
                    </a>
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="bg-light w-100 h-75 d-flex align-items-center justify-content-center"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
