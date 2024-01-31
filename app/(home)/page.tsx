import Navigation from "../../components/navigation";


export const metadata = {
    title: 'Home'
}

const url = 'http://localhost:8080/api/v2/random-player';

async function getPlayer() {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    
    const player = await getPlayer();
    return (
    <div>
        {JSON.stringify(player)}
    </div>
    );
}