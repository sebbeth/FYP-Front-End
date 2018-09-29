export class ProviderHelper {


  private lookupTable: any = [
    {id:1,name:'Azure',colour:'blue',icon:null},
    {id:2,name:'Google Cloud',colour:'orange',icon:null},
    {id:3,name:'Heroku',colour:'purple',icon:null},
    {id:4,name:'Amazon Web Services',colour:'green',icon:'<i class="fab fa-aws"></i>'},

  ];

  public getName(id: number): string {
    return this.lookupTable.find( provider => provider.id === id).name;
  }
  public getColour(id: number): string {
    return this.lookupTable.find( provider => provider.id === id).colour;
  }
  public getIcon(id: number): string {
    return this.lookupTable.find( provider => provider.id === id).icon;
  }
}
