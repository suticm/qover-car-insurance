export const calculateUniversalOfferPrice = (
  globalPrice: number,
  universalPercentageCoefficient: number,
  purchasePrice: number,
) => {
  const universalPrice =
    purchasePrice * universalPercentageCoefficient + globalPrice;
  return +universalPrice.toFixed(2);
};
