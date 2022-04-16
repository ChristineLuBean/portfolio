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

const GET_STOCKS = `
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

gql(GET_USER_STOCKS, { page: 0 })
    .then(result => {
        const GET_USER_STOCKS = actives


        activeStock.forEach(stock => {
            let container = document.createElement('ul');
            container.classList.add('stock');

            let brief = document.createElement('li');
            brief.innerText = actives.stock;

            container.appendChild(coverImage);
            container.appendChild(title);
            container.appendChild(brief);
            container.appendChild(link);
            document.querySelector('.app').appendChild(container);

            console.log(result.data.user)
        })


});

document.getElementById('articles').parentNode.innerHTML = `
<h1 class="app-heading">My Blog</h1>
<div class="app">
</div>`;

