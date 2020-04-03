Install dependencies
```bash
npm install
```

Build the typescript and package it for distribution
```bash
npm run build && npm run pack
```

Push changes
```bash
git commit -m "Update action"
git push
```

Tag and release
```bash
git tag -fs v1 -m "Update v1 tag"
git push origin v1 --force
```
