# README

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
.env.example -> .env

&

composer install
```
### 4. Run migrations and db seed
```
php artisan migrate:fresh
php artisan db:seed
```

### 5. Goto client directory then install npm or bun
```
cd client

&

npm install
```

### 6. Go back to the POS directory
```
cd ..
```

### 7. Then run the server
```
 npm dev
```
