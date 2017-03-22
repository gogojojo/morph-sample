MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

function play(){
	TweenMax.to('#neutral', 0.8, {morphSVG:{shape:"#smile", shapeIndex:1}, ease: 'Power4easeInOut', delay: 1})
	TweenMax.to('#neutral', 0.8, {morphSVG:{shape:"#neutral", shapeIndex:1}, ease: 'Power4easeInOut', delay: 2})
	TweenMax.to('#neutral', 0.8, {morphSVG:{shape:"#frown", shapeIndex:1}, ease: 'Power4easeInOut', delay: 3})
	TweenMax.to('#neutral', 0.8, {morphSVG:{shape:"#neutral", shapeIndex:1}, ease: 'Power4easeInOut', delay: 4, onComplete: play})
}

play();