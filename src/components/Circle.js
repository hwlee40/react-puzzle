import React from 'react'
import styled from 'styled-components'

const CircleComponent = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 100px;
    background: ${props => props.color};

    @media (max-width: 950px) {
        width: 120px;
        height: 120px;
    }
    @media (max-width: 500px) {
        width: 80px;
        height: 80px;
    }
`

class Circle extends React.Component{
    render(){
        return(
            <CircleComponent color={this.props.color}></CircleComponent>
        )
    }
}

export default Circle