import React from  'react';


const style = {
    alertBox:{
      position: "fixed",
      marginTop: "73px",
      Align: "right",
    },

  };


class AlertDismissable extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      Show: false,
      Title: '',
      Message: '',
      Type: 'alert-danger'
    };

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
    
  }

  componentWillReceiveProps({Show,Title,Message,Type}){
    this.setState({
      Show: this.props.Show,
      Title: this.props.Title,
      Message: this.props.Message,
      Type: this.props.Type
    });
  }

  handleDismiss() {
    this.setState({ Show: false });
  }

  handleShow() {
    this.setState({ Show: true });
  }

  
  render(){
    let classes = "alert ".concat( this.state.Type, " alert-dismissible fade show");
    if (this.state.Show) {
      return (
        <div className={classes} style={style.alertBox} role="alert">
          <strong>{this.state.Title}</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleDismiss}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
    return null;
  }
}

export default AlertDismissable;
