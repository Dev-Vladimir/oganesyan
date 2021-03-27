
let burger = document.querySelector('.burger');
	menu = document.querySelector('.main-screen-menu');
burger.onclick = function(){
	this.classList.toggle('active');
	menu.classList.toggle('active');
}

let menuItems = document.querySelectorAll('.main-screen-menu a');
menuItems.forEach(item => {
	item.addEventListener('click', showSubMenu)
})

// function showSubMenu(e){
// 	e.preventDefault();
// 	let item = e.target;
// 		subs = item.parentNode.querySelector('ul');
// 	if (subs !== null){
// 		subs = subs.cloneNode(true);
// 		let parent = item.closest('ul');
// 		let back = document.createElement('span');

// 		back.classList.add('back');
// 		back.innerHTML = '❮ Назад';
// 		back.addEventListener('click', showParentUl);
// 		menu.prepend(back);
// 		parentUl = parent;
// 		parent.replaceWith(subs);
// 	}else{
// 		console.log(1);
// 		document.location.href = item.href;
// 	}
// 	console.log(item.href);

// }

// function showParentUl(e){
// 	let elem = e.target;
	
// 		ul = menu.querySelector('ul');
// 		console.log(parent);

// 	ul.replaceWith(parentUl);
// 	menu.removeChild(elem);
// }

function showSubMenu(e){
	e.preventDefault();
	let item = e.target;
		subs = item.parentNode.querySelector('ul');

	if (subs !== null){
		subs = subs.cloneNode(true);
		let parent = item.closest('ul');
		subs = subs.cloneNode(true);
		// console.log(menu);
		let back = document.createElement('li');
		back.classList.add('back');
		back.innerHTML = 'Назад';
		let span = document.createElement('span');
		span.innerHTML = '❮'
		back.prepend(span);
		subs.prepend(back);
		subs.classList.add('current');
		subs.style.opacity = '0';
		setTimeout(function(){
			subs.style.transform = "translateX(0%)";
			subs.style.opacity = '1';
		}, 300);
		menu.appendChild(subs)
		parent.style.transform = 'translateX(-100%)';
		parent.style.opacity = '0';
		back.addEventListener('click', showParentUl);
	}else{
		// console.log(1);
		document.location.href = item.href;
	}
}

function showParentUl(e){
	let current = menu.querySelector('.current');
		primary = menu.querySelector('ul');
	console.log(primary);
	current.style.transform = 'scale(3)';
	current.style.opacity = '0';
	setTimeout(function(){
			primary.style.transform = "translateX(0%)";
			primary.style.opacity = '1';
			menu.removeChild(current);
		}, 300);
}