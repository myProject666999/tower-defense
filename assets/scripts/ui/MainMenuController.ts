import { _decorator, Component, Node, Button, Label, director, game } from 'cc';
import { GameManager } from '../core/GameManager';
import { GameMode, GameState } from '../types/Enum';

const { ccclass, property } = _decorator;

@ccclass('MainMenuController')
export class MainMenuController extends Component {
    @property({ type: Button, tooltip: '冒险模式按钮' })
    adventureBtn: Button | null = null;

    @property({ type: Button, tooltip: '生存模式按钮' })
    survivalBtn: Button | null = null;

    @property({ type: Button, tooltip: '迷你游戏按钮' })
    miniGameBtn: Button | null = null;

    @property({ type: Button, tooltip: '禅境花园按钮' })
    zenGardenBtn: Button | null = null;

    @property({ type: Button, tooltip: '选项按钮' })
    optionBtn: Button | null = null;

    @property({ type: Button, tooltip: '帮助按钮' })
    helpBtn: Button | null = null;

    @property({ type: Button, tooltip: '退出按钮' })
    exitBtn: Button | null = null;

    @property({ type: Label, tooltip: '版本号标签' })
    versionLabel: Label | null = null;

    private _modePanel: Node | null = null;

    onLoad(): void {
        this.initButtons();
        this.initLabels();
        
        GameManager.getInstance().init();
    }

    start(): void {
    }

    private initButtons(): void {
        if (this.adventureBtn) {
            this.adventureBtn.node.on(Button.EventType.CLICK, this.onAdventureClick, this);
        }
        if (this.survivalBtn) {
            this.survivalBtn.node.on(Button.EventType.CLICK, this.onSurvivalClick, this);
        }
        if (this.miniGameBtn) {
            this.miniGameBtn.node.on(Button.EventType.CLICK, this.onMiniGameClick, this);
        }
        if (this.zenGardenBtn) {
            this.zenGardenBtn.node.on(Button.EventType.CLICK, this.onZenGardenClick, this);
        }
        if (this.optionBtn) {
            this.optionBtn.node.on(Button.EventType.CLICK, this.onOptionClick, this);
        }
        if (this.helpBtn) {
            this.helpBtn.node.on(Button.EventType.CLICK, this.onHelpClick, this);
        }
        if (this.exitBtn) {
            this.exitBtn.node.on(Button.EventType.CLICK, this.onExitClick, this);
        }
    }

    private initLabels(): void {
        if (this.versionLabel) {
            this.versionLabel.string = 'v1.0.0';
        }
    }

    private onAdventureClick(): void {
        console.log('Adventure mode clicked');
        GameManager.getInstance().startGame(GameMode.ADVENTURE, 1);
    }

    private onSurvivalClick(): void {
        console.log('Survival mode clicked');
        GameManager.getInstance().startGame(GameMode.SURVIVAL, 1);
    }

    private onMiniGameClick(): void {
        console.log('Mini game clicked');
        GameManager.getInstance().startGame(GameMode.MINI_GAME, 1);
    }

    private onZenGardenClick(): void {
        console.log('Zen garden clicked');
        GameManager.getInstance().startGame(GameMode.ZEN_GARDEN, 1);
    }

    private onOptionClick(): void {
        console.log('Option clicked');
    }

    private onHelpClick(): void {
        console.log('Help clicked');
    }

    private onExitClick(): void {
        console.log('Exit clicked');
        game.end();
    }

    onDestroy(): void {
        if (this.adventureBtn) {
            this.adventureBtn.node.off(Button.EventType.CLICK, this.onAdventureClick, this);
        }
        if (this.survivalBtn) {
            this.survivalBtn.node.off(Button.EventType.CLICK, this.onSurvivalClick, this);
        }
        if (this.miniGameBtn) {
            this.miniGameBtn.node.off(Button.EventType.CLICK, this.onMiniGameClick, this);
        }
        if (this.zenGardenBtn) {
            this.zenGardenBtn.node.off(Button.EventType.CLICK, this.onZenGardenClick, this);
        }
        if (this.optionBtn) {
            this.optionBtn.node.off(Button.EventType.CLICK, this.onOptionClick, this);
        }
        if (this.helpBtn) {
            this.helpBtn.node.off(Button.EventType.CLICK, this.onHelpClick, this);
        }
        if (this.exitBtn) {
            this.exitBtn.node.off(Button.EventType.CLICK, this.onExitClick, this);
        }
    }
}
