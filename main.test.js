const {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
} = require("./main.js");

describe("isValidEmail", () => {
  it("returns whether the email ends with code immersives domain", () => {
    const validEmail = "colin.jaffe@codeimmersives.com";
    const invalidEmail1 = "colin.jaffe@gmail.com";
    const invalidEmail2 = "colin.jaffe@fake.com";
    expect(isValidEmail(validEmail)).toBe(true);
    expect(isValidEmail(invalidEmail1)).toBe(false);
    expect(isValidEmail(invalidEmail2)).toBe(false);
  });

  it("requires there be at least one character before the @ symbol", () => {
    const validEmail1 = "colin.jaffe@codeimmersives.com";
    const validEmail2 = "c@codeimmersives.com";
    const validEmail3 = "m@codeimmersives.com";
    const validEmail4 = " @codeimmersives.com";
    const invalidEmail = "@codeimmersives.com";
    expect(isValidEmail(validEmail1)).toBe(true);
    expect(isValidEmail(validEmail2)).toBe(true);
    expect(isValidEmail(validEmail3)).toBe(true);
    expect(isValidEmail(validEmail4)).toBe(true);
    expect(isValidEmail(invalidEmail)).toBe(false);
  });
});

describe("isValidPassword", () => {
  it("returns whether the password is at least 8 characters long", () => {
    const validPassword1 = "Long enough!";
    const validPassword2 = "Barely!!";
    const invalidPassword1 = "Almost!";
    const invalidPassword2 = "But no";
    expect(isValidPassword(validPassword1)).toBe(true);
    expect(isValidPassword(validPassword2)).toBe(true);
    expect(isValidPassword(invalidPassword1)).toBe(false);
    expect(isValidPassword(invalidPassword2)).toBe(false);
  });

  it("should have at least 1 uppercase character", () => {
    const validPassword1 = "MOSTLY yelling";
    const validPassword2 = "Just one capital letter.";
    const invalidPassword1 = "not one caps";
    const invalidPassword2 = "lowercase 4 lyfe";
    expect(isValidPassword(validPassword1)).toBe(true);
    expect(isValidPassword(validPassword2)).toBe(true);
    expect(isValidPassword(invalidPassword1)).toBe(false);
    expect(isValidPassword(invalidPassword2)).toBe(false);
  });

  it("should have at least 1 lowercase character", () => {
    const validPassword1 = "welcome to Smallville, population: this sentence";
    const validPassword2 = "MOSTLY BIG i GUESS";
    const invalidPassword1 = "TROLL ALERT";
    const invalidPassword2 = "HULK SMASH";
    expect(isValidPassword(validPassword1)).toBe(true);
    expect(isValidPassword(validPassword2)).toBe(true);
    expect(isValidPassword(invalidPassword1)).toBe(false);
    expect(isValidPassword(invalidPassword2)).toBe(false);
  });
});

describe("isRegisteredUser", () => {
  it('returns whether or not the given email is in the "database"', () => {
    // Note that these are hardcoded users, and you can feel free to hardcode them yourselves.
    // We're just kind of pretending there's a database of users, here!
    const registeredUser1 = "colin.jaffe@codeimmersives.com";
    const registeredUser2 = "mesuara@codeimmersives.com";
    const registeredUser3 = "anthony@codeimmersives.com";
    const unregisteredUser1 = "anyone.else@codeimmersives.com";
    const unregisteredUser2 = "i.mean.literally.anyone.else@codeimmersives.com";
    expect(isRegisteredUser(registeredUser1)).toBe(true);
    expect(isRegisteredUser(registeredUser2)).toBe(true);
    expect(isRegisteredUser(registeredUser3)).toBe(true);
    expect(isRegisteredUser(unregisteredUser1)).toBe(false);
    expect(isRegisteredUser(unregisteredUser2)).toBe(false);
  });
});

describe("passwordMatches", () => {
  it("returns whether or not the given email/password combination goes with a current user", () => {
    expect(passwordMatches(user1, password1)).toBe(true);
    expect(passwordMatches(user2, password2)).toBe(true);
    expect(passwordMatches(user3, password3)).toBe(true);
    expect(passwordMatches(user1, "NOT my password")).toBe(false);
    expect(passwordMatches(user2, "nor HERS")).toBe(false);
    expect(passwordMatches(user3, "and not his EITHER")).toBe(false);
    expect(passwordMatches(user1, password2)).toBe(false);
    expect(passwordMatches(user2, password3)).toBe(false);
    expect(passwordMatches(user3, password1)).toBe(false);
  });
});
