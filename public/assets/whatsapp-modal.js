(function () {
    var TOGGLE_SELECTOR = 'a[href*="wa.me/201515124909"]';
    var API_URL = 'https://seashell-koala-848874.hostingersite.com/api/v1/forms';
    var isAr = (document.documentElement.lang || 'en').toLowerCase().indexOf('ar') === 0;

    var WA_MESSAGE = isAr
        ? 'مرحباً، أرغب في الاستفسار عن مشاريع الديار القطرية في مصر، وأتطلع إلى تواصلكم معي في أقرب وقت. شكراً لكم.'
        : 'Hello, I would like to inquire about Qatar Diar projects in Egypt and look forward to hearing from you at your earliest convenience. Thank you.';
    var WA_LINK = 'https://wa.me/201515124909?text=' + encodeURIComponent(WA_MESSAGE);

    var WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.84c0 4.55-3.71 8.23-8.25 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.24-.85.83-.85 2.03s.87 2.36.99 2.52c.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>';

    var TEXT = isAr ? {
        title: 'ابدأ المحادثة',
        sub: 'أدخل اسمك وسنتواصل معك مباشرة عبر واتساب',
        nameLabel: 'الاسم',
        namePlaceholder: 'اكتب اسمك هنا',
        phoneLabel: 'رقم الهاتف (اختياري)',
        phonePlaceholder: 'مثال: 01000000000',
        cta: 'متابعة عبر واتساب',
        consent: 'By submitting this form, you agree to be contacted by Fair Direction regarding Qatar Diar properties, and to our {link}.',
        nameRequired: 'يرجى إدخال اسمك للمتابعة',
        sending: 'جاري التحويل...',
        close: 'إغلاق'
    } : {
        title: 'Start a Conversation',
        sub: 'Enter your name and we will connect with you directly on WhatsApp',
        nameLabel: 'Name',
        namePlaceholder: 'Enter your name',
        phoneLabel: 'Phone (optional)',
        phonePlaceholder: 'e.g. +201000000000',
        cta: 'Continue on WhatsApp',
        consent: 'By submitting this form you agree to be contacted by Fair Direction regarding Qatar Diar properties, and to our {link}.',
        nameRequired: 'Please enter your name to continue',
        sending: 'Connecting...',
        close: 'Close'
    };

    var STYLE = [
        '#modon-wa-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(250,249,246,0.72);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);opacity:0;visibility:hidden;transition:opacity .35s ease,visibility .35s ease}',
        '#modon-wa-overlay.modon-wa-open{opacity:1;visibility:visible}',
        '#modon-wa-card{position:relative;width:100%;max-width:410px;background:#fff;border-radius:22px;overflow:hidden;box-shadow:0 24px 80px -20px rgba(15,23,42,0.18),0 4px 20px rgba(197,163,101,0.12);border:1px solid rgba(197,163,101,0.3);transform:translateY(28px) scale(0.96);transition:transform .45s cubic-bezier(0.22,1,0.36,1);font-family:\'Inter\',\'Cairo\',sans-serif;color:#0F172A}',
        '#modon-wa-card.modon-wa-show{transform:translateY(0) scale(1)}',
        '#modon-wa-card *,#modon-wa-card *::before,#modon-wa-card *::after{box-sizing:border-box}',
        '#modon-wa-card::before{content:"";position:absolute;top:0;left:0;right:0;height:5px;background:linear-gradient(90deg,#C5A365,#E3C585,#C5A365);z-index:1}',
        '.modon-wa-head{position:relative;padding:40px 30px 26px;text-align:center;background:linear-gradient(180deg,#FDFCF9 0%,#F6EFE2 100%);border-bottom:1px solid rgba(197,163,101,0.18)}',
        '.modon-wa-head::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:1px;background:linear-gradient(90deg,transparent,rgba(197,163,101,0.55),transparent)}',
        '.modon-wa-badge{width:72px;height:72px;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;border-radius:22px;background:linear-gradient(135deg,#2BE07A 0%,#1DA851 100%);box-shadow:0 14px 34px -10px rgba(37,211,102,0.55),inset 0 1px 0 rgba(255,255,255,0.35);border:1px solid rgba(255,255,255,0.4);animation:modonWaFloat 3.2s ease-in-out infinite}',
        '.modon-wa-badge svg{width:36px;height:36px;color:#fff;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.15))}',
        '@keyframes modonWaFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}',
        '.modon-wa-title{margin:0;font-family:Georgia,\'Playfair Display\',serif;font-size:1.6rem;font-weight:700;letter-spacing:0.01em;color:#0F172A}',
        '.modon-wa-title .gold{color:#C5A365}',
        '.modon-wa-sub{margin:9px 0 0;font-size:0.85rem;line-height:1.7;color:#64748B}',
        '.modon-wa-close{position:absolute;top:16px;right:18px;width:34px;height:34px;display:flex;align-items:center;justify-content:center;border:none;border-radius:50%;background:rgba(15,23,42,0.06);color:#475569;font-size:1.2rem;line-height:1;cursor:pointer;transition:background .2s,color .2s,transform .2s}',
        '.modon-wa-close:hover{background:rgba(15,23,42,0.12);color:#0F172A;transform:rotate(90deg)}',
        '.modon-wa-body{padding:28px 30px 32px}',
        '.modon-wa-field{margin-bottom:18px}',
        '.modon-wa-field label{display:block;font-size:0.66rem;font-weight:800;text-transform:uppercase;letter-spacing:0.22em;color:#0F172A;margin-bottom:9px}',
        '.modon-wa-field input{width:100%;padding:13px 15px;font-size:0.95rem;color:#0F172A;background:#fff;border:1px solid #E2E8F0;border-radius:12px;outline:none;transition:border-color .2s,box-shadow .2s,background .2s;font-family:inherit}',
        '.modon-wa-field input:hover{border-color:#CBD5E1}',
        '.modon-wa-field input:focus{border-color:#C5A365;background:#FFFDF8;box-shadow:0 0 0 4px rgba(197,163,101,0.16)}',
        '.modon-wa-field input::placeholder{color:#94A3B8}',
        '.modon-wa-error{display:none;font-size:0.78rem;color:#DC2626;margin:-8px 0 14px}',
        '#modon-wa-submit{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:15px 16px;font-size:0.95rem;font-weight:700;font-family:inherit;color:#fff;background:linear-gradient(135deg,#2BE07A 0%,#1DA851 100%);border:none;border-radius:12px;cursor:pointer;user-select:none;box-shadow:0 14px 32px -12px rgba(37,211,102,0.65);transition:transform .2s,box-shadow .2s,filter .2s}',
        '#modon-wa-submit:hover{filter:brightness(1.05);box-shadow:0 18px 38px -12px rgba(37,211,102,0.75)}',
        '#modon-wa-submit:active{transform:translateY(1px) scale(0.99)}',
        '#modon-wa-submit:disabled{opacity:0.7;cursor:wait}',
        '#modon-wa-submit svg{width:20px;height:20px}',
        '.modon-wa-consent{margin:16px 0 0;font-size:0.7rem;line-height:1.65;color:#94A3B8;text-align:center}',
        '.modon-wa-consent a{color:#C5A365;font-weight:600;text-decoration:none;transition:color .2s}',
        '.modon-wa-consent a:hover{color:#0F172A;text-decoration:underline;text-underline-offset:2px}',
        'html[dir="rtl"] .modon-wa-close{right:auto;left:18px}',
        '@media(max-width:480px){#modon-wa-card{max-width:100%}.modon-wa-head{padding:34px 22px 22px}.modon-wa-body{padding:24px 22px 26px}}'
    ].join('');

    var consentLink = '<a href="/ar/privacy-policy/">Privacy Policy</a>';
    TEXT.consent = TEXT.consent.replace('{link}', consentLink);

    function build() {
        var style = document.createElement('style');
        style.textContent = STYLE;
        document.head.appendChild(style);

        var overlay = document.createElement('div');
        overlay.id = 'modon-wa-overlay';
        overlay.setAttribute('dir', isAr ? 'rtl' : 'ltr');
        overlay.innerHTML =
            '<div id="modon-wa-card" role="dialog" aria-modal="true" aria-labelledby="modon-wa-title">' +
            '<button type="button" class="modon-wa-close" id="modon-wa-close" aria-label="' + TEXT.close + '">&times;</button>' +
            '<div class="modon-wa-head">' +
            '<div class="modon-wa-badge">' + WA_ICON + '</div>' +
            '<h2 class="modon-wa-title" id="modon-wa-title">' + TEXT.title + '<span class="gold">.</span></h2>' +
            '<p class="modon-wa-sub">' + TEXT.sub + '</p>' +
            '</div>' +
            '<div class="modon-wa-body">' +
            '<form id="modon-wa-form" novalidate>' +
            '<div class="modon-wa-field"><label for="modon-wa-name">' + TEXT.nameLabel + '</label>' +
            '<input id="modon-wa-name" name="name" type="text" autocomplete="name" placeholder="' + TEXT.namePlaceholder + '" required></div>' +
            '<div class="modon-wa-field"><label for="modon-wa-phone">' + TEXT.phoneLabel + '</label>' +
            '<input id="modon-wa-phone" name="phone" type="tel" autocomplete="tel" dir="ltr" placeholder="' + TEXT.phonePlaceholder + '"></div>' +
            '<p class="modon-wa-error" id="modon-wa-error"></p>' +
            '<button type="submit" id="modon-wa-submit">' + WA_ICON + '<span>' + TEXT.cta + '</span></button>' +
            '<p class="modon-wa-consent">' + TEXT.consent + '</p>' +
            '</form>' +
            '</div>' +
            '</div>';
        document.body.appendChild(overlay);

        var savedName = localStorage.getItem('modon_wa_name');
        var savedPhone = localStorage.getItem('modon_wa_phone');
        var nameInput = document.getElementById('modon-wa-name');
        var phoneInput = document.getElementById('modon-wa-phone');
        var errorEl = document.getElementById('modon-wa-error');
        var submitBtn = document.getElementById('modon-wa-submit');
        var form = document.getElementById('modon-wa-form');

        if (savedName) nameInput.value = savedName;
        if (savedPhone) phoneInput.value = savedPhone;

        function open() {
            document.body.style.overflow = 'hidden';
            overlay.classList.add('modon-wa-open');
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    document.getElementById('modon-wa-card').classList.add('modon-wa-show');
                });
            });
            setTimeout(function () { nameInput.focus(); }, 50);
        }

        function close() {
            document.body.style.overflow = '';
            document.getElementById('modon-wa-card').classList.remove('modon-wa-show');
            setTimeout(function () { overlay.classList.remove('modon-wa-open'); }, 250);
        }

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) close();
        });
        document.getElementById('modon-wa-close').addEventListener('click', close);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('modon-wa-open')) close();
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var name = nameInput.value.trim();
            var phone = phoneInput.value.trim();
            if (!name) {
                errorEl.textContent = TEXT.nameRequired;
                errorEl.style.display = 'block';
                nameInput.focus();
                return;
            }
            errorEl.style.display = 'none';
            localStorage.setItem('modon_wa_name', name);
            if (phone) localStorage.setItem('modon_wa_phone', phone);

            var btnLabel = submitBtn.querySelector('span');
            btnLabel.textContent = TEXT.sending;
            submitBtn.disabled = true;

            fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    provider: 'whatsapp-modon',
                    unitType: 'WhatsApp Inquiry'
                })
            }).catch(function () {});
            window.open(WA_LINK, '_blank');
            close();
            setTimeout(function () {
                btnLabel.textContent = TEXT.cta;
                submitBtn.disabled = false;
            }, 2000);
        });

        document.querySelectorAll(TOGGLE_SELECTOR).forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                open();
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
    } else {
        build();
    }
})();