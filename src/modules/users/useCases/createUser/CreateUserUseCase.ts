import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userByEmail = this.usersRepository.findByEmail(email);
    if (userByEmail) {
      throw new Error("Email alread exists!");
    }
    const userRepo = this.usersRepository.create({
      name,
      email,
    });
    return userRepo;
  }
}

export { CreateUserUseCase };
