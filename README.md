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
      <li><a href="#dev-environment">Dev Environment</a></li>
    </ul>
  </li>
  <li><a href="#contributing">Contributing</a></li> 
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

<!-- ABOUT THE PROJECT -->

## About The Project

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

### Built With

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam.

* [express](https://www.npmjs.com/package/express)
* [Passport](https://www.npmjs.com/package/passport)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [Embedded JavaScript](https://www.npmjs.com/package/ejs)

<!-- GETTING STARTED -->

## Getting Started

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.

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

Contributions are what make the open source community such an amazing place to be learn, inspire,
and create. Any contributions you make are **greatly appreciated**.

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
