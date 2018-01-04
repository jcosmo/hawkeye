#!/bin/bash
yarn build
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress build/* stock:~/dungeon
