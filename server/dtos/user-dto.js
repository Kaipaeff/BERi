module.exports = class UserDto {
  email;
  phone;
  id;
  isActivated;
  isAdmin;

  constructor(model) {
    this.email = model.email;
    this.phone = model.phone;
    this.id = model.id;
    this.isActivated = model.isActivated;
    this.isAdmin = model.isAdmin;
  }
};
