import React from 'react';
import Feed from '../../components/Feed/Feed';
import Layout from '../../components/Layout';

async function action({fetch}) {
    const titles = await fetch('/graphql', {
        body: JSON.stringify({
            query: '{news{title}}',
        }),
    });

    const posts = await fetch('http://localhost:8080/posts')
        .then(response => response.json());

    const {data} = await titles.json();
    if (!data || !data.news) throw new Error('Failed to load feed titles');
    return {
        title: 'Timeline posts',
        component: (
            <Layout>
                <Feed posts={posts}/>
            </Layout>
        ),
    };
}

export default action;
