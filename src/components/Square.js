import React from 'react'
import styled from 'styled-components'

const SquareComponent = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 20px;
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

class Square extends React.Component{
    render(){
        return(
            <SquareComponent color={this.props.color}></SquareComponent>
        )
    }
}

export default Square