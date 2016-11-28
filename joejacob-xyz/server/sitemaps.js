import 'meteor/gadicohen:sitemaps';

sitemaps.add('/sitemap.xml', function() {
	return [
		{ page: '/', lastmod: new Date(), changefreq: 'monthly' },
		{ page: '/resume', lastmod: new Date(), changefreq: 'monthly'}
	];
});