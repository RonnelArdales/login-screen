export class task {
    map(arg0: (TASK: task, index: number) => JSX.Element): import("react").ReactNode {
        throw new Error("Method not implemented.");
    }

    Title:string;
    Description:string;
    Textinputdate:string;
    Textinputtime:string

    constructor(Title:string, Description:string, Textinputdate:string, Textinputtime:string){
  
        this.Title=Title
        this.Description=Description
        this.Textinputdate=Textinputdate
        this.Textinputtime=Textinputtime
    }

}