mui.init({
	swipeBack:true //启用右滑关闭功能
});
var list = document.querySelectorAll('.mui-table-view-cell');
for(var i = 0;i<list.length;i++){
	list[i].addEventListener('tap',function(event) {
		mui.openWindow({
			url: 'chat.html',
			id: 'chat',
			preload: true,
			show: {
				aniShow: 'pop-in'
			},
			styles: {
				popGesture: 'hide'
			},
			waiting: {
				autoShow: false
			}
		});
	});		
}