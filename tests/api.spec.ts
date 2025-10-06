import { test, expect } from "@playwright/test";

// https://api.practicesoftwaretesting.com/products?page=1&between=price,1,100
test("GET /products", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.get(`${apiUrl}/products`);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.current_page).toBe(1);
  expect(body.last_page).toBe(6);
  expect(body.from).toBe(1);
  expect(body.total).toBe(50);
  expect(body.to).toBe(9);
  expect(body.data.length).toBe(9);
});

test("POST /users/login", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.post(`${apiUrl}/users/login`, {
    data: {
      email: "customer@practicesoftwaretesting.com",
      password: "welcome01",
    },
  });

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.access_token).toBeTruthy();
});
