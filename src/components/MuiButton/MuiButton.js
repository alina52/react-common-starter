import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import styles from "components/MuiButton/MuiButton.module.scss";


const CustomButton = styled(Button)(({ theme, ...props }) => ({

}));

CustomButton.propTypes = {};

CustomButton.defaultProps = {
  "data-component": "Button"
};

export default CustomButton;
