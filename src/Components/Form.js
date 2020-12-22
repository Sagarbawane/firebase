

import React from "react";




class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      value: []
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: this.state.name
    }
    this.props.data(formData)
    console.log(formData)

  }
 render() {
    return (
      <React.Fragment>
        <div className='container '>
       <div className="login-page">
       <div className="form">
         <h3>Enter User's Name</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Enter the Name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
        </div>
        </div>
      </React.Fragment>
    );
  }


};
export default Form;
