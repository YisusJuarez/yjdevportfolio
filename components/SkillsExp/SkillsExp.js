import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import CardSkill from '../CardSkill/CardSkill';
class SkillsExp extends React.Component {
    render() {
        return (
            <>
                <Container maxWidth="lg">
                    <h1 className="titles-bg-black">Skills & Experience</h1>
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={6} sm={6}>
                            <CardSkill Skill="Javascript" Descriptionskill="Programming Language commonly used in web development."></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6}>
                            <CardSkill Skill="HTML5" Descriptionskill="HyperText Markup Language for websites"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6}>
                            <CardSkill Skill="CSS3" Descriptionskill="Cascading Style Sheets for Styling websites"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6}>
                            <CardSkill Skill="React" Descriptionskill="A JavaScript library for building user interfaces"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6}>
                            <CardSkill Skill="NextJs" Descriptionskill="React Server Side Rendering Applications (SSR)"></CardSkill>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6}>
                            <CardSkill Skill="SEO" Descriptionskill="Increasing the visibility of a website to users of a web search engine."></CardSkill>
                        </Grid>

                    </Grid>
                </Container>
                <style jsx global>{`
                    .titles-bg-black{
                    font-family:'Roboto';
                    font-size:40px

                    }`}</style>
            </>

        )
    }
}
export default SkillsExp;