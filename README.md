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

html = html + htmlMaker.makeHtmlHeader(icon, 'iOS', '23/10/2019', 'iPhone 7');
html = html + htmlMaker.makeHtmlFooter(4, 2, '3 minutes', '2 minutes');
```

Now, with `htmlMaker` you can use some functions:

- `makeHtmlHeader(icon, platform, date, device)`
- `makeHtmlFooter(testPassed, testFailed, totalDuration, duration)`
- `makeHtmlTestFail(title, err)`
- `makeHtmlTestSuccess(title)`
- `makeHtmlFeature(suite)`


### `makeHtmlHeader(icon, platform, date, device)`

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


### `makeHtmlFooter(testPassed, testFailed, totalDuration, duration)`

> Create footer of html reporter.

#### Parameters

- `bannerFooter` {* String *}: Banner to footer.
- `testPassed` {* String *}: Number of tests that passed successfully.
- `testFailed` {* String *}: Number of tests that failed.
- `totalDuration` {* String (MILLISECOND) *}: Total duration of test execution. 
- `duration` {* String (MILLISECOND)*}: Duration of only the stage where the app was being used.

#### Example

```js
html = html + htmlMaker.makeHtmlFooter('https://img.icons8.com/metro/1600/mac-os.png', 5, 4, '5 minutes', '3 minutes');
```

Returns a html.

### `makeHtmlTestFail(title, err)`

> Create html when test fail.

#### Parameters

- `title` {* String *}: Name of test.
- `err` {* String *}: Description off fail test.

Returns a html.

#### Example

```js
html = html + htmlMaker.makeHtmlTestFail('Login com user an password', 'Timeout');
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

https://uploaddeimagens.com.br/images/001/874/614/original/Screen_Shot_2019-02-04_at_09.01.08.png?1549278244
https://uploaddeimagens.com.br/images/001/874/616/original/Screen_Shot_2019-02-04_at_09.01.22.png?1549278278

## License

MIT &copy; Eduardo Finotti

https://github.com/eduardofinotti/html-reporter-mobile-test
