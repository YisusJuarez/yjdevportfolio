import React from "react";
import Container from "@material-ui/core/Container";
class SkillsExp extends React.Component {
    render() {
        return (
            <>
            <Container maxWidth="lg">
                <h1 className="titles-bg-black">Skills & Experience</h1>
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