#!/usr/bin/env bash
echo "cd /webapp/" >> /home/vagrant/.bashrc
sudo apt-get install curl -y
curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get update
sudo apt-get install nodejs -y