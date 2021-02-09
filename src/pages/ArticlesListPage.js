import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-contents';

const ArticlesListPage = ({ articles }) => (
    
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articleContent}/>

    </>
);

export default ArticlesListPage;