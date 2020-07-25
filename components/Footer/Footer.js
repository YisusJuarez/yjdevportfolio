import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
class Portfolio extends React.Component {
    render() {
        return (
            <div className="bg-black">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item lg={4} md={4} sm={6} xs={12}>
                            <h1 className="frase">Dotcom</h1>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={6}>
                            <h1 className="frase">Discover</h1>
                            <ul className="listas">
                                <li><Link href="/"><a>Home</a></Link></li>
                                <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                            </ul>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6} xs={6}>
                            <h1 className="frase">Follow</h1>
                            <a href="https://www.instagram.com/dotcom_mk/">
                            <img className="icons-social" src="/img/white-insta.png"/>
                            </a>
                            <a href="https://github.com/YisusJuarez">
                            <img className="icons-social-2"  src="/img/white-git.png"/>
                            </a>
                        </Grid>
                    </Grid>
                </Container>
                <style jsx>{`
                    .icons-social{
                        width:25px;
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
                     padding-top:30px;
                     padding-bottom:30px;
                 }
                 .frase{
                     color:white;
                     font-family: "Roboto";
                     font-size:21px;
                     font-weight:600;
                     
                 }
                 .listas{
                     list-style-type:none;
                     padding-left:0px;
                 }
                 .listas li:nth-child(2){
                    padding-top:5px;
                
                 }
                 .listas li a{
                   color:white !important;
                   font-size: 18;
                font-family: "Roboto";
                opacity:.6;
                text-decoration:none;
                cursor:pointer;
                
                 }
                 .listas li a:hover{
                   color:white !important;
                   font-size: 18;
                font-family: "Roboto";
                opacity:.9;
                text-decoration:none;
                cursor:pointer;
                
                 }
                 `}</style>
            </div>

        )
    }
}
export default Portfolio;