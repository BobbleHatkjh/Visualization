const documentFormat = () => {
	console.log(document);

	// 这里去做打平

	return "格式化好的document";
};

// 发送消息
function sendMsg() {
	const data = documentFormat();
	chrome.runtime.sendMessage({ data }, function (data) {
		// 接受返回信息
		console.log("data were send");
	});
}

sendMsg();
