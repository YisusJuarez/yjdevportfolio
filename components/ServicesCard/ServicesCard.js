import React from 'react';
class ServicesCard extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="img-icon" src={this.props.img} alt={this.props.name}></img>
                <h2 className="title-service">{this.props.name}</h2>
                <style jsx global>{`
                    .title-service{
                    font-family:'Roboto';
                    font-size:16px;

                    }
                    .img-icon{
                        width:50px;
                        
                    }
                    .card{
                        
                        
                    }
                    `
                }</style>
            </div>
        )
    }
}
export default ServicesCard;