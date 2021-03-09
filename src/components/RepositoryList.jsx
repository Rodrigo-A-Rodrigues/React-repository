import { useState, useEffect } from 'react';
import { RepoasitoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Rodrigo-A-Rodrigues/repos')
            .then(response => response.json())
            .then(data => setRepo(data))
    }, []);
// CUIDADO com o segundo paramentro do UseEffect => loop infinito
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
                {repo.map(repository => {
                    return <RepoasitoryItem key={repository.name}  repository={repository}/>
                })}
            </ul>
        </section>
    )
}