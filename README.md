# Environment configuration
Source: https://medium.com/@ai.ashkan9473/environment-variables-in-client-side-6a6ff51c6085

## "Development mode"
Start application: *npm run start:development*  
Build application: *npm run build:development*

## "Production mode"
Start application: *npm run start:production*\
Build application: *npm run build:production*

## Package update in project
- env-cmd: https://www.npmjs.com/package/env-cmd ("npm install env-cmd")

## Files affected by environment configuration: 
- .env.development (new)
- .env.production (new)
- RestClient.js (updated)
- environment.js (updated)
- package.json (updated by npm install and manually)
- Menu/Menu.tsx

## Deploying front-end to aws:
### Create s3 bucket on AWS:
- On the S3 console in ASW choose *Create bucket*
- choose region: *EU(Ireland) eu-west-1*
- In the *Block Public Access settings for this bucket* unflag *Block all public access*
- Coose *Create bucket*
### Change properties for the bucket:  
- In the properties for s3 bucket choose *Static website hosting* / *Edit*
- Enable static web hosting
- Type `index.html` for * Index document * and * Error document - optional* Save changes.
- In the *Permissions *  go to *Access control list (ACL)*/ *Edit*
- Set a flag for List and Read for *Everyone (public access)* and for *I understand the effects of these changes on my objects and buckets.*
Page is now public
### In the react application:  
- Change URL/ public IP to get access to back-end 
- Build application: *npm run build:production*
  
### Uploading react app
- Upload files and static folder from *build* folder in your react app into s3 bucket/ Objects (you can use command *aws s3 cp . s3://<bucket>/ --recursive* )
- Go to properties of the bucket/ *Static website hosting* and copy the address of the web application. Test in the browser. 


## Route 53
- Register domain <domain-name.com and evt. subdomain www.<domain-name>.com


# Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
