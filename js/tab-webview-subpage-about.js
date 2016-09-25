//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
  interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
});

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
											'Item ' + (i+1) + 
											'<p>发表于 2016-06-30 15:30</p>' +
										'</div>' +
									'</div>' +
									'<div class="mui-card-content" >' +
										'<!--<img src="" alt="" width="100%"/>-->' +
										'<div class="mui-card-content-inner">' +
											'<p style="color: #000; font-weight: bold;">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>' +
											'<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>' +
										'</div>' +
									'</div>' +
									'<div class="mui-card-footer">' +
										'<a class="mui-card-link">600赞同</a>'+
										'<a class="mui-card-link">49评论</a>' +
										'<a class="mui-card-link">关注话题</a>' +
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
		for (var i = cells.length, len = i + 5; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-card-view-cell';
			li.innerHTML = '<a href="javascript:;"> ' +
								'<div class="mui-card">' +
									'<div class="mui-card-header mui-card-media">' +
										'<img src="images/logo.png" />' +
										'<div class="mui-media-body">' +
											'Item ' + (i+1) + 
											'<p>发表于 2016-06-30 15:30</p>' +
										'</div>' +
									'</div>' +
									'<div class="mui-card-content" >' +
										'<!--<img src="" alt="" width="100%"/>-->' +
										'<div class="mui-card-content-inner">' +
											'<p style="color: #000; font-weight: bold;">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>' +
											'<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>' +
										'</div>' +
									'</div>' +
									'<div class="mui-card-footer">' +
										'<a class="mui-card-link">600赞同</a>'+
										'<a class="mui-card-link">49评论</a>' +
										'<a class="mui-card-link">关注话题</a>' +
									'</div>' +
								'</div>' +
							'</a>';
			card.appendChild(li);
		}
	}, 1000);
}