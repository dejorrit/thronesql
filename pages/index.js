import React from 'react'
import Head from 'next/head'
import PageContainer from './components/PageContainer'
import Highlight from 'react-highlight'

export default function Index () {
  return (
    <div>
      <Head>
        <title>ThronesQL</title>
        <link href='https://fonts.googleapis.com/css?family=Lato&display=swap' rel='stylesheet' />
      </Head>

      <PageContainer>
        <h1>ThronesQL</h1>
        <p>
          Learn implementing GraphQL in your frontend app using this mock server filled with Game of Thrones data.
        </p>

        <Highlight>
          https://thronesql.com/graphql
        </Highlight>

        <h2>Examples</h2>
        <p>
        ...
        </p>
      </PageContainer>

      <style jsx>{`
        :global(body) {
          font-family: 'Lato', sans-serif;
          font-size: 17px;
        }
      `}</style>
    </div>
  )
}
