import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import { SnackbarProvider } from 'notistack';
import { isMobile } from 'react-device-detect';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import styles from 'components/MuiSnackbar/MuiSnackbar.module.scss';

const POSITION = {
    vertical: 'top',
    horizontal: 'right'
}

const CustomSnackbar = styled(Snackbar)(({ theme, children }) => {
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      /**
       * The number of milliseconds to wait before automatically calling the `onClose` function. By default snackbars get closed after 5000 milliseconds. 
       * Set autoHideDuration to 'null' if you don't want snackbars to automatically close. Alternatively pass `persist: true` in the options parameter of enqueueSnackbar.
       * */ 
      autoHideDuration={AUTO_HIDE_DURATION}
      anchorOrigin={POSITION}
      dense={isMobile}
      ref={notistackRef}
      action={(key) => (
        <IconButton
          key='close'
          aria-label='Close'
          color='inherit'
          onClick={onClickDismiss(key)}
        >
          <CloseIcon style={{ fontSize: '20px' }} />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
});

CustomSnackbar.propTypes = {};

CustomSnackbar.defaultProps = {
  'data-component': Snackbar,
};

export default CustomSnackbar;
