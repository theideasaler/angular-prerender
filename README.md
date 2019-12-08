# Angular Prerender

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `npm run serve:prerender` to servre your static files locally. Navigate to `http://localhost:8082/`. The app will automatically loaded if you routes between pages.

## Build

Run `npm run build:prerender` to build the project. The build artifacts will be stored in the `dist/static` directory. 

## Deployment

Copy files inside `dist/` folder to your AWS S3 bucket, and follow this tutorial [Prerender Angular](https://levelup.gitconnected.com/prerender-angular-and-deploy-it-as-a-static-website-on-aws-s3-to-make-it-42-times-faster-115fadcf8614) to configure your AWS S3, CloudFront and Router 53.
