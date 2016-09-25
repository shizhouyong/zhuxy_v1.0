mui.init({
	swipeBack: false,
	pullRefresh: {
		container: '#pullrefresh',
		down: {
			callback: pulldownRefresh
		}
	}
});
/**
 * 下拉刷新具体业务实现
 */
function pulldownRefresh() {
	setTimeout(function() {
		var topic_table = document.body.querySelector('#topic');
		var topic_cells = topic_table.querySelectorAll('.mui-table-view-cell');
		for (var i = topic_cells.length, len = i + 3; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell';
			li.innerHTML = '<a href="javascript:;">' +
				'<img class="mui-media-object mui-pull-left" src="images/cbd.jpg">' +
				'<div class="mui-media-body">' +
					'#话题'+ (i+1) + '#' +
					'<p>269关注 1125讨论 </p>' +
					
				'</div>' +
				'<button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-plusempty "></button>' +

			'</a>';
			//下拉刷新，新纪录插到最前面；
			topic_table.insertBefore(li, topic_table.firstChild);
		}
		var asking_table = document.body.querySelector('#asking');
		var asking_cells = asking_table.querySelectorAll('.mui-table-view-cell');
		for (var i =asking_cells.length, len = i + 3; i < len; i++) {
			var li = document.createElement('li');
			li.className = 'mui-table-view-cell';
			li.innerHTML = '<a href="javascript:;">' +
				'<img class="mui-media-object mui-pull-left" src="images/cbd.jpg">' +
				'<div class="mui-media-body">' +
					'#问吧'+ (i+1) + '#' +
					'<p>269关注 1125讨论 </p>' +
					
				'</div>' +
				'<button type="button" class="mui-btn mui-btn-primary mui-icon mui-icon-plusempty "></button>' +

			'</a>';
			//下拉刷新，新纪录插到最前面；
			asking_table.insertBefore(li, asking_table.firstChild);
		}
		mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	}, 1000);
}