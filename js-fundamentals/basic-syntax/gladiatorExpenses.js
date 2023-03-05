function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let countHelmetBroken = 0;
  let countSwordBroken = 0;
  let countShieldBroken = 0;
  let isArmorBroken = false;
  let totalSum = 0;
  let count = 1;
  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 == 0) {
      countHelmetBroken += 1;
      totalSum += helmetPrice;
    }
    if (i % 3 == 0) {
      countSwordBroken += 1;
      totalSum += swordPrice;
    }
    if (countHelmetBroken == 3 && countSwordBroken == 2) {
      countShieldBroken += 1;
      countHelmetBroken = 0;
      countSwordBroken = 0;
      totalSum += shieldPrice;
    }
    if (countShieldBroken == 2) {
      countShieldBroken = 0;
      totalSum += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200);
