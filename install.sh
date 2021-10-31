#!/usr/bin/bash

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install npm
apt-get install nmap
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install tesseract
npm i node-tesseract-ocr
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm audit fix

echo "[*] Silahkan Ketik \"npm start\" Untuk Menjalankan Scpirt Xie Dev Team"
