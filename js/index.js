
// import LocalStorage from './lib/LocalStorage.mod.js';

var localStorageClass = new LocalStorage();
//通常のデーター保存
localStorageClass.setStorage('localStorageNormalTest1', 123456789);
localStorageClass.setStorage('localStorageNormalTest2', 'テキストを保存します。');

//期限設定 
//2019年9月30日 23時59分59秒まで
localStorageClass.setStorage('localStorageExpireTest1', '2019年9月30日 23時59分59秒まで', new Date('2019/9/30 23:59:59'));
//30分制限
localStorageClass.setStorage('localStorageExpireTest2', '30分制限', new Date().getTime() + (30 * 60 * 1000));
//10時間制限
localStorageClass.setStorage('localStorageExpireTest3', '10時間制限', new Date().getTime() + (10 * 60 * 60 * 1000));
//7日
localStorageClass.setStorage('localStorageExpireTest4', '7日制限', new Date().getTime() + (7 * 24 * 60 * 60 * 1000));

//データの取得
localStorageClass.getStorage('localStorageNormalTest2');

//データの削除
//localStorageClass.removeStorage('localStorageNormalTest2');

//Localstorage（ローカルストレージ）を初期化する
//localStorageClass.clearStorage();