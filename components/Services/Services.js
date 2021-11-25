import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ServicesCard from "../ServicesCard/ServicesCard";
import { servicesOfered } from "../../services/servidesOfered";
import { useState } from "react";
const Services = () => {
  const [servicesList, setServicesList] = useState(servicesOfered());
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <h1 className="titles-bg-black-2">My Services</h1>
            <h3 className="sub-bg-black">Best for your business</h3>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Grid container>
              {servicesList.map((servicio, id) => (
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <ServicesCard
                    key={id}
                    name={servicio.name}
                    img={servicio.img}
                  ></ServicesCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <style jsx>{`
        .titles-bg-black-2 {
          margin-top: 0px;
          font-family: "Roboto";
          font-size: 55px;
          margin-bottom: 5px;
        }
        @media only screen and (max-width: 959px) {
          .titles-bg-black-2 {
            margin-top: 0px;
            font-family: "Roboto";
            font-size: 30px;
            margin-bottom: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
