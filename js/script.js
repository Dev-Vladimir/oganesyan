
let burger = document.querySelector('.burger');
	menu = document.querySelector('.main-screen-menu');
	parentUl = false;
burger.onclick = function(){
	this.classList.toggle('active');
	menu.classList.toggle('active');
}

let menuItems = document.querySelectorAll('.main-screen-menu a');
menuItems.forEach(item => {
	item.addEventListener('click', showSubMenu)
})

function showSubMenu(e){
	e.preventDefault();
	let item = e.target;
		subs = item.parentNode.querySelector('ul');
	if (subs !== null){
		subs = subs.cloneNode(true);
		let parent = item.closest('ul');
		let back = document.createElement('span');

		back.classList.add('back');
		back.innerHTML = '❮ Назад';
		back.addEventListener('click', showParentUl);
		menu.prepend(back);
		parentUl = parent
		parent.replaceWith(subs);
	}else{
		console.log(1);
		document.location.href = item.href;
	}
	console.log(item.href);

}

function showParentUl(e){
	let elem = e.target;
	
		ul = menu.querySelector('ul');
		console.log(parent);

	ul.replaceWith(parentUl);
	menu.removeChild(elem);
}