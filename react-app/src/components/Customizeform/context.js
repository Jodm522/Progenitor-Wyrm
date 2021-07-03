export const skills = {
  any: {
    acrobatics: { name: "Acrobatics" },
    animalHandling: { name: "Animal Handling" },
    arcana: { name: "Arcana" },
    athletics: { name: "Athletics" },
    deception: { name: "Deception" },
    history: { name: "History" },
    insight: { name: "Insight" },
    intimidation: { name: "Intimidation" },
    investigation: { name: "Investigation" },
    medicine: { name: "Medicine" },
    nature: { name: "Nature" },
    perception: { name: "Perception" },
    performance: { name: "Performance" },
    persuasion: { name: "Persuasion" },
    religion: { name: "Religion" },
    sleightOfHand: { name: "Slight of Hand" },
    stealth: { name: "Stealth" },
    survival: { name: "Survival" },
  },
};
export const races = {
  dwarf: {
    statBonuses: { CON: 2, WIS: 1 },
    speed: 25,
    profeciencies: [],
    traits: [
      {
        index: "darkvision",
        name: "Darkvision",
        url: "/api/traits/darkvision",
      },
      {
        index: "dwarven-combat-training",
        name: "Dwarven Combat Training",
        url: "/api/traits/dwarven-combat-training",
      },
      {
        index: "dwarven-resilience",
        name: "Dwarven Resilience",
        url: "/api/traits/dwarven-resilience",
      },
      {
        index: "dwarven-toughness",
        name: "Dwarven Toughness",
        url: "/api/traits/dwarven-toughness",
      },
    ],
    // subraces: {
    //   choose: 1,
    //   from: [
    //     {
    //       index: "hill-dwarf",
    //       name: "Hill Dwarf",
    //       statBonuses: { WIS: 1 },
    //       traits: [
    //         {
    //           index: "dwarven-toughness",
    //           name: "Dwarven Toughness",
    //           url: "/api/traits/dwarven-toughness",
    //         },
    //       ],
    //     },
    //     {
    //       index: "mounain-dwarf",
    //       statBonuses: { STR: 2 },
    //       traits: [
    //         {
    //           //! add later?
    //           //Dwarven armor training
    //         },
    //       ],
    //     },
    //   ],
    // },
  },

  elf: {
    statBonuses: { DEX: 2, INT: 1 },
    speed: 30,
    traits: [
      {
        index: "darkvision",
        name: "Darkvision",
        url: "/api/traits/darkvision",
      },
      {
        index: "keen-senses",
        name: "Keen Senses",
        url: "/api/traits/keen-senses",
      },
      {
        index: "fey-ancestry",
        name: "Fey Ancestry",
        url: "/api/traits/fey-ancestry",
      },
      {
        index: "elf-weapon-training",
        name: "Elf Weapon Training",
        url: "/api/traits/elf-weapon-training",
      },
      {
        index: "extra-language",
        name: "Extra Language",
        url: "/api/traits/extra-language",
      },
      {
        //! add later?
        //! cantrip
      },
    ],
    // subraces: {
    //   choose: 1,
    //   from: [
    //     {
    //       index: "high-elf",
    //       name: "High Elf",
    //       statBonuses: { INT: 1 },
    //       traits: [
    //         {
    //           index: "elf-weapon-training",
    //           name: "Elf Weapon Training",
    //           url: "/api/traits/elf-weapon-training",
    //         },
    //         {
    //           index: "extra-language",
    //           name: "Extra Language",
    //           url: "/api/traits/extra-language",
    //         },
    //         {
    //           //! add later?
    //           //! cantrip
    //         },
    //       ],
    //     },
    //     {
    //       index: "wood-elf",
    //       name: "Wood Elf",
    //       statBonuses: { WIS: 1 },
    //       traits: [
    //         {
    //           index: "elf-weapon-training",
    //           name: "Elf Weapon Training",
    //           url: "/api/traits/elf-weapon-training",
    //         },
    //         //! add later?
    //         // traits: {
    //         //   Fleet_of_foot: "Fleet of Foot",
    //         //   Mask_of_the_wild: "Mask of the Wild",
    //         // },
    //       ],
    //     },
    //     {
    //       index: "drow",
    //       name: "Drow",
    //       statBonuses: { CHA: 1 },
    //       traits: [
    //         //! add later
    //         // superior_darkvision: "Superior Darkvision.",
    //         // sunlight_sensitivity: "Sunlight Sensitivity",
    //         // drow_magic: "Drow Magic",
    //         // drow_weapon_training: "Drow Weapon Training",
    //       ],
    //     },
    //   ],
    // },
  },

  halfling: {
    statBonuses: { DEX: 2, CHA: 1 },
    speed: 25,
    traits: [
      {
        index: "lucky",
        name: "Lucky",
        url: "/api/traits/lucky",
      },
      {
        index: "brave",
        name: "Brave",
        url: "/api/traits/brave",
      },
      {
        index: "halfling-nimbleness",
        name: "Halfling Nimbleness",
        url: "/api/traits/halfling-nimbleness",
      },
      {
        index: "naturally-stealthy",
        name: "Naturally Stealthy",
        url: "/api/traits/naturally-stealthy",
      },
    ],

    // subraces: {
    //   stout_halfling: {
    //     statBonuses: { CON: 1 },
    //     traits: [
    //       {
    //         index: "naturally-stealthy",
    //         name: "Naturally Stealthy",
    //         url: "/api/traits/naturally-stealthy",
    //       },
    //     ],
    //   },
    //   lightfoot_halfling: {
    //     statBonuses: { CHA: 1 },
    //     traits: { stout_resilience: "Stout Resilience" },
    //   },
    // },
  },
  human: {
    statbonuses: { STR: 1, DEX: 1, CON: 1, INT: 1, WIS: 1, CHA: 1, speed: 30 },
  },

  dragonborn: {
    statBonuses: { STR: 2, CHA: 1 },
    speed: 30,
    traits: [
      {
        index: "breath-weapon",
        name: "Breath Weapon",
        url: "/api/traits/breath-weapon",
      },
      {
        index: "draconic-ancestry",
        name: "Draconic Ancestry",
        url: "/api/traits/draconic-ancestry",
      },
      {
        //! add later?
        //damage resist
      },
    ],
  },

  gnome: {
    ststBonuses: { INT: 2, CON: 1 },
    traits: [
      {
        index: "darkvision",
        name: "Darkvision",
        url: "/api/traits/darkvision",
      },
      {
        index: "gnome-cunning",
        name: "Gnome Cunning",
        url: "/api/traits/gnome-cunning",
      },
      {
        index: "artificers-lore",
        name: "Artificer's Lore",
        url: "/api/traits/artificers-lore",
      },
      {
        index: "tinker",
        name: "Tinker",
        url: "/api/traits/tinker",
      },
    ],
    // subraces: {
    //   forest_gnome: {
    //     statBonuses: { DEX: 2 },
    //     traits: { artificers_lore: "Artificer’s Lore", tinker: "tinker" },
    //   },
    //   rock_gnome: {
    //     statBonuses: { CON: 1 },
    //     traits: { artificers_lore: "Artificer’s Lore", tinker: "tinker" },
    //   },
    // },
  },

  half_elf: {
    statBonuses: { CHA: 2 },
    chooseStats: 2,
    speed: 30,
    traits: [
      {
        index: "darkvision",
        name: "Darkvision",
        url: "/api/traits/darkvision",
      },
    ],
  },
  half_orc: {
    statBonuses: { STR: 2, CON: 2 },
    speed: 30,
    traits: [
      {
        index: "menacing",
        name: "Menacing",
        url: "/api/traits/menacing",
      },
      {
        index: "darkvision",
        name: "Darkvision",
        url: "/api/traits/darkvision",
      },
      {
        index: "relentless-endurance",
        name: "Relentless Endurance",
        url: "/api/traits/relentless-endurance",
      },
    ],
  },
  tiefling: {
    statBonuses: { INT: 1, CHA: 2 },
    speed: 30,
    traits: [
      {
        index: "darkvision",
        name: "Darkvision",
        url: "/api/traits/darkvision",
      },
      {
        index: "hellish-resistance",
        name: "Hellish Resistance",
        url: "/api/traits/hellish-resistance",
      },
      {
        index: "infernal-legacy",
        name: "Infernal Legacy",
        url: "/api/traits/infernal-legacy",
      },
    ],
  },
};

