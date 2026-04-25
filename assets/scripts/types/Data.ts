import { PlantType, ZombieType, PlantCategory, DamageType, ProjectileType } from './Enum';

export interface PlantData {
    id: PlantType;
    name: string;
    cost: number;
    category: PlantCategory;
    health: number;
    damage: number;
    attackSpeed: number;
    sunProduction?: number;
    sunProductionInterval?: number;
    range: number;
    cooldown: number;
    isInstant?: boolean;
    effectDuration?: number;
    damageType: DamageType;
    isWaterPlant?: boolean;
    isNightPlant?: boolean;
    canBeEaten?: boolean;
}

export interface ZombieData {
    id: ZombieType;
    name: string;
    health: number;
    maxHealth: number;
    damage: number;
    speed: number;
    attackSpeed: number;
    armor?: number;
    hasHelmet?: boolean;
    helmetHealth?: number;
    canJump?: boolean;
    canSwim?: boolean;
    canDive?: boolean;
    isBoss?: boolean;
    isFast?: boolean;
    dropImps?: boolean;
    hasNewspaper?: boolean;
    newspaperHealth?: number;
}

export interface ProjectileData {
    id: ProjectileType;
    damage: number;
    speed: number;
    damageType: DamageType;
    areaDamage?: boolean;
    areaRadius?: number;
    piercing?: number;
}

export interface WaveData {
    waveNumber: number;
    zombies: WaveZombie[];
    delay: number;
    isFlagWave?: boolean;
    isFinalWave?: boolean;
}

export interface WaveZombie {
    type: ZombieType;
    count: number;
    row?: number;
    delay?: number;
}

export interface LevelConfig {
    id: string;
    name: string;
    sceneType: string;
    waves: WaveData[];
    startingSun: number;
    naturalSunInterval: number;
    isNight?: boolean;
    hasPool?: boolean;
    hasRoof?: boolean;
    hasFog?: boolean;
    fogStartColumn?: number;
}

export interface PlantSlot {
    row: number;
    col: number;
    plantId: PlantType | null;
    plantInstance: any;
    isWater: boolean;
}

export interface GameStats {
    sunCollected: number;
    plantsUsed: number;
    zombiesKilled: number;
    timeElapsed: number;
}

