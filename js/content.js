console.log(document);



// 发送消息
function sendMsg() {
    console.log(document);
    chrome.runtime.sendMessage({ data: "这里填格式化好的document" }, function (data) {
        // 接受返回信息
        console.log("data were send");
    });
}

sendMsg();