// BlogData.js
const blogData = [
  {
    id: 1,
    title: 'Building a Web Forum with React: A Project Walkthrough',
    image: 'blog-image-1.png',
    content: `
      <p>To kick off this project, take a moment to review the files provided. The essential file to start with is commentData.js, which contains an array of comment objects with properties such as profileImg, username, and comment. This data will be used to populate the comments on our forum.</p>
      <p>Our comment section will consist of Card components, each of which will comprise smaller Header and Body child components. The top-level component, App.js, will retrieve the data from commentData.js and pass it down to the child components. The forum's markup and styling are handled by style.css and index.html.</p>
      <h2>Creating the Body Component</h2>
      <p>Let's start by working on the smallest component, the Body. The Body component is responsible for displaying the comments that users have written. It will receive a comment property from the props, which it will render inside a <p> element.</p>
      <p>Here's how you can access and display the comment property in the Body component:</p>
      <code>
        function Body({ comment }) {
          return (
            <p>{comment}</p>
          )
        }
      </code>
      <p>Exporting the Components After defining the Body component, make sure to export it so that it can be imported and used in the Card component.</p>
      <code>
        export default Body;
      </code>
      <h2>Setting Up the Header Component</h2>
      <p>Now, let's move on to the Header component. This component is responsible for displaying the profileImg and username properties from the comment object. 
      <p>The header component should receive these properties as props and render them using an img element for the profile image and an h1 element for the username.</p>
      <code>
        function Header({ profileImg, username }) {
          return (
            <>
              <img src={profileImg} alt={username} />
              <h1>{username}</h1>
            </>
          )
        }
      </code>
      <p>As before, make sure to export the Header component for use in the Card component.</p>
      <h2>Creating the Card Component</h2>
      <p>The Card component is the parent component that encapsulates both the Header and Body child components. It receives the commentObject as props, which contains the profileImg, username, and comment properties.</p>
      <code>
        function Card({ commentObject }) {
          const { profileImg, username, comment } = commentObject;
          return (
            <>
              <Header profileImg={profileImg} username={username} />
              <Body comment={comment}/>
            </>
          );
        }
      </code>
      <p>Don't forget to export the Card component.</p>
      <h2>Rendering the Application</h2>
      <p>Finally, let's put everything together. In App.js, you will map over the comments array from commentData.js and return an instance of the Card component for each comment.</p>
      <code>
        function App() {
          return (
            <>
              {comments.map(comment => (
                <Card commentObject={comment} />
              ))}
            </>
          )
        }
      </code>
      <p>With this setup, you should be able to render the web forum with the comments in the browser. Enjoy the lively discussion on animals!</p>
      <p>Now, you've successfully created the structure for a web forum using React. Building such projects is a fantastic way to enhance your React skills, particularly in working with components and passing props. If you encounter any issues, you can always refer to the "Get Unstuck" resources or explore project walkthrough videos. Happy coding!</p>
    `,
    excerpt:
      "Topics including custom hooks, error boundaries, the Context API, and optimization.",
  },
  {
    id: 2,
    title: 'Data Structure APIs',
    image: 'blog-image-2.png',
    content: `
    <p>Data structures are all about choosing the right tool for the job.</p>
    <p>In Progress...</p>
    `,
    excerpt:
      'Data structures are all about choosing the right tool for the job.',
  },

  {
    id: 3,
    title: 'JavaScript Unit Testing',
    image: 'blog-image-3.png',
    content: `
    <p>Software professionals use automated testing. During and after production, they can run an automated test suite to give themselves confidence that their products are free of errors.</p>
    <p>In Progress...</p>
    `,
    excerpt:
      'Software testing is the process of assessing the completeness and quality of computer software.',
  },
];

export default blogData;
