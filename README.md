[![Waffle.io - Issues in progress](https://badge.waffle.io/beanieio/beanieio.png?label=in%20progress&title=In%20Progress)](https://waffle.io/beanieio/beanieio?utm_source=badge)
# beanieio

> Daily Health, Nutrition, and Fitness Journalling app to help identify personal patterns / reactions

## Team

  - __Product Owner__: Jared Meek
  - __Scrum Master__: Iona Jewel
  - __Development Team Members__: Phillip Schmidt

## Usage

> Log onto the app and use it...

## Requirements

- Node 6.11.3
- MongoDb latest
- Express latest
- React 16
- else -> see the package

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g nodemon
npm install
```

HTTPS Authentication Setup:
 - App assumes that the certificate and key will be at:
  ```
   project-folder/app/cert/domain.crt
   project-folder/app/cert/domain.key
  ```

Note: if you want to use storybook to develop components, and don't yet have the storybook CLI, use:
```
npm i-g @storybook/cli
```
then run: npm run storybook

### Tasks

To get started with a local dev server (code will assume: http port: 8080, https port: 8443)
 npm run pack
 npm start

To start server with ports forced to 8080 and 8443
 npm run startprod

To start in debug mode (enables more server-side logging)
 npm run startproddebug

### Deployment
 - Deployed to: https://beanieio.co.uk 
 - Deployed on: Digital Ocean $10/m droplet, ubuntu 16.04 base

- Helpful guides for Digital Ocean Ubuntu MEAN setup Links
    - [How to install mongo on digital ocean ubuntu droplet](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04)
    - [How to install nodejs on digital ocean ubuntu droplet](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
- Persistent server enabled using forever

### Roadmap

View the project roadmap [here](https://waffle.io/beanieio/beanieio)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
