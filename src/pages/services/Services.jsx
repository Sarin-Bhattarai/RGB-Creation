import "./services.css";
import React, { useState, useEffect } from "react";
import { getServices } from "../../utils/api/serviceApi";
import ShowService from "../../utils/data/showService";
import Service1 from "../../extra/cinema.png";
import Service2 from "../../extra/photo.jpg";
import Service3 from "../../extra/short reels.png";
import Service4 from "../../extra/wed-2.jpg";
import Service5 from "../../extra/serial.jpeg";

const Services = () => {
  const [state, setState] = useState({
    services: [],
    error: null,
  });

  const fetchServices = () => {
    setState({ ...state, error: null });
    getServices()
      .then(({ data }) => setState({ ...state, services: data, error: null }))
      .catch({ ...state, error: null });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <section className="global">
      <div className="container highMargin">
        <div className="service-grid">
          <div className="heading">
            <h1>
              Best <span className="span">Serving</span> Industry
            </h1>
            <h2>
              In <span className="span">Context</span> Of Nepal
            </h2>
            <p>
              - All Kind of Photography (Wedding, Potraits, Portfolio Etc....).
            </p>
            <p>
              - All Kind of Videography (Wedding, Short movie, Music video,
              Documentary, Advertisement, Other Programs & Many more.
            </p>
            {/* <p>- Event Management</p>
            <p>- Video Editing, Graphics, Animations & Many more ...</p> */}
          </div>
          <div className="service-card" id="rr">
            <img src={Service1} alt="s1" />
            <h4>Cinema</h4>
          </div>
          <div
            style={{
              marginTop: "5%",
            }}
            className="service-card"
          >
            <img src={Service2} alt="s1" />
            <h4>Photography</h4>
          </div>
        </div>

        <div
          className="service-grid"
          style={{
            marginTop: "40px",
          }}
        >
          <div className="service-card" id="rr">
            <img src={Service3} alt="s1" />
            <h4>Short Reels</h4>
          </div>
          <div
            style={{
              marginTop: "7%",
            }}
            className="service-card"
          >
            <img src={Service4} alt="s1" />
            <h4>Marriage Package</h4>
          </div>
          <div
            style={{
              marginTop: "20%",
            }}
            className="service-card"
          >
            <img src={Service5} alt="s1" />
            <h4>TV Serial Shooting</h4>
          </div>
        </div>
        <div className="heading">
          <h2>
            Other <span className="span">Services</span> From Us
          </h2>
        </div>
        <div className="res-grid highMargin">
          {state.services.map((s) => {
            return (
              <>
                <div className="res-details">
                  <ShowService services={s?.image} url="uploads" />
                  <h1>{s?.title}</h1>
                  <p
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {s?.description}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
