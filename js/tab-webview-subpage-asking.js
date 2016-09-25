mui.init({
	swipeBack: false,
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh
		},
		up: {
				contentrefresh: '正在加载...',
				callback: pullupRefresh
			}
	}
});
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		var card = document.body.querySelector('.mui-card-view');
		var cells = document.body.querySelectorAll('.mui-card-view-cell');
		for (var i = cells.length, len = i + 3; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-card-view-cell';
			li.innerHTML = '<a href="javascript:;"> ' +
								'<div class="mui-card">' +
								'<div class="mui-card-header mui-card-media">' +
									'<img src="images/logo.png" />' +
									'<div class="mui-media-body">' +
										'问吧' + (i+1) +
										'<p>自媒体</p>' +
									'</div>' +
								'</div>' +
								'<div class="mui-card-content" >' +
									'<img src="images/yuantiao.jpg" alt="" width="100%"/>' +
									'<div class="mui-card-content-inner">' +
										'<p class="mui-ellipsis" style="color: #333;">我是自媒体谢千春，关于与三星NOTE7频繁发生爆炸事件的相关问题，问我吧！</p>' +
									'</div>' +
								'</div>' +
								'<div class="mui-card-footer">' +
									'<a class="mui-card-link">科技</a>' +
									'<a class="mui-card-link">628关注</a>' +
									'<a class="mui-card-link">27提问</a>' +
									'<button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-plusempty">关注</button>' +
								'</div>' +
							'</div>' +
						'</a>';
			//下拉刷新，新纪录插到最前面；
			card.insertBefore(li, card.firstChild);
		}
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1000);
}
var count = 0;
/**
 * 上拉加载具体业务实现
 */
function pullupRefresh() {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
		var card = document.body.querySelector('.mui-card-view');
		var cells = document.body.querySelectorAll('.mui-card-view-cell');
		for (var i = cells.length, len = i + 20; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-card-view-cell';
			li.innerHTML = '<a href="javascript:;"> ' +
								'<div class="mui-card">' +
								'<div class="mui-card-header mui-card-media">' +
									'<img src="images/logo.png" />' +
									'<div class="mui-media-body">' +
										'Item' + (i+1) +
										'<p>自媒体</p>' +
									'</div>' +
								'</div>' +
								'<div class="mui-card-content" >' +
									'<img src="images/yuantiao.jpg" alt="" width="100%"/>' +
									'<div class="mui-card-content-inner">' +
										'<p class="mui-ellipsis" style="color: #333;">我是自媒体谢千春，关于与三星NOTE7频繁发生爆炸事件的相关问题，问我吧！</p>' +
									'</div>' +
								'</div>' +
								'<div class="mui-card-footer">' +
									'<a class="mui-card-link">科技</a>' +
									'<a class="mui-card-link">628关注</a>' +
									'<a class="mui-card-link">27提问</a>' +
									'<button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-plusempty">关注</button>' +
								'</div>' +
							'</div>' +
						'</a>';
			card.appendChild(li);
		}
	}, 1000);
}