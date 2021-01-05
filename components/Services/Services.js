import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import ServicesCard from '../ServicesCard/ServicesCard';
class Services extends React.Component {
    state = {
        services: [
            { name: 'Web Development', img: '/img/web.png' },
            { name: 'Web Design', img: '/img/diseno-web.png' },
            { name: 'Responsive Design', img: '/img/responsive.png' },
            { name: 'SEO Optimization', img: '/img/bar-chart.png' }
        ]
    }
    render() {
        return (
            <>
                <Container maxWidth="lg">
                    <Grid container spacing={2} >
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                            <h1 className="titles-bg-black-2">Services</h1>
                            <h3 className="sub-bg-black">Best for your business</h3>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>

                            <Grid container>
                                {this.state.services.map((servicio, id) =>
                                    <Grid item lg={6} md={6} sm={6} xs={6} >
                                        <ServicesCard name={servicio.name} img={servicio.img}></ServicesCard>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
                <style jsx >{`
 
                    .titles-bg-black-2{
                        margin-top:0px;
                        font-family:'Roboto';
                        font-size:40px;
                        margin-bottom:5px;

                        }
                `}</style>
            </>

        )
    }
}
export default Services;
