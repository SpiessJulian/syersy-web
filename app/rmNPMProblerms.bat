#!/bin/bash
echo Removing packages...
del "node_modules/"
echo Re-installing...
npm i --no-optional
echo Deduplicating modules
npm dedupe
