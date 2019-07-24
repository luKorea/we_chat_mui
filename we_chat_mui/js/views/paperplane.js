;(function () {
	var friend = document.getElementById("friend");
	friend.addEventListener('tap', function (e) {
		mui.openWindow({
			url: './pages/paperplane_friend_header.html',
			id: 'paperplane_friend_header'
		});
	});
})();
