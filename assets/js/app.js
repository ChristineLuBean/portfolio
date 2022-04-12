async function gql(query, variables={}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
}

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "christinelubean") {
            publication {
                posts(page: $page) {
                    coverImage
                    title
                    brief
                    slug
                    
                }
            }
        }
    }
`;

gql(GET_USER_ARTICLES, { page: 0 })
    .then(result => {
        const articles = result.data.user.publication.posts;
        let container = document.createElement('div');

        articles.forEach(article => {
            container.className = 'main';

            let coverImage = document.createElement('img');
            coverImage.src = `${article.coverImage}`;
            coverImage.className = 'coverImage';

            let title = document.createElement('h2');
            title.innerText = article.title;

            let brief = document.createElement('p');
            brief.innerText = article.brief;

            let link = document.createElement('a');
            link.innerText = 'Read more...';
            link.href = `https://christinelubean.hashnode.dev/${article.slug}`;

            container.appendChild(coverImage);
            container.appendChild(title);
            container.appendChild(brief);
            container.appendChild(link);
        })

        document.querySelector('.app').appendChild(container);
});

document.getElementById('articles').parentNode.innerHTML = `
<h1 class="app-heading">My Blog</h1>
<div class="app">

</div>`;

  