// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text, GoToAction
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  city: require('../assets/images/city.jpg'),
  earth: require('../assets/images/earth.jpg'),
  networkedEarth: require('../assets/images/networkedEarth.jpg'),
  codeorg: require('../assets/images/codeorg.jpg'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Software Engineer
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}  bold>
            Tyler Mitchell
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Computer code is what makes EVERYTHING work in our world today</Heading>
          <Image width="100%" src={images.networkedEarth} />
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace('/', '')} bgDarken={0.75} textColor="tertiary">
          <Text size={6} textColor="primary">Cell Phones, Tablets, Laptops</Text>
          <Appear fid="1">
            <Text size={6} textColor="primary">Movies, TV, Video Games</Text>
          </Appear>
          <Appear fid="2">
            <Text size={6} textColor="primary">Dishwashers and Air Conditioning</Text>
            </Appear>
          <Appear fid="3">
            <Text size={6} textColor="primary">Cars and stop lights</Text>
          </Appear>
          <Appear fid="4">
            <Text size={6} textColor="primary">Even swimming pools use code</Text>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="tertiary" textColor="secondary">
          <Heading size={6} textColor="primary" caps>Website Design & Mobile Apps</Heading>
          <List>
            <ListItem>Business</ListItem>
            <ListItem>Medicine</ListItem>
            <ListItem>Games</ListItem>
            <ListItem>Flight calculations</ListItem>
          </List>
        </Slide>
        <Slide transition={['spin', 'zoom']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"Sounds cool.  How do I know if I'd be good at this?"</Quote>
            <Cite>You (probably)</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["spin", "zoom"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"Gee mister, how do we learn to code?"</Quote>
            <Cite>You again</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} brColor="primary">
          <Heading size={4} textColor="secondary" caps>
            Now is the best time!
          </Heading>
          <Appear fid="1">
            <Text size={6} textColor="tertiary" transition={["slide"]}>Make fun games</Text>
          </Appear>
          <Appear fid="2">
            <Text size={6} textColor="tertiary">Make your own versions of websites you like</Text>
          </Appear>
        </Slide>
        <Slide transition={['slide', 'zoom']} bgImage="../assets/city.jpg" >
          <Text size={6} textColor="tertiary">code.org</Text>
          <Link href="https://code.org/" target="_blank"><Image width="100%" src={images.codeorg}/></Link>
        </Slide>
      </Deck>
    );
  }
}
