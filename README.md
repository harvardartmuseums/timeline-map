# Timeline Map

Getting its data from the Harvard Art Museums API, this project places all of the works currently on view in the museums along a timeline of when they went on view. Objects for which there is geolocation data appear on a world map, color coded by classification, while the gallery they're going up in display along the side. The visualization is controlled by mobile device.





Note that the framework, which uses d3 to display zoomable nodes controllable on an iPad, can be repurposed by changing the url in index.js to point to a new data.json file. The format for the JSON is 



{"title": "", "type": "", "content": "", "caption": "", "nodes": []}



where type is "image", "text", "audio", or "video", content is, respectively, the URL of an image, text, a list [] with the URL of an audio file and then the URL of an image, or the URL of a video, and nodes holds any children nodes, which follow the same format.



The project can be viewed at:

http://timeline-map.herokuapp.com/index.html

http://timeline-map.herokuapp.com/control.html

## Requirements

* NodeJS

### Installation
```
npm install 
```

### Start the server
```
npm start
```
