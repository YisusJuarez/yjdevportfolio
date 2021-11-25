import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardSkill from "../CardSkill/CardSkill";
import { getSkills } from "../../services/getSkills";
const SkillsExp = () => {
  const [skills, setSkills] = useState(getSkills());
  return (
    <>
      <Container maxWidth="lg" className="skills-top">
        <h1 className="titles-bg-black">My Skills</h1>
        <h3 className="sub-bg-black">Latest technologies</h3>
        <Grid container spacing={2}>
          {skills.map((s) => {
            return (
              <Grid item lg={4} md={6} sm={6} xs={6}>
                <CardSkill
                  Skill={s.skill}
                  Descriptionskill={s.description}
                ></CardSkill>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <style jsx global>{`
      html::-webkit-scrollbar {
        display: none;
      }
        .sub-bg-black {
          font-family: "Roboto";
          font-size: 20px;
          margin-top: 0px;
          color: #a6acaf;
        }
        .titles-bg-black {
          font-family: "Roboto";
          font-size: 55px;
          margin-bottom: 5px;
        }
        .skills-top {
          padding-top: 40px;
        }

        @media only screen and (max-width: 959px) {
          .titles-bg-black {
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
export default SkillsExp;
