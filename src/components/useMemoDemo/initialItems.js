export const initialItems = new Array(100).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 2,
  };
});
