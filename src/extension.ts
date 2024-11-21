import * as vscode from 'vscode';

import mainHover from '../data/main.json';
import functions from '../data/functions.json';

const docBaseUri = 'https://cs.uesp.net/wiki';
enum MenuType {
	MainFour = 1,
	Other = 2,
	Console = 3,
	Message = 1001,
	Inventory = 1002,
	Stats = 1003,
	HUDMain = 1004,
	HUDInfo = 1005,
	HUDReticle = 1006,
	Loading = 1007,
	Barter = 1008,
	Container = 1008,
	Dialog = 1009,
	HUDSubtitle = 1010,
	Generic = 1011,
	SleepWait = 1012,
	Pause = 1013,
	LockPick = 1014,
	Options = 1015,
	Quantity = 1016,
	Audio = 1017,
	Video = 1018,
	VideoDisplay = 1019,
	Gameplay = 1020,
	Controls = 1021,
	Magic = 1022,
	Map = 1023,
	MagicPopup = 1024,
	Negotiate = 1025,
	Book = 1026,
	LevelUp = 1027,
	Training = 1028,
	BirthSign = 1029,
	Class = 1030,
	Attributes = 1031,
	Skills = 1032,
	Specialization = 1033,
	Persuasion = 1034,
	Repair = 1035,
	IngredientSelection = 1035,
	RaceSex = 1036,
	SpellPurchase = 1037,
	Load = 1038,
	Save = 1039,
	Alchemy = 1040,
	SpellMaking = 1041,
	Enchantment = 1042,
	EffectSetting = 1043,
	Main = 1044,
	Breath = 1045,
	QuickKeys = 1046,
	Credits = 1047,
	SigilStone = 1048,
	Recharge = 1049,
	TextEdit = 1051,
}
const variableTypes = ['short', 'float', 'int', 'ref', 'string_var', 'array_var'];

interface HoverItem {
	name: string,
	description: string,
	example?: string[],
}

interface Hover {
	[key: string]: HoverItem,
};

function createHover(snippet: HoverItem) {
	const example = typeof snippet.example == 'undefined' ? '' : snippet.example
	const description = typeof snippet.description == 'undefined' ? '' : snippet.description

	return new vscode.Hover({
		language: 'obscript',
		value: description + '\n\n' + example[0],
	});
}

const createCompletion = () => {
	const provider1 = vscode.languages.registerCompletionItemProvider(
		'obscript',
		{
			provideCompletionItems(_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken, _context: vscode.CompletionContext) {
				const functionItems: vscode.CompletionItem[] = [];
				
				if (functions.elements.length) {
					for (let index = 0; index < functions.elements.length; index++) {
						const node = functions.elements[index];
		
						if (node.name) {
							const newCompletionItem = new vscode.CompletionItem(node.name);
							const docs = new vscode.MarkdownString(`${node.description}. More info [here](${docBaseUri}/${node.name}).`);

							newCompletionItem.kind = vscode.CompletionItemKind.Function;
							newCompletionItem.documentation = docs;
							newCompletionItem.detail = functions.source;

							functionItems.push(newCompletionItem);
						}
					}
				}

				const variableTypeItems = variableTypes.map((variable) => new vscode.CompletionItem(variable, vscode.CompletionItemKind.Variable));

				const snippetCompletion = new vscode.CompletionItem('Good part of the day');
				snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
				const docs = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
				snippetCompletion.documentation = docs;
				snippetCompletion.detail = 'details';

				const commitCharacterCompletion = new vscode.CompletionItem('console');
				commitCharacterCompletion.commitCharacters = ['.'];
				commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');
				
				const commandCompletion = new vscode.CompletionItem('new');
				commandCompletion.kind = vscode.CompletionItemKind.Keyword;
				commandCompletion.insertText = 'new ';
				commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };

				return [
					snippetCompletion,
					commitCharacterCompletion,
					commandCompletion,
					...functionItems,
					...variableTypeItems,
				];
			}
		}
	);

	const provider2 = vscode.languages.registerCompletionItemProvider(
		'obscript',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if (!linePrefix.endsWith('console.')) {
					return undefined;
				}

				return [
					new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
					new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
				];
			}
		},
		'.'
	);

	const provider3 = vscode.languages.registerCompletionItemProvider(
		'obscript',
		{
			provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
				const linePrefix = document.lineAt(position).text.slice(0, position.character);
				if (!linePrefix.endsWith('Begin MenuMode ')) {
					return undefined;
				}

				const menuTypes = Object.values(MenuType);

				return menuTypes.slice(0, menuTypes.length / 2).map((elem) => {
					const item = new vscode.CompletionItem(elem as string, vscode.CompletionItemKind.Constant);
					item.insertText = MenuType[elem as keyof typeof MenuType].toString();

					return item;
				});				
			}
		},
		'.'
	);

	return [provider1, provider2, provider3];
}

const hoverProvider = vscode.languages.registerHoverProvider('obscript', {
  provideHover(document, position) {
		const range = document.getWordRangeAtPosition(position);
		const word = document.getText(range);

		const hovers: Hover = mainHover;

		for (const snippet in hovers) {
			if (hovers[snippet].name == word) {
				return createHover(hovers[snippet])
			}
		}

		for (const item in functions.elements) {
			if (functions.elements[item].name == word) {
				return createHover(functions.elements[item]);
			}
		}
	}
});

export function activate(context: vscode.ExtensionContext) {
	const providers = createCompletion();

	context.subscriptions.push(...providers);
	context.subscriptions.push(hoverProvider);
}