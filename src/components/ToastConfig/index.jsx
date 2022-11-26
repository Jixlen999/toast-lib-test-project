import { useState } from 'react';
import { toastService } from 'jix-toast-library';
import PropTypes from 'prop-types';
import Wrapper from './styled';

function ToastConfig({ setToasts }) {
  const [state, setState] = useState({});

  const clickHandler = () => {
    toastService.createToast({
      title: state.title,
      text: state.text,
      variant: state.variant,
      bgColor: state.bgColor,
      iconAndTextColor: state.iconAndTextColor,
      position: state.position,
      spacing: state.spacing,
      animation: state.animation,
      timer: state.timer,
    });
    setToasts(toastService.getToasts());
  };

  const changeHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <div>
        <span>Variant:</span>
        <select name="variant" value={state.value} onChange={changeHandler}>
          <option value="success">success</option>
          <option value="info">info</option>
          <option value="warning">warning</option>
          <option value="danger">danger</option>
        </select>
      </div>
      <div>
        <span>Title:</span>
        <input name="title" value={state.title} onChange={changeHandler} placeholder="Default depends on variant" />
      </div>
      <div>
        <span>Text:</span>
        <input name="text" value={state.text} onChange={changeHandler} placeholder="Empty or any" />
      </div>
      <div>
        <span>Toast color:</span>
        <input type="color" name="bgColor" value={state.bgColor} onChange={changeHandler} />
      </div>
      <div>
        <span>Icon color:</span>
        <input type="color" name="iconAndTextColor" value={state.iconAndTextColor} onChange={changeHandler} />
      </div>
      <div>
        <span>Position:</span>
        <select name="position" value={state.position} onChange={changeHandler}>
          <option value="bottom-right">bottom-right</option>
          <option value="bottom-left">bottom-left</option>
          <option value="bottom-center">bottom-center</option>
          <option value="top-right">top-right</option>
          <option value="top-left">top-left</option>
          <option value="top-center">top-center</option>
        </select>
      </div>
      <div>
        <span>Spacing:</span>
        <input name="spacing" value={state.spacing} onChange={changeHandler} placeholder="From 0 to 200" />
      </div>
      <div>
        <span>Animation:</span>
        <select name="animation" value={state.animation} onChange={changeHandler}>
          <option value="slideRight">slide</option>
          <option value="fadeIn">fade in</option>
          <option value="bounceRight">bounce</option>
        </select>
      </div>
      <div>
        <span>Timer:</span>
        <input name="timer" value={state.timer} onChange={changeHandler} placeholder="Seconds" />
      </div>

      <button onClick={clickHandler}>Create</button>
    </Wrapper>
  );
}

ToastConfig.propTypes = {
  setToasts: PropTypes.func.isRequired,
};

export default ToastConfig;
