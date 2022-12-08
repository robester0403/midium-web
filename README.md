# midium-web

React files for midium, 1 of 2 repos if installing locally. Midium is a medium clone that leverages AI text generation and analysis tools for tweaking prompts.

# Project Description

Midium is a fun project that is high on functionality over flair. It gives you a blogging environment that is minimalistic and similar to medium to put you in that blogging mood.

# Techs Used:

React was a easy choice for an app that can easily get complicated due to nested views.

Flask server was used due to being a lightweight tool for a minimalistic app. Also, the python based backend may allow us to do other machine learning features in the future.

Postgresql was chosen because the tables were well defined and the relationships between them were stable.

This project is also due to be hosted on AWS EC2, hence the duo repo structure. A possibility of using python code in AWS lambda if we don't need to do more with the server in the future.

In the Frontend, we used React Query, Material UI/Styled Components, Formik/Yup, and Zustand (more on that later). Context API's was initiated but was scrapped, we don't have a strong case for using Zustand or Redux in this project

Lastly, the project should be processed by Capacitor JS so it can be ported as a phone app to any device.

# How to install the Project

midium-web: in parent folder run "npm i" and run dev mode locally with "npm start". Please have server running as well.
midium-server: cd into backend folder. For a dev environment run "flask --app app run". To see debugging messages, set mode to 'dev' in app.py

# How to Use the Project

Temporary password is "123456" (until a decision is made if to expose my API key for public use or not)
Go to create post in the NavBar by pressing +
Type in what you want to the AI to generate.
In the addition prompts, an example would be "mention that this is the best app ever" or "include all the reasons we should use Redux"
Get the AI generated content and edit the message.

By Robert So
