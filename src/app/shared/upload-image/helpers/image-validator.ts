import { FileItem } from '../models/file-item';

export class ImageValidators{
    private accepType = ['image/jpeg', 'image/png'];

    validateType(fileType:string):boolean{
        return fileType === '' || fileType === undefined
        ? false
        :this.accepType.includes(fileType);
    }
    checkDropped(fileName:string, files:FileItem[]){
        for(const file of files){
            if(file.name === fileName){
                return true;
            }
        }
        return false;
    }
}