let count = 3;
const notifications = document.querySelectorAll('main a');
const plural = document.querySelector('.plural');
const countSpan = document.querySelector('.count');
const markAllAsRead = document.querySelector('.mark-all-read');

if(count < 1){
    count = 0;
}

countSpan.textContent = count;

if(count<=1){
    plural.style.display = "none";
}

notifications.forEach(elem => {
    elem.addEventListener('click',()=>{
        elem.classList.remove('unread');
        count--;
    })
})

markAllAsRead.addEventListener('click',()=>{
    notifications.forEach(elem =>{
        elem.classList.remove('unread')
    })
})