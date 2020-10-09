import React from 'react'
import styled from 'styled-components'

const TongueComponent = styled.div`
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
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

class Tongue extends React.Component{

    render(){
        return (
            <TongueComponent color={this.props.color}></TongueComponent>
        )
    }
}

export default Tongue