var myArgs = process.argv.slice(2);
console.log(myArgs);
var result = "";
myArgs.forEach((val) => {
	var datas = (""+val).split("");
	for(var i = 0;i < datas.length;i++){
		result += getPhoneticValue(datas[i]);
	}
	result += ", ";
	console.log(result);
});
var finalResult = result.slice(0, -2)
console.log(finalResult);

function getPhoneticValue(data) {
var phoneticValueLookup = {
"0": "Zero",
"1": "One",
"2": "Two",
"3": "Three",
"4": "Four",
"5": "Five",
"6": "Six",
"7": "Seven",
"8": "Eight",
"9": "Nine"
};
return phoneticValueLookup[data];
}