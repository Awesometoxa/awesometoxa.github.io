let arrLang = {
	en: {
		// menu items
		"menu-home": "Home",
		"menu-news": "News",
		"menu-music": "Music",
		"menu-video": "Video",
		"menu-tour": "tour",
		"menu-contacts": "Contacts",
		"promo-subtitle": "hardcore | electric-pop | folk-trance",
		"promo-follow": "follow us:",
		"title-news": "news",
		"btn-news-1": "Read more...",
		"news-text-1": `Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Enim id pariatur eligendi
						soluta itaque magni porro quidem exercitationem
						incidunt rerum officiis omnis nihil odio eveniet
						saepe, nulla, autem optio maiores.`,
		"news-title-1": "6.6.6 New Gig in Moscow",
		"btn-news-2": "Read more...",
		"news-text-2": `Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Enim id pariatur eligendi
						soluta itaque magni porro quidem exercitationem
						incidunt rerum officiis omnis nihil odio eveniet
						saepe, nulla, autem optio maiores.`,
		"news-title-2": "6.6.6 New Gig in Moscow",
		"btn-news-3": "Read more...",
		"news-text-3": `Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Enim id pariatur eligendi
						soluta itaque magni porro quidem exercitationem
						incidunt rerum officiis omnis nihil odio eveniet
						saepe, nulla, autem optio maiores.`,
		"news-title-3": "6.6.6 New Gig in Moscow",
	},

	ru: {
		"menu-home": "Главная",
		"menu-news": "Новости",
		"menu-music": "Музыка",
		"menu-video": "Видео",
		"menu-tour": "tour",
		"menu-contacts": "Контакты",
		"promo-subtitle": "хардкор | электрик-поп | фолк-транс",
	},
	tu: {
		"menu-home": "ev",
		"menu-news": "haberler",
		"menu-music": "müzik",
		"menu-video": "video",
		"menu-tour": "tur",
		"menu-contacts": "kontaklar",
		"promo-subtitle": "some-shit | some-shit | some-shit",
	},
};

$(function () {
	$(".translate").click(function () {
		var lang = $(this).attr("id");

		$(".lang").each(function (index, item) {
			$(this).text(arrLang[lang][$(this).attr("key")]);
		});
	});
});
