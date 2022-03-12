# Namla Technical Test

Hello, I developed this application with React and using : 
- React v17 ```npm i react```
- React router v6 ``` npm install react-router-dom ``` for the routing of the application
- Recharts ``` npm install recharts ``` for Charts


## Running Project
### Without Docker
After cloning the project, you must launch ```npm install``` to download the necessary packages (Node Modules) then launch the server with ```npm start``` .
### With Docker image
1. ```docker build -f Dockerfile -t namla``` the command will create an image called namla in docker
2. ```docker run -it -p 4001:3000 namla``` the command create a container, which we use to run the image, we exposed the port 3000 where the react application runs to port 4001 outside the container.
## UI Design 
For the interface, I used the cyan of the Namla's logo as main color.
> PS 01: I did not manage all the cases of the responsive version of the application.

> PS 02: I put the sub sections and the sections on the left because in my opinion it's more ergonomic and allows to know directly that it's about the sub sections (the first concept for me leaves the user perplexed and wonders: what is the difference between the navbar and the side bar)
### Home Page

![Screen](/src/assets/img/screens/screen_home.PNG)

### Clusters Page

![Screen](/src/assets/img/screens/screen_clusters.PNG)

### Devices Page

![Screen](/src/assets/img/screens/screen_devices.PNG)

### Edge Page

![Screen](/src/assets/img/screens/screen_edge.PNG)

## Project Structure
1. Assets : the ```assets``` folder contains all the necessary assets (images, CSS, Vendors)
2. Layouts: the ```layouts``` folder contains the layout components (```SideBar```, ```NavBar```, ```Breadcrumb``` and ```Footer```)
3. The components used in the views are :
    - ```ClusterChart``` : a dynamic graph for the ```Clusters``` page.
    - ```DataTable``` : a dynamic table for the ```Devices``` page.
    - ```KeyFigureSummary``` : Summary for the ```Edge``` page.
4. Data layer: I added a ```data``` folder which contains the 3 components responsible for generating random data every 10 seconds for the 3 pages 
    - ```GraphGenerateData``` for the ```ClusterChart```
    - ```SummaryGenerateData``` for ```KeyFigureSummary``` 
    - ```TableGenerateData``` for ```DataTable```
5. The Views : the ```views``` folder contains the requested pages (```Home```, ```Edge```, ```Devices```, ```Clusters```)
6. The ```Error``` page is an error page that is displayed when the URL does not exist.
