window.onload = function() {
	var classobj = document.getElementsByClassName('bead');
	for ( var i=0 ; i<classobj.length ; i++ ) {
		classobj[i].onclick=function(){
			if (window.getComputedStyle(this).cssFloat == "left"){
				this.style.cssFloat = 'right';
			} else  {
				this.style.cssFloat = 'left';
			}
		}
	}
}