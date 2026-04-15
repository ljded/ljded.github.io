// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "Java",
		name: "Java",
		description:
			"Java开发",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 11 },
		projects: ["WeChat-CampusRepairReport"],
		color: "#F7DF1E",
	},

	// Database Skills
	{
		id: "MySQL",
		name: "MySQL",
		description:
			"数据库",
		icon: "logos:mysql",
		category: "database",
		level: "intermediate",
		experience: { years: 0, months: 8 },
		projects: ["WeChat-CampusRepairReport"],
		color: "#1e7cf7",
	},
	{
		id: "Redis",
		name: "Redis",
		description:
			"数据库",
		icon: "logos:redis2",
		category: "database",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["WeChat-CampusRepairReport"],
		color: "#f71e1e",
	},
];
