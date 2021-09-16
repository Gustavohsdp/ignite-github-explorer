import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  //UseState é um Hook do react, para armazenar algo em um estado;
  const [repositories, setRepositories] = useState<Repository[]>([]);

  //UseEffect é um hook do react, ele recebe dois parâmetros, primeiro o que eu 
  //quero executar e o segundo parâmetro é quando vou executar;

  //Realizando chamada API, convertendo a resposta para JSON, obtendo os dados
  //e setando no estado;
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}