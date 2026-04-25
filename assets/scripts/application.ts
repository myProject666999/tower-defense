import { _decorator, Component, director, game, Game } from 'cc';
import { GameManager } from './core/GameManager';

const { ccclass, property } = _decorator;

@ccclass('Application')
export class Application extends Component {
    private static _instance: Application | null = null;

    public static get instance(): Application {
        return Application._instance!;
    }

    onLoad(): void {
        if (Application._instance) {
            this.node.destroy();
            return;
        }
        Application._instance = this;
        game.addPersistRootNode(this.node);
        
        this.init();
    }

    start(): void {
    }

    private init(): void {
        console.log('Application initialized');
        
        GameManager.getInstance().init();
    }

    onDestroy(): void {
        Application._instance = null;
    }
}
