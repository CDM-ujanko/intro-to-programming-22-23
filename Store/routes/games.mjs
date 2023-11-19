import { Router } from 'express';
import { Minesweeper } from '../lib/Minesweeper.mjs';

function useGamesRouter() {
    const router = new Router();

    router.get('/minesweeper', (req, res) => {
        res.render('games/minesweeper', {ms: new Minesweeper()});
    });



    return router;
}

export default useGamesRouter;