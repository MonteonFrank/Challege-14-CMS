# Challege-14-CMS
Create a CMS with topics viewed in class

<h2><strong>Description</strong></h2>

<p>A blog CMS (Content Management System) site is a web-based platform that allows users to create, manage, and publish content for their blog. The site consists of a backend interface, where users can create and edit blog posts and manage comments, while on the frontend interface, visitors can view and interact with the published content.</p>

<p>In the context of a blog CMS site, MVC (Model-View-Controller) architecture could be implemented in the following way:</p> 

<li>The model would represent the data and the business logic of the blog CMS. This could include database models and interaction with the database through an ORM (Object-Relational Mapping) framework, as well as other data-related operations such as data validation and manipulation</li>

<li>The view would represent the presentation layer of the blog CMS. This would be responsible for rendering HTML templates and displaying data to the user in a user-friendly format. This could include HTML, CSS, and JavaScript files that handle client-side rendering of the blog's pages.</li>

<li>The controller would act as an intermediary between the model and the view. It would handle incoming requests from the user and use the appropriate model logic to interact with the data layer. The controller would then pass the data to the appropriate view for rendering and displaying to the user. In the case of the blog CMS, this could include controllers that handle requests for creating new blog posts, editing existing posts, deleting posts, and viewing blog posts</li>


<h2><strong>Programming Logic</strong></h2>

<p>I started off createing the models of blog and comments as well as their relationship and added information into the database to ensure everything was working correctly by using Sequelize. Once this was completed, I continued with creating the API but creating the GET, POST, PUT and DELETE methods which were tested with Insomnia. The testing I did with the routes were to ensure that the Blogs and Comments were able to be created, edited, deleted and obtained in order to later on use this information to render the page.</p>

<p>After the API calls, the routes and the database information was working correctly, I started working with the frontend by using handlebars to render the information stored in the database as well as the creation of javascript files to provide functionality to each page. This is to ensure that when I user clicks either on edit, delete or submit buttons, the option selected would work successfully and the API calls worked successfully</p>

<p>Lastly, the last piece of work I did was the authentication to ensure sessions were created when both an esisting user and a new user would sing up to the page. If the user is not logged in and they want to select the dashboard, they are automatically redirected to the login page</p>

<p>My code has comments on it and could provide futher specific information as you go through each file.</p>
  
<h2><strong>What did I learn?</strong></h2>

 <p>I learned quite a lot about handlebards and authentication. I had to request several tutoring sessions and stayed in office hours to grasp and understand these both fucntions since these were the topics I mostly struggled for this challenge/p>

<h2><strong>Application Images</strong></h2>
<p>Login</p>

![image](https://user-images.githubusercontent.com/112662397/230961851-98f19945-b422-4828-bfe0-48d5bf276b96.png)

<p>Home</p>

![image](https://user-images.githubusercontent.com/112662397/230962032-98e78215-836f-4c81-80ae-92813d4a8884.png)

<p>Dashboard</p>

![image](https://user-images.githubusercontent.com/112662397/230962231-db8c84ea-f002-49da-997b-03f4311904e0.png)

<p>Edit Blog</p>

![image](https://user-images.githubusercontent.com/112662397/230962471-8740c75c-1919-42ef-aa66-c80171fa3cf8.png)


<h2><strong>Link to deployed application</strong></h2>
<p>Link:</p>
https://powerful-fjord-92631.herokuapp.com/


