import CustomSnackbar from 'src/components/MuiSnackbar';

export default class message {
    static info = (msg) => {
        return CustomSnackbar('info', msg);
    }
    static warn = (msg) => {
        return CustomSnackbar('warn', msg);
    }
    static success = (msg) => {
        return CustomSnackbar('success', msg);
    }
    static error = (msg) => {
        return CustomSnackbar('error', msg);
    }
}