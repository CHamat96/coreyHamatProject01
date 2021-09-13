// DOM Manipulation: add user comments to blog.html page
// Event Listener: Form submitted
  // Get value of "#name" input as well as the 'textarea' value
  // create a 'commentFlex' div that holds 
const app = {}

// Create variables for html tags/elements
const commentForm = document.querySelector('.commentForm')
const commentList = document.querySelector('.postComments')
// Event Listener: When user Submits the comment form, log data from 'name' and 'textarea' inputs
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const nameInput = commentForm.querySelector('#name');
  const userName = nameInput.value;
  const userComment = commentForm.querySelector('textarea');
  const comment = userComment.value;
  app.postComment(userName, comment)
})

app.postComment = (name, comment) => {
  const postDay = new Date();
  const dateString = postDay.toDateString();

  // create a new commentFlex div to contain the new comment
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('commentFlex');

  // Create a heading with the date + time of comment
  const commentHeading = document.createElement('h4');
  commentHeading.classList.add('commentDate');
  commentHeading.innerText = `${dateString} by ${name}`;

  // create a new IMG container for user profile photo (using placeholder image)
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('profileContainer')
  const userImage = document.createElement('img')
  userImage.src = `https://picsum.photos/100`
  userImage.alt = `photo of ${name}`
  imgContainer.appendChild(userImage)

  const userComment = document.createElement('div');
  userComment.classList.add('commentContent')
  const commentContent = document.createElement('p');
  commentContent.innerText = comment
  userComment.appendChild(commentHeading)
  userComment.appendChild(commentContent)

  commentList.appendChild(commentContainer);

  commentContainer.appendChild(imgContainer);
  commentContainer.appendChild(userComment);

}



app.init = function() {

}
