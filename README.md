# Around the World - The Travel Blog v2



## About this Project

This is my contribution for the final Project for the Full-Stack Web Development-Course at the [Hamburg Coding School.](https://hamburgcodingschool.com/)

The page is live here: (the Heroku-Server might need a moment to 'wake up')

https://aroundtheworld-blog-server.herokuapp.com/

##### Github-links

[View this project and the documentation on Github](https://github.com/shaefelinger/HCS-Project2-TravelBlogVue)

[View the backend-code on Github](https://github.com/shaefelinger/HCS-Project2-Backend)

## Features

- The page is fully responsive.  
- The frontend is using Vue.js (incl. Router and Vuex) and Tailwind CSS
- The backend is a Node/Express Server running on Heroku 
- The data is stored in a Mongo DB-Atlas Cloud database - handled by the server using Mongoose
- The server provides a REST API for the Blog-Posts and User-Data
- Authentification is handled by the server using passport.js

------

### Menu-Bar

- Logo-on the Left: is an always available Link to go back to the Main-Page
- Menu collapses to a Burger-Menu on small screens

##### If you are not logged-in, you can: 

- log in with email & password. You can try:

  > ```
  > testuser@test.com 
  > test123
  > ```

- or sign-in as a new user. After signing in you can log-in with your email & password

##### If you are logged-in: 

- the name and the profile-image is displayed

- you can add new posts, and edit and delete existing posts
- the Login-button becomes a Logout-button

------

### Main-Page `/home`

Shows an overview of the all blog posts and a Google Map.

##### Map-View

- Shows all locations on a map. 
- The zoom is automatically adapted to fit all locations. 
- Clicking on a marker opens an InfoWindow for that location. Clicking on the 'read more'-link opens the corresponding Details-Page.  `/details/:id`
- The InfoWindow can be closed by clicking on the "x"

##### Blog Post Previews

- Shows all blog posts listed as previews
- The blogs are ordered by visiting year
- Each card shows 
  - Image
  - The name and counrty
  - The beginning (140 letters) of the discription. If there is no description, it will show the beginning of the Wiki-text
  - Rating 
  - Author and the author-image
- Clicking on one of the listed blog opens  the detail page for that post `/details/:id`

------

### Details-Page `/details/:id`

This shows all available information and a map for that location

- if the user is logged-in, an 'EDIT POST'-button is available to go to the Edit Blog Posts-Page

------

### Edit Blog Posts

> only available, if  logged-In

Allows to edit the Details of the Blog-Post. Buttons to:

- SUBMIT the changes 
- CANCEL without saving
- DELETE the post

------

### +New-Post-Page `/new`

> only available, if  logged-In

Here you enter a new post. Location, Title and Date are required, the rest is optional. 

The Location-Field uses Googlemaps-Autocomplete.  

##### Step1

Entering a valid location from the list. Then the Input-Field gets locked and the following information is fetched:

###### From Googlemaps:

- 2 images. If no images are available, fallback-images are used (Try "Nuussuaq, Greenland"😉). 
- The location (lat, lng)
- name & country
- Place-ID

###### From Wikipedia:

- A short desciption  (if available). The text can then be edited.

##### Step 2

Edit the Title, Date, Rating, Description and Wiki for that Post. 

- SUBMIT: stores the Blog-Post and directs back to the Main-Page.
- CANCEL: goes back to Overview without storing
- RESET LOCATION: resets the Location-Field -> back to Step 1

------

### About Page

Shows some information about this project and about me.

------

(c) 2021 - Steffen Häfelinger. Pictures by https://unsplash.com/ and https://picsum.photos/  

Steffen Häfelinger is a web developer located in Hamburg, Germany. He is currently studying Full Stack Web Developement at [Hamburg Coding School.](https://hamburgcodingschool.com/) He is also working as a professional Musician, Songwriter & Audio Engineer.

Web: www.steffen-haefelinger.com

Mail: mail@steffen-haefelinger.com

GitHub: https://github.com/shaefelinger

Facebook: https://www.facebook.com/steffen.hafelinger/



------

Version 1 of the Project can be found here: 

https://github.com/shaefelinger/HCS-project1-travelBlog

