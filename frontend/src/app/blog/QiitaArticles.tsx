'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Qiitaの記事を表す型を定義
interface QiitaArticle {
    title: string;
    url: string;
}

const QiitaArticles: React.FC = () => {
    const [articles, setArticles] = useState<QiitaArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get<QiitaArticle[]>(
                    'http://localhost:8080/qiita'
                );
                setArticles(response.data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h2>Qiita Articles</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index}>
                        <a
                            href={article.url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QiitaArticles;
