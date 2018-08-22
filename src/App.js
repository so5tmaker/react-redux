import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeFirstName, changeSecondName } from './store/actions';

class App extends Component {
  render() {
    //console.log(this.props);
    const { firstName, secondName, changeFirstName, changeSecondName } = this.props;
    return (
      <div>
        <div>
          <input
            type='text'
            value={firstName}
            placeholder='First Name'
            onChange={(event) => {
              changeFirstName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type='text'
            value={secondName}
            placeholder='Second Name'
            onChange={(event) => {
              changeSecondName(event.target.value);
            }}
          />
        </div>
        <div>
          {`${firstName} ${secondName}`}
        </div>
      </div>
    );
  }
}

//console.log(store.getState());

const mapDispatchToProps = dispatch => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch)
  };
};

const mapStateToProps = state => {
  //console.log(state);
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);;
