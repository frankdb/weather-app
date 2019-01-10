import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.getWeather}>
        <div className="form-group">
          <input type="text" className="form-control" name="city" placeholder="City" required/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="country" placeholder="Country" required/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block">Get Weather</button>
        </div>
      </form>
    </div>
  );
}

export default Form;