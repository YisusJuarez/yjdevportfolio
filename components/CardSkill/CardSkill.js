import React from "react";
class CardSkill extends React.Component {
    render() {
        return (
            <div className="bg-card">
                <h4>{this.props.Skill}</h4>
                <p className="desc-card">{this.props.Descriptionskill}</p>
                <style jsx>{`
                .bg-card{
                    
               
                }
                h4{
                    font-family:'Roboto';
                    font-weight:500;
                    font-size:20px;
                    margin:0px;
                  
                }
                .desc-card{
                    margin:0px;
                    font-family:'Roboto';
                    font-weight:100;
                    
                    min-height:50px;
                }
                `}</style>
            </div>

        )
    }
}
export default CardSkill;