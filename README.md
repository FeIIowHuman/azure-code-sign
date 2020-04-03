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
git tag -f -s -m "Tag v1" v1
git push -f origin v1
```
