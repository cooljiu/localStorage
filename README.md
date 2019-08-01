# localStorage拡張
 localStorage期限オプションを作ってみます。

 以下のサイトに参考しました。  
 [ https://iwb.jp/javascript-localstorage-expire-object-value/]( https://iwb.jp/javascript-localstorage-expire-object-value/)
 
 ### 使い方：
 localStorage.jsをページに埋め込みます。  
 es6の場合、LocalStorage.mod.jsをimportしてください。
 
  #### localStorageクラスをセットします。  
 ```var localStorageClass = new LocalStorage();```

#### 通常のデーター保存 

```  
localStorageClass.setStorage('localStorageNormalTest1', 123456789);
localStorageClass.setStorage('localStorageNormalTest2', 'テキストを保存します。');  
```  
#### 期限設定 

##### -- 2019年9月30日 23時59分59秒まで
```  
localStorageClass.setStorage('localStorageExpireTest1', '2019年9月30日 23時59分59秒まで', new Date('2019/9/30 23:59:59'));  
```  
##### -- 30分制限
```  
localStorageClass.setStorage('localStorageExpireTest2', '30分制限', new Date().getTime() + (30 * 60 * 1000));  
```  
##### -- 10時間制限
```  
localStorageClass.setStorage('localStorageExpireTest3', '10時間制限', new Date().getTime() + (10 * 60 * 60 * 1000));  
```  
##### -- 7日制限
```  
localStorageClass.setStorage('localStorageExpireTest4', '7日制限', new Date().getTime() + (7 * 24 * 60 * 60 * 1000));  
```  
##### -- データの取得
```  
localStorageClass.getStorage('localStorageNormalTest2');  
```  
##### -- データの削除
```  
localStorageClass.removeStorage('localStorageNormalTest2');  
```  
##### -- Localstorage（ローカルストレージ）を初期化する
```  
localStorageClass.clearStorage();  
```
<br /><br /><br />
phpの場合、サーバーの時刻を取得できるので、new Date()を取得した時刻に入れ替えていいと思います。





