fetch("data.json")
  .then((response) => response.json())
  .then(data => {
    appendData(data);
    // trigger click only first time to load first 4 cards
    document.querySelector(".loadmore").click();
  })
  .catch(err => console.log(err));

// Create main container with divs inside
function appendData(data) {

  let mainContainer = document.getElementById("myData");
  var loadmore = document.querySelector(".loadmore");

  loadmore.addEventListener("click", function () {

    var cards = document.querySelectorAll('.card-wrapper');

    if (cards.length === data.length) return;

    for (var i = cards.length; i < cards.length + 4; i++) {

      // hide load more button
      if (i + 1 === data.length) {
        loadmore.style.visibility = 'hidden';
      }

      // children divs of the main div
      let div = document.createElement("div");
      div.setAttribute("class", "card-wrapper");

      // Profile picture
      let profilePic = document.createElement("img");
      profilePic.src = data[i].profile_image;
      profilePic.setAttribute("class", "profilePic");
      div.appendChild(profilePic);

      //Facebook Name
      let name = document.createElement("h3");
      name.innerHTML = data[i].name;
      name.setAttribute("class", "name");
      div.appendChild(name);

      // Date
      let date = document.createElement("h5");
      date.setAttribute("class", "date");
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let current_datetime = new Date(data[i].date);
      let formatted_date =
        current_datetime.getDate() +
        " " +
        months[current_datetime.getMonth()] +
        " " +
        current_datetime.getFullYear();
      date.innerHTML = formatted_date;

      div.appendChild(date);

      // Facebook
      let facebookicon = document.createElement("span");
      facebookicon.innerHTML = `<svg width="30" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.98371 0.0333252C3.57448 0.0333252 0 3.6078 0 8.01704C0 11.9716 2.87829 15.2467 6.65219 15.8809V9.6827H4.72629V7.45218H6.65219V5.80751C6.65219 3.89923 7.81771 2.85932 9.52029 2.85932C10.3357 2.85932 11.0365 2.92009 11.2399 2.94685V4.94151L10.059 4.94209C9.13333 4.94209 8.95486 5.3819 8.95486 6.02751V7.45104H11.1637L10.8756 9.68155H8.95486V15.9342C12.905 15.4535 15.9673 12.095 15.9673 8.01475C15.9673 3.6078 12.3929 0.0333252 7.98371 0.0333252Z" fill="#1778F2"/>
    </svg>`;
      facebookicon.setAttribute("class", "facebookicon");
      div.appendChild(facebookicon);

      // Image
      let imgWrapper = document.createElement("div");
      let img = document.createElement("img");
      img.src = data[i].image;
      imgWrapper.setAttribute("class", "img-wrapper");
      img.setAttribute("class", "img");
      imgWrapper.appendChild(img);
      div.appendChild(imgWrapper);

      // Caption under the image
      if (!!data[i].caption.length) {
        let caption = document.createElement("p");
        caption.innerHTML = data[i].caption.substring(0, 100);
        caption.setAttribute("class", "caption");
        div.appendChild(caption);
      }

      // Like heart icon
      let likeicon = document.createElement("button");
      likeicon.innerHTML = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7617 3.26543C14.3999 2.90347 13.9703 2.61634 13.4976 2.42045C13.0248 2.22455 12.518 2.12372 12.0063 2.12372C11.4945 2.12372 10.9878 2.22455 10.515 2.42045C10.0422 2.61634 9.61263 2.90347 9.25085 3.26543L8.50001 4.01626L7.74918 3.26543C7.0184 2.53465 6.02725 2.1241 4.99376 2.1241C3.96028 2.1241 2.96913 2.53465 2.23835 3.26543C1.50756 3.99621 1.09702 4.98736 1.09702 6.02084C1.09702 7.05433 1.50756 8.04548 2.23835 8.77626L2.98918 9.52709L8.50001 15.0379L14.0108 9.52709L14.7617 8.77626C15.1236 8.41448 15.4108 7.98492 15.6067 7.51214C15.8026 7.03935 15.9034 6.53261 15.9034 6.02084C15.9034 5.50908 15.8026 5.00233 15.6067 4.52955C15.4108 4.05677 15.1236 3.62721 14.7617 3.26543V3.26543Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
      likeicon.setAttribute("class", "likeicon");
      likeicon.setAttribute("id", "button" + i);
      div.appendChild(likeicon);
      let buttonfunction = (a) => {
        a;
      };
      buttonfunction("button" + [i]);

      // Number of likes
      let numberOfLikes = document.createElement("span");
      numberOfLikes.innerHTML = data[i].likes;
      numberOfLikes.setAttribute("class", "numberOfLikes");
      div.appendChild(numberOfLikes);

      // Append the children divs to the main div container
      mainContainer.appendChild(div);
    }


    const likeButtons = document.querySelectorAll(".likeicon");

    for (let i = 0; i < likeButtons.length; i++) {
      let likeButton = likeButtons[i].querySelector('svg');
      let numOfLikes = likeButtons[i].nextSibling;

      console.log(numOfLikes);

      likeButton.addEventListener("click", function () {
        likeButton.classList.toggle("liked")
        if (likeButton.classList.contains('liked')) {
          numOfLikes.innerText = parseInt(numOfLikes.innerText) + 1
        } else {
          numOfLikes.innerText = parseInt(numOfLikes.innerText) - 1
        }
      });
    }


  });
}

function load(n) {

}






