# Resume

The Live link can be found here - https://huddy2022.github.io/Resume-project/

The Resume Project represents an innovative facet of my CV, offering professionals an interactive platform to gain deeper insights into my background, skills, and experiences. It provides an intuitive interface divided into sections dedicated to personal information, work history, skills, education, and contact details. This project is a testament to my ability to create user-friendly and effective solutions. While it does not incorporate sign-in or sign-out features, professionals can seamlessly navigate through the sections to explore my qualifications, facilitating a better understanding of my profile and enhancing opportunities for job-related interactions and collaborations.

![Responsive](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/responsive.png)

## Tools

* HTML 
* CSS
* Bootstrap
* Javascript
* GitHub API
* Email.js
* Font awesome
* Video background
* jQuery 

## Navigation/Header & Hero section

Header Section:

* Logo: The top section features a logo with your image. It's designed to grab the user's attention and create a visual connection with me, the creator of the resume.

* Name and Title: Beneath the logo, my name and professional title are displayed prominently. This provides a clear introduction and establishes my identity.

* Navigation Menu: A navigation menu with various menu items is placed near the top. Each menu item corresponds to a different section of my resume, allowing users to easily navigate to the information they're interested in.

Hero Section:

* Background Video: The hero section features a captivating background video that adds a dynamic and visually appealing element to the page. It sets the tone and creates an engaging atmosphere.

* Text Content: Overlaying the video, there is text content that includes my name and professional title. This text is often used to provide a brief introduction or a personalized message to visitors.

![Navigation/Header/Hero](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/navigation.png)

## Footer

* About Me: This section provides a brief introduction/summary of myself as a professional. It offers visitors an insight into my background, skills, and career objectives.

* CV Download: There is an icon or link that allows visitors to download my CV in PDF format. This makes it easy for them to access your complete professional information for reference.

* Social Links: The footer includes links to your various social media profiles, such as LinkedIn, Twitter, or other professional networks. These links enable visitors to connect with me on social platforms and stay updated on my professional activities.

![Footer](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/footer.png)

## Home/Index

* Three Reasons Section: In this section, I've outlined three key reasons/highlights that make me a standout candidate. Each point is presented with an icon and descriptive text, offering a concise summary of my strengths.

* Personal Information Section: This section provides detailed personal information about me. It covers aspects such as your contact information, location, email address, and phone number. This information helps interested parties get in touch with me.

![Home](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/home.png)

## Resume Page

* Resume Content: The main content of my resume page is divided into two columns. The left column (.bg-color-work-history) focuses on my work history and education. It includes a timeline with details of your employment and educational experiences.

* Skills Section: The right column (.bg-color-three-reasons) is dedicated to showcasing my skills. It describes your proficiency in front-end and back-end technologies and displays progress bars to visually represent your skill levels.

* Certificates/Courses: This section highlights my educational achievements, specifically my diploma in Full Stack Software Development. It provides information about the course's credit rating and lists the skills and knowledge you acquired during the program. A link is provided to download the diploma as a PDF.

![Resume page](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/resume.png)

## Contact Page

* Contact Form: The main section of the page contains a contact form where visitors can enter their name, email address, and a brief project description. This form allows individuals to get in touch with me regarding potential projects, collaborations, or any inquiries they may have.

* Submission Functionality: To handle form submissions, the page incorporates JavaScript that leverages the EmailJS library. When a visitor fills out the form and submits it, this JavaScript function sends an email to my specified email address with the details provided by the visitor.

![Contact page](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/contact.png)

## Interests/Project Page

* Interests Section: This section located on the left side of the page introduces my personal interests, each accompanied by an icon and a concise description. My interests span a range of topics, including web development, music, language acquisition, photography, gaming, fitness, motorsport, and quality family time.

* Portfolio Projects Section: Positioned on the right side of the page, I showcase a curated collection of my portfolio projects. Each project is accompanied by an icon, a project title, a brief project description, and a list of technologies utilized. These projects encompass a diverse range of work, such as "F1 Tickets," "Mildew Detection in Cherry Leaves," "Slice of Spice," "Ultimate Battleships," "Pub Quiz," and "Mind & Body."

![Interests page](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/interests_projects.png)

## GitHub Page

This section of my portfolio is dedicated to GitHub integration. You can explore GitHub profiles and repositories right here.

**Explore GitHub Profiles and Repositories**

- **Search for GitHub Users**: Enter a GitHub username in the provided field, and click the "Search" button.
- **User Profile**: The user's GitHub profile information, including their name, bio, followers, following, and a link to their GitHub profile.
- **Repositories**: A list of the user's repositories, including the repository name, description, and a link to the repository.

Feel free to search for your favorite GitHub users and discover their projects and contributions.

![GitHub page](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/github.png)

## 404 Page

In case you've ventured off the intended path on my portfolio website, you'll encounter this friendly 404 page. 

