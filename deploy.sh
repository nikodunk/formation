#!/bin/bash

echo Hello! Please enter a commit message
read commitmessage

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

git add .

git commit -m "$commitmessage"

git push origin master


# echo -e "\033[0;32mDeploying updates to Heroku...\033[0m"

# git push heroku master