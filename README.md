# electron-promise-issue
Basic example to track down issue with electron remote and promises 

**Edit**: Issue as nothing to do with promises. Only enumerable properties which are present when the remote object is first referenced are accessible via remote (cf [electron doc](https://github.com/electron/electron/blob/master/docs/api/remote.md#remote-objects))

# Instructions
`npm install`

`npm run start`

