
	var flower = document.getElementById('flower');
	var minIndex = 1;
	var maxIndex = 5;
	currentIndex = minIndex;
	
setInterval(function(){
	if(currentIndex===maxIndex){
		currentIndex=minIndex;
	}else{
		currentIndex++
	}
	flower.setAttribute(`src`, `img/image0${currentIndex}.jpg`)
},2000)

