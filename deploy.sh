#!/bin/bash

echo -e -e "\033[0;32mHello! Please enter a commit message:\033[0m"
read commitmessage

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

git add .

git commit -m "$commitmessage"

git push origin develop

heroku config:set NPM_CONFIG_PRODUCTION=false

# echo -e "\033[0;32mDeploying updates to Heroku...\033[0m"

# git push heroku master