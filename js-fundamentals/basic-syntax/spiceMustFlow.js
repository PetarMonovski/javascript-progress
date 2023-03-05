function spiceMustFlow(amount) {
  //let amountToString = String(amount);
  let totalAmountExtracted = 0;
  let daysExtracted = 0;
  let workersConsume = 26;

  while (amount >= 100) {
    totalAmountExtracted += amount - workersConsume;
    daysExtracted += 1;
    amount -= 10;
  }
  totalAmountExtracted -= workersConsume;
  console.log(`${daysExtracted}\n${totalAmountExtracted}`);
}

spiceMustFlow(111);
spiceMustFlow(450);
