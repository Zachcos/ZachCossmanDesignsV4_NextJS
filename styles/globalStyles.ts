import { createGlobalStyle } from 'styled-components';
import { colors, breakpoints } from '../data/variables';

const GlobalStyle = createGlobalStyle`
/*** Reset***/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  overflow-x: hidden;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
/*** End Reset ***/

/*** Font declaration ***/
@font-face {
  font-family: 'Open Sans';
  font-weight: 100 900;
  src: url('/fonts/OpenSans-VariableFont.ttf') format('truetype-variations');
}

@font-face {
  font-family: 'Oswald';
  font-weight: 100 900;
  src: url('/fonts/Oswald-VariableFont.ttf') format('truetype-variations');
}
/*** End font declaration ***/

html {
  font-size: 18px;
}

body {
  background-color: ${colors.darkGrey};
  color: ${colors.lightGrey};
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}

.fullWrap {
  margin: 0 60px;
}

@media screen and (max-width: ${breakpoints.tablet}) {
  html {
    font-size: 16px;
  }
  .fullWrap {
    margin: 0 35px;
  }
}
`;

export default GlobalStyle;
