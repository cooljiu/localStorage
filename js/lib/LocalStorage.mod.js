/*!
 * es6用モジュールファイルです。
 * 通常のjsにimportしてください
 */

export default class LocalStorage {
  constructor() {

  }
  /**
   * Localstorage（ローカルストレージ）へのデータの保存
   * @param {key} key
   * @param {value} 保存する値
   * @param {value} 期限
   */
  setStorage(key, value, expire) {
    let data;
    if (expire !== undefined) {
      if (typeof expire === 'number') {
        var days = expire, t = expire = new Date();
        t.setTime(+t + days * 864e+5);
        expire = t;
      }
      data = {
        expire: expire,
        value: value
      };
    } else {
      data = value;
    }
    localStorage.setItem(key, JSON.stringify(data)); //文字列として保存
  }
  /**
  * Localstorage（ローカルストレージ）へデータの取得
  * @param {key} key
  * @returns 保存する値
  */
  getStorage(key) {
    let s = localStorage[key];
    if (s === undefined) {
      return undefined;
    }
    s = JSON.parse(s); //文字列をオブジェクトに変換
    if (s.expire) {
      if (new Date(s.expire) > new Date()) { //期限判断
        return s.value;
      } else {
        localStorage.removeItem(key); //期限過ぎた場合、keyを削除する
        return undefined;
      }
    } else {
      return s; //期限がない場合、保存する値を返す
    }
  }
  /**
  * Localstorage（ローカルストレージ）へデータの削除
  * @param {key} key
  */
  removeStorage(key) {
    let s = localStorage[key];
    if (s === undefined) {
      return false;
    } else {
      s = JSON.parse(s);
      localStorage.removeItem(key);
    }
  }
  /**
  * Localstorage（ローカルストレージ）を初期化する
  */
  clearStorage() {
    localStorage.clear();
  }
}