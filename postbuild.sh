#!/bin/sh

mkdir dist

# copy the contents of ./packages/host/dist to dist
cp -r ./packages/host/dist dist
# copy the contents of ./packages/button/dist to dist/button
cp -r ./packages/button/dist dist/button

