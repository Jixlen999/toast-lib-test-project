import { toastService } from 'jix-toast-library';
import PropTypes from 'prop-types';
import buttons from '@constants/buttons';
import { BtnsWrapper, Button } from './styled';

function DefaultToasts({ setToasts }) {
  const clickHandler = (variant) => () => {
    toastService.createToast({
      variant,
    });
    setToasts(toastService.getToasts());
  };

  return (
    <BtnsWrapper>
      {buttons.map(({ variant, color }) => (
        <Button key={variant} color={color} onClick={clickHandler(variant)}>
          {variant}
        </Button>
      ))}
    </BtnsWrapper>
  );
}

DefaultToasts.propTypes = {
  setToasts: PropTypes.func.isRequired,
};

export default DefaultToasts;
