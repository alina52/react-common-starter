import { useSnackbar } from 'notistack';

const { enqueueSnackbar } = useSnackbar();

export default class message {
    static info = (msg) => {
        let options = {variant:'info'};
        enqueueSnackbar(msg, options);
    }
    static warn = (msg) => {
        let options = {variant:'warn'};
        enqueueSnackbar(msg, options);
    }
    static success = (msg) => {
        let options = {variant:'success'};
        enqueueSnackbar(msg, options);
    }
    static error = (msg) => {
        let options = {variant:'error'};
        enqueueSnackbar(msg, options);
    }
}