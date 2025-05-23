
# 🧪 SauceDemo Automated Testing Framework

This project is an automated end-to-end testing framework built using **Playwright** and **TypeScript**, developed to test the website:

🔗 [https://www.saucedemo.com](https://www.saucedemo.com)

## ✅ Features Tested

- **Login** (valid, invalid, empty credentials)
- **Add to Cart** (single and multiple products)
- **Checkout** (form submission and order completion)
- **Remove from Cart** (after adding products)
- **Sorting** (by name A-Z and by price high to low)

---

## 🧰 Technologies Used

- [Playwright](https://playwright.dev/)
- TypeScript
- Dotenv (`.env` for test parameters)
- Page Object Model (POM)
- Playwright Test Hooks
- Grouping and Parallel Testing
- Cross-Browser Testing (Chromium & Firefox)

---

## 📂 Project Structure

```
finalpro/
│
├── tests/                    # Test files (one per feature)
│   ├── login.spec.ts
│   ├── add-to-cart.spec.ts
│   ├── remove-from-cart.spec.ts
│   ├── checkout.spec.ts
│   └── sort.spec.ts
│
├── pages/                    # Page Object Models
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   └── CartPage.ts
│
├── playwright.config.ts      # Playwright configuration
├── .env                      # Environment variables
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

---

## 🚀 How to Run the Tests

### 1. Install dependencies

```bash
npm install
```

### 2. Run all tests

```bash
npx playwright test
```

### 3. Run a specific test file

```bash
npx playwright test tests/login.spec.ts
```

### 4. Run with a specific browser in headed mode

```bash
npx playwright test --project=chromium --headed
```

---

## 🌐 Cross-Browser Testing

This framework supports:

- ✅ Chromium (default)
- ✅ Firefox  
(You can adjust or add more in `playwright.config.ts`.)

---

## 📊 Reports and Debugging

To open the HTML report after running tests:

```bash
npx playwright show-report
```

---

## 🔒 Notes

- The framework avoids re-logging in before every test.
- Test logic is separated using Page Object Models.
- Credentials and base URLs are managed securely via `.env`.

---

## 👨‍💻 Developed By

> **Student Name**  
> Software Testing & QA - Semester 2 (2024/2025)  
> Instructor: [Instructor Name]

---

## 📄 License

This project is created for educational and academic use only.
