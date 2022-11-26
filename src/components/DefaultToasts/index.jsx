import { toastService } from 'jix-toast-library';
import PropTypes from 'prop-types';
import { BtnsWrapper, Button } from './styled';

function DefaultToasts({ setToasts }) {
  const buttons = [
    { variant: 'success', color: '#5CB75C' },
    { variant: 'info', color: '#5BBFDD' },
    { variant: 'warning', color: '#EFAC4E' },
    { variant: 'danger', color: '#D8534F' },
  ];

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
