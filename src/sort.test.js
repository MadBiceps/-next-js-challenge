describe('sort', () => {
  it('should sort an array of numbers in ascending order', () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const sortedArray = sort(unsortedArray);
    expect(sortedArray).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  it('should handle an empty array', () => {
    const emptyArray = [];
    const sortedArray = sort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an already sorted array', () => {
    const sortedArray = [10, 20, 30, 40, 50];
    const result = sort(sortedArray);
    expect(result).toEqual([10, 20, 30, 40, 50]);
  });

  it('should sort a large array in ascending order', () => {
    const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
    const sortedArray = sort([...largeArray]);
    expect(sortedArray).toEqual([...largeArray].sort((a, b) => a - b));
  });
});