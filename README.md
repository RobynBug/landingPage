# landingPage

## Project Description
Landing page template the features for the Navigation bar and sections of the page enabled.

## Explaination of features

Template page with navigation menu with smooth scrolling to page sections.
- The navigation menu features dynamic building and smooth scroll functionality.
  - Dynamic building
    - The navigation menu will create new tags with features when new sections are added to the page.
   - Smooth Scroll     
      - Smooth scrolling using the`element.getBoundingClientRect` method and `scrollTo` to scroll to the corresponding section when the link is clicked on.
      - A `.forEach` is used to loop through the `navATag` list like element to add the event listener to all navigation links. 
Sections of the page will become active once in the view port.
    - An active class will be applied once the view port conditions have been met.
      - The class name `your-active-class` is added to the section once the section comes into view.
      - The class name will activate CSS animations that run behind the `paragraph` tags.
    