export const backgrounds = [
  {
    name: "Acolyte",
    skillProficiencies: ["Insight", "Religion"],
    languages: { choose: 2 },
  },
  {
    name: "Charlatan",
    skillProficiencies: ["Deception", "Slight of hand"],
    tool_prof: { disguise_kit: "Disguise_kit", forgery_kit: "Forgery kit" },
  },

  {
    name: "Criminal",
    skillProficiencies: ["Deception", "Stealth"],
    tool_prof: { gaming_set: { choose: 1 }, thieves_tools: "Thieves' Tools" },
  },
  {
    name: "Entertainer",
    skillProficiencies: ["Acrobatics", "Performance"],
    tool_prof: { disguise_kit: "Disguise Kit", instrument: { choose: 1 } },
  },
  {
    name: "Folk Hero",
    skillProficiencies: ["Animal Handling", "Survival"],
    tool_prof: { artisan_tools: { choose: 1 }, vehicles: "Vehicles(land)" },
  },
  {
    name: "Guild Artisan",
    skillProficiencies: ["Insight", "Persuasion"],
    tool_prof: { artisan_tools: { choose: 1 } },
    languages: { choose: 1 },
  },
  {
    name: "Hermit",
    skillProficiencies: ["Medicine", "Religion"],
    tool_prof: { herbalism_kit: "Herbalism Kit" },
    languages: { choose: 1 },
  },
  {
    name: "Noble",
    skillProficiencies: ["History", "Persuasion"],
    tool_prof: { gaming_set: { choose: 1 }, languages: { choose: 1 } },
  },
  {
    name: "Outlander",
    skillProficiencies: ["Athletics", "Survival"],
    tool_prof: { instrument: { choose: 1 } },
    languages: { choose: 1 },
  },
  {
    name: "Sage",
    skillProficiencies: ["Arcana", "Survival"],
    tool_prof: { instrument: { choose: 1 } },
    languages: { choose: 1 },
  },
  {
    name: "Sailor",
    skillProficiencies: ["Athletics", "Perception"],
    tool_prof: {
      navigators_tools: "Navigator's tools",
      water_vehicles: "Vehicles(water)",
    },
  },
  {
    name: "Soldier",
    skillProficiencies: ["Athletics", "Intimidation"],
    tool_prof: { gaming_set: { choose: 1 }, land_vehicles: "Land Vehicles" },
  },
  {
    name: "Urchin",
    skillProficiencies: ["Sleight of Hand", "Stealth"],
    tool_prof: {
      disguise_kit: "Disguise Kit",
      thieves_tools: "Thieves' Tools",
    },
  },
];