export const PLANT_DATA: Record<PlantType, PlantData> = {
    [PlantType.SUNFLOWER]: {
        id: PlantType.SUNFLOWER,
        name: '向日葵',
        cost: 50,
        category: PlantCategory.PRODUCER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        sunProduction: 25,
        sunProductionInterval: 24,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.PEASHOOTER]: {
        id: PlantType.PEASHOOTER,
        name: '豌豆射手',
        cost: 100,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.5,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.SNOW_PEA]: {
        id: PlantType.SNOW_PEA,
        name: '寒冰射手',
        cost: 175,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.5,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.ICE,
        canBeEaten: true
    },
    [PlantType.WALL_NUT]: {
        id: PlantType.WALL_NUT,
        name: '坚果墙',
        cost: 50,
        category: PlantCategory.DEFENDER,
        health: 400,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 30,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.CHERRY_BOMB]: {
        id: PlantType.CHERRY_BOMB,
        name: '樱桃炸弹',
        cost: 150,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 1800,
        attackSpeed: 0,
        range: 1.5,
        cooldown: 50,
        isInstant: true,
        damageType: DamageType.INSTANT,
        canBeEaten: false
    },
    [PlantType.REPEATER]: {
        id: PlantType.REPEATER,
        name: '双发射手',
        cost: 200,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.5,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.CHOMPER]: {
        id: PlantType.CHOMPER,
        name: '大嘴花',
        cost: 150,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 150,
        attackSpeed: 4.2,
        range: 1,
        cooldown: 7.5,
        damageType: DamageType.INSTANT,
        canBeEaten: true
    },
    [PlantType.TORCHWOOD]: {
        id: PlantType.TORCHWOOD,
        name: '火炬树桩',
        cost: 175,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.TALL_NUT]: {
        id: PlantType.TALL_NUT,
        name: '高坚果',
        cost: 125,
        category: PlantCategory.DEFENDER,
        health: 800,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 30,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.SQUASH]: {
        id: PlantType.SQUASH,
        name: '倭瓜',
        cost: 50,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 400,
        attackSpeed: 0,
        range: 1,
        cooldown: 20,
        isInstant: true,
        damageType: DamageType.INSTANT,
        canBeEaten: false
    },
    [PlantType.THREEPEATER]: {
        id: PlantType.THREEPEATER,
        name: '三线射手',
        cost: 325,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.5,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.SPLIT_PEA]: {
        id: PlantType.SPLIT_PEA,
        name: '裂荚射手',
        cost: 125,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.5,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.JALAPENO]: {
        id: PlantType.JALAPENO,
        name: '火爆辣椒',
        cost: 125,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 1800,
        attackSpeed: 0,
        range: -1,
        cooldown: 50,
        isInstant: true,
        damageType: DamageType.FIRE,
        canBeEaten: false
    },
    [PlantType.SPIKE_WEED]: {
        id: PlantType.SPIKE_WEED,
        name: '地刺',
        cost: 100,
        category: PlantCategory.ATTACKER,
        health: 300,
        damage: 20,
        attackSpeed: 1,
        range: 1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: false
    },
    [PlantType.TWIN_SUNFLOWER]: {
        id: PlantType.TWIN_SUNFLOWER,
        name: '双子向日葵',
        cost: 150,
        category: PlantCategory.PRODUCER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        sunProduction: 50,
        sunProductionInterval: 24,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.GLOOM_SHROOM]: {
        id: PlantType.GLOOM_SHROOM,
        name: '忧郁蘑菇',
        cost: 150,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.9,
        range: 3,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isNightPlant: true,
        canBeEaten: true
    },
    [PlantType.CATTAIL]: {
        id: PlantType.CATTAIL,
        name: '猫尾草',
        cost: 225,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.5,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isWaterPlant: true,
        canBeEaten: true
    },
    [PlantType.WINTER_MELON]: {
        id: PlantType.WINTER_MELON,
        name: '冰西瓜',
        cost: 200,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 80,
        attackSpeed: 2.9,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.ICE,
        canBeEaten: true
    },
    [PlantType.GATLING_PEA]: {
        id: PlantType.GATLING_PEA,
        name: '机枪射手',
        cost: 250,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.5,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.PUFF_SHROOM]: {
        id: PlantType.PUFF_SHROOM,
        name: '小喷菇',
        cost: 0,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.4,
        range: 3,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isNightPlant: true,
        canBeEaten: true
    },
    [PlantType.SUN_SHROOM]: {
        id: PlantType.SUN_SHROOM,
        name: '阳光菇',
        cost: 25,
        category: PlantCategory.PRODUCER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        sunProduction: 15,
        sunProductionInterval: 24,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isNightPlant: true,
        canBeEaten: true
    },
    [PlantType.FUME_SHROOM]: {
        id: PlantType.FUME_SHROOM,
        name: '大喷菇',
        cost: 75,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.4,
        range: 4,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isNightPlant: true,
        canBeEaten: true
    },
    [PlantType.GRAVE_BUSTER]: {
        id: PlantType.GRAVE_BUSTER,
        name: '噬碑藤',
        cost: 75,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 100,
        attackSpeed: 3,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.HYPNO_SHROOM]: {
        id: PlantType.HYPNO_SHROOM,
        name: '魅惑菇',
        cost: 75,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 30,
        isInstant: true,
        damageType: DamageType.INSTANT,
        canBeEaten: true
    },
    [PlantType.SCAREDY_SHROOM]: {
        id: PlantType.SCAREDY_SHROOM,
        name: '胆小菇',
        cost: 25,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 1.4,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isNightPlant: true,
        canBeEaten: true
    },
    [PlantType.ICE_SHROOM]: {
        id: PlantType.ICE_SHROOM,
        name: '寒冰菇',
        cost: 75,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 20,
        attackSpeed: 0,
        range: -1,
        cooldown: 50,
        isInstant: true,
        effectDuration: 10,
        damageType: DamageType.ICE,
        canBeEaten: false
    },
    [PlantType.DOOM_SHROOM]: {
        id: PlantType.DOOM_SHROOM,
        name: '毁灭菇',
        cost: 125,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 1800,
        attackSpeed: 0,
        range: 5,
        cooldown: 50,
        isInstant: true,
        damageType: DamageType.INSTANT,
        canBeEaten: false
    },
    [PlantType.LILY_PAD]: {
        id: PlantType.LILY_PAD,
        name: '睡莲',
        cost: 25,
        category: PlantCategory.DEFENDER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isWaterPlant: true,
        canBeEaten: true
    },
    [PlantType.SPIKE_ROCK]: {
        id: PlantType.SPIKE_ROCK,
        name: '地刺王',
        cost: 125,
        category: PlantCategory.ATTACKER,
        health: 450,
        damage: 20,
        attackSpeed: 1,
        range: 1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: false
    },
    [PlantType.MAGNET_SHROOM]: {
        id: PlantType.MAGNET_SHROOM,
        name: '磁力菇',
        cost: 100,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 4,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        isNightPlant: true,
        canBeEaten: true
    },
    [PlantType.CABBAGE_PULT]: {
        id: PlantType.CABBAGE_PULT,
        name: '卷心菜投手',
        cost: 100,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 40,
        attackSpeed: 2.9,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.FLOWER_POT]: {
        id: PlantType.FLOWER_POT,
        name: '花盆',
        cost: 25,
        category: PlantCategory.DEFENDER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.KERNEL_PULT]: {
        id: PlantType.KERNEL_PULT,
        name: '玉米投手',
        cost: 100,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 20,
        attackSpeed: 2.9,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.COFFEE_BEAN]: {
        id: PlantType.COFFEE_BEAN,
        name: '咖啡豆',
        cost: 75,
        category: PlantCategory.SPECIAL,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 7.5,
        isInstant: true,
        damageType: DamageType.NORMAL,
        canBeEaten: false
    },
    [PlantType.GARLIC]: {
        id: PlantType.GARLIC,
        name: '大蒜',
        cost: 50,
        category: PlantCategory.DEFENDER,
        health: 400,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.UMBRELLA_LEAF]: {
        id: PlantType.UMBRELLA_LEAF,
        name: '叶子保护伞',
        cost: 100,
        category: PlantCategory.DEFENDER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.MARIGOLD]: {
        id: PlantType.MARIGOLD,
        name: '金盏花',
        cost: 50,
        category: PlantCategory.PRODUCER,
        health: 100,
        damage: 0,
        attackSpeed: 0,
        range: 0,
        cooldown: 30,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    },
    [PlantType.MELON_PULT]: {
        id: PlantType.MELON_PULT,
        name: '西瓜投手',
        cost: 300,
        category: PlantCategory.ATTACKER,
        health: 100,
        damage: 80,
        attackSpeed: 2.9,
        range: -1,
        cooldown: 7.5,
        damageType: DamageType.NORMAL,
        canBeEaten: true
    }
};

