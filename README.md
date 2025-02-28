# Trisolutions Test Automation - Front-End

## Project overview
This project contains automated tests for the front-end of the Grocery CRUD application. The tests validate key user flows such as adding and deleting customers. The automation is implemented using **Cypress**.

## Technologies used
- **Cypress** - End-to-end testing framework
- **JavaScript** - Programming language
- **Mochawesome** - Test reporting
- **Chrome** - Supported browser

## Project structure
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

## How to set up and run tests
### 1️ Clone the repository
```sh
git clone https://github.com/your-username/trisolutions-test-automation-front-end.git
cd trisolutions-test-automation-front-end
```

### 2️ Install dependencies
```sh
npm install
```

### 3️ Run tests in headless mode
```sh
npx cypress run
```

### 4️ Run tests with cypress UI
```sh
npx cypress open
```

## Test reports & screenshots
- **Mochawesome report**: Reports are stored in `cypress/reports/`.
- **Screenshots**: Captured images are stored in `cypress/screenshots/`.
- To merge reports and generate an HTML file, run:
```sh
npx mochawesome-merge cypress/reports/*.json -o cypress/reports/report.json
npx marge cypress/reports/report.json -o cypress/reports/
```
- Open cypress/reports/index.html in your browser.

### Test execution videos
- All test execution videos are automatically recorded and stored in `cypress/videos/`.
- You can watch these videos to review the test execution process.

### Test scenarios
Check [TEST_SCENARIOS.md](https://github.com/lariredivo/trisolutions-test-automation-front-end/blob/main/TEST_SCENARIOS.md) for details.
