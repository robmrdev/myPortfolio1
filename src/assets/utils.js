async function Counter (counterType) {
    await fetch(`porfoliobackend-mb59kr72o-roberts-projects-2d1ea26b.vercel.app/counter/${counterType}`, {
    method: 'GET', 
    headers: {
      },
  });
  }

  export default Counter