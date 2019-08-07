
// import LocalStorage from './lib/LocalStorage.mod.js';

const localStorageClass = new LocalStorage();
//通常のデーター保存
localStorageClass.setStorage('localStorageNormalTest1', 123456789);
localStorageClass.setStorage('localStorageNormalTest2', 'テキストを保存します。');

//期限設定 
let date = new Date();
//2019年9月30日まで
date.setTime(new Date('2019/9/30'));
localStorageClass.setStorage('localStorageExpireTest1', '2019年9月30日まで', date);
//10秒制限
date = new Date();
date.setTime( date.getTime() + (10 * 1000));
//localStorageClass.setStorage('localStorageExpireTest2', '10秒制限', date);
//30分制限
date = new Date();
date.setTime( date.getTime() + (30 * 60 * 1000));
localStorageClass.setStorage('localStorageExpireTest3', '30分制限', date);
//10時間制限
date = new Date();
date.setTime( date.getTime() + (10 * 60 * 60 * 1000));
localStorageClass.setStorage('localStorageExpireTest4', '10時間制限', date);
//7日
date = new Date();
localStorageClass.setStorage('localStorageExpireTest5', '7日制限', 7);

//データの取得
localStorageClass.getStorage('localStorageExpireTest2');

//データの削除
//localStorageClass.removeStorage('localStorageNormalTest2');

//Localstorage（ローカルストレージ）を初期化する
//localStorageClass.clearStorage();