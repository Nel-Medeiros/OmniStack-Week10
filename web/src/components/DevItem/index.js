import React from 'react';

import './styles.css';

function DevItem({ dev }) {


    return (
        <li className="dev-item">
              <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <div className="options">
                <ul>
                  <li><a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a></li>
                  <li><a>Editar</a></li>
                  <li><a>Excluir</a></li>
                </ul>
              </div>                        
        </li>
    );
}

export default DevItem;