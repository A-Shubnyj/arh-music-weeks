document.addEventListener('DOMContentLoaded', function() {

    let modalButtons = document.querySelectorAll('.button'),
        overlay = document.querySelector('.modal_overlay'),
        closeButtons = document.querySelectorAll('.close_button');
        confButtons = document.querySelectorAll('.confirm_button');

    modalButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            let modalId = this.getAttribute('data-index'),
                modalElem = document.querySelector('.modal_window[data-index="' + modalId + '"]');
            modalElem.classList.add('active');
            overlay.classList.add('active');
            getOrder();
            getResultPrice();
        });
    });

    closeButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {
            let parentModal = this.closest('.modal_window');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    confButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {
            let parentModal = this.closest('.modal_window');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });

    overlay.addEventListener('click', function() {
        let parentModal = this.closest('.modal_window');
        parentModal.classList.remove('active');
        this.classList.remove('active');
    });


});