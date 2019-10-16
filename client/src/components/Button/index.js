import React from "react";

export function DeleteBtn(props) {
  return (<button className="btn btn-small btn-primary m-1 float-right" {...props}>Remove</button>);
}

export function ViewBtn(props) {
  return (<button className="btn btn-small btn-primary m-1 float-right" {...props}>View</button>);
}

export function SaveBtn(props) {
  return (<button className="btn btn-small btn-primary m-1 float-right" {...props}>Save</button>);
}
