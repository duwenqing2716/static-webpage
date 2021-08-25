
var present = document.querySelectorAll('.present');
var images = document.getElementsByTagName('image');
var row = document.getElementById('row');
var right = document.getElementById('right');
var right2 = document.getElementById('right2');
var right3 = document.getElementById('right3');
var iconBox = document.getElementById('icon-box');
var zhedie = document.getElementById('zhedie');
var iconBox1 = document.getElementById('icon-box2');
var iconBox3 = document.getElementById('icon-box3');
var search = document.getElementById('search');
var email = document.getElementById('email');
var lists = document.getElementsByName('list');
var circle = document.getElementsByClassName('circle');
var banner = document.getElementById('banner-list');
var swipers = document.getElementById('swiper');

// 轮播图部分

// var left = 0;
// var index = 0;
// run();
// var timer;
// 
// function run() {
// 	if (left <= -1500) {
// 		banner.style.marginLeft = '0px';
// 		left = 0;
// 	}
// 	var m = (left % 375 === 0) ? 3000 : 60;
// 	banner.style.marginLeft = left + 'px';
// 	var d = Math.floor(-left / 375);
// 	for (var x = 0; x < circle.length; x++) {
// 		circle[x].className = 'circle';
// 	}
// 	circle[d].className = 'circle black';
// 	left -= 15;
// 	timer = setTimeout(run, m);
// }
// 
// for (var n = 0; n < circle.length; n++) {
// 	circle[n].addEventListener('click', function() {
// 		clearTimeout(timer);
// 		var pointIndex = this.getAttribute("data-index");
// 		currentIndex = pointIndex;
// 		console.log(currentIndex)
// 		banner.style.marginLeft = -currentIndex * 375 + 'px';
// 		for (var x = 0; x < circle.length; x++) {
// 			circle[x].className = 'circle';
// 		}
// 		circle[currentIndex].className = 'circle black';
// 	})
// }
// banner.onclick=function(){
// 	clearTimeout(timer);
// }

// touch事件


// 轮播图
window.addEventListener('load', function() {
	var flag = true;
	var index = 0;
	var timer = setInterval(function() {
		index++;
		var translateX = -index * 375;
		banner.style.transition = 'all 0.5s'
		banner.style.transform = 'translateX(' + translateX + 'px)';
	}, 2000);
	banner.addEventListener('transitionend', function() {
		if (index === 4) {
			index = 0;
			banner.style.transition = 'none';

			var translateX = -index * 375;
			banner.style.transform = 'translateX(' + translateX + 'px)';
		} else if (index < 0) {
			index = 3;
			banner.style.transition = 'none';
			var translateX = -index * 375;
			banner.style.transform = 'translateX(' + translateX + 'px)';
		}
		for (var x = 0; x < circle.length; x++) {
			circle[x].className = 'circle';
		}
		circle[index].className = 'circle black';
	})
	var startX = 0;
	var moveX = 0;

	banner.addEventListener('touchstart', function(e) {
		startX = e.targetTouches[0].pageX;
		clearInterval(timer);
		console.log(startX)
	})
	banner.addEventListener('touchmove', function(e) {
		moveX = e.targetTouches[0].pageX - startX;
		console.log(moveX);
		var translateX = -index * 375 + moveX;
		banner.style.transition = 'none';
		banner.style.transform = 'translateX(' + translateX + 'px)';
		flag = false;
		e.preventDefault();
	})
	banner.addEventListener('touchend', function(e) {
		flag = true;
		if (flag) {
			if (Math.abs(moveX) > 140) {
				if (moveX > 0) {
					index--;
				} else {
					index++;
				}
				var translateX = -index * 375;
				banner.style.transition = 'all 0.5s'
				banner.style.transform = 'translateX(' + translateX + 'px)';
			} else {
				var translateX = -index * 375;
				banner.style.transition = 'all 0.5s'
				banner.style.transform = 'translateX(' + translateX + 'px)';
			}
		}
	})
	
	
	
	
})
// 导航部分

for (var t = 0; t < lists.length; t++) {

	lists[t].onclick = function() {
		for (var c = 0; c < lists.length; c++) {
			lists[c].className = ''
		}
		this.className = 'active'
	}
}
box.addEventListener('touchmove', function(e) {
	e.preventDefault();
});
// box1.addEventListener('touchmove', function(e) {
// 	e.preventDefault();
// });

var a = true;
row.onclick = function() {
	if (!a) {
		row.className = 'iconfont icon-anniu_kaiqi'
		row.style.color = 'green'
		console.log(a)
		a = true;
	} else {
		row.className = 'iconfont icon-anniu_guanbi'
		row.style.color = 'black'
		a = false;
	}
}