export const ZOMBIE_DATA: Record<ZombieType, ZombieData> = {
    [ZombieType.NORMAL]: {
        id: ZombieType.NORMAL,
        name: '普通僵尸',
        health: 100,
        maxHealth: 100,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.FLAG]: {
        id: ZombieType.FLAG,
        name: '旗帜僵尸',
        health: 100,
        maxHealth: 100,
        damage: 10,
        speed: 0.195,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.CONE]: {
        id: ZombieType.CONE,
        name: '路障僵尸',
        health: 370,
        maxHealth: 370,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        armor: 270,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.BUCKET]: {
        id: ZombieType.BUCKET,
        name: '铁桶僵尸',
        health: 1100,
        maxHealth: 1100,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        armor: 1000,
        hasHelmet: true,
        helmetHealth: 1000,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.POLE_VAULTING]: {
        id: ZombieType.POLE_VAULTING,
        name: '撑杆跳僵尸',
        health: 170,
        maxHealth: 170,
        damage: 10,
        speed: 0.26,
        attackSpeed: 1,
        canJump: true,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.NEWSPAPER]: {
        id: ZombieType.NEWSPAPER,
        name: '读报僵尸',
        health: 350,
        maxHealth: 350,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        hasNewspaper: true,
        newspaperHealth: 150,
        isFast: true,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.SCREEN_DOOR]: {
        id: ZombieType.SCREEN_DOOR,
        name: '铁栅门僵尸',
        health: 650,
        maxHealth: 650,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        armor: 400,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.FOOTBALL]: {
        id: ZombieType.FOOTBALL,
        name: '橄榄球僵尸',
        health: 1400,
        maxHealth: 1400,
        damage: 10,
        speed: 0.26,
        attackSpeed: 1,
        armor: 1300,
        hasHelmet: true,
        helmetHealth: 1300,
        isFast: true,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.DANCING]: {
        id: ZombieType.DANCING,
        name: '舞王僵尸',
        health: 170,
        maxHealth: 170,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.BACKUP_DANCER]: {
        id: ZombieType.BACKUP_DANCER,
        name: '伴舞僵尸',
        health: 100,
        maxHealth: 100,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.DUCKY_TUBE]: {
        id: ZombieType.DUCKY_TUBE,
        name: '鸭子僵尸',
        health: 100,
        maxHealth: 100,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canSwim: true,
        canJump: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.SNORKEL]: {
        id: ZombieType.SNORKEL,
        name: '潜水僵尸',
        health: 100,
        maxHealth: 100,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canSwim: true,
        canDive: true,
        canJump: false,
        isBoss: false
    },
    [ZombieType.ZOMBONI]: {
        id: ZombieType.ZOMBONI,
        name: '冰车僵尸',
        health: 3000,
        maxHealth: 3000,
        damage: 50,
        speed: 0.13,
        attackSpeed: 0.5,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.JACK_IN_THE_BOX]: {
        id: ZombieType.JACK_IN_THE_BOX,
        name: '小丑僵尸',
        health: 400,
        maxHealth: 400,
        damage: 10,
        speed: 0.195,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.BALLOON]: {
        id: ZombieType.BALLOON,
        name: '气球僵尸',
        health: 200,
        maxHealth: 200,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.DIGGER]: {
        id: ZombieType.DIGGER,
        name: '矿工僵尸',
        health: 300,
        maxHealth: 300,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.POGO]: {
        id: ZombieType.POGO,
        name: '跳跳僵尸',
        health: 340,
        maxHealth: 340,
        damage: 10,
        speed: 0.195,
        attackSpeed: 1,
        canJump: true,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.BUNGEE]: {
        id: ZombieType.BUNGEE,
        name: '蹦极僵尸',
        health: 300,
        maxHealth: 300,
        damage: 10,
        speed: 0,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.LADDER]: {
        id: ZombieType.LADDER,
        name: '扶梯僵尸',
        health: 400,
        maxHealth: 400,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.CATAPULT]: {
        id: ZombieType.CATAPULT,
        name: '投石车僵尸',
        health: 400,
        maxHealth: 400,
        damage: 10,
        speed: 0.13,
        attackSpeed: 1,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.GARGANTUAR]: {
        id: ZombieType.GARGANTUAR,
        name: '巨人僵尸',
        health: 3000,
        maxHealth: 3000,
        damage: 50,
        speed: 0.13,
        attackSpeed: 0.5,
        dropImps: true,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.IMP]: {
        id: ZombieType.IMP,
        name: '小鬼僵尸',
        health: 100,
        maxHealth: 100,
        damage: 10,
        speed: 0.195,
        attackSpeed: 1,
        isFast: true,
        canJump: false,
        canSwim: false,
        canDive: false,
        isBoss: false
    },
    [ZombieType.DR_ZOMBOSS]: {
        id: ZombieType.DR_ZOMBOSS,
        name: '僵王博士',
        health: 10000,
        maxHealth: 10000,
        damage: 100,
        speed: 0,
        attackSpeed: 0,
        isBoss: true,
        canJump: false,
        canSwim: false,
        canDive: false
    }
};

