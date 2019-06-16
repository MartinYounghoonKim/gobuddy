import * as React from "react";
import FormField from "../Utils/FormField/FormField";
import Button from "../Utils/Button/Button";
import {IHTMLElementChangeEvent} from "../../@types/utils/events";
import { FormEvent } from "react";

interface IState {
  id: string;
  password: string;
}

interface IProps {
  onSubmit: (payload: {
    id: string;
    password: string;
  }) => void;
}

class Signup extends React.Component<IProps, IState> {
  public state = {
    id: "",
    password: ""
  };

  onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, password } = this.state;
    this.props.onSubmit({ id, password });
  };
  onChangeHandler = (e: IHTMLElementChangeEvent) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  render () {
    const {
      id, password
    } = this.state;
    const { onChangeHandler, onSubmitHandler } = this;
    return (
      <div>
        <h1>회원가입</h1>
        <form onSubmit={onSubmitHandler}>
          <FormField
            label="아이디"
            name="id"
            value={id}
            onChange={onChangeHandler}
          />
          <FormField
            label="비밀번호"
            name="password"
            value={password}
            type="password"
            onChange={onChangeHandler}
          />
          <Button>회원가입</Button>
        </form>
      </div>
    )
  }
}

export default Signup;
