import { grabFavicon } from 'favicongrab';

import download from './downloader';
async function fetchIcon(webSite) {
	const faviconResult = await grabFavicon(webSite);
	if (faviconResult && faviconResult.error) {
		throw faviconResult.error;
	}
	return faviconResult.icons || [];
}

async function downloadIcons(site, options = {}) {
	if (!site) {
		throw new Error('Site is required to download favicon');
	}

	const iconList = await fetchIcon(site);
	try {
		return Promise.all(
			iconList.map((x, i) => {
				let name = i === 0 ? options.name : options.name ? `${i}-${options.name}` : undefined;
				return download(x.src, options.path, name)
					.then(s => {
						return Object.assign({}, { status: 1, src: x.src });
					})
					.catch(e => {
						return { status: -1, reason: e.message, src: x.src };
					});
			})
		)
			.then(r => r)
			.catch(e => {
				throw e;
			});
	} catch (error) {
		throw error;
	}
}

export default downloadIcons;
export { downloadIcons };
