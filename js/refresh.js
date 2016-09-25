/**
 * 下拉刷新具体业务实现
 */

function pulldownRefresh(card, cells,className,innerHTML) {
	setTimeout(function() {
		for (var i = cells.length, len = i + 3; i < len; i++) {
			var li = document.createElement('li');
			li.className = className;
			li.innerHTML = innerHTML;
			
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
function pullupRefresh(card, cells,className,innerHTML) {
	setTimeout(function() {
		mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
		for (var i = cells.length, len = i + 5; i < len; i++) {
			var li = document.createElement('li');
			li.className = className;
			li.innerHTML = innerHTML;
			card.appendChild(li);
		}
	}, 1000);
}