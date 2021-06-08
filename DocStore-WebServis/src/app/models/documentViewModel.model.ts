import { PageViewModel } from "./PageViewModel.model";

export class DocumentViewModel {
    constructor (

	public documents: DocumentViewModel[],
	public pageViewModel: PageViewModel,
    ){}
}