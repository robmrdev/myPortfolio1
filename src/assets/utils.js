async function Counter (counterType) {
    await fetch(`https://porfoliobackend-ep8q.onrender.com/${counterType}`, {
    method: 'GET', 
    headers: {
      },
  });
  }

  export default Counter