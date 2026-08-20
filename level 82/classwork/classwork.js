    const cart = document.getElementById("cart");

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {

            const card = button.parentElement;

            const copy = card.cloneNode(true);

            cart.appendChild(copy);

        });
    });