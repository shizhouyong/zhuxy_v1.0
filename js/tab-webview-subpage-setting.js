mui.init({
	swipeBack:true //启用右滑关闭功能
});

/*
 * 我的专业，专业选择
 */
document.getElementById("major").addEventListener('tap',function (){
	//跳转到专业选择页面
	mui.openWindow({
		url: 'major.html',
		id: 'major',
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
})

/*关于*/
document.getElementById("about").addEventListener('tap',function () {
	//获得主页面的webview
	var main = plus.webview.currentWebview().parent();
	//触发主页面的gohome事件
	mui.fire(main,'gohome');
});

//退出操作******************
document.getElementById('exit').addEventListener('tap', function() {
	if (mui.os.ios) {
		app.setState({});
		mui.openWindow({
			url: 'login.html',
			id: 'login',
			show: {
				aniShow: 'pop-in'
			},
			waiting: {
				autoShow: false
			}
		});
		return;
	}
	var btnArray = [{
		title: "注销当前账号"
	}, {
		title: "直接关闭应用"
	}];
	plus.nativeUI.actionSheet({
		cancel: "取消",
		buttons: btnArray
	}, function(event) {
		var index = event.index;
		switch (index) {
			case 1:
				app.setState({});
				mui.openWindow({
					url: 'login.html',
					id: 'login',
					show: {
						aniShow: 'pop-in'
					},
					waiting: {
						autoShow: false
					}
				});
				break;
			case 2:
				plus.runtime.quit();
				break;
		}
	});
}, false);