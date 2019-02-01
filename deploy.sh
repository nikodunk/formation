#!/bin/bash

echo -e -e "\033[0;32mHello! Please enter a commit message:\033[0m"
read commitmessage

echo -e -e "\033[0;32mBuilding React App...\033[0m"

cd client

npm run build

cd ..

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

git add .

git commit -m "$commitmessage"

git push origin develop

echo -e "\033[0;32mPushing to AWS...\033[0m"

eb deploy

# echo -e "\033[0;32mDeploying updates to Heroku...\033[0m"

# git push heroku master