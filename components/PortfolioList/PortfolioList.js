import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
class PortfolioList extends React.Component {
    state = {
        projects: [{ title: 'BiHogar', img: '/img/Bihogar.png' }, { title: 'El Camino', img: '/img/Camino.png' }, { title: 'El Camino', img: '/img/dotcom.png' }]
    }
    render() {
        return (
            <Container maxWidth="lg" className="portfolio-top">
                  <h1 className="titles-bg-black">Portfolio</h1>
                  <h3 className="sub-bg-black">Most recent work</h3>
                <Grid container spacing={5}>
                    {this.state.projects.map((e) => (
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <div className="card-project">
                                <img src={e.img} className="img-project"></img>
                            </div>

                        </Grid>
                    ))}
                </Grid>
                <style jsx global>{`
                    .sub-bg-black{
                        font-family:'Roboto';
                    font-size:20px;
                    margin-top:0px;
                    color:#A6ACAF;

                    }
                    .img-project{
                        width:100%;
                    }
                    .portfolio-top{
                        padding-top:40px;
                    }
                    .card-project{
                        background-color:white;
                        -webkit-box-shadow: 0px 0px 96px -41px rgba(46,74,117,0.7);
-moz-box-shadow: 0px 0px 96px -41px rgba(46,74,117,0.7);
box-shadow: 0px 0px 96px -41px rgba(46,74,117,0.7);
                    }
                    `}</style>
            </Container>

        )
    }
}
export default PortfolioList;