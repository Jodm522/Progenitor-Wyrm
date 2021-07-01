export const races = {
  dwarf: {
    CON: 2,
    subraces: {
      hill_dwarf: {
        WIS: 1,
        traits: { dwarven_toughness: "Dwarven Toughness" },
      },
      mountain_dwarf: {
        STR: 2,
        traits: { dwarven_armor: "Dwarven Armor Training" },
      },
    },
  },
  elf: {
    DEX: 2,
    subraces: {
      high_elf: { INT: 1, traits: { elf_weapon: "Elf Weapon Training" } },
      wood_elf: {
        WIS: 1,
        traits: {
          elf_weapon: "Elf Weapon Training",
          Fleet_of_foot: "Fleet of Foot",
          Mask_of_the_wild: "Mask of the Wild",
        },
      },
      drow: {
        CHA: 1,
        traits: {
          superior_darkvision: "Superior Darkvision.",
          sunlight_sensitivity: "Sunlight Sensitivity",
          drow_magic: "Drow Magic",
          drow_weapon_training: "Drow Weapon Training",
        },
      },
    },
  },
  halfling: {
    DEX: 2,
    subraces: {
      stout_halfling: {
        CON: 1,
        traits: { naturally_stealthy: "Naturally Stealthy" },
      },
      lightfoot_halfling: {
        CHA: 1,
        traits: { stout_resilience: "Stout Resilience" },
      },
    },
  },
  human: { STR: 1, DEX: 1, CON: 1, INT: 1, WIS: 1, CHA: 1 },
  dragonborn: { STR: 2, CHA: 1 },
  gnome: {
    INT: 2,
    subraces: {
      forest_gnome: {
        DEX: 2,
        traits: { artificers_lore: "Artificer’s Lore", tinker: "tinker" },
      },
      rock_gnome: {
        CON: 1,
        traits: { artificers_lore: "Artificer’s Lore", tinker: "tinker" },
      },
    },
  },
  half_elf: { CHA: 2 },
  half_orc: { STR: 2, CON: 2 },
  tiefling: { INT: 1, CHA: 2 },
};

export const backgrounds = {
  acolyte: {
    proficiencies: { insight: "Insight", Religion: "Religion" },
    languages: { choose: 2 },
  },
  charlatan: {
    proficiencies: { deception: "Deception", slight_of_hand: "Slight of hand" },
    tool_prof: { disguise_kit: "Disguise_kit", forgery_kit: "Forgery kit" },
  },
  criminal: {
    proficiencies: { deception: "Deception", stealth: "Stealth" },
    tool_prof: { gaming_set: { choose: 1 }, thieves_tools: "Thieves' Tools" },
  },
  entertainer: {
    proficiencies: { actobatics: "Acrobatics", performance: "Performance" },
    tool_prof: { disguise_kit: "Disguise Kit", instrument: { choose: 1 } },
  },
  folk_hero: {
    proficiencies: { animal_handling: "Animal Handling", survival: "Survival" },
    tool_prof: { artisan_tools: { choose: 1 }, vehicles: "Vehicles(land)" },
  },
  guild_artisan: {
    proficiencies: { insight: "insight", persuasion: "Persuasion" },
    tool_prof: { artisan_tools: { choose: 1 } },
    languages: { choose: 1 },
  },
  hermit: {
    proficiencies: { medicine: "Medicine", religion: "religion" },
    tool_prof: { herbalism_kit: "Herbalism Kit" },
    languages: { choose: 1 },
  },
  noble: {
    proficiencies: { history: "History", persuasion: "Persuasion" },
    tool_prof: { gaming_set: { choose: 1 }, languages: { choose: 1 } },
  },
  outlander: {
    proficiencies: { athletics: "Athletics", survival: "Survival" },
    tool_prof: { instrument: { choose: 1 } },
    languages: { choose: 1 },
  },
  sage: {
    proficiencies: { arcana: "Arcana", survival: "survival" },
    tool_prof: { instrument: { choose: 1 } },
    languages: { choose: 1 },
  },
  sailor: {
    proficiencies: { athletics: "Athletics", perception: "Perception" },
    tool_prof: {
      navigators_tools: "Navigator's tools",
      water_vehicles: "Vehicles(water)",
    },
  },
  solider: { proficiencies: {athletics:"Athletics", intimidation:"Intimidation"}, tool_prof:{gaming_set:{choose:1}, land_vehicles:"Land Vehicles"}},
  urchin:{proficiencies:{sleight_of_hand:"Sleight of Hand", stealth:"Stealth"}, tool_prof:{disguise_kit:"Disguise Kit", thieves_tools:"Thieves' Tools"}}
};
export const classes = {
  barbarian: { sugg_background: backgrounds.outlander },
  bard: { sugg_background: backgrounds.entertainer },
  cleric: { sugg_background: backgrounds.acolyte },
  druid: { sugg_background: backgrounds.hermit },
  fighter: { sugg_background: backgrounds.solider },
  monk: { sugg_background: backgrounds.hermit },
  paladin: { sugg_background: backgrounds.noble },
  ranger: { sugg_background: backgrounds.outlander },
  rogue: { sugg_background: backgrounds.charlatan },
  sorcerer: { sugg_background: backgrounds.hermit },
  warlock: { sugg_background: backgrounds.charlatan },
  wizard: { sugg_background: backgrounds.sage },
};



