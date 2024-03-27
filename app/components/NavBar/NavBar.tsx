import Link from "next/link";
import Image from "next/image";
import styles from './NavBar.module.css'

const navigation_list = [{
    id: 0,
    path: "/",
    description: "Home"
}, {
    id: 1,
    path: "/pages/poznan",
    description: "Poznań"
}, {
    id: 2,
    path: "/pages/miedzyrzecz",
    description: "Międzyrzecz",
}]

interface VariablesProps {
    path: string,
    description: string,
}

function NavBarLink({ path, description }: VariablesProps) {
    return (
        <>
            <li>

                <Link style={{ textDecoration: 'none', }}
                    href={path} 
                >
                    {description}
                </Link>
            </li>
        </>
    )
}

export default function NavBar() {
    return (

        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <Image
                        src="/weather-station.png"
                        width={48}
                        height={48}
                        alt="Weather station"
                    />
                    <p>Stacja pogodowa</p>
                </div>
                <div className={styles.navigation}>
                    <ul style={{display:'flex',gap:'25px',listStyleType: 'none'}}>

                        {navigation_list.map((link) => (
                            <NavBarLink key={link.id}
                                path={link.path}
                                description={link.description}

                            />
                        ))}
                    </ul>

                </div>
            </div>
        </main>
    )
}