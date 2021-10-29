/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-22 15:07:19
 * @LastEditTime: 2021-10-29 13:07:45
 */
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