**Message**: The page displays a message, "Hmm.. Looks like you've gone off the beaten path," indicating that you might have reached a non-existent or mistyped URL.

**Action**: Don't worry! I'm actively addressing the issue. You can click on the image of yours truly to return to the homepage and explore the rest of my portfolio.

If you find any issues or broken links on my website, feel free to report them so I can ensure a smooth browsing experience for all visitors.

![404 page](https://github.com/Huddy2022/Resume-project/blob/main/assets/images/404.png)

## Testing

| Test Case ID | Description | Test Steps | Expected Results | Status |
|--------------|-------------|------------|------------------|--------|
| TC 1 | Navigation Testing | 1. Visit the homepage. 2. Click on each navigation menu item. | - Verify that each menu item leads to the respective section (Resume, Contact, Interests / Projects, GitHub). - Confirm that the "Home" menu item reloads the homepage. | Passed |
| TC 2.1 | Contact Form Validation | 1. Go to the "Contact" section. 2. Fill in the contact form with valid data. 3. Submit the form. | - Ensure that the form submission is successful. - Verify that a confirmation message is displayed. | Passed |
| TC 2.2 | Contact Form Validation with Invalid Data | 1. Go to the "Contact" section. 2. Fill in the contact form with invalid data (e.g., incorrect email format). 3. Submit the form. | - Confirm that the form validation works and displays appropriate error messages for invalid input. | Passed |
| TC 3.1 | GitHub Profile Retrieval | 1. Go to the "GitHub" section. 2. Enter a valid GitHub username (e.g., "huddy2022"). 3. Click the "Search" button. | - Verify that the GitHub user's profile information is displayed. - Confirm that the user's repositories are listed. | Passed |
| TC 3.2 | GitHub Profile Retrieval with Invalid Username | 1. Go to the "GitHub" section. 2. Enter an invalid GitHub username. 3. Click the "Search" button. | - Ensure that appropriate error messages are displayed for an invalid username. | Passed |
| TC 4.1 | Responsiveness Testing | 1. Access the website on various devices (desktop, tablet, mobile). 2. Check the layout and functionality. | - Confirm that the website adapts well to different screen sizes. - Verify that all content remains accessible and user-friendly. | Passed |
| TC 5.1 | Link Testing | 1. Manually click on all internal and external links. | - Ensure that all links lead to the correct destinations. - Confirm that there are no broken links. | Passed |

## Validator Testing

* HTMl - I can confirm no errors were returned when passing through the official w3c validator.

* CSS - I can confirm no errors were returned when passing through the official w3c validator.

* Javascript- I used the JSHint and originally had 11 warnings for my gitHub-information.js but i put a comment /*jshint esversion: 6 */ which passed these warnings. The undefined variables i have tested out on the website and can confirm the github information is being correctly shown. The sendemail.js did not come with any warnings and only advised of three undefined variables, but again i can confirm i have tested the sendemail.js and it correctly sends an email once all the information has been correcly put it and a success alert is shown to the user.

* Accessibility
    * I confirmed the colours and fonts are easy to read and I tested the colours I have chosen through the web aim contrast checker.

    * I used the lighthouse in dev tools to test my web page on a desktop and mobile devices.

## Bugs

Throughout the project, various bugs and issues were encountered, ranging from HTML and CSS problems to JavaScript errors and responsive design challenges. These issues were systematically addressed and resolved to create a functional and visually appealing website.

* HTML and CSS Issues:
    * Bug: The HTML structure had a validation error, specifically, a missing <p> element in scope.

    * Solution: Corrected the HTML structure by ensuring proper opening and closing of <p> elements.
    * Bug: CSS classes and styles were not applied correctly to some elements, causing layout and styling issues.

    * Solution: Carefully reviewed the CSS code and updated class names and styles to match the desired layout and appearance.

* JavaScript Errors:
    * Bug: Received a JSHint warning about template literals being used without specifying ES6.

    * Solution: Added the comment /*jshint esversion: 6 */ at the beginning of the JavaScript file to indicate ES6 usage.
    * Bug: JavaScript functions were not working as expected, resulting in incorrect behavior.

    * Solution: Debugged the JavaScript code, identified and fixed logic errors, and ensured proper function execution.

* Responsive Design Problems:
    * Bug: The website did not render correctly on smaller screens and mobile devices.
    * Solution: Applied responsive design techniques, including media queries and flexible layouts, to ensure the website is visually appealing and functional across various screen sizes.

## Deployment

* The site was deployed to GitHub pages. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the Settings tab
    * From the source section drop-down menu, select the Main Branch
    * Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://huddy2022.github.io/Resume-project/

## Credits

* The icons used were taken from font awesome https://fontawesome.com.
* The favicon used was taken from https://favicon.io/emoji-favicons/.
* The resume project from the code institue gave me the foundations to this project.
* Pexels helped supply the video on the hero section.

