import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '../../actions/demo/demo';
// import { bindActionCreators } from 'redux';


class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState1: '11111',
    };
  }
  handleBtnClick = () => {
    // this.props.clickEvent();
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <Button type="danger" onClick={this.handleBtnClick}>我是danger</Button>
        <div>{this.state.myState1}</div>
      </div>
    );
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  clickEvent: () => {
    dispatch(getData(dispatch));
  },
});
// @connect(
//     state => ({ ...state.home }),
//     dispatch => bindActionCreators({ getData }, dispatch)
// );
Demo.propTypes = {
  history: PropTypes.shape().isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
