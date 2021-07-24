/**
 * const,let等の変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// //var変数は上書き可能
// var1 = "var変数を上書き"
// console.log(var1);

// //var変数は再宣言可能
// var var1 = "var変素を再宣言"
// console.log(var1);

// let var2 = "let変数"
// console.log(var2);

// //letは上書き可能
// var2 = "let変数を上書き"
// console.log(var2);

// //letは再宣言不可
// let var2 = "let変数を再宣言"
// console.log(var2);

// const var3 = "const変数"
// console.log(var3);

// //const変素は上書き不可
// var3 = "const変数を上書き"
// console.log(var3);

// //const変素は再宣言不可
// const var3 = "const変数を再宣言"
// console.log(var3);

//constの場合も、objectの場合はプロパティの変更が可能
// const var4 = {
//   name: "宮田",
//   age: 27,
// };
//  var4.name = "みやた"
//  var4.address = "Tokyo"
//  console.log(var4);

// //constの場合も、配列の場合は中身の変更が可能
// const var5 = ["dog", "cat"];
// var5[0] = "bird";
// var5.push("monkey");
// console.log(var5);

// /**
//  * テンプレート文字列について
//  */
// const name = "宮田";
// const age = 27;

// //「私の名前は宮田です。年齢は27歳です。」

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数
//従来の関数
// function func1(str){
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// //かっこは省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// //func3はあくまで関数（アロー関数）
// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 2));

// //分割代入
// //いちいちmyProfileを書かなくてよくなる
// const myProfile = {
//   name:"宮田",
//   age:27,
// }
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name,age} = myProfile;

// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

// const myProfile = ["宮田", "27"];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

// //デフォルト値、引数等
// //アロー関数の変数の後に＝があれば初期値を設定している。
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("宮田");

//スプレッド構文 ...
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumfunc = (num1, num2) => console.log(num1 + num2);
// sumfunc(arr1[0],arr1[1]);
// sumfunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピーや結合
// //＝でコピーすると、参照が引き継がれる
// //->コピー先を変更するとその変更がコピー元にも反映される
// const arr4 = [10,20];
// const arr5 = [30,40];
// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//mapやfilterを使った配列の処理
//mapは配列の要素をループして何か処理をする際に使える
// const nameArr = ["宮田","田中","山田"];
//従来
// for (let index=0; index < nameArr.length; index++){
//   console.log(`${index+1}番目は${nameArr[index]}です`)
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name,index) => console.log(`${index+1}番目は${name}です。`));

//filterはある条件に合致する要素に対してだけ何か処理をしたいときに使える
//以下は奇数のみ抜き出している
// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num%2===1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "宮田"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//三項演算子
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100より大きいです" : "100以下です";
// }

// console.log(checkSum(-30,100));
