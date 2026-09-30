(function () {
    const EMAILJS_SERVICE_ID = 'service_k4vl9yo';
    const EMAILJS_TEMPLATE_ID = 'template_yhv2dva';
    const EMAILJS_PUBLIC_KEY = 'eUnKkyZbTPqfidvHa';
    let emailJsPromise;

    function loadEmailJs() {
        if (!emailJsPromise) {
            emailJsPromise = new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
                script.async = true;
                script.onload = () => {
                    if (!window.emailjs) {
                        reject(new Error('EmailJS se nije mogao učitati.'));
                        return;
                    }

                    try {
                        window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
                        resolve(window.emailjs);
                    } catch (error) {
                        reject(error);
                    }
                };
                script.onerror = () => reject(new Error('EmailJS se nije mogao učitati.'));
                document.head.appendChild(script);
            });
        }

        return emailJsPromise;
    }

    function loadBoxnowWidget() {
        if (!document.getElementById('chooseLockerBoxnowButton')) {
            return;
        }

        window._bn_map_widget_config = {
            partnerId: 123,
            parentElement: '#boxnowmap',
            buttonSelector: '.boxnow-widget-button',
            type: 'popup',
            gps: true,
            autoclose: true,
            afterSelect: function (selected) {
                const field = document.getElementById('deliveryAddressInput');
                if (field && selected && selected.boxnowLockerAddressLine1) {
                    field.value = selected.boxnowLockerAddressLine1;
                }
            }
        };

        const script = document.createElement('script');
        script.src = 'https://widget-cdn.boxnow.hr/map-widget/client/v5.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }

    window.sendCartEmail = async function () {
        if (!window.cart || !window.cart.length) {
            alert('Košarica je prazna. Dodajte proizvod prije slanja upita.');
            return;
        }

        const nameInput = document.getElementById('customerNameInput');
        const name = nameInput?.value.trim();
        if (!name) {
            alert('Unesite ime i prezime prije slanja upita.');
            nameInput?.focus();
            return;
        }

        const emailInput = document.getElementById('customerEmailInput');
        if (!(emailInput instanceof HTMLInputElement) || !emailInput.value.trim()) {
            alert('Unesite svoju e-adresu za odgovor.');
            emailInput?.focus();
            return;
        }
        emailInput.value = emailInput.value.trim();
        if (!emailInput.checkValidity()) {
            emailInput.reportValidity();
            return;
        }
        const email = emailInput.value;

        const deliveryAddressInput = document.getElementById('deliveryAddressInput');
        const deliveryAddress = deliveryAddressInput?.value.trim();
        if (!deliveryAddress) {
            alert('Odaberite BoxNow paketomat prije slanja upita.');
            document.getElementById('chooseLockerBoxnowButton')?.focus();
            return;
        }

        const sendButton = document.getElementById('sendCartEmailBtn');
        const originalButtonContent = sendButton ? sendButton.innerHTML : '';
        if (sendButton) {
            sendButton.disabled = true;
            sendButton.setAttribute('aria-busy', 'true');
            sendButton.textContent = 'Slanje upita...';
        }

        const deliveryMethod = document.getElementById('deliveryMethodInput')?.value || '-';
        const cartContent = window.cart.map((item, index) => {
            const customizations = Object.entries(item)
                .filter(([key, value]) => key !== 'product' && value)
                .map(([key, value]) => `  ${key}: ${value}`);
            return [`PROIZVOD ${index + 1}: ${item.product}`, ...customizations].join('\n');
        }).join('\n\n');
        const message = [
            'Poštovani,',
            '',
            'Želim sljedeće proizvode s prilagodbama:',
            '',
            cartContent,
            '',
            `Način dostave: ${deliveryMethod}`,
            `Adresa: ${deliveryAddress}`,
            '',
            `E-adresa za odgovor: ${email}`,
            '',
            'Ljubazno vas molim da me kontaktirate s detaljima i cijenom.'
        ].join('\n');

        try {
            const emailjs = await loadEmailJs();
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { name, email, message });
            window.clearCart?.();
            alert('Upit je uspješno poslan.');
        } catch (error) {
            console.error('Cart email submission failed', error);
            const reason = error?.text || error?.message || 'Nepoznata greška.';
            alert(`Slanje upita nije uspjelo: ${reason}`);
        } finally {
            if (sendButton) {
                sendButton.disabled = false;
                sendButton.removeAttribute('aria-busy');
                sendButton.innerHTML = originalButtonContent;
            }
        }
    };

    window.addEventListener('DOMContentLoaded', function () {
        loadBoxnowWidget();
    });
})();
