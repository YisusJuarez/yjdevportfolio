import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
class Portfolio extends React.Component {
    render() {
        return (
            <div className="bg-black">
                <Container maxWidth="lg">
                    <Grid container>

                        <Grid item lg={4} md={4} sm={6} xs={6}>

                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12}>

                            <p className="foot-center">
                                <div className="foot-top">
                                    <a href="https://www.instagram.com/wecodemx/">
                                        <img className="icons-social" src="/img/white-insta.png" />
                                    </a>
                                    <a href="https://github.com/YisusJuarez">
                                        <img className="icons-social-2" src="/img/white-git.png" />
                                    </a>
                                </div>

                                <Typography variant="subtitle2" >
                                    Made with <FavoriteIcon fontSize="small"></FavoriteIcon> & <LocalCafeIcon fontSize="small"></LocalCafeIcon> by YJDev
                            </Typography>
                            </p>
                        </Grid>

                    </Grid>
                </Container>
                <style jsx>{`
                .foot-top{
                    padding-bottom:10px;
                }
                    .icons-social{
                        width:23px;
                        opacity:.6;
                    }
                    .icons-social-2{
                        width:28px;
                        opacity:.6;
                        padding-left:10px;
                    }
                    .icons-social:hover{
                        opacity:1;
                        cursor:pointer;
                    }
                    .icons-social-2:hover{
                        opacity:1;
                        cursor:pointer;
                    }
                 .bg-black{
                     background-color:#101010;
                     margin-top:60px;
                 }
                
                 
                 .foot-center{
                    text-align: center;
                    color:white;
                    padding-bottom:0px;
                    color:gray;
                }
                 `}</style>
            </div>

        )
    }
}
export default Portfolio;