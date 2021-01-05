import Container from "@material-ui/core/Container";
import NavBar from "../NavBar/NavBar";
import Grid from "@material-ui/core/Grid";
import Typist from "react-typist";



function HeadContent(props) {

  return (
    <div className="bg">
      <NavBar></NavBar>
    
      <Container maxWidth="lg" className="full-size-cont">
        <Grid container spacing={1}>
          <Grid item md={12} sm={12}>

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
                Hi 👋, I’m Jesús Juárez.
                <br />
                I’ll boost your brand with the power of responsive design,
                <br /> UX, UI interface & SEO 🔥.
              </p>
            </Typist>
           
            <p className="scroll">SCROLL TO SEE MORE __</p>
          </Grid>
        </Grid>
      </Container>
      
      
      <style jsx>{`
      .scroll{
        color:#4A235A;
        font-family: "Roboto";
          font-weight: bolder;
      }
      .bg{
        background-image:url('/img/bg-desk-2.png');
       background-size:cover;
       background-repeat:none;
       background-position:top;
      }
        .btn-portafolio {
          margin-top:20px;
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
      

        .bg {          
          height: 100vh;
          min-height: 500px;
        }
        .h1-title {
          font-family: "Roboto";
          font-weight: 300;
          font-size: 75px;
          margin: 0px;
          padding-top: 30%;
          color:white;
        }
        .h2-subtitle {
          font-family: "Roboto";
          font-weight: 500;
          font-size: 90px;
          margin: 0px;
          color:white;
        }
        .h2-bgblack {
          
          color: black;
          padding-left: 5px;
          padding-right: 5px;

        }
        .text-desc {
          font-family: "Roboto";
          font-weight: 200;
          font-size: 42px;
        }
        @media only screen and (min-width: 960px) and (max-width:1181px){
         
         
          .h1-title {
            padding-top:13vw;
            font-size: 55px;
            text-align: left;
          }
          .h2-subtitle {
            font-family: "Roboto";
            font-weight: 500;
            font-size: 90px;
            margin: 0px;
            text-align: left;
          }
          .text-desc {
            padding-top: 40px;
            text-align: left;
            font-size:40px;
          }
          .center {
            text-align: left;
          }
        }
        @media only screen and (max-width: 959px) {
          .scroll{
            text-align:center;
          }
          .btn-portafolio {
            margin-left: 0;
            margin-top: 20px;
          }
          .center {
            text-align: center;
          }
        
          .h1-title {
            font-size: 35px !important;
            text-align: center;
            color:white;
          }
          .h2-subtitle {
            font-family: "Roboto";
            font-weight: 500;
            font-size: 60px !important;
            margin: 0px;
            text-align: center;
            color:white;
          }
          .text-desc {
            text-align: center;
            font-size:25px;
          }
        }
        @media only screen and (min-width: 1182px) {
        
          .h1-title {
            padding-top: 8vw;
            font-size: 60px;
          }
          .h2-subtitle {
            font-size: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default HeadContent;
