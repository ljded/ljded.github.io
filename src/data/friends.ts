// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "一个现代化的静态站点生成器",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Web"],
	},
	{
		id: 2,
		title: "Mizuki Docs",
		imgurl: "http://q.qlogo.cn/headimg_dl?dst_uin=3231515355&spec=640&img_type=jpg",
		desc: "Mizuki 主题文档",
		siteurl: "https://docs.mizuki.mysqil.com",
		tags: ["文档"],
	},
	{
		id: 3,
		title: "MDN Web Docs",
		imgurl: "https://avatars.githubusercontent.com/u/7565578?v=4&s=640",
		desc: "MDN Web Docs 是 Mozilla 和开放网络基金会合作开发的 Web 技术文档",
		siteurl: "https://developer.mozilla.org",
		tags: ["文档", "Web"],
	},
    {
      id: 4,
        title: "nuoxian's API",
        imgurl: "https://api.nxvav.cn/favicon.ico",
        desc: "nuoxian's API 是免费为用户提供网络数据接口调用的服务平台，我们致力于为用户提供稳定、快速的免费 API 数据接口服务。",
        siteurl: "https://api.nxvav.cn",
        tags: ["API"],
    },
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
