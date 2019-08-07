# localStorage拡張
 localStorage期限オプションを作ってみます。

 以下のサイトに参考しました。  
<a href="https://iwb.jp/javascript-localstorage-expire-object-value/" target="_blank">https://iwb.jp/javascript-localstorage-expire-object-value/</a>  

 ### 使い方：
 localStorage.jsをページに埋め込みます。  
 es6の場合、LocalStorage.mod.jsをimportしてください。
 
  #### localStorageクラスをセットします。  
 ```const localStorageClass = new LocalStorage();```

#### 通常のデータ保存 

```  
localStorageClass.setStorage('localStorageNormalTest1', 123456789);
localStorageClass.setStorage('localStorageNormalTest2', 'テキストを保存します。');  
```  

#### jsonデータ保存
```
let jsonData = new Object();
jsonData.title = "タイトル";
jsonData.url = "hoge.com";
jsonData.description = "概要テキスト";
localStorageClass.setStorage('localStorageJson', jsonData);
```

#### 期限設定 
``` 
let date = new Date();
``` 
##### - 2019年9月30日まで
```  
date.setTime(new Date('2019/9/30'));
localStorageClass.setStorage('localStorageExpireTest1', '2019年9月30日まで', date);  
```  
##### - 10秒制限
```  
date = new Date();
date.setTime( date.getTime() + (10 * 1000));
localStorageClass.setStorage('localStorageExpireTest2', '10秒制限', date);  
```  
##### - 30分制限
```  
date = new Date();
date.setTime( date.getTime() + (30 * 60 * 1000));
localStorageClass.setStorage('localStorageExpireTest2', '30分制限', date);  
```  
##### - 10時間制限
```  
date = new Date();
date.setTime( date.getTime() + (10 * 60 * 60 * 1000));
localStorageClass.setStorage('localStorageExpireTest3', '10時間制限', date);  
```  
##### - 7日制限
```  
localStorageClass.setStorage('localStorageExpireTest4', '7日制限', 7);  
```  
##### - データの取得
```  
localStorageClass.getStorage('localStorageNormalTest2');  
```  
##### - データの削除
```  
localStorageClass.removeStorage('localStorageNormalTest2');  
```  
##### - Localstorage（ローカルストレージ）を初期化する
```  
localStorageClass.clearStorage();  
```
<br /><br /><br />
phpの場合、サーバーの時刻を取得できるので、new Date()を取得した時刻に入れ替えていいと思います。





