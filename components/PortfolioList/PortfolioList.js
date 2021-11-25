import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import {getProjects} from '../../services/getProjects';
const PortfolioList = () => {
  const [projects, setProjects] = useState(getProjects());
  return (
    <Container maxWidth="lg" className="portfolio-top">
      <h1 className="titles-bg-black">Portfolio</h1>
      <h3 className="sub-bg-black">Most recent work</h3>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <img src={project.img} className="img-project card-project"></img>
          </Grid>
        ))}
      </Grid>
      <style jsx global>{`
        .sub-bg-black {
          font-family: "Roboto";
          font-size: 20px;
          margin-top: 0px;
          color: #a6acaf;
        }
        .img-project {
          width: 100%;
          object-fit: cover;
          -webkit-box-shadow: 0px 0px 30px -2px rgba(166, 172, 175, 0.57);
          -moz-box-shadow: 0px 0px 30px -2px rgba(166, 172, 175, 0.57);
          box-shadow: 0px 0px 30px -2px rgba(166, 172, 175, 0.57);
        }
        .portfolio-top {
          padding-top: 40px;
        }
      `}</style>
    </Container>
  );
};

export default PortfolioList;
