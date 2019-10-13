# OSC-D3

Demo: https://vimeo.com/324347025
------


![GitHub Logo](OSC.gif)


Introduction:
------

OSC (Open Sound Control) is a protocol on top of UDP commonly used by
audio applications. It could be seem as a /MIDI evolution/. 

D3 is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.

In this project, I combined OSC with D3. I use mobile APP TouchOSC to transmit data to web browser and use d3 to load the data and do further performance.


Prerequisites:
------

- [[http://nodejs.org][node.js]]
- [[http://socket.io][socket.io]]
- an OSC supported application ([[http://puredata.org][Puredata]]) or hardware controller


Installation:
------

First of all, download and install nodejs from http://nodejs.org, then:

$ git clone git://github.com/wmjpillow/OSC-D3

$ cd osc-web/

$ npm install


Using:
------

Run the bridge app on your machine (localhost):

$ cd osc-web

$ node bridge.js

Launch another Terminal window. An example HTML is avaitable at web-side/app.html. Open it in your browser:

$ cd osc-web

$ cd web-side/

$ open app.html

Now you can run your favorite OSC app/device and send OSC messages
through port 3333. Those messages will be send to the HTML page by
WebSockets.

Configure your favore OSC app/device to listen to OSC messages coming
into port 3334. Any message sent by app.html (hit the button!) will be
sent to your OSC app/device.

So, you can face the HTML page as an "OSC node", listening to messages
on 3333 and sending messages to 3334.


OSC Control Reference:
------
https://github.com/automata/osc-web
