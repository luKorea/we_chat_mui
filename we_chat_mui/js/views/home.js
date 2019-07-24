;
(function() {
	mui('.mui-table-view-cell').on('tap', 'a', function(e) {
		// 获取标题
		var title = this.getAttribute('title');
		mui.openWindow({
				url: './pages/home_chat.html',
				id: 'home_chart',
				extras: {
					title: title
				},
				style: {},
				show: {
					autoShow: true,
					aniShow: 'slide-in-right',
					duration: 200
				},
				waiting: {
					autoShow: true,
					title: '正在加载'
				}
		});
	});
})();