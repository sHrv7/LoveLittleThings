(function () {
    function loadEmailJs() {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
        script.async = true;
        script.onload = function () {
            if (window.emailjs) {
                try {
                    emailjs.init('YOUR_PUBLIC_KEY');
                } catch (error) {
                    console.warn('EmailJS init failed', error);
                }
            }
        };
        document.head.appendChild(script);
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

    function loadGlsWidget() {
        const dialog = document.getElementById('gls-dialog');
        const link = document.getElementById('open-gls');
        const addressField = document.getElementById('deliveryAddressInput');

        if (!dialog || !link) {
            return;
        }

        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof dialog.showModal === 'function') {
                dialog.showModal();
            }
        });

        dialog.addEventListener('change', (event) => {
            const selected = event.detail;
            if (addressField && selected) {
                // GLS widget vraća objekt s name, address, itd.
                const address = selected.name ? `${selected.name}, ${selected.address || ''}` : selected.address || '';
                addressField.value = address;
            }
        });
    }

    window.sendCartEmail = function () {
        if (!window.cart || !window.cart.length) {
            alert('Košarica je prazna. Dodajte proizvod prije slanja upita.');
            return;
        }

        const deliveryMethod = document.getElementById('deliveryMethodInput')?.value || '-';
        const deliveryAddress = document.getElementById('deliveryAddressInput')?.value || '-';
        const orderSummary = document.getElementById('orderSummary')?.value || '';

        const subject = encodeURIComponent('Upit za prilagodbu proizvoda - Love Little Things');
        const bodyText = `Poštovani,\n\nŽelim sljedeće proizvode s prilagodbama:\n\n${orderSummary}\nNačin dostave: ${deliveryMethod}\nAdresa: ${deliveryAddress}\n\nLjubazno vas molim da me kontaktirate s detaljima i cijenom.`;
        const body = encodeURIComponent(bodyText);
        window.location.href = `mailto:${window.contactEmail}?subject=${subject}&body=${body}`;
    };

    window.addEventListener('DOMContentLoaded', function () {
        loadEmailJs();
        loadBoxnowWidget();
        loadGlsWidget();
    });
})();
