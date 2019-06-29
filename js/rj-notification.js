"use strict"
class RjNotification {
    constructor (options) {
        const defaultOptions = {
            notificationId: 'cookies-info',
            notificationBg: '#ffffff',
            notificationPosition: 'fixed',
            notificationFixedTop: true,
            notificationParentId: 'cookies-container',
            notificationText: 'Serwis wykorzystuje pliki cookies. Korzystając ze strony wyrażasz zgodę na wykorzystywanie plików cookies.',
            notificationExpiryDays: 365,
            notificationAnimation: 'disappear',
            textColor: '#2a2a2a',
            textSize: '12px',
            linkActivated: true,
            linkAddress: '/regulamin',
            linkText: 'Dowiedz się więcej',
            linkColor: '#6c72ed',
            closeBtnText: 'Rozumiem',
            closeBtnBgColor: '#6bb600',
            closeBtnColor: '#fff',
            closeBtnBorder: '1px solid #6bb600',
            closeBtnBorderRadius: '5px'
        }
        this.options = Object.assign({}, defaultOptions, options);

        // Check if notification is accepted (and the cookie exist)
        this.checkCookies();
    }
    // Create notification and add listener to close button
    createNotification() {
        // Prepare notification container
        const notification = document.createElement('div');
        notification.className = 'rj-notification';
        notification.id = this.options.notificationId;
        notification.style.position = this.options.notificationPosition;
        notification.style.backgroundColor = this.options.notificationBg;
        if (this.options.notificationPosition === 'fixed') {
            if (this.options.notificationFixedTop) {
                notification.style.top = '0';
            } else {
                notification.style.bottom = '0';
            }
        }

        // Prepare notification inner
        const notificationInner = document.createElement('p');
        notificationInner.style.color = this.options.textColor;
        notificationInner.style.fontSize = this.options.textSize;

        // Prepare notification text
        const notificationText = document.createElement('span');
        notificationText.textContent = this.options.notificationText;

        // Prepare notification link (if it should be created)
        let notificationLink;
        if (this.options.linkActivated) {
            notificationLink = document.createElement('a');
            notificationLink.href = this.options.linkAddress;
            notificationLink.textContent = this.options.linkText;
            notificationLink.style.color = this.options.linkColor;
        }

        // Prepare notification close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'rj-notification-close';
        closeBtn.textContent = this.options.closeBtnText;
        closeBtn.style.backgroundColor = this.options.closeBtnBgColor;
        closeBtn.style.color = this.options.closeBtnColor;
        closeBtn.style.border = this.options.closeBtnBorder;
        closeBtn.style.borderRadius = this.options.closeBtnBorderRadius;

        // Appending parts
        notificationInner.appendChild(notificationText);
        notificationInner.appendChild(notificationLink);
        notificationInner.appendChild(closeBtn);
        notification.appendChild(notificationInner);
        document.getElementById(this.options.notificationParentId).appendChild(notification);

        // Add listener to close button
        closeBtn.addEventListener('click', () => {
            if (notification.className.indexOf(`rj-${this.options.notificationAnimation}`) === -1) {
                notification.className += ` rj-${this.options.notificationAnimation}`;
            }
            this.createCookie();

            // Removing notification after transition is over
            setTimeout(function() {
                notification.parentNode.removeChild(notification);
            }, 300);
        });
    }
    // Checking if notification was accepted (the cookie exists)
    checkCookies() {
        if (document.cookies !== '') {
            const allCookies = document.cookie.split(';');
            const keysArray = [];
            let flag = false;       // Initiating with statement that cookie wasn't created

            allCookies.forEach(function(val) {
                keysArray.push(val.trim().split('=')[0]);
            });

            keysArray.forEach((val) => {
                if (val === this.options.notificationId) {
                    flag = true;        // Cookie is already created
                }
            });

            if (flag === false) {
                this.createNotification();
            }
        }
    }
    // Creating cookie
    createCookie() {
        const date = new Date();
        date.setTime(date.getTime() + (this.options.notificationExpiryDays*24*60*60*1000));
        const expiry = `; expires=${date.toGMTString()}`;
        document.cookie = `${this.options.notificationId}=yes${expiry}; path=/`;
    }
}