const ul1 = document.getElementById('ul1'),
ul2 = document.getElementById('ul2');
let li = ul1.children;
var arr = [];
let list = Array.from(li);
//console.log(arr)
list.forEach(function(e,i){
	e.onclick = function(){
		//找到li的2个span（一个是价格，一个是名字）
		var span = e.getElementsByTagName('span');
		
		//查找数组中有没有当前点击的商品名
		var onOff = arr.some((a)=>{
			return a.name == span[0].innerHTML
		});
		
		//如果当前点击的商品，已经在数组中了，那么就不要push。
		if(!onOff){
			arr.push({
				name:span[0].innerHTML,
				price:span[1].innerHTML
			});
			//当把数组添加完后，还需要把数据放到本地存储中
			localStorage.setItem('sp',JSON.stringify(arr));
			//渲染
			render();
		}
	};
});
render();

	//关联数据，在数据发生变化的时候，重新渲染页面
	
	window.addEventListener('storage',()=>{
		render();
	});



//删除:
	ul2.onclick = function(ev){
//		console.log(ev.target,getParent(ev.target))
		var li = getParent(ev.target);
		var span = li.getElementsByTagName('span');
		arr.forEach((e,i)=>{
			if(e.name === span[0].innerHTML){
				arr.splice(i,1);
				return false;
			}
		});
		
		localStorage.setItem('sp',JSON.stringify(arr));
		render();
	}


	function getParent(obj){
		if(!obj)return null;
		if(obj.tagName === 'LI' && obj.parentNode.id === 'ul2'){
			return obj;
		}else{
			return getParent(obj.parentNode);
		}
	}


function render(){
	//看看本地存储有没有数据，如果没有，arr还是走[]，如果有走数据
	if(JSON.parse(localStorage.getItem('sp'))){
		arr = JSON.parse(localStorage.getItem('sp'));
	}
	ul2.innerHTML = '';
	var html = '';
	//循环渲染。
	arr.forEach((e,i)=>{
		html += `<li>
					<span>${e.name}</span>
					<span>${e.price}</span>
				</li>`;
	});
	ul2.innerHTML = html;
}


