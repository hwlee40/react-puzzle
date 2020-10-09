import React from 'react'
import styled from 'styled-components'


const BreadComponent = styled.div`
    width: 310px;
    height: 150px;
    overflow: hidden;
    border-radius: 100px;
    background: ${props => props.color};

    @media (max-width: 950px) {
        width: 250px;
        height: 120px;
    }
    @media (max-width: 500px) {
        width: 170px;
        height: 80px;
    }
`

class Bread extends React.Component{
    render(){
        return(
            <BreadComponent color={this.props.color}></BreadComponent>
        )
    }
}

export default Bread