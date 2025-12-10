// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
    OPPO: [
        {
            name: "OnePlus Ace3 Pro",
            image: "/images/device/OnePlus Ace3 Pro.png",
            specs: "24G + 1TB",
            description: "旗舰双芯 性能凶猛",
            link: "https://www.oneplus.com/cn/ace-3-pro",
        },
        {
            name: "OPPO Watch4 Pro",
            image: "/images/device/OPPO Watch4 Pro.png",
            specs: "2G + 32G",
            description: "方寸寰宇 健康随行",
            link: "https://www.oppo.com/cn/accessories/oppo-watch-4-pro/",
        },
        {
            name: "OPPO Enco X3",
            image: "/images/device/OPPO Enco X3.png",
            specs: "50dB 降噪",
            description: "听见不一样的好声音 PS:OPPO没做中文主页",
            link: "https://www.opposhop.cn/cn/web/products/29660.html",
        },
        {
            name: "OPPO Pad3 Pro",
            image: "/images/device/OPPO Pad3 Pro.png",
            specs: "16G + 512G",
            description: "旗舰芯片，实力玩家 PS:OPPO没做中文主页",
            link: "https://www.opposhop.cn/cn/web/products/29620.html",
        },
    ],
    BOOX: [
        {
            name: "BOOX Poke6",
            image: "/images/device/BOOX Poke6.png",
            specs: "2G + 32G",
            description: "芯升级 大不同",
            link: "https://zh.boox.com/poke6",
        },
    ],
    HP: [
        {
            name: "HP 暗影精灵7",
            image: "/images/device/HP OMEN 7.png",
            specs: "i7 11800H / 32GB / 1.5TB / RTX3050Ti",
            description: "主页已无法找到,内存和硬盘为自行扩容原版为16GB+512GB",
            link: "https://www.hp.com/cn-zh/gaming-pc.html",
        },
    ],
    logitech: [
        {
            name: "罗技 G502 X",
            image: "/images/device/logitech G502 X.webp",
            specs: "89g / 光学机械混动开关 / 25K 传感器",
            description: "经典重塑",
            link: "https://www.logitechg.com/zh-cn/shop/p/g502-x-wired-lightforce.910-006150",
        },
    ],
    LANGTU: [
        {
            name: "狼途 LT 104",
            image: "/images/device/LT 104.png",
            specs: "三模彩屏版",
            description: "配置拉满 才够诚意",
            link: "https://www.langtucn.com/products/keyboard",
        },
    ],
};
