import React from 'react';
import SimpleTitles from './SimpleTitles';
import Layout from '../../components/Layout';
import axios from 'axios';

async function action({fetch}) {
    const titles = await fetch('/graphql', {
        body: JSON.stringify({
            query: '{news{title}}',
        }),
    });

    fetch('http://localhost:8080/jhoeller/bookmarks')
        .then(response => response.json())
        .then(response => console.log(response));

    const {data} = await titles.json();
    if (!data || !data.news) throw new Error('Failed to load feed titles');
    return {
        title: 'SimpleTitles webpage',
        component: (
            <Layout>
                <SimpleTitles news={data.news}/>
            </Layout>
        ),
    };
}

export default action;
