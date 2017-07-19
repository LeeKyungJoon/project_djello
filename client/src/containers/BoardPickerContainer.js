import React, { Component } from "react";
import { connect } from "react-redux";
import BoardPicker from "../components/BoardPicker";
import { getAllBoards } from "../actions/allBoards";
import { getSpecificBoard } from "../actions/specificBoard";

class BoardPickerContainer extends Component {
  componentDidMount() {
    this.props.getAllBoards(this.props.token, this.props.userId);
  }

  render() {
    return <BoardPicker {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token,
    userId: state.user.id,
    allBoards: state.allBoards.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllBoards: (token, userId) => {
      dispatch(getAllBoards(token, userId));
    },
    onChangeSelectedBoard: e => {
      const selectedBoard = e.target.value;
      dispatch(getSpecificBoard(ownProps.token, selectedBoard));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardPickerContainer);