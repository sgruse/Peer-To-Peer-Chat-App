# Peer To Peer Chat App With WebRTC, Node and Simple-peer

WebRTC utilizes simple Javascript API's to provide browsers with Real-Time communication.  
Combining WebRTC with simple-peer (to connect two users), the goal of this project is to make a simple chat app and later bring in socketIO.  I found some great tutorials to help me do this, check out this video by Kyle Young: https://www.youtube.com/watch?v=ieBtXwHvoNk.

###Instructions
* Begin by running npm install to get the dependencies.
* Run npm start, this will have budo bundle the project and start a server.
* In your browser navigate to localhost:9966/#init (wait a moment and this will automatically create a SDP that will be             used to connect our users).
* Now open another window in your browser and navigate to localhost:9966 and paste the SDP from the #init page into the window that says "otherID".
* Click the connect button, copy the new SDP and then paste that into the 'otherID' field on the #init page.
* Now that your users are connected you just need to allow access to you computer's camera and you should then be connected. 
