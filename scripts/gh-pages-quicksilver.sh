npm run build-global

npm run build-quicksilver
mkdir -p /tmp/react-awesome-query-builder
rm -rf /tmp/react-awesome-query-builder/gh-pages
mkdir -p /tmp/react-awesome-query-builder/gh-pages
mv ./quicksilver/bundle.js ./quicksilver/bundle.js.map /tmp/react-awesome-query-builder/gh-pages
git checkout gh-pages
cp -r /tmp/react-awesome-query-builder/gh-pages/* .
git add ./bundle.js
git add ./bundle.js.map
git commit -m "update"
git checkout quicksilver
