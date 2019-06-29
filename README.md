# rj-notification - Information block

rj-notification displays little information bar. It is highly configurable and great especially for cookies info.
This plugin has been created for one of my commercial projects.

## How to use

1. Upload CSS and JS files to your project
2. Add proper links to files in your HTML
3. Add notification bar with configuration object in your HTML in a way presented in "Configuration" below

## Configuration

To add notification bar with complete configuration object use this code:

```Javascript
const notificationBarName = new RjNotification({
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
});
```

The code presented above contains a configuration object. These are also default options so if you don't provide any of options when adding notification bar, notification bar will be added to your page with these options. Now lets get further information about every configuration options:

* `notificationId` - sets id for your notification bar **(string)**
* `notificationBg` - sets background color for your notification bar. Supported formats: `rgb(123, 123, 123)`, `rgba(123, 123, 123, .4)`, `#123123`, `yellow` **(string)**
* `notificationPosition` - sets CSS `position` rule  of your bar. Choose between: `absolute`, `relative`, `static` and `fixed` **(string)**
* `notificationFixedTop` - if `notificationPosition` is set to `fixed`, you can choose where notification bar should be fixed - to bottom or to top of viewport. If `notificationPosition` is not `fixed` then `notificationFixedTop` changes nothing. Choose between: `true` - for fixed to top and `false` - for fixed to bottom **(boolean)**
* `notificationParentId` - essential option. Provide id of parent element for your notification bar. For example if you have `<footer id="footer-info">` and you provide `notificationParentId: 'footer-info'` then notification bar will be added as last child of this element **(string)**
* `notificationText` - sets main text content of notification bar **(string)**
* `notificationExpiryDays` - sets number of days after which notification will be displayed again after closing it (cookie expiry days) **(number)**
* `notificationAnimation` - sets the animation type when closing notification bar. Choose between: `disappear` and `fall` **(string)**
* `textColor` - sets main text content color. Supported formats: `rgb(123, 123, 123)`, `rgba(123, 123, 123, .4)`, `#123123`, `yellow` **(string)**
* `textSize` - sets main text content size. Supported every CSS `font-size` formats **(string)**
* `linkActivated` - if set to `true` then on notification bar there will be a link for - for example "Terms of use". Choose between `true` and `false` **(boolean)**
* `linkAddress` - if `linkActivated` is set to `true` then it sets the address for link (URL). If `linkActivated` is set to `false` then `linkAddress` changes nothing **(string)**
* `linkText` - if `linkActivated` is set to `true` then it sets the text content for link (URL), for example "Read more". If `linkActivated` is set to `false` then `linkText` changes nothing **(string)**
* `linkColor` - if `linkActivated` is set to `true` then it sets the text content color for link (URL). If `linkActivated` is set to `false` then `linkColor` changes nothing **(string)**
* `closeBtnText` - sets the notification close button's text content, for example 'I understand' **(string)**
* `closeBtnBgColor` - sets the notification close button's background color. Supported formats: `rgb(123, 123, 123)`, `rgba(123, 123, 123, .4)`, `#123123`, `yellow` **(string)**
* `closeBtnColor` - sets the notification close button's text content color. Supported formats: `rgb(123, 123, 123)`, `rgba(123, 123, 123, .4)`, `#123123`, `yellow` **(string)**
* `closeBtnBorder` - sets the notification close button's border - value should be the same as in CSS `border` rule. e.g `border: 1px solid #000` **(string)**
* `closeBtnBorderRadius` - sets the notification close button's border radius - value should be the same as in CSS `border-radius` rule. **(string)**

## Technologies used
* JavaScript (ES6)
* CSS
* HTML

## Project status
Finished
