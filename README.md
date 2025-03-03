# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 项目描述
这个网页是研究院所有网页的主要入口，主要是跳转功能，下面是我的 ui设计图：  ![alt text](7c6ac33bb7a4da57b82235c2ae11aac.png)
请根据设计图使用合适的组件库生成网页，确保我的网页是多分辨率自适应适配的
## header部分
 1. 左侧是公司logo图片和公司名称， 右侧展示日期，和用户名以及头像 ![alt text](logo.png)
## 中间
 1. 按照ui设计图： 一个antd的tab，分为 全部 办公管理 研究分析类 
 2. 紧接着是两个banner，左边的请使用这张图![alt text](banner_left.png)，右边还有一张图

## 下方内容展示
1. 按照ui图，全部里面分为两个部分 办公管理 和 研究分析类 这两个小标题为 22px 黑色
2. 根据ui图。创建一个component，参数为icon，文字，跳转链接，可以循环使用在展示内容中