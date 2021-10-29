import * as Constants from "src/app/constants";
import { isEmptyCheck } from "src/utils/isEmptyCheck";

/**
 * A static class consolidates all functional urls
 *
 * @author Alina Wang
 */

class Urls {
  _dictionary: null;
  baseUrl: null;
  basePageUrl: null;
  baseResourceUrl: null;
  baseStaticUrl: null;

  constructor() {
    this._dictionary = {};
    this.findPageNameByUrl = this.findPageNameByUrl.bind(this);
  }

  /**
   * Initialize the urls
   * @param basePageUrl root path of all UI pages
   * @param baseResourceUrl root path of all web services / fetch calls
   */
  init(baseUrl, basePageUrl, baseResourceUrl, baseStaticUrl) {
    this.baseUrl = baseUrl;
    this.basePageUrl = basePageUrl;
    this.baseResourceUrl = baseResourceUrl;
    this.baseStaticUrl = baseStaticUrl;

    const pageUrls = [
      { key: Constants.PAGE_HOME, value: "/" },
      { key: Constants.PAGE_LIST, value: "list" },
      { key: Constants.PAGE_ITEM, value: "item/:id" },
    ];

    /* Register page urls */
    pageUrls.forEach(
      (item) => (this._dictionary[item.key] = basePageUrl + item.value)
    );

    /* Manually set default page to avoid router cannot handle empty path */
    this._dictionary[Constants.PAGE_HOME] = isEmptyCheck(basePageUrl)
      ? "/"
      : basePageUrl;
  }

  /**
   * Get the full url context by key
   *
   * @return page url or page not found url
   */
  url(key) {
    if (isEmptyCheck(this._dictionary[key])) {
      console.error(
        "URL key not registered, check both Urls class and app/constants."
      );
      return `${key}_NOT_FOUND`;
    }
    return this._dictionary[key];
  }

  findPageNameByUrl(pageUrl) {
    var candidates = [];
    for (var key in this._dictionary) {
      if (pageUrl.indexOf(this._dictionary[key]) >= 0) {
        candidates.push({ key: key, len: this._dictionary[key].length });
      }
    }

    if (candidates.length > 0) {
      var maxLength = 0;
      var result = "";
      candidates.forEach((c) => {
        if (maxLength < c.len) {
          maxLength = c.len;
          result = c.key;
        }
      });
      return result;
    }
    return `${pageUrl}_NAME_NOT_FOUND`;
  }

  pageHome() {
    return this.url(Constants.PAGE_HOME);
  }
  pageList() {
    return this.url(Constants.PAGE_LIST);
  }
  pageItem() {
    return this.url(Constants.PAGE_ITEM);
  }

  /**
   * Get the web services url by prepending the baseResourceUrl
   */
  resourceUrl(uri) {
    return this.baseResourceUrl + uri;
  }
}

const _instance = new Urls();
export default _instance;
