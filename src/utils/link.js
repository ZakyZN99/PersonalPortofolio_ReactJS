const link = () => {
    const linkedInLink = () => {
        window.open("https://www.linkedin.com/in/zaky-zamani-011890275/",'_blank', 'noopener, noreferrer')
    }
    
    const gitHubLink = () =>{
        window.open("https://github.com/ZakyZN99?tab=repositories",'_blank', 'noopener, noreferrer')
    }

    const waLink = () =>{
        window.open("http://wa.me/628563734618",'_blank', 'noopener, noreferrer')
    }

    const emailLink = () =>{
        window.open("mailto:zakyzamani.jobs@gmail.com?subject=Subject&body=Body%20goes%20here")
    }

    const cvLink = () => {
        window.open(
            "https://eduwork.id/storage/user/101007/CV/CV - Zaky Zamani Noor.pdf",
            "_blank",
            "noopener, noreferrer"
        );
    };



    return {
        linkedInLink,
        gitHubLink,
        waLink,
        emailLink,
        cvLink
    }
}

export default link
