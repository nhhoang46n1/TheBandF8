
// AddListener for Buy Tickets btn
const buyBTNs = document.querySelectorAll('.js-btn-ticket');
const modalClose = document.querySelector('.modal-close');
const modelContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');

function showBuyTicket(){
    modal.classList.add('open');
}

function hiddenBuyTicket(){
    modal.classList.remove('open')
}

for (const buyBTN of buyBTNs){
    buyBTN.addEventListener('click', showBuyTicket)
}
modalClose.addEventListener('click', hiddenBuyTicket)
modal.addEventListener('click', hiddenBuyTicket)

modelContainer.addEventListener('click', function(event){
    event.stopPropagation();
})

// Turn on/off menu ( Mobile )

const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    const isClosed = header.clientHeight === headerHeight;
    if (isClosed) header.style.height = 'auto'
    else header.style.height = null;
    
}

// Turn off when choose 1 of menu secrtions ( Mobile )

const menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        const isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(isParentMenu){
            event.preventDefault();
        } else {
            header.style.height = null; 
        }
    }
}