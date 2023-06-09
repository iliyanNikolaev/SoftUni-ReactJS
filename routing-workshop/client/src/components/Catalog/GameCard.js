import { Link } from 'react-router-dom';

export const GameCard = ({
    game
}) => {
    return <>
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} alt="game-poster" />
                <h6>{game.category}</h6>
                <h2 data-testid="game-title">{game.title}</h2>
                <Link to={`/details/${game._id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    </>
}