# `html-reporter-mobile-test`

> Functions to maker HTML reporter to mobile tests

## Installation

You can install it with *npm* .

Try:

- *npm*: `npm install html-reporter-mobile-test`

## Usage

```js
const htmlMaker = require('html-reporter-mobile-test');
var html=null;

html = html + htmlMaker.makeHtmlHeader(bannerHeader, icon, 'iOS', '23/10/2019', 'iPhone 7');
html = html + htmlMaker.makeHtmlFooter("https://cdn.icon-icons.png", 4, 2, '3 minutes', '2 minutes');
```

Now, with `htmlMaker` you can use some functions:

- `makeHtmlHeader(icon, platform, date, device)`
- `makeHtmlFooter(testPassed, testFailed, totalDuration, duration)`
- `makeHtmlTestFail(title, err)`
- `makeHtmlTestSuccess(title)`
- `makeHtmlFeature(suite)`


### `makeHtmlHeader(bannerHeader, icon, platform, date, device)`

> Create header of html reporter.

#### Parameters

- `bannerHeader` {* String *}: Banner to header.
- `icon` {* String *}: Platform icon (iOS or Android).
- `platform` {* String *}: Platform name (Android, iOS ...).
- `date` {* String *}: The date the test was run.
- `device` {* String *}: Which device is running the test.

#### Example

```js
html = html + htmlMaker.makeHtmlHeader('https://img.icons8.com/metro/1600/mac-os.png', 'https://img.icons8.com/metro/1600/mac-os.png', 'iOS', '23/10/2019', 'iOS');
```

Returns a html.


### `makeHtmlFooter(testPassed, testFailed, totalDuration, duration, bannerFooter)`

> Create footer of html reporter.

#### Parameters

- `bannerFooter` {* String *}: Banner to footer.
- `testPassed` {* String *}: Number of tests that passed successfully.
- `testFailed` {* String *}: Number of tests that failed.
- `totalDuration` {* String (MILLISECOND) *}: Total duration of test execution. 
- `duration` {* String (MILLISECOND)*}: Duration of only the stage where the app was being used.

#### Example

```js
html = html + htmlMaker.makeHtmlFooter('https://img.icons8.com/metro/1600/mac-os.png', 5, 4, '5 minutes', '3 minutes', 'https://img.icons8.com/metro/1600/mac-os.png');
```

Returns a html.

### `makeHtmlTestFail(title, method, err, imageLink)`

> Create html when test fail.

#### Parameters

- `title` {* String *}: Name of test.
- `method` {* String *}: Name of test.
- `err` {* String *}: Description off fail test.
- `imageLink` {* String *}: Print screen error.

Returns a html.

#### Example

```js
html = html + htmlMaker.makeHtmlTestFail('Login com user an password', 'loginuaser()', 'Timeout', 'image.png');
```

### `makeHtmlTestSuccess(title)`

> Create html when test success.

#### Parameters

- `title` {* String *}: Name of test.

Returns a html.

#### Example

```js
html = html + htmlMaker.makeHtmlTestSuccess('Login whitc user and password');
```

### `makeHtmlFeature(suite)`

> Create html to each new suite.

#### Parameters

- `suite` {* String *}: Name of suite or feature.

Returns a html.

#### Example

```js
html = html + htmlMaker.makeHtmlFeature('Login';
```

## Final result

https://uploaddeimagens.com.br/images/002/057/974/original/Screen_Shot_2019-04-03_at_19.00.30.png?1556034328
https://uploaddeimagens.com.br/images/002/057/979/original/Screen_Shot_2019-04-03_at_19.00.43.png?1556034383
https://uploaddeimagens.com.br/images/002/057/980/original/Screen_Shot_2019-04-03_at_19.00.52.png?1556034409

## License

MIT &copy; Eduardo Finotti

https://github.com/eduardofinotti/html-reporter-mobile-test
