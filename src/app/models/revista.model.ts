export class RevistaModel {
  constructor(
    public id:number,
    public name:string,
    public num:number,
    public img:any,
    public suscriptor:boolean,
    public off:boolean,
    public solo_admin:boolean
  )
    { }
}
