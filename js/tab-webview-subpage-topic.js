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
			li.innerHTML = '<a href="javascript:;">	' +						
				'<div class="mui-card">' +
					'<div class="mui-card-header" >' +
						'<p>#话题' + (i+1) + '#</p>' +
					'</div>' +
					'<div class="mui-card-content">' +
						'<div class="mui-card-content-inner">' +
							'<ul>' +
								'<li>' +
									'<div class="circle">' +
										'<span><img class="img" src="images/me.jpg" alt="头像" /></span>' +
									'</div>' +
									'<p>抱歉，我的读的是夜校</p>' +
								'</li>' +
								'<li>' +
									'<div class="circle">' +
										'<span><img class="img" src="images/me.jpg" alt="头像" /></span>' +
									'</div>' +
									'<p>关键取决于你是一个怎样的人</p>' +
								'</li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
					'<div class="mui-card-footer">' +
						'<a class="mui-card-link">生活</a>' +
						'<a class="mui-card-link">245关注</a>' +
						'<a class="mui-card-link">1101讨论</a>' +
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
			li.innerHTML = '<a href="javascript:;">	' +						
				'<div class="mui-card">' +
					'<div class="mui-card-header" >' +
						'<p>#话题' + (i+1) + '#</p>' +
					'</div>' +
					'<div class="mui-card-content">' +
						'<div class="mui-card-content-inner">' +
							'<ul>' +
								'<li>' +
									'<div class="circle">' +
										'<span><img class="img" src="images/me.jpg" alt="头像" /></span>' +
									'</div>' +
									'<p>抱歉，我的读的是夜校</p>' +
								'</li>' +
								'<li>' +
									'<div class="circle">' +
										'<span><img class="img" src="images/me.jpg" alt="头像" /></span>' +
									'</div>' +
									'<p>关键取决于你是一个怎样的人</p>' +
								'</li>' +
							'</ul>' +
						'</div>' +
					'</div>' +
					'<div class="mui-card-footer">' +
						'<a class="mui-card-link">生活</a>' +
						'<a class="mui-card-link">245关注</a>' +
						'<a class="mui-card-link">1101讨论</a>' +
						'<button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-plusempty">关注</button>' +
					'</div>' +
				'</div>' +
			'</a>';
			card.appendChild(li);
		}
	}, 1000);
}