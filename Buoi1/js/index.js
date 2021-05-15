/* 1) Tính tiền lương nhân viên
 input lương 1 ngày 100k
 số ngày làm user nhập
process : khai báo salary ngày, khai báo biến total có công thức, lấy value từ ô nhập của user rồi xuất
output: tính tiền lương = lương 1 ngày * số ngày làm

*/
function calcSalary(){
     var salaryPerDay = 100000;
var workedDay = +document.getElementById("workedDay").value;
var total = salaryPerDay * workedDay;


document.getElementById("totalSalary").innerHTML = total; 
}




/*
input : user nhập 5 số
process: lấy value từ 5 số của user trên HTML, tạo 1 biến averageNum để tính trung bình
output : tính trung bình
*/

function calcAverage(){
     var num1 = +document.getElementById("num1").value;
     var num2 = +document.getElementById("num2").value;
     var num3 = +document.getElementById("num3").value;
     var num4 = +document.getElementById("num4").value;
     var num5 = +document.getElementById("num5").value;
     var averageNum = (num1 + num2 + num3 + num4 + num5)/5;
     document.getElementById("average").innerHTML = averageNum;
}


/*
input USD = 23500 Vnđ
process : khai báo biến usdMoney từ ô nhập HTML của user sau đó khai bao usd để có công thức
output : quy đổi usd -> vnd
*/

function changeCurrency(){
     var usdMoney = +document.getElementById("usd").value;
     var vndMoney = usdMoney * 23500;
     document.getElementById("vnd").value = vndMoney;
}


/* 
input : chiều dài, rộng
process : diện tích = dài * rộng
          chu vi = (dài + rộng )*2
output : tính diện tích và chu vi
*/

function calcRectangle(){
     var lengTh = +document.getElementById("length").value;
     var widTh = +document.getElementById("width").value;

     var acreage = lengTh * widTh;
     var perimeter = (lengTh + widTh) * 2;

     document.getElementById("acreAge").innerHTML = acreage;
     document.getElementById("periMeter").innerHTML = perimeter;
}


/*
     input : cho 1 số gồm 2 chữ số
     process : khai báo biến, lấy số đó chia phần dư ( %  10) để lấy được số bên trái
               và ( / 10 ) để lấy được số bên phải, sau đó tạo biến sum để lấy tổng
     output : tính tổng 2 ký số.
*/
function calcSumEachNumber(){
     var number = +document.getElementById("num").value;

     var num1 = number % 10;
     num1 = parseInt(num1);
     var num2 = number / 10;
     num2 = parseInt(num2);

     var sum = num1 + num2;

     document.getElementById("sumNum").innerHTML = sum;
}
