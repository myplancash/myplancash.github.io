import styled from 'styled-components';


export const Section = styled.section` 
  padding: 2rem;
  text-align: center;
  /* background: linear-gradient(to bottom,#EE9CA7, #FFDDE1); */
  /* scrollbar-gutter: stable both-edges; 
  overflow-y: scroll;*/
  max-width: 1200px;
  margin: 0 auto; 
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: #070606;
  margin-bottom: 20px;
`;
export const ProjectList = styled.div`
  /* list-style: none;
  margin: 0;
  padding: 0; */
  margin: 0 auto;
  display: grid;
  gap: 10px;

  @media (min-width: 768px) {
    /* For screens wider than 768px, maintain your current grid layout */
    gap: 10px;

    .item2 {
      grid-column: 1 / span 3;
    }

    .item1 {
      grid-column: 1 / span 2;
      grid-row: 2;
    }

    .item3 {
      grid-column: 3;
      grid-row: 2 / span 2;
    }

    .item4 {
      grid-column: 1;
      grid-row: 3;
    }

    .item5 {
      grid-column: 2;
      grid-row: 3;
    }

    .item6 {
      grid-column: 3;
      grid-row: 3;
    }
  }

  @media (max-width: 767px) {
    /* For screens 767px and below, adapt the grid layout */
    grid-template-columns: 1fr; /* Display one column for each item */
    gap: 20px;

    .item2,
    .item1,
    .item3,
    .item4,
    .item5,
    .item6 {
      grid-column: span 1; /* Span the full width of the container */
    }
  }
`;

export const ProjectItem = styled.div`
  border-radius: 4px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #070606;
  transition: background-color 0.3s, transform 0.3s;
  position: relative;


  &:hover {
    transform: scale(1.05);
  }

  /* background-image: url('../../assets/images/project1-thumb.png'); 
  background-size: cover;
  background-position: center; */

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const ProjectImage = styled.img`

  width: 100%;
  object-fit: cover; /* Adjust object-fit property based on your design needs */
  border-radius: 8px;
  margin-bottom: 10px;
  
  @keyframes slideIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: slideIn 0.3s ease-in-out;
  

  @media (min-width: 768px) {
    margin-right: 0;
    margin-bottom: 0; /* Remove margin-bottom to maintain consistent layout */
    flex: 1; /* Expand to take remaining space */
  }
`;



export const ProjectDescription = styled.div`
  span {
    a {
      color:#DC143C;
      text-decoration: none;
      transition: color 0.3s;
      position: relative; /* Add this to the parent element */

      &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px; /* Adjust this value to control the distance of the line from the text */
        left: 0;
        background-color: #D4145A;
        transition: width 0.3s, opacity 0.3s; /* Add opacity transition */
        opacity: 0; /* Initially hidden */
      }

      &:hover {
        color: #D4145A;

        &:before {
          width: 100%; /* Show the line from left to right */
          opacity: 1; /* Fade-in effect */
        }
      }
    }
  }

  @media (min-width: 768px) {
    flex: 2; /* Take more space to the right on larger screens */
    text-align: left;
  }
`;

export const GitHubLink = styled.a`
  text-decoration: none;

  background-color: #D4145A;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.3s, color 0.3s;;

  &:hover {
    background-color: #14B2D4;
    transform: scale(1.05);
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px; 
    left: 0;
    background-color: #14B2D4;
    transition: width 0.3s, opacity 0.3s;
    opacity: 0; 
  }

  &:hover {
    color: #fff;

    &:before {
      width: 100%; /* Show the line from left to right */
      opacity: 1; /* Fade-in effect */
    }
  }
`;
