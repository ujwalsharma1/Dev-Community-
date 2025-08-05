const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema }=  mongoose;

const UserSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String},
    emailId: { type: String, unique: true,required: true},
    password: { type: String, required: true}
})

UserSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
});



module.exports = mongoose.model("User",UserSchema);

