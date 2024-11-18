import * as vscode from 'vscode';
import { getFuncs } from './parser';

const docBaseUri = 'https://cs.uesp.net/wiki';
enum MenuType {
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

const createCompletion = () => {
	const provider1 = vscode.languages.registerCompletionItemProvider(
		'obscript',
		{
			provideCompletionItems(_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken, _context: vscode.CompletionContext) {
				const funcs = getFuncs();

				let arr: vscode.CompletionItem[] = [];
				
				if (funcs.elements.length) {
					for (let index = 0; index < funcs.elements.length; index++) {
						const node = funcs.elements[index];
		
						if (node.firstChild?.textContent) {
							const newCompletionItem = new vscode.CompletionItem(node.firstChild.textContent);
							const docs = new vscode.MarkdownString(`Source: ${funcs.source}\n${node.childNodes[1].textContent}. More info [here](${docBaseUri}/${node.firstChild.textContent}).`);

							newCompletionItem.kind = vscode.CompletionItemKind.Function;
							newCompletionItem.documentation = docs;

							arr.push(newCompletionItem);
						}
					}
				}

				const snippetCompletion = new vscode.CompletionItem('Good part of the day');
				snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
				const docs = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
				snippetCompletion.documentation = docs;
				// docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');

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
					...arr,
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

	return [provider1, provider2];
}

export function activate(context: vscode.ExtensionContext) {
	const providers = createCompletion();
	context.subscriptions.push(...providers);
}