<!-- PROJECT SHIELDS -->


<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://github.com/playlegend/WorldEditLab">
    <img src="public/images/logo.png" alt="Logo" width="80" height="80">
  </a>
</p>

<h1 align="center">WorldEditLab</h1>
<p align="center">
    A fancy and simple UI for up- & downloading schematics and heightmaps
    <br />
    <br />
    <a href="https://github.com/playlegend/WorldEditLab/issues/new?assignees=&labels=bug&template=bug_report.md">Report Bug</a>
    ·
    <a href="https://github.com/playlegend/WorldEditLab/issues/new?assignees=&labels=enhancement&template=feature_request.md">Request Feature</a>
</p>


<!-- TABLE OF CONTENTS -->

## Table of Contents</summary>

<ol>
  <li>
    <a href="#about-the-project">About The Project</a>
    <ul>
      <li><a href="#built-with">Built With</a></li>
    </ul>
  </li>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#usage-with-docker-compose">Usage with docker-compose</a></li>
      <li><a href="#environment-variables">Environment Variables</a></li>
    </ul>
    <li><a href="#dev-environment">Dev Environment</a></li>
  </li>
  <li><a href="#contributing">Contributing</a></li> 
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

<!-- ABOUT THE PROJECT -->

## About the project

WorldEditLab serves as a replacement for the old but very outdated web panel for WorldEdit. Schematics and heightmaps can be uploaded via WorldEditLab. These can then be used in-game.
WorldEditLab combines ease of use with important features like SAML2 and permission management.
Heightmaps and schematics can be sorted and tagged with different tags. Schematics can also be published through different access levels.

### Built with

WorldEditLab was built on well maintained packages:

* [express](https://www.npmjs.com/package/express)
* [Passport](https://www.npmjs.com/package/passport)
* [SQLite3](https://www.npmjs.com/package/sqlite3)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Embedded JavaScript](https://www.npmjs.com/package/ejs)
* [Tailwind CSS](https://www.npmjs.com/package/tailwindcss)

<!-- GETTING STARTED -->

## Getting started

To use WorldEditLab itself you only need to start a docker container.
Of course, more complex setups can also be built in Kubernetes or similar environments.
A helm chart is currently still in the works.

### Usage with docker-compose

Here is an example using docker-compose.yml:

```yaml
version: "3.9"
services:
  wel:
    image: playlegend/worldeditlab
    volumes:
      - /opt/world-edit-lab:/usr/src/app/data
    ports:
      - "8080:8080"
    environment:
      - COOKIE_SECRET="your_session_secret"
      - BASE_URL="http://foobar.com:8080"     
 ```

To make WorldEditLab compatible with FastAsyncWorldEdit, please add the following environments: 
````yaml
    environment:
      - FAWE_UPLOAD_ACCESS=::ffff:127.0.0.1
      - FAWE_USER_ID=1
````

### Environment Variables
| Name                | Type | Required | Description | Default |
|---------------------|:----:|:--------:|-------------|---------|
|COOKIE_SECRET        |string|yes       | This is the secret used to sign the session ID cookie | null |
|BASE_URL             |string|yes       | Base URL from WorldEditLab | null |
|FAWE_UPLOAD_ACCESS   |string|no        | IP Whitelist (separated through ',') | null |
|FAWE_USER_ID         |int   |no        | Owner of all uploaded content | null |
|UPLOAD_LIMIT         |int   |no        | File upload limit | 5,242,880 |



## Dev Environment

### Prerequirements

#### Yarn package manager

```shell
npm install -g yarn
```

### Downloading all dependencies

```shell
yarn install
```

### Compiles and hot-reloads for development

```shell
yarn serve
```

### Compiles and minifies for production

```shell
yarn build
```

### Run project

```shell
yarn start
```

### Lint files

```shell
yarn lint
```

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the GPL-3.0 License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Legend Team - team@playlegend.net

Project
Link: [https://github.com/playlegend/WorldEditLab](https://github.com/playlegend/WorldEditLab)
