!armorOptions.length
  ? setArmorStats({ armorType: "", armor: "" })
  : armorOptions.length === 1
  ? setArmorStats({
      armorType: armorOptions[0].armorType,
      armor: armorOptions[0].armor,
    })
  : null;


  {
    armorOptions.length === 1 &&
      setArmorStats({
        armorType: armorOptions[0].armorType,
        armor: armorOptions[0].armor,
      });
  }
