import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {connectReducer} from '../actions/index';
import { Button } from 'semantic-ui-react';

class Start extends Component {

  btnHandler() {
    console.log('Hi!');
  }

  showList() {
    return (
      <div>
        <Button onClick={this.btnHandler}>Click Here</Button>
      </div>
    );
  }

    render() {
      return (
        <div>
          {this.showList()}
        </div>
      );
    }

}

function mapStateToProps (state) {

  return  {
    connect: state.connectReducer
  };

}

function matchDispatchToProps (dispatch) {
  return {//bindActionCreators({select: select}, dispatch)
    actions: {
        select: bindActionCreators(connectReducer, dispatch)/*,
        deleteContact: bindActionCreators(deleteContact, dispatch)*/
        }
    }
}

export default connect (mapStateToProps, matchDispatchToProps)(Start);
