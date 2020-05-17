import React, { useEffect, useState } from 'react';
import { GoMail, GoMarkGithub } from 'react-icons/go';
import { FaLinkedinIn } from 'react-icons/fa';
import { Header, Repositories } from './styles';
import api from '../../services/api';

const Container = () => {
  const [owner, setOwner] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setOwner(response.data);
    });

    api.get('/repos').then((response) => {
      setRepositories(response.data);
    });
  }, []);

  return (
    <>
      <Header>
        <img src={owner.avatar_url} alt="Jean Amadeu" />
        <h1>Jean Amadeu</h1>
        <p>{owner.bio}</p>
        <nav>
          <a href={owner.html_url}>
            <GoMarkGithub />
          </a>
          <a href="mailto:jean.amadeu2@gmail.com">
            <GoMail />
          </a>
          <a href="www.linkedin.com/in/jeanamadeu">
            <FaLinkedinIn />
          </a>
        </nav>
      </Header>
      <Repositories>
        <h1>Projetos</h1>
        {repositories.map((repo) => (
          <div key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            {repo.description && <p>{repo.description}</p>}
          </div>
        ))}
      </Repositories>
    </>
  );
};

export default Container;
