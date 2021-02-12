function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const sounds = [
{
  letter: "Q",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

{
  letter: "W",
  url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

{
  letter: "E",
  url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },

{
  letter: "A",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },

{
  letter: "S",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },

{
  letter: "D",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },

{
  letter: "Z",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },

{
  letter: "X",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },

{ letter: "C", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" }];


const Container = () => {

  return /*#__PURE__*/(
    React.createElement("div", { id: "display", className: "nineBoxes" }, /*#__PURE__*/
    React.createElement("h1", null),
    sounds.map(e => /*#__PURE__*/React.createElement(SinglePad, { audio: e.url, text: e.letter }))));



};

class SinglePad extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playSound",









    () => {
      this.audio.current.play();
      document.getElementById('display').querySelector('h1').innerText = `Playing ${this.audio.current.id}`;
      document.getElementById(`${this.props.text}`).style.backgroundColor = "red";
      setTimeout(() => document.getElementById(`${this.props.text}`).style.backgroundColor = "#fdd700", 2000);


    });this.audio = React.createRef();this.playSound = this.playSound.bind(this);window.document.addEventListener("keydown", e => {if (e.key.toUpperCase() === props.text) {this.audio.current.play();}});}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { key: this.props.text, id: this.props.text, className: "drum-pad", onClick: this.playSound, onkeypress: this.playSound },
      this.props.text, /*#__PURE__*/
      React.createElement("audio", { id: this.props.text, className: "clip", ref: this.audio, src: this.props.audio })));


  }}

ReactDOM.render( /*#__PURE__*/
React.createElement(Container, null),
document.getElementById('drum-machine'));