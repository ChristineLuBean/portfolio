const endpoint = 'https://gql.hashnode.com'

function getDate(publishedAt) {
  const [date, time] = publishedAt.split('T')
  const publishedDate = new Date(date)
  return publishedDate.toDateString()
}

function displayPosts(posts) {
  console.log(posts)

  for (i = 0; i <= 2; i++) {
    const currentPost = posts[i]
    const publishedDate = getDate(currentPost.publishedAt)

    document.getElementById(`link-${i}`).href = currentPost.url
    document.getElementById(`image-${i}`).src = currentPost.coverImage.url
    document.getElementById(`title-${i}`).innerText = currentPost.title
    document.getElementById(`brief-${i}`).innerText = currentPost.brief
    document.getElementById(`date-${i}`).innerText = 'Published: ' + publishedDate
  }
}
function sortList(postsList) {
  return postsList.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt)
  })
}
function fetchPosts(publications) {
  const postsList = []
  for (publication in publications) {
    const posts = publications[publication].node.posts.edges
    for (let i = 0; i < posts.length; i++) {
      postsList.push(posts[i].node)
    }
  }
  return sortList(postsList)
}

function fetchPublicationsFromAPI() {

  const query = `{
    user(username: "christinelubean") {
      publications(first: 3) {
        edges {
          node {
            title
            posts(first:3) {
              edges {
                node {
                  title
                  brief
                  url
                  publishedAt
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }`

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }

  fetch(endpoint, fetchOptions)
  .then(response => response.json())
  .then(data => {
    const publications = data.data.user.publications.edges
    const posts = fetchPosts(publications)

    displayPosts(posts)
  })
  .catch(error => {
    console.error(error)
  })
}

fetchPublicationsFromAPI()