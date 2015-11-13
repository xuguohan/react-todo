define(['react','jsx!view/common/header'],function(React,Hearder){
	var HelloWorld = React.createClass({
		render:function(){
			return (
				<div className='about'>
					<Hearder/>
					<p>Hello,AboutPage</p>
				</div>
			);
		}
	}) 
	return HelloWorld
})