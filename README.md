<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ii-ix/scallybot">
    <img src="assets/images/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Scallybot</h3>
  <p align="center">
    A Discord bot that plays music, posts gifs, and generates memes.
    <br />
    <a href="https://github.com/ii-ix/scallybot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ii-ix/scallybot">View Demo</a>
    ·
    <a href="https://github.com/ii-ix/scallybot/issues">Report Bug</a>
    ·
    <a href="https://github.com/ii-ix/scallybot/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

There are many Discord bots that provide a variety of similar solutions but eventually get monetized or banned for copyright infringement. 

This one's different and here's why:
* Code base is open-source and free to use
* Media comes from a various sources
* Media sources are contigent on your own API access/usage 

Of course, no one Discord bot will serve all guilds since everyone's needs are different. With that in mind, I'll be adding more in the near future. 

You may also suggest changes by forking this repo and creating a pull request or opening an issue.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Below are the major  frameworks/libraries used to bootstrap this project.

* [![Node][Node.js]][Node-url]
* [![Discord][Discord.js]][Discord-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

_Install the latest version of Node.js and NPM using the Node version manager ['NVM'](https://nvm.sh/)._
* npm
  ```sh
  curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | 
  bash && source ~/.nvm/nvm.sh && 
  nvm install node
  ```

### Installation

_The below steps will guide you on successfully setting up your Discord Scallybot._

1. Get a free API Key at the [Discord Developer Portal](https://discord.com/developers/applications/)
2. Clone the repo
   ```sh
   git clone https://github.com/ii-ix/scallybot.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in an `.env` file
   ```bash
   DISCORD_BOT_TOKEN='DISCORD_API_KEY';
   SPOTIFY_CLIENT_ID='SPOTIFY_CLIENT_ID'
   SPOTIFY_SECRET_ID='SPOTIFY_SECRET_ID'
   YOUTUBE_API_KEY='YOUTUBE_API_KEY'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

_For now, please refer to the [README.md](https://github.com/ii-ix/scallybot/blob/main/README.md)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add `back to top` links
- [x] Add `CHANGELOG.md` release notes
- [ ] Add `Music Bot` support
- [ ] Add database support

See the [open issues](https://github.com/ii-ix/scallybot/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

II IX (Two Nine) - [@_scallybot](https://twitter.com/_scallybot) - ii-ix-bot@protonmail.com
 
Scallybot (For all ye' scallywags!) [https://github.com/ii-ix/scallybot](https://github.com/ii-ix/scallybot)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Thanks to all the projects and services to making this possible: 

* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ii-ix/scallybot.svg?style=for-the-badge
[contributors-url]: https://github.com/ii-ix/scallybot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ii-ix/scallybot.svg?style=for-the-badge
[forks-url]: https://github.com/ii-ix/scallybot/network/members
[stars-shield]: https://img.shields.io/github/stars/ii-ix/scallybot.svg?style=for-the-badge
[stars-url]: https://github.com/ii-ix/scallybot/stargazers
[issues-shield]: https://img.shields.io/github/issues/ii-ix/scallybot.svg?style=for-the-badge
[issues-url]: https://github.com/ii-ix/scallybot/issues
[license-shield]: https://img.shields.io/github/license/ii-ix/scallybot.svg?style=for-the-badge
[license-url]: https://github.com/ii-ix/scallybot/blob/master/LICENSE.txt
[Discord.js]: https://img.shields.io/discord/1009899250026565665?logo=discord&label=discord.js
[Discord-url]: https://discordjs.guide
[Node.js]: https://img.shields.io/node/v/latest?logo=nodedotjs&style=plastic
[Node-url]: https://nodejs.org/