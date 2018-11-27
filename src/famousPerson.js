import React, { Component } from 'react';



class FamousPerson extends Component {

    state = {
        user: {
          name : '',
          role: ''
        }
      }

    handleName = (event) => {
        console.log('in handleName');
        this.setState({
            user:{
                ...this.state.user,
                name : event.target.value
            }
        })
    }

    handleRole = (event) => {
        console.log('in handleRole');
        this.setState({
            user:{
                ...this.state.user,
                role : event.target.value
            }
        })
    }
    handleClick = () => {
        console.log(this.state);
    }


  render() {
    return (
      <div>
        <p> {this.state.user.name}</p><p> is famous for: {this.state.user.role}</p>
        <input type='text' onChange={this.handleName} />
        <input type='text' onChange={this.handleRole} />
        <button type='button' onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default FamousPerson;
