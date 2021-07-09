// const charInfo = {
//   baseStats: { STR: 17, DEX: 9, CON: 14, INT: 12, WIS: 14, CHA: 15, },
//   prof_bonus: 2,
//   skillProficiencies: ["Athletics", "Intimidation", "Medicine", "Perception"],
//   savingThrows: ["WIS", "CHA"],
//   armorStats: {armorType:"heavy_armor", armor: "chain_mail"},
//  hitDie:10,
//  traits:[]
// };

export const characterBuilder = (charInfo) => {
  const {
    baseStats,
    prof_bonus,
    skillProficiencies,
    savingThrows,
    armorStats,
    hitDie,

  } = charInfo;
  console.log(skillProficiencies)
  let {speed} = charInfo
  const mods = {
    STRMOD: Math.floor((baseStats.STR - 10) / 2),
    DEXMOD: Math.floor((baseStats.DEX - 10) / 2),
    CONMOD: Math.floor((baseStats.CON - 10) / 2),
    INTMOD: Math.floor((baseStats.INT - 10) / 2),
    WISMOD: Math.floor((baseStats.WIS - 10) / 2),
    CHAMOD: Math.floor((baseStats.CHA - 10) / 2),
  };

  const saving_throws = {
    STR: savingThrows.includes("STR")
      ? mods.STRMOD + prof_bonus
      : mods.STRMOD,
    DEX: savingThrows.includes("DEX")
      ? mods.DEXMOD + prof_bonus
      : mods.DEXMOD,
    CON: savingThrows.includes("CON")
      ? mods.CONMOD + prof_bonus
      : mods.CONMOD,
    INT: savingThrows.includes("INT")
      ? mods.INTMOD + prof_bonus
      : mods.INTMOD,
    WIS: savingThrows.includes("WIS")
      ? mods.WISMOD + prof_bonus
      : mods.WISMOD,
    CHA: savingThrows.includes("CHA")
      ? mods.CHAMOD + prof_bonus
      : mods.CHAMOD,
  };
  const skills = {
    acrobatics: skillProficiencies.includes("Acrobatics")
      ? mods.DEXMOD + prof_bonus
      : mods.DEXMOD,
    animal_handling: skillProficiencies.includes("Animal Handling")
      ? mods.WISMOD + prof_bonus
      : mods.WISMOD,
    arcana: skillProficiencies.includes("Arcana")
      ? mods.INTMOD + prof_bonus
      : mods.INTMOD,
    athletics: skillProficiencies.includes("Athletics")
      ? mods.STRMOD + prof_bonus
      : mods.STRMOD,
    deception: skillProficiencies.includes("Deception")
      ? mods.CHAMOD + prof_bonus
      : mods.CHAMOD,
    history: skillProficiencies.includes("History")
      ? mods.INTMOD + prof_bonus
      : mods.INTMOD,
    insight: skillProficiencies.includes("Insight")
      ? mods.WISMOD + prof_bonus
      : mods.WISMOD,
    intimidation: skillProficiencies.includes("Intimidation")
      ? mods.CHAMOD + prof_bonus
      : mods.CHAMOD,
    investigation: skillProficiencies.includes("Investigation")
      ? mods.INTMOD + prof_bonus
      : mods.INTMOD,
    medicine: skillProficiencies.includes("Medicine")
      ? mods.WISMOD + prof_bonus
      : mods.WISMOD,
    nature: skillProficiencies.includes("Nature")
      ? mods.INTMOD + prof_bonus
      : mods.INTMOD,
    perception: skillProficiencies.includes("Perception")
      ? mods.WISMOD + prof_bonus
      : mods.WISMOD,
    performance: skillProficiencies.includes("Performance")
      ? mods.CHAMOD + prof_bonus
      : mods.CHAMOD,
    persuasion: skillProficiencies.includes("Persuasion")
      ? mods.CHAMOD + prof_bonus
      : mods.CHAMOD,
    religion: skillProficiencies.includes("Religion")
      ? mods.INTMOD + prof_bonus
      : mods.INTMOD,
    sleight_of_hand: skillProficiencies.includes("Sleight of Hand")
      ? mods.DEXMOD + prof_bonus
      : mods.DEXMOD,
    stealth: skillProficiencies.includes("Stealth")
      ? mods.DEXMOD + prof_bonus
      : mods.DEXMOD,
    survival: skillProficiencies.includes("Survival")
      ? mods.WISMOD + prof_bonus
      : mods.WISMOD,
  };

  const hp = hitDie + mods.CONMOD;

  const light_armor = {
    padded: 11,
    leather: 11,
    studded_leather: 12,
  };
  const medium_armor = {
    hide: 12,
    chain_shirt: 13,
    scale_mail: 14,
    breast_plate: 14,
    half_plate: 15,
  };
  const heavy_armor = {
    ring_mail: 14,
    chain_mail: 16,
    splint: 17,
    plate: 18,
  };

  let armorfunc = (armorType, armor) => {
    console.log(armorType, armor)
    switch (armorType) {
      case "light_armor":
        return light_armor[armor] + mods.DEXMOD;
      case "medium_armor":
        return medium_armor[armor] + (mods.DEXMOD > 2 ? 2 : mods.DEXMOD);
      case "heavy_armor":
        return heavy_armor[armor];
    }
  };
  const { armorType, index } = armorStats;
  let ac = armorfunc(armorType, index);

  index === "chain_mail" && baseStats.STR < 13
    ? (speed = speed - 10)
    : (speed = speed);
  index === "splint" || (index === "plate" && baseStats.str < 15)
    ? (speed = speed - 10)
    : (speed = speed);

  let passive_perception = skillProficiencies.includes("Perception")
    ? 10 + mods.WISMOD + prof_bonus
    : 10 + mods.WISMOD;
  const max_hp = hitDie + mods.CONMOD;

  let characterStats = {
    baseStats,
    passive_perception,
    prof_bonus,
    saving_throws,
    skillProficiencies,
    skills,
    ac,
    max_hp,
    hitDie,
  };
  return characterStats;
};
