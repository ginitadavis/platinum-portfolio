import '../styles/Content.css';
import { LinkedinOutlined, GithubOutlined, } from '@ant-design/icons';

function Footer() {
    return (
        <>
            <footer style={{ height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="https://www.linkedin.com/in/gina-davis-b3944525" target="_blank" rel="noopener noreferrer">
                    <LinkedinOutlined style={{ marginRight: 8, fontSize: 24 }} />
                </a>

                <a href="https://github.com/ginitadavis" target="_blank" rel="noopener noreferrer">
                    <GithubOutlined style={{ marginLeft: 8, marginRight: 8, fontSize: 24 }} />
                </a>


                <a href="https://stackoverflow.com/users/20727662/gina-davis" target="_blank" rel="noopener noreferrer">
                    Stackoverflow
                </a>

            </footer>
        </>
    );
}

export default Footer;