import * as vscode from 'vscode';
import { getFuncs } from './parser';

const createCompletion = () => {
	const provider1 = vscode.languages.registerCompletionItemProvider(
		'obscript',
		{
			provideCompletionItems(_document: vscode.TextDocument, _position: vscode.Position, _token: vscode.CancellationToken, _context: vscode.CompletionContext) {
				const funcs = getFuncs();

				let arr: vscode.CompletionItem[] = [];
				
				if (funcs) {
		
					for (let index = 0; index < funcs.length; index++) {
						const node: any = funcs[index];
		
						if (node.firstChild?.text) {
							arr.push(new vscode.CompletionItem(node.firstChild.text));
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