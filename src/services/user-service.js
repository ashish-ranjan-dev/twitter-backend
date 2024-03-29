import UserRepository from "../repository/user-repository.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    };

    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    };

    async signIn(data) {
        try {
            const email = data.email;
            const password = data.password;
            const user = await this.userRepository.findBy({ email: email });
            // if user not exist
            if (!user) {
                throw {
                    message: "Wrong credentials"
                };
            }
            // if password is wrong
            if (!user.comparePassword(password)) {
                throw {
                    message: "Wrong credentials"
                };
            }
            console.log("user successfully signed in");
            const token = user.generateJwt();
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
};

export default UserService;