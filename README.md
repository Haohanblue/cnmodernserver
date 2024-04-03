# cnmodernserver

该项目是中国式现代化可视化设计的服务端源码

为前端页面提供了与数据库交互查询的API支持

- 开发使用的Node.js 版本为 v21.7.1

在项目根目录下打开终端
输入`npm install`一键下载项目所需依赖

输入`npm start`开启项目运行服务

项目默认运行路径为本地的23334端口

可以在/config/config.json文件中自定义配置端口号、连接的数据库和当前开发模式。"ISLOCAL"为1则为连接本地的数据库，请确保本地的数据库服务已经启动。"ISLOCAL"非1则为连接远程数据库，请配置好远程数据库的参数。

````javascript
//本项目提供的API接口如下

"/data/main/:year?/:provinces?" //查询score_data表，各省得分
"/data/area/:year?/:provinces?" //查询area_data表，区域的得分
"/data/filled/"                 //查询filled_data表，填充数据
"/data/source/"                 //查询source_data表，原始数据
"/data/hdi"                     //查询hdi_data表，HDI指数数据
"/data/index/:code?"            //查询index_data表,数据字典
"/download/source"              //下载source_data表，原始数据
"/download/filled"              //下载filled_data表，填充数据

````