export const PROJECTILE_DATA: Record<ProjectileType, ProjectileData> = {
    [ProjectileType.NORMAL_PEA]: {
        id: ProjectileType.NORMAL_PEA,
        damage: 20,
        speed: 0.3,
        damageType: DamageType.NORMAL
    },
    [ProjectileType.SNOW_PEA]: {
        id: ProjectileType.SNOW_PEA,
        damage: 20,
        speed: 0.3,
        damageType: DamageType.ICE
    },
    [ProjectileType.FIRE_PEA]: {
        id: ProjectileType.FIRE_PEA,
        damage: 40,
        speed: 0.3,
        damageType: DamageType.FIRE
    },
    [ProjectileType.MELON]: {
        id: ProjectileType.MELON,
        damage: 80,
        speed: 0.25,
        damageType: DamageType.NORMAL,
        areaDamage: true,
        areaRadius: 1
    },
    [ProjectileType.WINTER_MELON]: {
        id: ProjectileType.WINTER_MELON,
        damage: 80,
        speed: 0.25,
        damageType: DamageType.ICE,
        areaDamage: true,
        areaRadius: 1
    },
    [ProjectileType.COB]: {
        id: ProjectileType.COB,
        damage: 1800,
        speed: 0.15,
        damageType: DamageType.NORMAL,
        areaDamage: true,
        areaRadius: 2
    }
};
