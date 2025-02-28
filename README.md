# Trisolutions Test Automation - Front-End

## 📌 Project Overview
This project contains automated tests for the front-end of the Grocery CRUD application. The tests validate key user flows such as adding and deleting customers. The automation is implemented using **Cypress**.

## 🛠️ Technologies Used
- **Cypress** - End-to-end testing framework
- **JavaScript** - Programming language
- **Mochawesome** - Test reporting
- **Chrome** - Supported browser

## 📂 Project Structure
```
trisolutions-test-automation-front-end/
│-- cypress/
│   ├── e2e/               # Test scenarios
│   ├── reports/           # Test execution reports
│   ├── screenshots/       # Captured screenshots
│   └── support/           # Custom Cypress commands
│-- cypress.config.js      # Cypress configuration file
│-- package.json           # Project dependencies
│-- README.md              # Project documentation
```

## 🚀 How to Set Up and Run Tests
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/trisolutions-test-automation-front-end.git
cd trisolutions-test-automation-front-end
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Tests in Headless Mode
```sh
npx cypress run
```

### 4️⃣ Run Tests with Cypress UI
```sh
npx cypress open
```

## 📊 Test Reports & Screenshots
- **Mochawesome Report**: Reports are stored in `cypress/reports/`.
- **Screenshots**: Captured images are stored in `cypress/screenshots/`.
- To merge reports and generate an HTML file, run:
```sh
npx mochawesome-merge cypress/reports/*.json -o cypress/reports/report.json
npx marge cypress/reports/report.json -o cypress/reports/
```
- Open cypress/reports/index.html in your browser.

## 🎥 Test Execution Videos
- All test execution videos are automatically recorded and stored in `cypress/videos/`.
- You can watch these videos to review the test execution process.

## 🎓 Lessons Learned & Challenges
I am very proud of successfully completing this project. During the development process, I used ChatGPT as a support tool to help with code implementation, but I knew exactly what to ask and how to analyze and locate web elements using the browser's inspector. Additionally, I improved my ability to debug test failures and understand the importance of handling dynamic elements in UI automation. This project significantly enhanced my proficiency in Cypress and strengthened my ability to solve challenges independently.

One of the challenges I faced was integrating BDD directly into Cypress using Cucumber. While I was unable to fully implement it in the code, I applied best practices by documenting the test scenarios using Gherkin syntax. This allowed me to maintain a structured and readable test approach while ensuring clarity in the test cases.

## 📜 Test Scenarios
Check [TEST_SCENARIOS.md](https://github.com/lariredivo/trisolutions-test-automation-front-end/blob/main/TEST_SCENARIOS.md) for details.
