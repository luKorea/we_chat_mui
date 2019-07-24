;
(function() {
	mui.plusReady(function() {
		// 获取当前页面
		var cw = plus.webview.currentWebview();
		var nameTitle = cw.title;
		var header = document.querySelector('.mui-title');
		header.innerText = nameTitle;
		console.log(nameTitle);
	});
	
	var btnPhoto = document.getElementById('btn');
	var btnCamera = document.getElementById("camera");
	var btnGetacc = document.getElementById("getacc");
	var message = document.querySelector(".message");
	btnPhoto.addEventListener('tap', function (e) {
		// TODO 调出手机相册
		plus.gallery.pick(
			function (path) {
				var img = '';
				for (var i in path.files) {
					img += "<img width=100 height=100 src="+path.files[i]+" />";
					message.innerHTML = img;
				}
			},
			function (e) {
				message.innerHTML = e.message;
			},
			{
				filter: 'image',
				multiple: true
			}
		);
	});
	btnCamera.addEventListener('tap', function (e) {
		//  TODO 调用摄像头
		var cm = plus.camera.getCamera(1);
		cm.captureImage(function (path) {
			var url = 'file://' + plus.io.convertLocalFileSystemURL(path); 
			var imgs = "<img width=100 height=100 src="+url+" />";
			message.innerHTML = imgs;
		});
	});
	btnGetacc.addEventListener('tap', function (e) {
		// TODO 获取手机重力感应
		plus.accelerometer.watchAcceleration(function (step) {
			message.innerText = "a:" + step.xAxis + "b: " + step.yAxis + "z: " + step.zAxis;
		});
	});
})();