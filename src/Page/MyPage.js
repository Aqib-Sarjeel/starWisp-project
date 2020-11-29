import { MdDashboard } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import Square from "./Squrare.svg";
import Admin from "./Admin.svg";
import Teacher from "./Teacher.svg";
import Student from "./Student.svg";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

const data2 = [
  {
    uv: 40,
  },
  {
    name: "Page B",
    uv: 30,
  },
  {
    name: "Page C",
    uv: 20,
  },
  {
    uv: 27,
  },
  {
    uv: 18,
  },
  {
    uv: 23,
  },
  {
    uv: 34,
  },
];

const data = [
  {
    uv: 4000,
    pv: 2400,
    av: 1400,
  },
  {
    uv: 3000,
    pv: 1398,

    av: 2200,
  },
  {
    uv: 2000,
    pv: 9800,
    av: 3400,
  },
  {
    uv: 2780,
    pv: 3908,
    av: 3200,
  },
  {
    uv: 1890,
    pv: 4800,
    av: 5200,
  },
  {
    uv: 2390,
    pv: 3800,
    av: 3200,
  },
  {
    uv: 3490,
    pv: 4300,
    av: 6200,
  },
];

function MyPage() {
  return (
    <div>
      <div
        className="row"
        style={{ background: "#E5E5E5", marginRight: "0px" }}
      >
        <div className="col-3">
          <ul
            style={{
              textDecoration: "none",
              marginLeft: "-40px",
            }}
          >
            <Link to="/">
              <li>
                <MdDashboard />
                Dashboard
              </li>
            </Link>
            <Link to="/sideBar">
              <li>
                <IoMdSchool />
                Lorem
              </li>
            </Link>
            <Link>
              <li>
                <IoMdSettings />
                Ipsum
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-9">
              <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input
                  class="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              <div className="row">
                <div className="col-12">
                  <br />
                </div>
                <div
                  className="col-12 pt-1"
                  style={{ height: "55vh", background: "#fff" }}
                >
                  <h4>
                    Sales Report{" "}
                    <span className="text-muted">September 2020</span>
                  </h4>
                  <br />
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />

                    <Line type="monotone" dataKey="pv" stroke="#FF6C40" />
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#826AF9"
                      height="3px"
                    />
                    <Line type="monotone" dataKey="av" stroke="#FFE700" />
                  </LineChart>
                </div>
              </div>
            </div>

            <div className="col-3 text-center">
              <br />
              <br />
              <div
                style={{
                  backgroundColor: "#ff6c40",
                  height: "45vh",
                }}
              >
                <h4
                  style={{
                    color: "#fff",
                  }}
                >
                  17 Sep
                </h4>
                <div
                  style={{
                    backgroundColor: "#ffe700",

                    marginTop: "10px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    borderRadius: "20px",
                    paddingTop: "10px",
                    paddingBottom: "15px",
                  }}
                  class="card-body"
                >
                  <h6 class="card-title">$1,204.33</h6>
                  <p class="card-text">Revenue</p>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    borderRadius: "20px",
                    paddingTop: "10px",
                    paddingBottom: "15px",

                    backgroundColor: "#1ffd77",
                  }}
                  class="card-body"
                >
                  <h6 class="card-title">33</h6>
                  <p class="card-text">Quotations</p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <br />
              <br />
              <br />
              <div className="row">
                <div
                  className="col-4 p-3 mr-1"
                  style={{ background: "#fff", borderRadius: "20px" }}
                >
                  <h5>NotePad</h5>
                  <p>
                    <span>
                      {" "}
                      <strong> Title</strong> This is title 1{" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      {" "}
                      <strong> Title</strong> This is title 1{" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      {" "}
                      <strong> Title</strong> This is title 1{" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      {" "}
                      <strong> Title</strong> This is title 1{" "}
                    </span>
                  </p>
                  <p>
                    <span>
                      {" "}
                      <strong> Title</strong> This is title 1{" "}
                    </span>
                  </p>
                </div>

                <div className="col-4">
                  <div className="row">
                    <div
                      className="col-12 p-0"
                      style={{ background: "#fff", borderRadius: "15px" }}
                    >
                      <AreaChart
                        width={220}
                        height={140}
                        data={data2}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />

                        <YAxis />

                        <Area
                          type="monotone"
                          dataKey="uv"
                          stroke="#8884d8"
                          fill="#8884d8"
                        />
                      </AreaChart>
                    </div>

                    <div className="col-12">
                      <br />
                    </div>

                    <div
                      className="col-12"
                      style={{ background: "#fff", borderRadius: "10px" }}
                    >
                      <div className="row">
                        <div className="col-8">
                          <h3>Inbox</h3>
                        </div>

                        <div className="col-4 text-center">87</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-3 ml-1">
                  <div className="row">
                    <div
                      className="col-12"
                      style={{ background: "#fff", borderRadius: "10px" }}
                    >
                      <div className="row">
                        <div className="col-12 text-center">this month</div>

                        <div className="col-5">
                          <h3> +74%</h3>
                        </div>

                        <div className="col-6">
                          <LineChart
                            width={100}
                            height={50}
                            data={data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />

                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#FF6C40"
                            />
                          </LineChart>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <br />
                    </div>

                    <div
                      className="col-12"
                      style={{ background: "#fff", borderRadius: "10px" }}
                    >
                      <div className="row">
                        <div className="col-12 text-center">this month</div>

                        <div className="col-5">
                          <h3> +74%</h3>
                        </div>

                        <div className="col-6">
                          <LineChart
                            width={100}
                            height={50}
                            data={data}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />

                            <Line
                              type="monotone"
                              dataKey="pv"
                              stroke="#FF6C40"
                            />
                          </LineChart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="row">
            <div className="col-md-6">
              {" "}
              <h5>Notification</h5>
            </div>
            <div className="col-md-6">
              {" "}
              <h6 className="text-muted">Events</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={Square} alt="" />
            </div>
            <div className="col-md-9">
              <h4>Admin</h4>
              <p>Your faculty uploaded the syllabus</p>
              <p>3 minutes ago</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <img src={Student} alt="" />
            </div>
            <div className="col-md-9">
              <h4>Student</h4>
              <p>Your faculty uploaded the syllabus</p>
              <p>3 minutes ago</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={Teacher} alt="" />
            </div>
            <div className="col-md-9">
              <h4>Teacher</h4>
              <p>Your faculty uploaded the syllabus</p>
              <p>3 minutes ago</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={Admin} alt="" />
            </div>
            <div className="col-md-9">
              <h4>Admin</h4>
              <p>Your faculty uploaded the syllabus</p>
              <p>3 minutes ago</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={Admin} alt="" />
            </div>
            <div className="col-md-9">
              <h4>Admin</h4>
              <p>Your faculty uploaded the syllabus</p>
              <p>3 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
