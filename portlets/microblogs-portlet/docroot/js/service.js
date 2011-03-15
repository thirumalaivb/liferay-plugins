Liferay.Service.register("Liferay.Service.Microblogs", "com.liferay.microblogs.service", "microblogs-portlet");

Liferay.Service.registerClass(
	Liferay.Service.Microblogs, "MicroblogsEntry",
	{
		addMicroblogsEntry: true,
		deleteMicroblogsEntry: true,
		getMicroblogsEntry: true,
		getMicroblogsEntries: true,
		getMicroblogsEntriesCount: true,
		getMicroblogsEntriesByTag: true,
		getMicroblogsEntriesCountByTag: true,
		getMicroblogsEntriesByTags: true,
		getMicroblogsEntriesCountByTags: true,
		updateMicroblogsEntry: true
	}
);