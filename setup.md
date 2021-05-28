# Setup Prettier và ESLint

## 1. Cài đặt prettier là formatter mặt định cho VS Code và format on save

## 2. Tạo file .editorconfig

## 3. Tạo file .prettierrc để config prettier, việc này bảo đảm đem project này cho các máy khác nhau vẫn giữ được config

## 4. Cài các devDependencies hỗ trợ prettier và eslint

```bash
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```

```bash
npm i prettier eslint-plugin-prettier eslint-config-prettier -D
```

## 5. Tạo file .eslintrc

## 6. Config scripts của package.json

```json
    "lint": "eslint --ext js,jsx src/",
    "lint:fix": "eslint --fix --ext js,jsx src/",
    "prettier": "prettier --check \"src/**/(**.jsx|*.js|*.scss|*.css)\"",
    "prettier:fix": "prettier --write \"src/**/(**.jsx|*.js|*.scss|*.css)\""
```
