import React, { Component } from 'react'
import './UpdateContainer.css'
import { MDBProgress } from 'mdbreact'

class UpdateContainer extends Component {

    state = {
        time: 0
    }

    handleClick = () => {
        this.setState({time: 10});
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.time > 0) {
                if (this.state.time === 1 ) {
                    this.props.reload();
                }
                this.setState({time: --this.state.time});
            }
        }, 1000)
    }

    render(){
        return(
            <div className='updateContainer'>
                <button onClick={this.handleClick} disabled={this.state.time>0}>RELOAD</button>
        {this.state.time>0 ? (<MDBProgress material value={(10-this.state.time)*10} height="25px" >{this.state.time} seconds</MDBProgress>) : null}
            </div>
        );
    }
}

export default UpdateContainer;