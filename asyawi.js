function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function performOperations() {
    const add = (a, b) => Promise.resolve(a + b);
    const subtract = (a, b) => Promise.resolve(a - b);
    const multiply = (a, b) => Promise.resolve(a * b);
    try {
      const sum = await add(5, 3);
      console.log("Sum:", sum);
      await delay(1000);
      const difference = await subtract(10, 4);
      console.log("Difference:", difference);
      await delay(1000);
      const product = await multiply(6, 2);
      console.log("Product:", product);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  performOperations();