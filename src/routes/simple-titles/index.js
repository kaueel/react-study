import React from 'react';
import SimpleTitles from './SimpleTitles';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const response = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title}}',
    }),
  });
  const { data } = await response.json();
  if (!data || !data.news) throw new Error('Failed to load feed titles');
  return {
    title: 'SimpleTitles webpage',
    component: (
      <Layout>
        <SimpleTitles news={data.news} />
      </Layout>
    ),
  };
}

export default action;
