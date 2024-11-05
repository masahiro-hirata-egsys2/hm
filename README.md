# hm-profile

# アプリケーションの起動
1. DBサーバーを起動する \
`> docker-compose up -d`
2. アプリケーションサーバーを起動する \
`> docker run -it --rm --networkrun ${container>inspect>Network Model(ex. todo_default} -e WATCHPACK_POLLING=true -e DATABASE_URL=postgresql://${user}:${password}@${docker_database(ex. db}:${db_port(ex. 5432)}/${database} -v "$(pwd):/app" -w /app -p 3000:3000 node:22 /bin/bash`

# DBの更新
1. schema.prismaに、テーブル情報を入力する \
2. 初めてDBを作成する場合は、migrateを行う \
`> npx prisma migrate dev`
3. DBがある状態で、新たな更新分を追加したい場合は、pushを実行する
`> npx prisma db push`
