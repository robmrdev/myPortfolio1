async function Counter (counterType) {
    await fetch(`https://porfoliobackend-dev-amke.1.us-1.fl0.io/counter/${counterType}`, {
    method: 'GET', 
    headers: {
      },
  });
  }

  export default Counter