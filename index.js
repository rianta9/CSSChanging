var file = require('fs');
var nhap = require('readline-sync');


function changing(text, fileName) {
	result = text.replace(/{/g, "{\n\t");
	result = result.replace(/;/g, ";\n\t");
	result = result.replace(/}/g, ";\n}\n\n");
	file.writeFileSync(fileName+'.css', result);
	console.log("Đã lưu kết quả vào result.css");
}


function main(){
	console.log('======================CSSTYPE PROGRAM======================\n\n');
	console.log('Lưu ý trước khi sử dụng:');
	console.log('1. Đặt tên file cần chuyển đổi theo định dạng .txt');
	console.log('2. Nhập vào tên file bỏ đuôi .txt');
	console.log('3. Kết quả sẽ trả về 1 file mới có định dạng <tenfile>.css');
	var check = nhap.question('Are you ready? (y/n) ');

	if(check === 'y' || check === 'yes'){
		console.log('=========================R=I=A=N=T=========================');
		var fileName = nhap.question('Input filename:');
		var text = file.readFileSync(fileName+'.txt', {encoding:'utf-8'});
		changing(text, fileName);	
	}

	else{
		console.log('Tốn thời gian của nhau :v');
	}
	console.log('===========================================================');
}


main();