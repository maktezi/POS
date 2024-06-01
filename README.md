# POS (Point of Sale)

## Introduction

This project is a Point of Sale (POS) system designed to manage sales, inventory, and transactions efficiently. These instructions will guide you through setting up the project on your local development environment.

### Prerequisites

Ensure you have the following software installed on your system:

- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/)
- [XAMPP](https://www.apachefriends.org/index.html) or any other local server environment
- [PHP 8.2](https://www.php.net/) or a compatible version
- [GitHub CLI](https://cli.github.com/) (optional)
- [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) (optional)

### 1. Clone the project
```
git clone https://github.com/maktezi/POS.git
```

### 2. Goto project directory
```
cd POS
```

### 3. Copy the .env.example to .env then Install Composer
```
cp .env.example .env
composer install
```
### 4. Run migrations and db seed
```
php artisan migrate:fresh
php artisan db:seed
```

### 5. Then install npm
```
npm install
npm install --save-dev concurrently****
```

### 6. Then run the server
```
 npm serve
```


## Contributing
Thank you for considering contributing to this project! Please refer to the [CONTRIBUTING.MD](CONTRIBUTING.md) guidelines for details on how to get started and the code of conduct for contributors.

## Style Guide
When contributing to this project, please follow the [STYLE GUIDE](STYLE_GUIDE.md) to ensure consistency and maintainability of the codebase.
