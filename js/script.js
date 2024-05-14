let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let closeBtn = document.querySelector('#close-navbar');

menuBtn.onclick = () => {
    navbar.classList.add('active');
};

closeBtn.onclick = () => {
    navbar.classList.remove('active');
};


window.onscroll = () => {
    navbar.classList.remove('active');

}
document.addEventListener('DOMContentLoaded', function() {
    const membersList = document.getElementById('members-list');

    function Reorder_randomly() {
        for (let i = membersList.children.length; i >= 0; i--) {
            membersList.appendChild(membersList.children[Math.random() * i | 0]);
        }
    }

    Reorder_randomly();

});