import React, { useEffect, useState } from "react";
import ServiceDetail from "./ServiceDetail/ServiceDetail";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="services-section">
        <div className="services-header">
          <h1>Our Services</h1>
        </div>
        <div className="services-card">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
