import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { getData } from '../../actions/demo/demo';
import { bindActionCreators } from 'redux';
import ajax from 'request';


class Demo extends Component {
    constructor(props) {
        super(props);
        console.log('demo-props', this);
        this.state = {
            myState1: '11111'
        };
    }
    btnClick = () => {
        // this.props.clickEvent();
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <Button type="danger" onClick={this.btnClick}>我是danger</Button>
                {/* <div>{this.state.myState1}</div> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => ({
    clickEvent: () => {
        dispatch(getData(dispatch));
    }
});
    // @connect(
    //     state => ({ ...state.home }),
    //     dispatch => bindActionCreators({ getData }, dispatch)
    // );
export default connect(mapStateToProps, mapDispatchToProps)(Demo);