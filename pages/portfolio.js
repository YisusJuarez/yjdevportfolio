import React from "react";
import Header from "../components/Header/Header";
import NavPortafolio from "../components/NavPortafolio/NavPortafolio";
import SkillsExp from "../components/SkillsExp/SkillsExp";
import Services from '../components/Services/Services';
import PortfolioList from '../components/PortfolioList/PortfolioList';
class Portfolio extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <NavPortafolio></NavPortafolio>
                <Services></Services>
                <SkillsExp className="skill-top"></SkillsExp>
                <PortfolioList></PortfolioList>
                <style jsx global>{`body{margin:0px;background-color:#fefbfb}`}</style>
            </>

        )
    }
}
export default Portfolio;