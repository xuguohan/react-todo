define(['react'],function(React){
	var StateView = React.createClass({
		render:function(){
			var num = 0,
				clearHtml='',
				len = this.props.lists.length;
			for(var i = 0; i < len;i++){
				if(this.props.lists[i].checked){
					num++
				}
			}

			if(num>0){
				clearHtml = <span className='clear' onClick={this.props.clearCompEvent}>Clear {num} completed item</span>
			}else{
				clearHtml = <span></span>
			}
			if(len>0){
				return(
					<div className='state'>
						<span><span className='count'>{num}</span>items left</span>
						{clearHtml}
						
					</div>
				);
			}else{
				return(<div></div>)
			}
			
		}
	})
	return StateView
})