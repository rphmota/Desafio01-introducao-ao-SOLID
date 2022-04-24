import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userReceived = this.usersRepository.findById(user_id);
    if (!userReceived) {
      throw new Error("User not exists!");
    }
    const user = this.usersRepository.turnAdmin(userReceived);
    return user;
  }
}

export { TurnUserAdminUseCase };
