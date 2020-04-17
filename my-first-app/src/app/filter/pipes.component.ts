import {Pipe, PipeTransform ,Injectable} from "@angular/core";
@Pipe({
    name:"filter"
})
@Injectable()
export class FilterPipe implements PipeTransform{
    transform(value: any, task:string) {
    //console.log(value+" and "+task)
    if(!value || !task){
      return value;
    }
    console.log(value+"  and "+task);
      return  value.filter((elem,ind)=>{
            if(elem.name.indexOf(task)!==-1 ){
           return elem;
            }
        })
       // throw new Error("Method not implemented.");
    }
}