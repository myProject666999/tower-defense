import { _decorator, Component, director, game, Game } from 'cc';
import { Singleton } from './Singleton';
import { GameState, GameMode, SceneType } from '../types/Enum';

const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Singleton<GameManager> {
    private _gameState: GameState = GameState.MENU;
    private _gameMode: GameMode = GameMode.ADVENTURE;
    private _currentLevel: number = 1;
    private _score: number = 0;
    private _sun: number = 100;
    private _onStateChangedCallbacks: Array<(state: GameState) => void> = [];

    get gameState(): GameState {
        return this._gameState;
    }

    get gameMode(): GameMode {
        return this._gameMode;
    }

    get currentLevel(): number {
        return this._currentLevel;
    }

    get score(): number {
        return this._score;
    }

    get sun(): number {
        return this._sun;
    }

    init(): void {
        this._gameState = GameState.MENU;
        this._gameMode = GameMode.ADVENTURE;
        this._currentLevel = 1;
        this._score = 0;
        this._sun = 100;
        this._onStateChangedCallbacks = [];
        
        game.on(Game.EVENT_HIDE, this.onGameHide, this);
        game.on(Game.EVENT_SHOW, this.onGameShow, this);
    }

    startGame(mode: GameMode, level: number = 1): void {
        this._gameMode = mode;
        this._currentLevel = level;
        this._gameState = GameState.PLAYING;
        this._score = 0;
        this._sun = 50;
        
        this.notifyStateChanged();
        
        const sceneName = this.getSceneNameByModeAndLevel(mode, level);
        director.loadScene(sceneName, this.onSceneLoaded.bind(this));
    }

    pauseGame(): void {
        if (this._gameState === GameState.PLAYING) {
            this._gameState = GameState.PAUSED;
            this.notifyStateChanged();
        }
    }

    resumeGame(): void {
        if (this._gameState === GameState.PAUSED) {
            this._gameState = GameState.PLAYING;
            this.notifyStateChanged();
        }
    }

    victory(): void {
        this._gameState = GameState.VICTORY;
        this.notifyStateChanged();
    }

    defeat(): void {
        this._gameState = GameState.DEFEAT;
        this.notifyStateChanged();
    }

    backToMenu(): void {
        this._gameState = GameState.MENU;
        this.notifyStateChanged();
        director.loadScene('MainMenu');
    }

    addSun(amount: number): void {
        this._sun += amount;
    }

    spendSun(amount: number): boolean {
        if (this._sun >= amount) {
            this._sun -= amount;
            return true;
        }
        return false;
    }

    addScore(amount: number): void {
        this._score += amount;
    }

    addStateChangeListener(callback: (state: GameState) => void): void {
        if (this._onStateChangedCallbacks.indexOf(callback) === -1) {
            this._onStateChangedCallbacks.push(callback);
        }
    }

    removeStateChangeListener(callback: (state: GameState) => void): void {
        const index = this._onStateChangedCallbacks.indexOf(callback);
        if (index !== -1) {
            this._onStateChangedCallbacks.splice(index, 1);
        }
    }

    private notifyStateChanged(): void {
        for (const callback of this._onStateChangedCallbacks) {
            callback(this._gameState);
        }
    }

    private onSceneLoaded(): void {
        console.log('Scene loaded successfully');
    }

    private getSceneNameByModeAndLevel(mode: GameMode, level: number): string {
        switch (mode) {
            case GameMode.ADVENTURE:
                switch (level) {
                    case 1: return 'AdventureLevel1';
                    case 2: return 'AdventureLevel2';
                    case 3: return 'AdventureLevel3';
                    case 4: return 'AdventureLevel4';
                    case 5: return 'AdventureLevel5';
                    default: return 'AdventureLevel1';
                }
            case GameMode.SURVIVAL:
                return level === 0 ? 'SurvivalEndless' : 'SurvivalNormal';
            default:
                return 'AdventureLevel1';
        }
    }

    private onGameHide(): void {
        if (this._gameState === GameState.PLAYING) {
            this.pauseGame();
        }
    }

    private onGameShow(): void {
    }
}
