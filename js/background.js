var contextMenu = {
	id:"selectnum1kjh",	//clickData.menuItemId:the id of the rightclick menu；
	title:"Show the result of visualization",
	contexts:["selection"]
}

console.log("1.1.2")

chrome.contextMenus.create(contextMenu);








// 接收到信息
function receiveMsg() {
	// data数据  sender发送方  sendResponse回调
	chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
		console.log("😝: bj.js  receive", data);
	  	sendResponse(data);
	});
};

receiveMsg()











chrome.contextMenus.onClicked.addListener(function(clickData, a, b){
	
	// console.log("kjh", clickData, a, b);

	


	//clickData.selectionText: the content which is selected!
	if(clickData.menuItemId == "selectnum1kjh" && clickData.selectionText){
		var selected_number = clickData.selectionText;
	
		var trans_num = parseFloat(selected_number);
	
		//console.log(isNaN(parseFloat(selected_number)));	
		
		if(isNaN(trans_num) != true){
			//integer or float
			var index_dot = selected_number.indexOf(".")+1;			
			//console.log(trans_num);
			if(selected_number.search("%") != -1){
				console.log("Percentage number: " + selected_number);
			}
			else if(selected_number.search(".") != -1 && index_dot > 0){
				console.log("A float number: " + selected_number);
			}
			else{
				console.log("An integer number: " + selected_number);
			}
		}
		else{
			console.log("Not number");
		}
		
		
	}
})