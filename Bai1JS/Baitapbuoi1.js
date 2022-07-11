/* Bài 1 */
// Tính tiền lương nhân viên 
/*
 *  Đầu vào:
 * Lương 1 ngày (hằng số) : 100.000 VND
 * Số ngày làm (var )
 * Xử lý:
 * Tạo hằng số : time (lương theo giờ), ngaylam (số ngày làm việc), lương (lương)
 * Gán giá trị cho WAGE, workingDay
 * Công thức tính lương :luong =  Lương 1 ngày * số ngày làm 
 * Đầu ra: tiền lương nhân viên 
*/


const TIME = 100000;
var ngaylam= 26;
var luong = TIME*ngaylam;
console.log("luong: " + luong..toLocaleString()); 

/* Bài 2 */

//Tính giá trị trung bình 
/** 3 khối
 *  Đầu vào:
 * -Số thứ nhất : a
 * -Số thứ 2 : b
 * - Số thứ 3: c
 * - Số thứ 4 : d
 * Số thứ 5: e
 *  Xử lý: 
 * - Gán giá trị cho a,b,c,d,e
 * - Tổng của 5 số : a+b+c+d+e
 * - Giá trị trung bình của 5 số: Tổng của 5 số / 5
 * Đầu ra : in ra màn hình 
 */ 

 var a = 5;
 var b = 6;
 var c = 7;
 var d = 8;
 var e = 9;
 var sum = a+b+c+d+e;
 var mean = sum/5;
 console.log("Gia tri trung binh: " + mean);


 /* Bài 3 */
 //Quy đổi tiền : chương trình quy đổi từ USD sang VND

/** 3 khối
 *  Đầu vào:
 * - tỷ giá USD so với VND 
 * - Số tiền USD
 *  Xử lý:
 * - đặt biến rate ( tỷ giá), USD (số lượng tiền USD), VND (số tiền VND sau khi quy đổi)
 * - gán giá trị cho rate và USD 
 * - công thức tính : VND =  số tiền USD * tỷ giá 
 * Đầu ra: số tiền VND 
 */


 var money = 23500;
 var USD = 2;
 var VND = USD*money;
 console.log("Quy đổi tiền VND: " + VND.toLocaleString() + "VNĐ");

 /* Bài 4 */ 
 //Tính diện tích, chu vi hình chữ nhật 
/**
 *  Đầu vào:
 * - Chiều dài HCN
 * - Chiều rộng HCN
 *  Xử lý:
 * - đặt các biến: dai (chiều dài HCN), rong(chiều rộng HCN), S (diện tích HCN), C (chu vi HCN)
 * - gán giá trị cho length và width
 * - Diện tích HCN (S = chiều dài * chiều rộng)
 * - Chu vi HCN (C) = 2 *(chiều dài + chiều rộng)
 * Đầu ra:
 */


 var dai = 15;
 var rong = 10;
 var S = dai*rong;
 var C = 2*(dai + rong);
 console.log("Diện tích HCN: " + S);
 console.log("Chu vi HCN: " + C);

 /* Bài 5 */
// Tính tổng 2 ký số 
/**
 * Đầu vào:
 * - một số có 2 chữ số (VD: 79 89)
 * Xử lý:
 * - Step 1: tạo biến n,ten,unit, sum
 * -Step 2: gán giá trị cho n 
 * -Step 3: tính số hàng chục theo công thức : hangchuc = Math.floor(n%100/10)
 * -Step 4: tính số hàng đơn vị theo công thức : hangdonvi = n%10
 * -Step 5: tính tổng sum = hangchuc + hangdonvi 
 * -Step 6: in kết quả sum ra console 
 *  Đầu ra:
 * - kết quả sum (tổng 2 ký số)
 */


 var n= 79;
 var hangchuc = Math.floor(n%100/10);
 var hangdonvi = n%10;
 var tong = hangchuc + hangdonvi;
 console.log("Tổng 2 ký số: " + tong);

 
