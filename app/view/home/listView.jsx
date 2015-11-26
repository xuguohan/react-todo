define(['react'],function(React){
	var ListView = React.createClass({
		render:function(){
			var self = this;
			var lists = this.props.lists.map(function(item,index){
				var className = ''
				if(item.checked){
					className='seled'
				}
				return (
							<li data-index={index} className={className}>
								<input type='checkbox' onClick ={self.props.checkEvent}  checked = {item.checked}/>
								<input className='text' value = {item.text}  onChange={self.props.editeEvent}/>
								<span className='del' onClick={self.props.deleteEvnet}></span>
						   	</li>
					   )
			})
			return(
				<ul className='lists'>{lists}</ul>
			)
		}
	})
	return ListView
})