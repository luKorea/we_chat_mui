;
(function() {
	var childrenPage = [
		'home.html',
		'contact.html',
		'paperplane.html',
		'profile.html'
	];
	var childrenStyles = {
		top: '44px',
		bottom: '50px'
	};
	mui.plusReady(function() {
		// TODO 获取当前页面
		var self = plus.webview.currentWebview();
		for(var i = 0; i < childrenPage.length; i++) {
			var child = plus.webview.create(childrenPage[i], childrenPage[i], childrenStyles);
			child.hide();
			self.append(child);
		}
		plus.webview.show(childrenPage[0]);
	});
	// TODO 切换页面
	mui('.mui-bar-tab').on('tap', 'a', function(e) {
		var tagTap = this.getAttribute('href');
		plus.webview.show(tagTap, "fade-in", 100);
	});
	// TODO 退出应用
	var flag = null;
	mui.back = function() {
		if(!flag) {
			flag = new Date().getTime();
			mui.toast('再次点击退出应用');
			setTimeout(function() {
				flag = null;
			}, 1000);
		} else {
			if(new Date().getTime() - flag < 1000) {
				plus.runtime.quit();
			}
		}
	};
})();