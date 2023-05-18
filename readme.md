# vant + wechat + template



## vant

### 下载
```js
npm init -y

npm i @vant/weapp -S --production
```

### 修改 app.json
将 app.json 中的 "style": "v2" 去除


### 修改 project.config.json
```js
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./"
      }
    ]
  }
}

```

### 构建 npm 包
打开微信开发者工具，点击 工具 -> 构建 npm，并勾选 使用 npm 模块 选项，构建完成后，即可引入组件。






## 使用
- npm install

- 开发者工具菜单：工具 -> 构建 npm