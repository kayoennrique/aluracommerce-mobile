<h4 align="center">
AluraCommerce
</h4>

<p align="center">
  <a href="#information_source-o-que-é-o-ficando-online">What is AluraCommerce?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: What is AluraCommerce?

AluraCommerce is an application made in React Native that simulates e-commerce. The idea is to use React's Context API to see the advantage of having global states in the application. AsyncStorage and a Web API are also used to persist data.

<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/demo.gif" width="400px" />
</h1>

## :rocket: Technologies

This project was developed using the following technologies:

- [React Native][rn]
- [Expo][expo]

## :information_source: How to use

To copy and run this application, you need three prerequisites: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

In the terminal, type the following commands:

### Download and install the project

```bash
# Clone this repository
$ git clone https://github.com/kayoennrique/aluracommerce-mobile.git

# Go to ropository
$ cd aluracommerce

# Install dependencies
$ npm install
```

### Run Mobile

```bash
# Run in another terminal (inside the AluraCommerce folder)
$ expo start
```

### Run the Web API

```bash
# Run in another terminal (inside the AluraCommerce folder)
# Remember to change the IP address (192.168.15.43) to that of your computer!
$ json-server --watch --host 192.168.15.43 db.json
```

I hope you make the most of this project to improve yourself! And if you want to say hello, I'm there on LinkedIn [Kayo Ennrique Pereira](https://www.linkedin.com/in/kayoennrique/). :wave:

[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
