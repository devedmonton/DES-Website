// Utility function to shuffle an array
export const shuffleArray = (array) => {
  const shuffledArray = array.slice(0);

  for (
    let currentIndex = shuffledArray.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex]
    ];
  }

  return shuffledArray;
};