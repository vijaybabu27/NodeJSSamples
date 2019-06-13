const osObj = require('os');
const fsObj = require('fs');

console.log("My system architecture is: ", osObj.arch());

console.log("My system name is: ", osObj.userInfo().username);

console.log("OS Type: ", osObj.type());

var hours = ((osObj.uptime()/60)/60)/24;

console.log("Uptime: ", hours);

fsObj.writeFile("test.txt", "Hey this text has been created by Node JS", function(err) {
	if(err) throw err;
	console.log('File has been Created!');
	
	fsObj.rename('test.txt', 'day1.txt', (err) => {
		if(err) throw err;
		console.log('File has been Renamed!');
		
		fsObj.appendFile('day1.txt', 'This text has been appended by Node JS', (err) => {
			if(err) throw err;
			console.log('File has been Appended!');
			
			fsObj.unlink('day1.txt', (err) => {
				if(err) throw err;
				console.log('File has been Deleted!');
			});
		});
	});
});
