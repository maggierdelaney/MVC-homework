# 14 Model-View-Controller (MVC): Tech Blog

## Description

User Story: AS A developer who writes about tech, I WANT a CMS-style blog site, SO THAT I can publish articles, blog posts, and my thoughts and opinions

This homework meets the following accpetance criteria

- GIVEN a CMS-style blog site, WHEN I visit the site for the first time, THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option, THEN I am taken to the homepage
- WHEN I click on any other links in the navigation, THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up, THEN I am prompted to create a username and password
- WHEN I click on the sign-up button, THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in, THEN I am prompted to enter my username and password
- WHEN I am signed in to the site, THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation, THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post, THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in, THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation, THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post, THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post, THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard, THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation, THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time, THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

1. The following technoligies need to be set up and installed: nodejs, express-handlebars (for the views), MySQL, Sequelize (to connect the MySQL database for the models), express.js API for the controllers, dotenv package, bcrypt package, express session, and connect-session-sequelize.

2. First open MySQL to initialzie the database, then run "npm i" and "npm run seed" to seed the database.

3. Run npm start to get the server started.

## Usage

1. When you go to the browser, you must first sign up or login to continue.

![login](/images/Screenshot%202023-01-14%20at%2012.25.27%20PM.png)

2. You will then be take to your profile (or dashboard).

![profile](/images/Screenshot%202023-01-14%20at%2012.25.40%20PM.png)

3. Add some text into the text boxes for the blog name and blog description you would like to create.

![blog text](/images/Screenshot%202023-01-14%20at%2012.25.55%20PM.png)

4. Click "create" and your new blog will be added to the list of your blogs at the bottom of the page.

![blog created](/images/Screenshot%202023-01-14%20at%2012.26.02%20PM.png)

5. Click "delete" and the desired post will be deleted.

![delete](/images/Screenshot%202023-01-14%20at%2012.26.13%20PM.png)

6. Click a blog's title to be taken to the editing page, edit the text within the text boxes and click "update blog."

![edit](/images/Screenshot%202023-01-14%20at%2012.26.19%20PM.png)

7. You will then see the changes reflected.

![edit2](/images/Screenshot%202023-01-14%20at%2012.26.32%20PM.png)

8. The changes will then be relfected on your profile.

![edit3](/images/Screenshot%202023-01-14%20at%2012.26.43%20PM.png)

9. The changes will carry over to the home page.

![edit4](/images/Screenshot%202023-01-14%20at%2012.26.50%20PM.png)

10. When you select a blog, you have the option to leave a comment.

![comment](/images/Screenshot%202023-01-14%20at%2012.26.56%20PM.png)

11. Once you leave a comment, it will render underneath the blog post.

![comment2](/images/Screenshot%202023-01-14%20at%2012.27.04%20PM.png)

12. when you are done you may "logout."


## Credits

MySQL
Sequelize
Nodejes
Express
Handlebars
Docker

## License

This project is distributed under the MIT License.