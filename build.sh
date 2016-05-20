#!/usr/bin/env bash

currentTime=$(date +%F/%H:%M:%S)
echo "var buildTime = '$currentTime';export default buildTime;" > ./app/utils/version.js
echo "--------------------version update-----------------------"
echo "--------------------building start-----------------------"
echo "^^^^^^^^^^^^^^^^^^^^remove old file start^^^^^^^^^^^^^^^^^^^^^^^"
rm -rf release
echo "^^^^^^^^^^^^^^^^^^^^remove old file end^^^^^^^^^^^^^^^^^^^^^^^"
echo "^^^^^^^^^^^^^^^^^^^^run build project start^^^^^^^^^^^^^^^^^^^^^^^"
npm run build
echo "^^^^^^^^^^^^^^^^^^^^run build project end^^^^^^^^^^^^^^^^^^^^^^^"
echo "^^^^^^^^^^^^^^^^^^^^copy file start^^^^^^^^^^^^^^^^^^^^^^^"
cp -r ./app/images ./release/images
cp ./index.pro.html ./release/index.html
echo "^^^^^^^^^^^^^^^^^^^^copy file end^^^^^^^^^^^^^^^^^^^^^^^"
echo "^^^^^^^^^^^^^^^^^^^^building complete^^^^^^^^^^^^^^^^^^^^^^^"
