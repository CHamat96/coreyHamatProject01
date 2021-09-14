// DOM Manipulation: add user comments to blog.html page
const app = {}

// Create variables for html tags/elements
const commentForm = document.querySelector('.commentForm')
const commentList = document.querySelector('.postComments')

// When user submits the 'comment' form, grab the value from '#name' <input> and '.comment' <textarea>
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nameInput = commentForm.querySelector('#name');
  const userName = nameInput.value;

  const userComment = commentForm.querySelector('textarea');
  const comment = userComment.value;

  // if there is content, then kickstart the next function
  if(userName, comment) {
    app.postComment(userName, comment)
    // clear content from the 'name' and 'comment' inputs
    nameInput.value = '';
    userComment.value = '';
  }
  // clear content from 'email' input (if there is content to clear)
  if(commentForm.querySelector('#email').value){
    commentForm.querySelector('#email').value = '';
  }
})

// use the user's input to create a new comment (including an imgContainer for the user's profile photo (using a placeholder img within))
app.postComment = (name, comment) => {
  const postDay = new Date();
  const dateString = postDay.toDateString();

  const commentContainer = document.createElement('div');
  commentContainer.classList.add('commentFlex');

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('profileContainer')

  // add a placeholder image to store within the imgContainer
  const userImage = document.createElement('img')
  userImage.src = `https://picsum.photos/100`
  userImage.alt = `photo of ${name}`

  imgContainer.appendChild(userImage)

  const userComment = document.createElement('div');
  userComment.classList.add('commentContent')

  const commentHeading = document.createElement('h4');
  commentHeading.classList.add('commentDate');
  commentHeading.innerText = `${dateString} by ${name}`;
  userComment.appendChild(commentHeading)
  
  const commentContent = document.createElement('p');
  commentContent.innerText = comment
  userComment.appendChild(commentContent)

  commentContainer.appendChild(imgContainer);
  commentContainer.appendChild(userComment);

  commentList.appendChild(commentContainer);

}
