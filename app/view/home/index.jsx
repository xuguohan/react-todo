define(['react'
	,'jsx!view/home/inputView'
	,'jsx!view/home/listView'
	,'jsx!view/home/stateView'
],function(React
	,InputView
	,ListView
	,StateView
){
	var TodeApp = React.createClass({
		//设置组件的初始化state
		getInitialState:function(){
			return{
				'lists':[]
			}
		}
		,keyupEv:function(ev){
			var self = this;
			if(ev.keyCode==13){
				var val = $(ev.currentTarget).val();
				if(val){
					$(ev.currentTarget).val('');
					var obj = {
						checked:false,
						text:val
					}
					this.state.lists.push(obj);
					this.setState(this.state);
				}
			}
		}
		,editeEvent:function(ev){
			var node  = $(ev.currentTarget);
			var index = node.parent().attr('data-index');
			var val = node.val();
			this.state.lists[index].text = val;
			this.setState(this.state);
		}
		,checkEvent:function(ev){
			var node  = $(ev.currentTarget);
			var checked = node.prop('checked');
			var index = node.parent().attr('data-index');
			this.state.lists[index].checked = checked;
			this.setState(this.state);
		}
		,deleteEvnet:function(ev){
			var node = $(ev.currentTarget);
			var index = node.parent().attr('data-index');
			this.state.lists.splice(index,1);
			this.setState(this.state);
		}
		,clearCompEvent:function(ev){
			var arr = this.getNoCheckedData();
			this.state.lists = arr;
			this.setState(this.state);
		}
		,getNoCheckedData:function(){
			var arr = [];
			var len = this.state.lists.length;
			for(var i = 0 ; i < len ; i++){
				if(!this.state.lists[i].checked){
					arr.push(this.state.lists[i]);
				}
			}
			return arr
		}	
		,render:function(){
			return (
				<div className='todosApp'>
					<div className='content'>
						<h1>Todos</h1>
						<InputView  keyupEv = {this.keyupEv}/>
						<ListView lists={this.state.lists} deleteEvnet = {this.deleteEvnet} editeEvent={this.editeEvent} checkEvent={this.checkEvent}/>
					</div>
					<StateView lists ={this.state.lists}   clearCompEvent = {this.clearCompEvent}/>
				</div>
			);
		}
	})
	return TodeApp
})