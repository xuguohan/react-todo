define(['react','jquery'],function(React){
	var InputView = React.createClass({
		render:function(){
			return (
				<input type = 'text'  onKeyUp = {this.props.keyupEv} placeholder = 'What needs to be done?'/>
			);
		}
	})
	return InputView
})