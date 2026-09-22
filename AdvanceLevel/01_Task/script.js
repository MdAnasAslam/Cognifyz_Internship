(function () {
    'use strict';

    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    const cardContainer = document.getElementById('cardContainer');

    let lastShownId = null;     
    let allUsersCache = [];     
    let isFetching = false;     

    function showLoading() {
        cardContainer.innerHTML = `
            <div class="state-container">
                <div class="spinner"></div>
                <p>Fetching user profile…</p>
            </div>
        `;
    }

    function showError(message) {
        cardContainer.innerHTML = `
            <div class="state-container">
                <div class="error-icon">⚠️</div>
                <p class="error-message">${message || 'Unable to load user data.'}</p>
                <button class="error-retry-btn" id="retryBtn">Try again</button>
            </div>
        `;

        const retryBtn = document.getElementById('retryBtn');
        if (retryBtn) {
            retryBtn.addEventListener('click', function () {
                allUsersCache = [];  // Clear cache so we re-fetch
                fetchAndShowRandomUser();
            });
        }
    }

    function renderUser(user) {
        if (!user || typeof user !== 'object') {
            showError('Invalid user data received.');
            return;
        }

        const name     = user.name     || 'Unknown User';
        const username = user.username || '—';
        const email    = user.email    || '—';
        const phone    = user.phone    || '—';
        const website  = user.website  || '—';
        const company  = user.company?.name || '—';

        const street   = user.address?.street  || '';
        const suite    = user.address?.suite   || '';
        const city     = user.address?.city    || '';
        const zipcode  = user.address?.zipcode || '';

        let fullAddress = [street, suite, city, zipcode].filter(Boolean).join(', ');
        if (!fullAddress) fullAddress = '—';

        const initial = name.trim().charAt(0).toUpperCase() || '?';

        cardContainer.innerHTML = `
            <div class="card-header">
                <span class="badge">active user</span>
                <span class="counter">ID: ${user.id || '—'}</span>
            </div>

            <div class="user-identity">
                <div class="avatar">${initial}</div>
                <div class="name-title">
                    <h2>${name}</h2>
                    <div class="username">${username}</div>
                </div>
            </div>

            <div class="details-list">
                <div class="detail-row">
                    <span class="detail-icon">📧</span>
                    <span class="detail-label">Email</span>
                    <span class="detail-value">
                        <a href="mailto:${email}">${email}</a>
                    </span>
                </div>

                <div class="detail-row">
                    <span class="detail-icon">📞</span>
                    <span class="detail-label">Phone</span>
                    <span class="detail-value">${phone}</span>
                </div>

                <div class="detail-row">
                    <span class="detail-icon">🌐</span>
                    <span class="detail-label">Website</span>
                    <span class="detail-value">
                        <a href="https://${website}" target="_blank" rel="noopener">${website}</a>
                    </span>
                </div>

                <div class="detail-row">
                    <span class="detail-icon">🏢</span>
                    <span class="detail-label">Company</span>
                    <span class="detail-value">${company}</span>
                </div>

                <div class="detail-row">
                    <span class="detail-icon">📍</span>
                    <span class="detail-label">Address</span>
                    <span class="detail-value">${fullAddress}</span>
                </div>
            </div>

            <div class="card-footer">
                <span class="id-tag">@${username}</span>
                <button class="refresh-btn" id="refreshBtn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2.4"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path d="M23 4v6h-6M1 20v-6h6" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                    Refresh
                </button>
            </div>
        `;

        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', fetchAndShowRandomUser);
        }
    }

    function pickDifferentUser(users) {
        if (!users || users.length === 0) return null;
        if (users.length === 1) return users[0];

        // Filter out the last shown user
        const candidates = users.filter(function (user) {
            return user.id !== lastShownId;
        });

        if (candidates.length === 0) {
            return users[Math.floor(Math.random() * users.length)];
        }

        return candidates[Math.floor(Math.random() * candidates.length)];
    }

    function fetchAndShowRandomUser() {
        // Prevent overlapping fetches
        if (isFetching) return;
        isFetching = true;

        if (allUsersCache.length > 0) {
            const nextUser = pickDifferentUser(allUsersCache);
            if (nextUser) {
                lastShownId = nextUser.id;
                renderUser(nextUser);
                isFetching = false;
                return;
            } else {
                allUsersCache = [];
            }
        }

        showLoading();

        fetch(API_URL)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status + ' — ' + response.statusText);
                }
                return response.json();
            })
            .then(function (users) {
                if (!Array.isArray(users) || users.length === 0) {
                    throw new Error('No users found in API response.');
                }

                allUsersCache = users;

                const randomUser = pickDifferentUser(users);
                if (!randomUser) {
                    throw new Error('Could not pick a user.');
                }

                lastShownId = randomUser.id;

                renderUser(randomUser);
            })
            .catch(function (error) {
                console.error('Fetch error:', error);
                showError(error.message || 'Failed to load user data.');
                allUsersCache = []; // Reset cache so next attempt re-fetches
            })
            .finally(function () {
                isFetching = false;
            });
    }

    fetchAndShowRandomUser();

    window.fetchAndShowRandomUser = fetchAndShowRandomUser;
})();