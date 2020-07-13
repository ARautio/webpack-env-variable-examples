# Examples how to setup dotenv and environmental variables in webpack

This repository includes two kind of options to include environemntal variables to webpack build. In example we are building a simple typescript application to demonstrate how the builds are working.

## .ENV files
[webpack.config.dotenv.js](https://github.com/ARautio/webpack-env-variable-examples/blob/master/webpack.config.dotenv.js)

This uses dotenv-webpack package and .env.local file. When build to server environment, the .env file should be generated before running build script by CI/CD process. .ENV files are easy to handle in local development environment because different example can be kept on local machine outside of git repository.

## Environmental variables
[webpack.config.env.js](https://github.com/ARautio/webpack-env-variable-examples/blob/master/webpack.config.env.js)

We need to use EnvironmentPlugin from webpack to make process.env variables to be recognized on webpack builds. If environmental variable isn't added to plugin array, it's not used inside the build. Environmental variable plugin helps out when CI/CD process support environmental variables easily because there is no need to add any type of additional files building the application. The downside of this plugin is that setting up local environmental variables before development is tedius.

## Combining both options.

Both options can be comnbined as long as list of environmental variables is kept in sync. .ENV files can be used locally and environmental variable pluign can be used on server by using either different webpack configs for both dev and build or creating rule between development and production mode in webpack. It's also possible to run both plugins at the same time since local environmental variables are overriding the .env file settings.
