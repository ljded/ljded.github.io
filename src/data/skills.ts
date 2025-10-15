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
			"面向对象的语言",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		projects: ["WeChat-CampusRepairReport"],
		color: "#F7DF1E",
	},
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
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: { years: 0, months: 6 },
		projects: ["WeChat-CampusRepairReport"],
		color: "#f71e1e",
	},
	{
		id: "idea",
		name: "IntelliJ IDEA",
		description:
			"Java/Kotlin IDE",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		color: "#000000",
	},
	{
		id: "c",
		name: "C",
		description:
			"入门语言",
		icon: "logos:c",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#A8B9CC",
	},
	{
		id: "spring",
		name: "Spring Boot",
		description:
			"后端服务脚手架",
		icon: "logos:spring-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 5 },
		projects: ["WeChat-CampusRepairReport"],
		color: "#6DB33F",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
