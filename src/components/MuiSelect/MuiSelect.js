import PropTypes from 'prop-types'
import { styled } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import styles from 'components/MuiSelect/MuiSelect.module.scss'

const CustomSelect = styled(Select)(({ theme, ...props }) => ({

}));


CustomSelect.propTypes = {

}

CustomSelect.defaultProps = {
  'data-component': Select 
}

export default CustomSelect