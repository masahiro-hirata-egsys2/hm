# hm-profile

1. `> docker run --name h2a-postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -e POSTGRES_DB=h2aDB -p 5432:5432 -d postgres` 
2. `> docker run -it --rm -v "$(pwd):/app" -w /app -p 3000:3000 node:20 /bin/bash`
3. `# npm run build`
4. `# npm run start`
