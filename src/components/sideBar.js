import React, { useState } from "react";
import "./sideBar.css";
import { MdDashboard } from "react-icons/md";
import { IoMdSchool, IoMdSettings } from "react-icons/io";
import profilePic from "./ProfilePic.svg";
import { Link } from "react-router-dom";

function SideBar() {
  const [inputText, setInputText] = useState("");

  const [post, setPost] = useState([
    {
      username: "username",
      postData:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      time: "12:20",
    },
    {
      username: "username",
      postData: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      time: "13:40",
    },
    {
      username: "username",
      postData: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
      time: "4:20",
    },
  ]);

  const setData = () => {
    var currentdate = new Date();
    var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();
    setPost([
      { username: "username", postData: inputText, time: datetime },
      ...post,
    ]);
  };

  return (
    <>
      <div className="row" style={{ marginRight: "0px" }}>
        <div className="col-2">
          <ul style={{ marginLeft: "-40px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <MdDashboard />
                Dashboard
              </li>
            </Link>
            <Link to="/sideBar" style={{ textDecoration: "none" }}>
              <li>
                <IoMdSchool />
                Lorem
              </li>
            </Link>
            <Link to="#" style={{ textDecoration: "none" }}>
              <li>
                <IoMdSettings />
                Ipsum
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-9 ml-5">
          <div
            style={{
              marginRight: "50px",
              marginTop: "42px",
            }}
            className="card"
          >
            <div style={{ borderRadius: "20px" }} className="card-body">
              <form>
                <input
                  onChange={(e) => setInputText(e.target.value)}
                  style={{
                    backgroundColor: "#fafafa",
                    height: "98px",
                    borderRadius: "15px",
                  }}
                  className="form-control"
                  type="text"
                  placeholder="Share something with your class.."
                />
                <div
                  style={{
                    float: "right",
                    margin: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "180px",
                      height: "50px",
                      borderRadius: "11px",
                    }}
                    className="btn-group"
                  >
                    <button
                      style={{
                        backgroundColor: "#ff6c40",
                        fontSize: "20px",
                      }}
                      type="button"
                      className="btn"
                      onClick={setData}
                    >
                      Share
                    </button>
                    <button
                      style={{
                        backgroundColor: "#ffc480",
                      }}
                      type="button"
                      className="btn  dropdown-toggle"
                    ></button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {post.map((elem, index) => (
            <div
              key={index}
              style={{
                marginTop: "15px",
                marginRight: "50px",
                padding: "15px",
              }}
              className="card"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-2 text-center">
                    <img src={profilePic} alt="" />
                  </div>
                  <div className="col-8">
                    <div className="row">
                      <div className="col-12">
                        <p>{elem.username}</p>
                      </div>

                      <div className="col-12">
                        <p>{elem.postData}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 text-right">{elem.time} PM</div>
                </div>
              </div>
            </div>
          ))}

          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default SideBar;
<h1>
  . Aspernatur, molestiae! Necessitatibus consequatur sit architecto culpa
  ratione? Vitae natus ipsam quam exercitationem vero cumque. Aliquam cumque
  recusandae in quod possimus architecto.
</h1>;
