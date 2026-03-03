<?php session_start(); ?>
<!DOCTYPE html>
<html lang="sk" data-theme="auto">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kontakt — codehero s.r.o.</title>
    <meta name="robots" content="noindex" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="css/variables.css" />
    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/nav.css" />
    <link rel="stylesheet" href="css/components.css" />
    <style>
        .form-wrapper {
            max-width: 640px;
            margin: 0 auto;
            padding: clamp(80px, 12vw, 120px) clamp(16px, 5vw, 48px) 60px;
        }

        .page-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 700;
            color: var(--text);
            margin-bottom: 8px;
        }

        .page-subtitle {
            color: var(--text-muted);
            font-size: 0.95rem;
            margin-bottom: 36px;
            line-height: 1.6;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text);
            margin-bottom: 8px;
        }

        .form-input,
        .form-textarea {
            width: 100%;
            padding: 12px 16px;
            border: 1.5px solid var(--border);
            border-radius: var(--radius-sm);
            background: var(--bg-surface);
            color: var(--text);
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            transition: border-color var(--transition), box-shadow var(--transition);
            outline: none;
        }

        .form-input:focus,
        .form-textarea:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .form-textarea {
            resize: vertical;
            min-height: 140px;
        }

        .form-honeypot {
            display: none;
        }

        .form-submit-row {
            display: flex;
            justify-content: flex-end;
        }

        .message-box {
            display: none;
            padding: 14px 18px;
            border-radius: var(--radius-sm);
            font-size: 0.9rem;
            margin-bottom: 20px;
        }

        .message-box.success {
            background: rgba(34, 197, 94, 0.12);
            color: #16a34a;
            border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .message-box.error {
            background: rgba(239, 68, 68, 0.08);
            color: #b91c1c;
            border: 1px solid rgba(239, 68, 68, 0.2);
        }
    </style>
    <script>
        // Apply saved theme immediately to avoid flash
        (function () {
            const t = localStorage.getItem('theme') || 'auto';
            const resolved = t === 'auto'
                ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                : t;
            document.documentElement.setAttribute('data-theme', resolved);
        })();
    </script>
</head>

<body>

    <nav>
        <a class="nav-logo" href="index.html">Code Hero<span> s.r.o.</span></a>

        <div class="nav-controls">
            <button id="themeBtn" class="icon-btn" aria-label="Toggle theme">
                <svg id="themeIconSun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                <svg id="themeIconMoon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <button id="langBtn" class="icon-btn lang-btn">EN</button>
        </div>
    </nav>

    <main>
        <div class="form-wrapper">
            <p class="section-label" data-i18n="contact_label"></p>
            <h1 class="page-title" data-i18n="contact_form_h1"></h1>
            <p class="page-subtitle" data-i18n="contact_form_desc"></p>

            <div id="messageBox" class="message-box"></div>

            <form id="contactForm">
                <input type="hidden" name="csrf_token" id="csrf_token" />
                <div class="form-honeypot">
                    <input type="text" name="website" tabindex="-1" autocomplete="off" />
                </div>

                <div class="form-group">
                    <label class="form-label" for="name" data-i18n="form_name_label"></label>
                    <input type="text" id="name" name="name" class="form-input" required maxlength="100" />
                </div>

                <div class="form-group">
                    <label class="form-label" for="email" data-i18n="form_email_label"></label>
                    <input type="email" id="email" name="email" class="form-input" required maxlength="200" />
                </div>

                <div class="form-group">
                    <label class="form-label" for="subject" data-i18n="form_subject_label"></label>
                    <input type="text" id="subject" name="subject" class="form-input" required maxlength="200" />
                </div>

                <div class="form-group">
                    <label class="form-label" for="message" data-i18n="form_message_label"></label>
                    <textarea id="message" name="message" class="form-textarea" required maxlength="5000"></textarea>
                </div>

                <div class="form-submit-row">
                    <button type="submit" id="submitBtn" class="btn btn-primary" data-i18n="form_submit"></button>
                </div>
            </form>

            <p style="margin-top: 28px; font-size: 0.85rem;">
                <a href="index.html" data-i18n="form_back_btn" style="color: var(--primary); text-decoration: none;"></a>
            </p>
        </div>
    </main>

    <script src="js/i18n.js"></script>
    <script>
        // ── Placeholders ───────────────────────────────────────────────────────
        const placeholderKeys = {
            name:    'form_name_placeholder',
            email:   'form_email_placeholder',
            subject: 'form_subject_placeholder',
            message: 'form_message_placeholder',
        };

        function applyPlaceholders(lang) {
            for (const [id, key] of Object.entries(placeholderKeys)) {
                const el = document.getElementById(id);
                if (el && T[lang][key]) el.placeholder = T[lang][key];
            }
        }

        // ── Theme ──────────────────────────────────────────────────────────────
        let _theme = localStorage.getItem('theme') || 'auto';

        function resolvedTheme() {
            return _theme === 'auto'
                ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                : _theme;
        }

        function syncThemeIcons(resolved) {
            document.getElementById('themeIconSun').style.display  = resolved === 'dark' ? 'block' : 'none';
            document.getElementById('themeIconMoon').style.display = resolved === 'dark' ? 'none'  : 'block';
        }

        document.getElementById('themeBtn').addEventListener('click', () => {
            _theme = resolvedTheme() === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', _theme);
            document.documentElement.setAttribute('data-theme', _theme);
            syncThemeIcons(_theme);
        });

        // ── Language ───────────────────────────────────────────────────────────
        document.getElementById('langBtn').addEventListener('click', () => {
            applyLang(currentLang === 'sk' ? 'en' : 'sk');
            applyPlaceholders(currentLang);
            updatePageTitle();
        });

        function updatePageTitle() {
            document.title = currentLang === 'sk'
                ? 'Kontakt — codehero s.r.o.'
                : 'Contact — codehero s.r.o.';
        }

        // ── Init ───────────────────────────────────────────────────────────────
        syncThemeIcons(resolvedTheme());
        applyLang(currentLang);
        applyPlaceholders(currentLang);
        updatePageTitle();

        // ── CSRF token ─────────────────────────────────────────────────────────
        async function fetchCSRFToken() {
            try {
                const res  = await fetch('get-token.php');
                const data = await res.json();
                document.getElementById('csrf_token').value = data.csrf_token;
            } catch (e) {
                console.error('CSRF fetch failed:', e);
            }
        }

        document.addEventListener('DOMContentLoaded', fetchCSRFToken);

        // ── Form submit ────────────────────────────────────────────────────────
        const form       = document.getElementById('contactForm');
        const submitBtn  = document.getElementById('submitBtn');
        const messageBox = document.getElementById('messageBox');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            submitBtn.disabled = true;
            const originalText = submitBtn.textContent;
            submitBtn.textContent = T[currentLang].form_sending;

            try {
                const res    = await fetch('api.php', { method: 'POST', body: new FormData(form) });
                const result = await res.json();

                messageBox.style.display = 'block';
                if (result.success) {
                    messageBox.className   = 'message-box success';
                    messageBox.textContent = T[currentLang].form_success;
                    form.reset();
                    fetchCSRFToken();
                } else {
                    messageBox.className   = 'message-box error';
                    messageBox.textContent = T[currentLang].form_error_prefix + result.message;
                }
            } catch (err) {
                messageBox.style.display = 'block';
                messageBox.className     = 'message-box error';
                messageBox.textContent   = T[currentLang].form_error_generic;
            }

            submitBtn.disabled    = false;
            submitBtn.textContent = originalText;

            setTimeout(() => { messageBox.style.display = 'none'; }, 5000);
        });
    </script>

</body>
</html>
