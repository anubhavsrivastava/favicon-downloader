# favicon-downloader

> A module to download favicon of any site

[![Build Status](https://travis-ci.org/anubhavsrivastava/favicon-downloader.svg?branch=master)](https://travis-ci.org/anubhavsrivastava/favicon-downloader)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/anubhavsrivastava/favicon-downloader.svg?style=flat-square)](https://github.com/anubhavsrivastava/favicon-downloader/issues)
[![HitCount](http://hits.dwyl.io/anubhavsrivastava/favicon-downloader.svg)](http://hits.dwyl.io/anubhavsrivastava/favicon-downloader)

[![NPM](https://nodei.co/npm/favicon-downloader.png?downloads=true&stars=true)](https://nodei.co/npm/favicon-downloader/)

## Install

```
$ npm install favicon-downloader
```

## Usage

```javascript
const { downloadIcons } = require('favicon-downloader');

(async () => {
	//downloads favicon set for specified URL
	// By default downloads the icon to cwd
	await downloadIcons('https://theanubhav.com');

	// Specify name to downloaded icon
	await downloadIcons('https://devtips.theanubhav.com', { name: 'devtips.ico' });

	// Specify path to downloaded icons
	await downloadIcons('https://about.theanubhav.com', { path: '/icons/about' });
})();
```

## API

It uses the command [`favicongrab`](https://github.com/anubhavsrivastava/favicongrab) module to fetch the favicon and downloads them via `axios`

### downloadIcons(URL, options?)

Returns a promise for download action. Downloads all available favicons for the site.

#### URL

Type: `string`<br>
Required:true

URL of the site whose favicon has to be downloaded

#### options?

Type: `object`

##### name

Type: `string`<br>
Default: `` (empty)

Name of the favicon file that will be downloaded. By Default it is filename that is mentioned in the target site.

##### path

Type: `string`<br>
Default: `` (empty) (current working directory)

Directory path where the favicons has to be downloaded. By default this is current working directory. If the path does not exists, directory is created.

### Related Module

-   [favicon-downloader-cli](https://github.com/anubhavsrivastava/favicon-downloader-cli) CLI for this module
-   [favicongrab](https://github.com/anubhavsrivastava/favicongrab) A module for fetching Favicon of any web site.

### Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
