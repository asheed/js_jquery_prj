/**
 * Created by woojin on 2017-08-22.
 */
var calc = function (x, y) {
    var result = x / y;
    return util(result);
}

// 반올림 처리 함수
var util = function (num) {
    return Math.round(num);
}