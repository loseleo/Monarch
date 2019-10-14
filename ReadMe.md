typeorm+koa2+mysql+typescript+lint+log4js+双数据库 脚手架工程
#启动脚本
pm2 start ts-node -- -P tsconfig.json ./src/server.ts



#注意只能用yarn 15版本
yum install -y yarn-1.15.2-1

#初次运行请配置ormconfig.json的数据库地址账号密码
