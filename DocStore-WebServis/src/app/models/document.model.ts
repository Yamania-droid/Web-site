export class Document {
    constructor (


  	public idDoc: number,
  	public name: string,
 	public docType: string,
	public file: [],
	public certCode: string ,
	public authorityCode: number,
	public authorityName: string,
	public issueDate: Date,
	public expirationDate: Date,
	public formCode: number,
	public vendorName: string,
	public docCode: number,
	public docTypeNavigation: string,
	public products: [],

    ){}
}