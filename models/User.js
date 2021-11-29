var mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;
const { String,Number } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    regno:{
      type:Number,
      required:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required:true

    },
    department:{
      type: String,
      required:true
    },
    isEmailVerified:{
      type:Boolean,
      default:false
    },
    isAdmin:{
      type:Number,
    }, 
    passwordResetToken:{
      type:String
    },
    passwordResetExpires:{
      type:Date
    }
  },
  { timestamps: true }
);

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

// Define hooks for pre-saving
UserSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
