import { useEffect, useState } from "react"
import styles from './Repolist.module.css'

const RepoList = ({nomeUsuario}) =>{
    const [repos, setRepos]= useState([])

    useEffect(()=>{
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson =>{
            setRepos(resJson)
        })
    },[nomeUsuario])

    return(
        <div className="container">
            <ul className={styles.list}>
            {repos.map(repositorio => (
                <li key={repositorio.id} className={styles.listItem}>
                    <div className={styles.ItemName}>
                        <b>Nome: </b>{repositorio.name} 
                    </div>
                    <div className={styles.ItemLanguague}>
                    <b>linguagem: </b>{repositorio.language}
                    </div>
                    <a className={styles.ItemLink} target="blank" href={repositorio.html_url}>Visitar no Git</a>
                    
                </li>
            ))}
            
        </ul>
        </div>
    )
}

export default RepoList