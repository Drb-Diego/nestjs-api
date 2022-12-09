import { IsNotEmpty } from 'class-validator';

export class ICreateUserBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  userFunction: string;
}
