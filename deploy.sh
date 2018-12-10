#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

git add .

git commit -m "make it better"

git push origin master

git push heroku master