# 📌 Project Name
End to end e-commerce web UI testing with playwright

## 📖 Description
This is personal portfolio of me theEverlastingStudentDodo (Fardo). The e-commerce webpage is www.saucedemo.com which is a demo page from SauceLabs. The automation is written in Typescript with Playwright as framework. The automation uses POM (Page Object Model) for optimize ease of authoring and maintenance, which mean the locators and actions are stored in different file and being called into the test. Please note that for login on each test aside from login test is done via UI and not via API due to SauceLabs not exposing their login API.

## 📂 Repository Structure
```
.
├── .github/workflows/  # GitHub Actions workflows
├── env-config/         # Environment configuration files
├── messages/          # Message templates or localization files
├── pages/             # Page components
├── tests/             # Test scripts and configurations
├── .env               # Environment variables file
├── .gitignore         # Git ignore file
├── README.md          # Project documentation
├── eslint.config.mjs  # ESLint configuration file
├── example.env        # Example environment variables file
├── package-lock.json  # Dependency lock file
├── package.json       # Project dependencies and scripts
└── playwright.config.ts # Playwright test configuration
```

## 🚀 Features
- The test is using Page Object Model structure
- The environment is stored using dotenv and not harcoded into the script. Credentials are exposed since this is just a demo.
- utilize ESLint to make sure no missing await in the script
- (TO DO) Integrated with CI/CD Gitlab / Jenkins

## ✅ Requirements
- **Operating System**: Windows, macOS, or Linux
- **Node.js** v18+ (https://nodejs.org/)
- **npm** v9+ (bundled with Node.js)
- **Git** (https://git-scm.com/)
- **Playwright** v1.x.x
- **ESLint** (for code linting)
- **dotenv** (for environment variables)

## 🛠️ Installation
To install and run this project, follow these steps:

```sh
# Clone the repository
git clone https://github.com/theEverlastingStudentDodo/playwright-portofolio-ecommerce-swaglabs

# Navigate to the project directory (your local directory)
cd yourrepository 

# Install dependencies
npm install
```

## ▶️ Usage
To start the project, run:

```sh
npm start
```


## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact
For any inquiries, contact:
- GitHub: [theEverlastingStudentDodo](https://github.com/theEverlastingStudentDodo)
