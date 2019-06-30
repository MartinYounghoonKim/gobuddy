import * as React from "react";
import Signup from "../../components/Signup/Signup";

class SignupContainer extends React.Component {
  onSubmitHandler = (payload: { id: string; password: string; }) => {
    console.log(payload);
  }
  render () {
    const { onSubmitHandler } = this;
    return (
      <Signup
        onSubmit={onSubmitHandler}
      />
    )
  }
}

export default SignupContainer;