export const armors = {
  padded: { armorType: "light_armor", name: "Padded Armor", index: "padded" },
  leather: {
    armortype: "light_armor",
    name: "Leather Armor",
    index: "leather",
  },
  studded: {
    armortype: "light_armor",
    name: "Studded Leather",
    index: "leather",
  },
  hide: { armortype: "medium_armor", name: "Hide", index: "hide" },
  chainShirt: {
    armortype: "medium_armor",
    name: "Chain Shirt",
    index: "chain_shirt",
  },
  scaleMail: {
    armortype: "medium_armor",
    name: "Scale Mail",
    index: "scale_mail",
  },
  breastPlate: {
    armortype: "medium_armor",
    name: "Breast Plate",
    index: "breast_plate",
  },
  halfPlate: {
    armortype: "medium_armor",
    name: "Half Plate",
    index: "half_plate",
  },
  ringMail: { armortype: "heavy_armor", name: "Ring Mail", index: "ring_mail" },
  chainMail: {
    armortype: "heavy_armor",
    name: "Chain Mail",
    index: "chain_mail",
  },
  splint: { armortype: "heavy_armor", name: "Splint", index: "splint" },
  plate: { armortype: "heavy_armor", name: "Plate", index: "plate" },
};
export const classes = {
  barbarian: {
    sugg_background: "Outlander",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.animalHandling,
        skills.any.athletics,
        skills.any.intimidation,
        skills.any.nature,
        skills.any.perception,
        skills.any.perception,
        skills.any.survival,
      ],
    },
    savingThrows: ["STR", "CON"],
    startingArmorOptions: [],
  },
  bard: {
    sugg_background: "Entertainer",
    skillProficiencies: {
      choose: 3,
      options: [
        { name: "Acrobatics" },
        { name: "Animal Handling" },
        { name: "Arcana" },
        { name: "Athletics" },
        { name: "Deception" },
        { name: "History" },
        { name: "Insight" },
        { name: "Intimidation" },
        { name: "Investigation" },
        { name: "Medicine" },
        { name: "Nature" },
        { name: "Perception" },
        { name: "Performance" },
        { name: "Persuasion" },
        { name: "Religion" },
        { name: "Slight of Hand" },
        { name: "Stealth" },
        { name: "Survival" },
      ],
    },
    savingThrows: ["DEX", "CHA"],
    startingArmorOptions: [armors.leather],
  },
  cleric: {
    sugg_background: "Acolyte",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.history,
        skills.any.insight,
        skills.any.medicine,
        skills.any.persuasion,
        skills.any.religion,
      ],
    },
    savingThrows: ["WIS", "CHA"],
    startingArmorOptions: [armors.scaleMail, armors.leather, armors.chainMail],
  },
  druid: {
    sugg_background: "Hermit",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.arcana,
        skills.any.animalHandling,
        skills.any.insight,
        skills.any.medicine,
        skills.any.nature,
        skills.any.perception,
        skills.any.religion,
        skills.any.survival,
      ],
    },
    savingThrows: ["INT", "WIS"],
    startingArmorOptions: [armors.leather],
  },
  fighter: {
    sugg_background: "Soldier",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.acrobatics,
        skills.any.animalHandling,
        skills.any.athletics,
        skills.any.history,
        skills.any.insight,
        skills.any.intimidation,
        skills.any.perception,
        skills.any.survival,
      ],
    },
    savingThrows: ["STR", "CON"],
    startingArmorOptions: [armors.chainMail, armors.leather],
  },
  monk: {
    sugg_background: "Hermit",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.acrobatics,
        skills.any.athletics,
        skills.any.history,
        skills.any.insight,
        skills.any.religion,
        skills.any.stealth,
      ],
    },
    savingThrows: ["STR", "DEX"],
    startingArmorOptions: [],
  },
  paladin: {
    sugg_background: "Noble",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.athletics,
        skills.any.insight,
        skills.any.intimidation,
        skills.any.persuasion,
        skills.any.medicine,
        skills.any.medicine,
      ],
    },
    savingThrows: ["WIS", "CHA"],
    startingArmorOptions: [armors.chainMail],
  },
  ranger: {
    sugg_background: "Outlander",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.animalHandling,
        skills.any.athletics,
        skills.any.insight,
        skills.any.investigation,
        skills.any.nature,
        skills.any.perception,
        skills.any.stealth,
        skills.any.survival,
      ],
    },
    savingThrows: ["STR", "DEX"],
    startingArmorOptions: [armors.scaleMail, armors.leather],
  },
  rogue: {
    sugg_background: "Charlatan",
    skillProficiencies: {
      choose: 4,
      options: [
        skills.any.acrobatics,
        skills.any.athletics,
        skills.any.deception,
        skills.any.insight,
        skills.any.intimidation,
        skills.any.investigation,
        skills.any.perception,
        skills.any.performance,
        skills.any.persuasion,
        skills.any.sleightOfHand,
        skills.any.stealth,
      ],
    },
    savingThrows: ["DEX", "INT"],
    startingArmorOptions: [armors.leather],
  },
  sorcerer: {
    sugg_background: "Hermit",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.arcana,
        skills.any.deception,
        skills.any.insight,
        skills.any.intimidation,
        skills.any.persuasion,
        skills.any.religion,
      ],
    },
    savingThrows: ["CON", "CHA"],
    startingArmorOptions: [],
  },
  warlock: {
    sugg_background: "Charlatan",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.arcana,
        skills.any.deception,
        skills.any.history,
        skills.any.intimidation,
        skills.any.investigation,
        skills.any.nature,
        skills.any.religion,
      ],
    },
    savingThrows: ["WIS", "CHA"],
    startingArmorOptions: [armors.leather],
  },
  wizard: {
    sugg_background: "Sage",
    skillProficiencies: {
      choose: 2,
      options: [
        skills.any.arcana,
        skills.any.history,
        skills.any.insight,
        skills.any.investigation,
        skills.any.medicine,
        skills.any.religion,
      ],
    },
    savingThrows: ["INT", "WIS"],
    startingArmorOptions: [],
  },
};
