/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-21 22:57:01
 * @LastEditTime: 2021-10-29 13:06:39
 * 
 * Basic application context.
 * It contains information provided from backend server that necessary for initializing the UI.
 */
import urls from 'src/config/Urls';

class AppConfig {
  environment: null;
  version: null;
  baseUrl: null;
  basePageUrl: null;
  baseResourceUrl: null;
  baseStaticUrl: null;

  initialize(config) {
    this.environment = config.environment;
    this.version = config.version;
    this.baseUrl = config.baseUrl;
    this.basePageUrl = config.basePageUrl;
    this.baseResourceUrl = config.baseResourceUrl;
    this.baseStaticUrl = config.baseStaticUrl;

    urls.init(this.baseUrl, this.basePageUrl, this.baseResourceUrl, this.baseStaticUrl)
  }
}

/* Singleton of application scope */
const _instance = new AppConfig();

export default _instance;
