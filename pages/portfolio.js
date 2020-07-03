import React from "react";
import Header from "../components/Header/Header";
import NavPortafolio from "../components/NavPortafolio/NavPortafolio";
import SkillsExp from "../components/SkillsExp/SkillsExp";
class Portfolio extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <NavPortafolio></NavPortafolio>
                <SkillsExp></SkillsExp>
                <style jsx global>{`body{margin:0px;background-color:#fefbfb}`}</style>
            </>

        )
    }
}
export default Portfolio;