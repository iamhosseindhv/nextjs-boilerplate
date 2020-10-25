## Nextjs Material-ui Boilerplate
A boileplate for nodejs apps which has:
- Animated route transition
- Material-ui serverside redering
- Easy to deploy to Heroku
- eslint enabled
- Custom backend server
- Typescript enabled (while js is also allowed)
- ...

## Usage
```bash
npm install
npm run server            // development
npm build                 // production
```

### Create Local Development SSL Certificates
- Install `mkcert` as per instructions in https://github.com/FiloSottile/mkcert#installation
- `cd certs`
- `mkcert -install`
- `mkcert localhost`


## Deploy to Heroku
```bash
heroku create my-app
git add .
git commit -m "init deployment to heroku"
git push heroku master
heroku open         // it opens your deployed app in the browser
```

## Author - Contact
Hossein Dehnokhalaji

<a href="https://www.instagram.com/iamhosseindhv"><img src="https://github.com/iamhosseindhv/Rentaly/blob/master/Gifs/instagram.png" alt="Hossein Dehnokhalaji Linkedin profile" align="right" width="32" height="32"/></a>
<a href="https://www.linkedin.com/in/iamhosseindhv"><img src="https://github.com/iamhosseindhv/Rentaly/blob/master/Gifs/linkedin.png" alt="Hossein Dehnokhalaji Linkedin profile" align="right" width="32" height="32"/></a>
<a href="mailto:hossein.dehnavi98@yahoo.com"><img src="https://github.com/iamhosseindhv/Rentaly/blob/master/Gifs/contact.png" alt="Hossein Dehnokhalaji email address" align="right" width="32" height="32"/></a>
