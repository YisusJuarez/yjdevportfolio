import Container from "@material-ui/core/Container";
import NavBar from "../NavBar/NavBar";
import Grid from "@material-ui/core/Grid";
import ModalCorreo from "../ModalCorreo/ModalCorreo";
import Typist from "react-typist";
function HeadContent(props) {
  return (
    <div className="bg">
      <NavBar></NavBar>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item md={7} sm={12}>
           
              <h1 className="h1-title">Freelance</h1>
              <h2 className="h2-subtitle">
                Front End <span className="h2-bgblack">Developer</span>
              </h2>
          
            <Typist
              cursor={{
                show: false,
              }}
              stdTypingDelay={20}
              avgTypingDelay={60}
            >
            <p className="text-desc">
              Hi, I’m Jesús Juárez.
              <br />
              I’ll boost your brand with the power of responsive design,
              <br /> UX, UI interface & SEO.
            </p>
            </Typist>
            <div className="center">
              <ModalCorreo></ModalCorreo>
              <button className="btn-portafolio">PORTAFOLIO</button>
            </div>
          </Grid>
          <Grid item md={5}>
            <img className="img-person" src="/img/person.png"></img>
          </Grid>
        </Grid>
      </Container>
      <style jsx>{`
        .btn-portafolio {
          background-color: black;
          color: white;
          font-family: "Roboto";
          font-size: 500;
          border: 0px;
          font-size: 14px;
          padding: 10px 25px 10px 25px;
          cursor: pointer;
          -webkit-box-shadow: -1px 0px 26px -5px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: -1px 0px 26px -5px rgba(0, 0, 0, 0.75);
          box-shadow: -1px 0px 26px -5px rgba(0, 0, 0, 0.75);
          margin-left: 10px;
        }
        .btn-portafolio:focus {
          outline: none !important;
          outline-width: 0 !important;
        }
        .img-person {
          width: 28vw;
          text-align: center;
          display: block;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
        }

        .bg {
          background-image: url("/img/bg.png");
          height: 100vh;
          background-size: cover;
          background-position: center;
          min-height: 500px;
        }
        .h1-title {
          font-family: "Roboto";
          font-weight: 100;
          font-size: 55px;
          margin: 0px;
          padding-top: 7%;
        }
        .h2-subtitle {
          font-family: "Roboto";
          font-weight: 500;
          font-size: 70px;
          margin: 0px;
        }
        .h2-bgblack {
          background-color: black;
          color: white;
          padding-left: 5px;
          padding-right: 5px;
        }
        .text-desc {
          font-family: "Roboto";
          font-weight: 200;
          font-size: 24px;
        }
        @media only screen and (max-width: 1000px) {
          .btn-portafolio {
            margin-left: 0;
            margin-top: 20px;
          }
          .center {
            text-align: center;
          }
          .img-person {
            display: none;
          }
          .h1-title {
            font-size: 35px;
            text-align: center;
          }
          .h2-subtitle {
            font-family: "Roboto";
            font-weight: 500;
            font-size: 60px;
            margin: 0px;
            text-align: center;
          }
          .text-desc {
            text-align: center;
          }
        }
        @media only screen and (min-width: 1440px) {
          .img-person {
            padding-top: 8vw;
          }
          .h1-title {
            padding-top: 8vw;
            font-size: 45px;
          }
          .h2-subtitle {
            font-size: 80px;
          }
        }
      `}</style>
    </div>
  );
}

export default HeadContent;
