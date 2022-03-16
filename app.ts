let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Nick";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateEror(message: string, code: number): never {
  throw { message, errorCode: code };
  //   while (true) {}
}

generateEror("network error", 500);
