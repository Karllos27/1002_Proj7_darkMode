const actionBtn = document.querySelector('.action-button');
const modal = (body) => {
    return `<div class="modal">
    <p class="modal-title ${body.type}">
        <i class="modal-title-icon" data-feather="${body.modal_icon}"></i>
        ${body.title}
    </p>
    <p class="modal-description">
        ${body.description}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept">${body.accept_btn}</button>
        <button class="modal-decline">${body.decline_btn}</button>
    </div>
    <button class="modal-close-icon"><i data-feather="x"></i></button>
</div>`
}

const createModal = (value) => {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = modal(value);
    document.body.appendChild(modalContainer);
    feather.replace()
};

const addToBasket = () => {
    console.log("dodano do koszyka");
    
    createModal({
            type: 'info',
            modal_icon: 'info',
            title: "Lorem ipsum dolor title",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque ducimus perspiciatis ab tempora, quae quis tenetur illum officiis, fugit minima consequatur commodi unde accusamus.",
            accept_btn: 'Zaakceptuj',
            decline_btn: 'Anuluj'   
    });
    
}

actionBtn.addEventListener("click", addToBasket);

const actionTwoBtn = document.querySelector('.action-two-button');
actionTwoBtn.addEventListener("click", () => {
    createModal({
        type: 'success',
        modal_icon: 'alert-triangle',
        title: "Drugi tekst modala",
        description: "TEST TEST TEST",
        accept_btn: 'OK',
        decline_btn: 'NIE'   
    });
});