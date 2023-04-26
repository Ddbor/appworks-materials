# Custom Materials

[Docs](https://appworks.site/materials/about.html).

## 安装 appworks CLI

```bash
$ npm i -g appworks
$ appworks --help
```

## 安装依赖

```bash
$ npm install
```

## 物料开发

```bash
# block
$ cd blocks/ExampleBlock
$ npm install
$ npm run start

# component
$ cd blocks/ExampleBlock
$ npm install
$ npm run start
```

## 添加新物料

```bash
$ appworks add  # select block|component|scaffold
```

## 生成物料数据

```bash
$ appworks generate
```

## 发布物料

```bash
# 同步到物料中心
$ appworks sync
```

## 在 AppWorks 中使用物料

Add the materials data url to [AppWorks](https://appworks.site/pack/basic/materials.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%89%A9%E6%96%99%E6%BA%90).

## 物料源地址

`https://unpkg.com/@ddbor/appworks-materials@latest/build/materials.json`
