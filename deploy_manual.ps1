$env:PUBLIC_URL = "/Portfolio_D"
npm run build
cd build
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy"
git remote add origin https://github.com/Dhivyashri-6/Portfolio_D.git
git push -f origin gh-pages
cd ..