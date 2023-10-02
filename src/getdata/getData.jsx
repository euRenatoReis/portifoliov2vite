


export const GetRepositories = async () => {

    const getRp = await fetch(`https://api.github.com/users/euRenatoReis/repos`)
    const RepositoriesJson = await getRp.json()

    return RepositoriesJson
}


export const GetPrintRepo = async (repoName) => {

    try {

        await fetch(`https://api.github.com/repos/eurenatoreis${repoName}contents/print.png`, {

            method: 'GET',
            headers: {

                'Authorization': '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',
                'User-Agent': 'Portifolio/1.0'
            }
        }).then(Response => {

            const reponseJson = Response.json();

            const blob = new Blob([atob(reponseJson.content)], { type: 'image/png' });

            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url
            a.download = 'print.png'

            a.click()

            URL.revokeObjectURL(url)

            console.log('blob é:', blob)

            return blob
        })

    } catch (error) {

        console.log('erro ao fazer download das imagens', error)
    }

}

export const getLanguages = async (repoName) => {

    const pegarLanguages = await fetch(`https://api.github.com/repos/euRenatoReis/${repoName}/languages`)
    const LanguagesJson = pegarLanguages.json()
    
    return LanguagesJson
}