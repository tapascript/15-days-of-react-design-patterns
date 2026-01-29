export function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Tapas" });
    }, 1500);
  });
}

export function fetchOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate failure
      if (Math.random() < 0.5) {
        reject(new Error("Failed to fetch orders"));
      } else {
        resolve([
          `Order A for user ${userId}`,
          `Order B for user ${userId}`
        ]);
      }
    }, 1500);
  });
}

export function fetchAnalytics(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        revenue: "$12,000",
        growth: "18%",
        userId
      });
    }, 1500);
  });
}