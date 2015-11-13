define(['react','jquery'],function(React,$){
	var Router = {
		start:function(){
			var currentPage = getHash();
			if(currentPage){
				loadCurrentPage(currentPage);
			}else{
				var enterPage = Global.enterPage;
				location.href = location.href+'#'+enterPage;
			}
		}
	}
	window.addEventListener('hashchange',function(){
		var currentPage = getHash();
		loadCurrentPage(currentPage);
	},false)
	
	function loadCurrentPage(currentPage){
		require(['jsx!../app/view/'+currentPage+'/index'],function(View){
			var contartner = $('#contartner').get(0);
            React.render(<View/>,contartner);
		})
	}
	
	function getHash(){
		return location.hash.split('?')[0].split('#')[1];
	}
	return Router
})