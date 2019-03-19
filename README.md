# OSC-D3
* Demo: https://vimeo.com/324347025

![ggplot2](OSC.gif)


* Introduction

OSC (Open Sound Control) is a protocol on top of UDP commonly used by
audio applications. It could be seem as a /MIDI evolution/. 

The objective of *osc-web* is to make possible to send and receive
OSC messages on the Web browser. With this browser capability we could
do interesting things like:

- Connect OSC supported controllers to the Web browser
- Use the Web browser as a controller to OSC supported applications
  (like Puredata, SuperCollider, Max/MSP, ...)
- Create a Web /OSC proxy/ where people all over the world could
  connect yours OSC controllers or applications without complications
  with /port fordwarding/

In this project, I combined OSC with D3. I use mobile APP TouchOSC to transmit data to web browser and use d3 to load the data and do further performance.


* Prerequisites

- [[http://nodejs.org][node.js]]
- [[http://socket.io][socket.io]]
- an OSC supported application ([[http://puredata.org][Puredata]]) or hardware controller

* Installation

First of all, download and install nodejs from http://nodejs.org, then:

#+begin_src sh
$ git clone git://github.com/automata/osc-web.git
$ cd osc-web/
$ npm install
#+end_src

* Using

Run the bridge app on your machine (localhost):

#+begin_src sh
$ cd osc-web
$ node bridge.js
#+end_src

An example HTML is avaitable at web-side/app.html. Open it in your browser:

#+begin_src sh
$ firefox app.html
#+end_src

Now you can run your favorite OSC app/device and send OSC messages
through port 3333. Those messages will be send to the HTML page by
WebSockets.

Configure your favore OSC app/device to listen to OSC messages coming
into port 3334. Any message sent by app.html (hit the button!) will be
sent to your OSC app/device.

So, you can face the HTML page as an "OSC node", listening to messages
on 3333 and sending messages to 3334.

Take a look at osc-side/ to examples of OSC apps.

*OSC Control Reference:
https://github.com/automata/osc-web
