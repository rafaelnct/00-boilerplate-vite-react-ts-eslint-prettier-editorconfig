# Template - Vite + React + Typescript

<br />

Template de projeto totalmente limpo utilizando:

-   **_Vite_**
-   **_React_**
-   **_Typescript_**

<br />

Já configurado:

-   **_ESlint_**
-   **_Prettier_**
-   **_EditorConfig_**

<br />

No .gitignore:

-   **_Windows_**
-   **_Mac_**
-   **_Linux_**
-   Mais o padrão vindo do **_Vite_**

<br />

---

<br />

## Outras características adicionadas no Template:

<br />

1.  Exemplo de COMPONENT simples com PROPRIEDADE simples;
1.  CSS global
1.  CSS Module
1.  Font Roboto na Index

<br />

---

<br />

Subindo nos três repositórios:

-   GitHub
-   GitLab
-   GitBucket

<br />
Aqui damos uma averiguada sempre que quisermos:

    git remote -v

<br />
Nós já temos a "origin" agora iremos criar a "all" para que por meio dela possamos dar push nos 3 repositórios que temos:

    git remote add all url.github(exemplo: https://github.com/rafaelnct/00-boilerplate-vite-react-ts-eslint-prettier-editorconfig.git)

<br />
Aqui executamos linha por linha, para adicionar os locais de push:

    git remote set-url --add --push all url.github(exemplo: https://github.com/rafaelnct/00-boilerplate-vite-react-ts-eslint-prettier-editorconfig.git)

    git remote set-url --add --push all url.gitbucket(exemplo: https://rafaelnct@bitbucket.org/rafaelnct/00-boilerplate-vite-react-ts-eslint-prettier-editorconfig.git)

    git remote set-url --add --push all url.gitlab(exemplo: https://rafaelnct@gitlab.com/rafaelnct/00-template-vite-react-ts-eslint-prettier-editorconfig-cssglobal-cssmodule.git)

    SE ATENTAR AOS LINKS! Que são bem diferentes

<br />
Para subirmos:

    git push all main/master

<br />
Se der errado apagamos a "all" desta forma:

    git remote remove all

Observação:

    Talvez o gitBucket e o gitlab peçam para criar uma senha, para isso vamos em:

        GitBucket:
            1. Personal Settings (Clicando na foto)
            2. Senhas do Aplicativo
            3. Criar senha do aplicativo
            4. A senha será gerada

        GitLab:
            1. User Settings (Clicando na foto)
            2. Acess Tokens
            3. Dar nome a ele e a senha será gerada

        Em ambos, se tratando de um repositório, colocar no NOME, o NOME DO REPOSITÓRIO!
