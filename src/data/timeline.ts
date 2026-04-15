import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "WeChat-CampusRepairReport",
		title: "校园报修微信小程序后端",
		description:
			"校园报修微信小程序后端",
		type: "project",
		startDate: "2025-06-06",
		location: "济南",
        organization: "山东电子职业技术学院",
		skills: ["Java", "SpringBoot", "Mybatis-Plus", "Sa-Token", "MySQL", "Redis"],
		// achievements: [
		// 	"Current GPA: 3.6/4.0",
		// 	"Completed data structures and algorithms course project",
		// 	"Participated in multiple course project developments",
		// ],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
];
