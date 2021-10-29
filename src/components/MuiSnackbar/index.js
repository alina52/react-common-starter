import PropTypes from 'prop-types';
import { styled } from '@material-ui/core/styles';
import * as React from 'react';
import Stack from '@material-ui/core/Stack';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/core/Alert';
import styles from 'components/MuiSnackbar/MuiSnackbar.module.scss';

const POSITION = {
    vertical: 'top',
    horizontal: 'right'
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert data-component='Alert' elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar = styled(Snackbar)(({ severity, messageContent }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  let isAutoHide = severity === 'success' ? true : false
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={isAutoHide ? 6000 : null} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {messageContent}
        </Alert>
      </Snackbar>
    </Stack>
  );
});

CustomSnackbar.propTypes = {};

CustomSnackbar.defaultProps = {
  'data-component': 'Snackbar',
};

export default CustomSnackbar;
