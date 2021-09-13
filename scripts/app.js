// DOM Manipulation: add user comments to blog.html page
const app = {}

// Create variables for html tags/elements
const commentForm = document.querySelector('.commentForm')
const commentList = document.querySelector('.postComments')
// Event Listener: When user Submits the comment form, log data from 'name' and 'textarea' inputs
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // log the user's 'name' input into a variable
  const nameInput = commentForm.querySelector('#name');
  const userName = nameInput.value;

  // Log the user's 'comment' into a variable
  const userComment = commentForm.querySelector('textarea');
  const comment = userComment.value;

  // if there is content in the user's input, kickstart the postComment function
  if(userName, comment) {
    app.postComment(userName, comment)
  }


})

app.postComment = (name, comment) => {
  // Log the comment date into a variable
  const postDay = new Date();
  const dateString = postDay.toDateString();

  // create a new commentFlex div to contain the new comment
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('commentFlex');

  // create a new IMG container for user profile photo
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('profileContainer')

  // add a placeholder image to store within the imgContainer
  const userImage = document.createElement('img')
  userImage.src = `https://picsum.photos/100`
  userImage.alt = `photo of ${name}`

  // add the new <img> to the imgContainer
  imgContainer.appendChild(userImage)

  // Create a <div> to store the comment heading + content
  const userComment = document.createElement('div');
  userComment.classList.add('commentContent')
  // Create a heading with the date + time of comment
  const commentHeading = document.createElement('h4');
  commentHeading.classList.add('commentDate');
  commentHeading.innerText = `${dateString} by ${name}`;
  
  // Create a new <p> element to store the user's comment
  const commentContent = document.createElement('p');
  commentContent.innerText = comment

  // Append the heading & user's comment to the to the parent <div> container
  userComment.appendChild(commentHeading)
  userComment.appendChild(commentContent)

  // append all comment content into newly-created Comment Flex Container
  commentContainer.appendChild(imgContainer);
  commentContainer.appendChild(userComment);


  // append the new comment Flex Container to the comment list
  commentList.appendChild(commentContainer);

}



app.init = function() {

}
